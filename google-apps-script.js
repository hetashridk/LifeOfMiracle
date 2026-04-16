// ─────────────────────────────────────────────────────────────────
// LIFE OF A MIRACLE — Google Apps Script
// ─────────────────────────────────────────────────────────────────

const NEWSLETTER_SHEET = 'Newsletter';
const POSTS_SHEET = 'Posts';
const TRACKING_SHEET = 'Tracking';
const ADMIN_EMAIL = 'karishma@lifeofamiracle.com'; // Adjust if needed
const SENDER_NAME = 'Life Of A Miracle';
const BATCH_SIZE = 100;

// Replace this with your actual deployed script URL later:
const WEB_APP_URL = 'https://script.google.com/macros/exec'; 

// ─── MENU ─────────────────────────────────────────────────────────────────────
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📧 Newsletter')
    .addItem('📤 Send Emails Now', 'sendNewsletterEmails')
    .addItem('👥 Assign Batches', 'assignBatches')
    .addItem('📊 View Tracking Report', 'viewTrackingReport')
    .addItem('🧪 Send Test Email', 'sendTestEmail')
    .addItem('🔍 Test Setup', 'testSetup')
    .addToUi();
}

function niceDate(date) {
  return Utilities.formatDate(
    date instanceof Date ? date : new Date(date),
    Session.getScriptTimeZone(),
    "dd MMM yyyy, hh:mm a"
  );
}

// ─── ASSIGN BATCHES ───────────────────────────────────────────────────────────
function assignBatches() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = doc.getSheetByName(NEWSLETTER_SHEET);
  if (!sheet) { SpreadsheetApp.getUi().alert('❌ Newsletter sheet not found!'); return; }

  const headers = sheet.getRange(1, 1, 1, 3).getValues()[0];
  if (headers[2] !== 'Batch') sheet.getRange(1, 3).setValue('Batch');

  const data = sheet.getDataRange().getValues().slice(1);
  let batchNumber = 1, countInBatch = 0;

  for (let i = 0; i < data.length; i++) {
    const email = data[i][0];
    const existingBatch = data[i][2];
    if (!email || !email.toString().includes('@')) continue;
    if (!existingBatch) {
      if (countInBatch >= BATCH_SIZE) { batchNumber++; countInBatch = 0; }
      sheet.getRange(i + 2, 3).setValue(batchNumber);
      countInBatch++;
    } else {
      const existingNum = parseInt(existingBatch);
      if (!isNaN(existingNum)) {
        const batchCount = data.filter(r => parseInt(r[2]) === existingNum).length;
        batchNumber = existingNum;
        countInBatch = batchCount;
        if (countInBatch >= BATCH_SIZE) { batchNumber++; countInBatch = 0; }
      }
    }
  }

  const totalBatches = Math.ceil(data.filter(r => r[0] && r[0].toString().includes('@')).length / BATCH_SIZE);
  SpreadsheetApp.getUi().alert(`✅ Batches assigned!\n\nTotal batches: ${totalBatches}\nBatch size: ${BATCH_SIZE} emails each`);
}

// ─── doPost ───────────────────────────────────────────────────────────────────
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === 'coaching') {
      const sheet = ss.getSheetByName('Coaching') || ss.insertSheet('Coaching');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'Phone', 'Message']);
        sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
      }
      sheet.appendRow([
        niceDate(new Date()),
        data.name,
        data.email,
        data.phone,
        data.message,
      ]);

    } else if (data.type === 'workshop') {
      const sheet = ss.getSheetByName('Workshop') || ss.insertSheet('Workshop');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company / College', 'Preferred Date & Time', 'Message']);
        sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
      }
      sheet.appendRow([
        niceDate(new Date()),
        data.name,
        data.email,
        data.phone,
        data.company,
        data.datetime,
        data.message,
      ]);

    } else if (data.type === 'guest') {
      const sheet = ss.getSheetByName('Guest') || ss.insertSheet('Guest');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Industry', 'Reason', 'Phone', 'Company', 'Website URL']);
        sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      }
      sheet.appendRow([
        niceDate(new Date()),
        data.name,
        data.email,
        data.industry,
        data.reason,
        data.phone,
        data.company,
        data.weburl,
      ]);

    } else if (data.type === 'keynote') {
      const keynoteSheet = ss.getSheetByName('Keynote') || ss.insertSheet('Keynote');
      if (keynoteSheet.getLastRow() === 0) {
        keynoteSheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company / Organisation', 'Preferred Date & Time', 'Message']);
        keynoteSheet.getRange(1, 1, 1, 7).setFontWeight('bold');
      }
      keynoteSheet.appendRow([
        niceDate(new Date()),
        data.name,
        data.email,
        data.phone,
        data.company,
        data.datetime,
        data.message,
      ]);

    } else if (data.type === 'discovery') {
      const discoverySheet = ss.getSheetByName('Discovery') || ss.insertSheet('Discovery');
      if (discoverySheet.getLastRow() === 0) {
        discoverySheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
        discoverySheet.getRange(1, 1, 1, 5).setFontWeight('bold');
      }
      discoverySheet.appendRow([
        niceDate(new Date()),
        data.name,
        data.email,
        data.phone,
        data.message,
      ]);

    } else if (data.type === 'newsletter') {
      const sheet = ss.getSheetByName(NEWSLETTER_SHEET) || ss.insertSheet(NEWSLETTER_SHEET);
      if (sheet.getLastRow() === 0) {
        sheet.getRange(1, 1, 1, 3).setValues([['Email', 'Timestamp', 'Batch']]);
        sheet.getRange(1, 1, 1, 3).setFontWeight('bold');
      }
      const email = data.email;
      const existingEmails = sheet.getDataRange().getValues().slice(1).map(r => r[0].toString().toLowerCase());
      if (existingEmails.includes(email.toString().toLowerCase())) {
        return ContentService.createTextOutput(JSON.stringify({ result: 'duplicate' })).setMimeType(ContentService.MimeType.JSON);
      }
      sheet.appendRow([email, niceDate(new Date()), '']);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ─── doGet — tracking ─────────────────────────────────────────────────────────
function doGet(e) {
  const params = e.parameter || {};
  const action = params.action;
  const email = params.email ? decodeURIComponent(params.email) : '';
  const postId = params.postId ? decodeURIComponent(params.postId) : '';
  const destUrl = params.url ? decodeURIComponent(params.url) : 'https://lifeofamiracle.com/';

  if (action === 'open' && email) {
    logTracking(email, 'Open', postId, '');
    const gif = Utilities.newBlob(
      Utilities.base64Decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),
      'image/gif',
      'pixel.gif'
    );
    return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.TEXT);
  }

  if (action === 'click' && email) {
    logTracking(email, 'Click', postId, destUrl);
    return HtmlService.createHtmlOutput(
      '<html><head><meta http-equiv="refresh" content="0;url=' + destUrl + '"></head>' +
      '<body><script>window.location.replace("' + destUrl + '");<\/script></body></html>'
    );
  }

  return HtmlService.createHtmlOutput('OK');
}

// ─── LOG TRACKING ─────────────────────────────────────────────────────────────
function logTracking(email, action, postId, url) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(TRACKING_SHEET) || doc.insertSheet(TRACKING_SHEET);
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([['Email', 'Action', 'Post/Subject', 'URL Clicked', 'Timestamp']]);
    }
    sheet.appendRow([email, action, postId, url, niceDate(new Date())]);
  } catch (err) {
    console.log('Tracking log error: ' + err);
  }
}

// ─── TRACKING REPORT ─────────────────────────────────────────────────────────
function viewTrackingReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(TRACKING_SHEET);
  if (!sheet || sheet.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert('No tracking data yet.'); return;
  }
  const data = sheet.getDataRange().getValues().slice(1);
  const opens = data.filter(r => r[1] === 'Open');
  const clicks = data.filter(r => r[1] === 'Click');
  const uniqueOpeners = new Set(opens.map(r => r[0])).size;
  const uniqueClickers = new Set(clicks.map(r => r[0])).size;

  const byPost = {};
  data.forEach(r => {
    const post = (r[2] || 'Unknown').substring(0, 45);
    if (!byPost[post]) byPost[post] = { opens: 0, clicks: 0 };
    if (r[1] === 'Open') byPost[post].opens++;
    if (r[1] === 'Click') byPost[post].clicks++;
  });

  let breakdown = '';
  Object.entries(byPost).forEach(([post, stats]) => {
    breakdown += `\n📝 ${post}\n   Opens: ${stats.opens}  |  Clicks: ${stats.clicks}`;
  });

  SpreadsheetApp.getUi().alert(
    `📊 Tracking Report\n\n` +
    `Total opens:       ${opens.length}  (${uniqueOpeners} unique)\n` +
    `Total link clicks: ${clicks.length}  (${uniqueClickers} unique)\n` +
    `\n── By Post ──${breakdown}`
  );
}

// ─── EMAIL TEMPLATE ───────────────────────────────────────────────────────────
function buildEmailHtml(subject, message, imageUrl, blogUrl, trackingEmail, trackingPostId) {
  const te = encodeURIComponent(trackingEmail || '');
  const tp = encodeURIComponent(trackingPostId || subject || '');

  const openPixelUrl = WEB_APP_URL + '?action=open&email=' + te + '&postId=' + tp;

  function trackedUrl(destination) {
    return WEB_APP_URL
      + '?action=click&email=' + te
      + '&postId=' + tp
      + '&url=' + encodeURIComponent(destination);
  }

  const coverImageBlock = imageUrl
    ? `<table width="100%" cellpadding="0" cellspacing="0"><tr>
        <td style="padding:0;margin:0;line-height:0;">
          <img src="${imageUrl}" alt="Cover Image" width="640"
               style="width:100%;max-width:640px;height:auto;display:block;border:0;"/>
        </td></tr></table>`
    : '';

  return `<div style="margin:0;padding:20px;background:#f9fafb;font-family:Inter,Arial,sans-serif;">

  <img src="${openPixelUrl}" width="1" height="1" alt="" style="display:block;width:1px;height:1px;border:0;"/>

  <div style="max-width:640px;margin:40px auto;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">

    <div style="padding:28px;text-align:center;">
      <h1 style="margin:0;font-size:22px;color:#111827;font-weight:700;">Life Of A Miracle</h1>
    </div>

    <div style="height:1px;background:#e5e7eb;"></div>
    ${coverImageBlock}

    <div style="padding:0 28px;">
      <h2 style="font-size:22px;color:#111827;margin:20px 0 10px;line-height:1.4;">${subject}</h2>
    </div>

    <div style="padding:20px 28px;color:#374151;font-size:15px;line-height:1.8;">
      ${message.replace(/\n/g, '<br>')}
    </div>

    <div style="text-align:center;padding:10px 28px 30px;">
      <a href="${trackedUrl(blogUrl)}" style="display:inline-block;background:#3b9b6d;color:#ffffff;padding:12px 26px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Read More</a>
    </div>

    <div style="padding:28px 20px 24px;text-align:center;background:#ffffff;">
      <div style="height:1px;background:#e5e7eb;margin-bottom:24px;"></div>
      <a href="${trackedUrl('https://lifeofamiracle.com/')}" style="font-size:12px;color:#3b9b6d;text-decoration:none;">Visit Our Website</a>
    </div>

  </div>
</div>`;
}

// ─── SEND NEWSLETTER ──────────────────────────────────────────────────────────
function sendNewsletterEmails() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const postsSheet = doc.getSheetByName(POSTS_SHEET);
  const subscribersSheet = doc.getSheetByName(NEWSLETTER_SHEET);

  if (!postsSheet) { SpreadsheetApp.getUi().alert('❌ Posts sheet not found!'); return; }
  if (!subscribersSheet) { SpreadsheetApp.getUi().alert('❌ Newsletter sheet not found!'); return; }

  const posts = postsSheet.getDataRange().getValues().slice(1);
  const pendingPostIndex = posts.findIndex(row => row[0] && !String(row[2]).startsWith('All Done'));
  if (pendingPostIndex === -1) { SpreadsheetApp.getUi().alert('✅ No pending posts to send!'); return; }

  const post = posts[pendingPostIndex];
  const subject = post[0];
  const message = post[1];
  const sentLog = post[2] ? String(post[2]) : '';
  const imageUrl = post[3] || '';
  const blogUrl = post[4] || 'https://lifeofamiracle.com/';

  const allSubscribers = subscribersSheet.getDataRange().getValues().slice(1);
  const allBatches = [...new Set(
    allSubscribers.map(r => parseInt(r[2])).filter(n => !isNaN(n) && n > 0)
  )].sort((a, b) => a - b);

  if (allBatches.length === 0) {
    SpreadsheetApp.getUi().alert('❌ No batches found!\n\nPlease run "Assign Batches" first.'); return;
  }

  const sentBatches = sentLog.split(',').map(s => parseInt(s.replace('Batch', '').trim())).filter(n => !isNaN(n));
  const nextBatch = allBatches.find(b => !sentBatches.includes(b));

  if (nextBatch === undefined) {
    postsSheet.getRange(pendingPostIndex + 2, 3).setValue('All Done ✅');
    SpreadsheetApp.getUi().alert('🎉 All batches sent for this post!'); return;
  }

  const batchEmails = allSubscribers
    .filter(r => parseInt(r[2]) === nextBatch && r[0] && r[0].toString().includes('@'))
    .map(r => r[0].toString());

  if (batchEmails.length === 0) {
    SpreadsheetApp.getUi().alert(`❌ No valid emails in Batch ${nextBatch}.`); return;
  }

  const remainingBatches = allBatches.filter(b => !sentBatches.includes(b)).length - 1;

  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    `📧 Send Newsletter — Batch ${nextBatch}\n\n` +
    `Subject: "${subject}"\nEmails: ${batchEmails.length}\nRemaining after this: ${remainingBatches}\n\nContinue?`,
    ui.ButtonSet.YES_NO
  );
  if (response !== ui.Button.YES) return;

  let successCount = 0, failCount = 0;

  for (const email of batchEmails) {
    try {
      const htmlBody = buildEmailHtml(subject, message, imageUrl, blogUrl, email, subject);
      GmailApp.sendEmail(email, subject, '', {
        htmlBody: htmlBody,
        name: SENDER_NAME
      });
      successCount++;
      Utilities.sleep(300);
    } catch (err) {
      console.log('Failed: ' + email + ' — ' + err);
      failCount++;
    }
  }

  const newLog = sentLog ? `${sentLog}, Batch ${nextBatch}` : `Batch ${nextBatch}`;
  postsSheet.getRange(pendingPostIndex + 2, 3).setValue(newLog);

  ui.alert(
    `✅ Batch ${nextBatch} sent!\n\nDelivered: ${successCount}\nFailed: ${failCount}\n` +
    (remainingBatches > 0
      ? `\n📅 Come back tomorrow for Batch ${nextBatch + 1} (${remainingBatches} left).`
      : `\n🎉 All batches complete!`)
  );

  if (remainingBatches === 0) postsSheet.getRange(pendingPostIndex + 2, 3).setValue('All Done ✅');
}

// ─── TEST SETUP ───────────────────────────────────────────────────────────────
function testSetup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const postsSheet = doc.getSheetByName(POSTS_SHEET);
  const subscribersSheet = doc.getSheetByName(NEWSLETTER_SHEET);
  const trackingSheet = doc.getSheetByName(TRACKING_SHEET);

  const posts = postsSheet ? postsSheet.getDataRange().getValues().slice(1) : [];
  const subscribers = subscribersSheet ? subscribersSheet.getDataRange().getValues().slice(1) : [];
  const tracking = trackingSheet ? trackingSheet.getDataRange().getValues().slice(1) : [];

  const pending = posts.filter(row => row[0] && !String(row[2]).startsWith('All Done'));
  const emails = subscribers.map(row => row[0]).filter(e => e && e.includes('@'));
  const batches = [...new Set(subscribers.map(r => parseInt(r[2])).filter(n => !isNaN(n) && n > 0))];

  SpreadsheetApp.getUi().alert(
    `📊 Status Check\n\n` +
    `Total subscribers: ${emails.length}\n` +
    `Total batches:     ${batches.length} (${BATCH_SIZE}/batch)\n` +
    `Total posts:       ${posts.length}\n` +
    `Pending posts:     ${pending.length}\n` +
    `\n── Tracking ──\n` +
    `Opens logged:  ${tracking.filter(r => r[1] === 'Open').length}\n` +
    `Clicks logged: ${tracking.filter(r => r[1] === 'Click').length}\n` +
    (emails.length > 0 ? `\nSample: ${emails[0]}` : '')
  );
}

function sendTestEmail() {
  try {
    const ui = SpreadsheetApp.getUi();
    const response = ui.prompt('Enter email to send test to:', ui.ButtonSet.OK_CANCEL);
    if (response.getSelectedButton() !== ui.Button.OK) return;

    const testEmail = response.getResponseText();
    if (!testEmail || !testEmail.includes('@')) {
      ui.alert('❌ Invalid email address'); return;
    }

    const subject = 'Test Newsletter from Life Of A Miracle';
    const htmlBody = buildEmailHtml(
      subject,
      'This is a test newsletter message to verify the template and email delivery system are functioning correctly.',
      '',
      'https://lifeofamiracle.com',
      testEmail,
      subject
    );
    GmailApp.sendEmail(testEmail, subject, '', {
      htmlBody: htmlBody,
      name: SENDER_NAME
    });
    ui.alert('✅ Test email sent to:\n' + testEmail);
  } catch (err) {
    SpreadsheetApp.getUi().alert('❌ Error:\n\n' + err.toString());
  }
}
