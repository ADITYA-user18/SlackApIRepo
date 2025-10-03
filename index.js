
const { WebClient } = require('@slack/web-api');


    
const token = 'xoxb-your-bot-token-here';
const channelId = 'CXXXXXXXX';


const client = new WebClient(token);


async function sendMessage(text) {
  try {
    const res = await client.chat.postMessage({
      channel: channelId,
      text: text
    });
    console.log('Message sent! Timestamp:', res.ts);
    return res.ts; 
  } catch (err) {
    console.error('Error sending message:', err);
  }
}


async function fetchMessage(ts) {
  try {
    const res = await client.conversations.history({
      channel: channelId,
      latest: ts,
      inclusive: true,
      limit: 1
    });
    console.log('Fetched message:', res.messages[0].text);
  } catch (err) {
    console.error('Error fetching message:', err);
  }
}


async function editMessage(ts, newText) {
  try {
    const res = await client.chat.update({
      channel: channelId,
      ts: ts,
      text: newText
    });
    console.log('Message edited:', res.text);
  } catch (err) {
    console.error('Error editing message:', err);
  }
}


async function deleteMessage(ts) {
  try {
    await client.chat.delete({
      channel: channelId,
      ts: ts
    });
    console.log('Message deleted ');
  } catch (err) {
    console.error('Error deleting message:', err);
  }
}


async function main() {
  const ts = await sendMessage('Hello team! This is a test message ');
  await fetchMessage(ts);
  await editMessage(ts, 'Hello team! This message has been EDITED ');
//   await deleteMessage(ts);
}

main();
