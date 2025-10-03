Slack API – Messaging Task

This project demonstrates basic messaging operations with the Slack API.
The application uses the official @slack/web-api package to authenticate with Slack and perform messaging tasks in a safe developer sandbox environment.

🚀 Features Implemented (Task 1)

Authentication

Integrated with Slack using a Bot User OAuth Token.

Ensures secure access via OAuth & Permissions in the Slack App.

Messaging Operations

Send a Message → Post a message to a Slack channel.

Retrieve a Message → Fetch a previously sent message using its timestamp.

Edit a Message → Update an existing message with new content.

Delete a Message → Remove a message from a Slack channel.

Developer Sandbox

All operations were tested inside Slack’s developer sandbox to avoid affecting real users/channels.

🛠️ Tech Stack

Node.js

Slack Web API (@slack/web-api)

JavaScript (ES6)

📂 Project Structure
slack-task1/
│-- index.js        # Main script with messaging logic
│-- package.json    # Dependencies and project info
│-- README.md       # Project documentation

⚙️ Setup Instructions

Clone this repo:

git clone https://github.com/ADITYA-user18/SlackApIRepo.git
cd SlackApIRepo


Install dependencies:

npm install


Add your Slack Bot User OAuth Token and Channel ID in index.js:

const token = "xoxb-xxxx";       // Replace with your bot token
const channelId = "CXXXXXXXX";   // Replace with your channel ID


Run the script:

node index.js

📸 Demo Flow

Message Sent: “Hello team! This is a test message 🚀”

Message Fetched: Retrieved from channel history.

Message Edited: Updated to “Hello team! This message has been EDITED ✏️”.

Message Deleted: Cleanly removed from the channel.

📖 What I Learned

How to create and configure a Slack App in the Developer Dashboard.

How to use OAuth scopes and tokens to securely authenticate apps.

Practical usage of Slack Web API for real-time messaging workflows.

The importance of Slack in integrating tools (e.g., GitHub, CI/CD pipelines) to broadcast updates to teams.

✅ Status

Task 1: Completed Successfully

