//Using dotEnv
require("dotenv").config();

//require
const { RTMClient } = require('@slack/rtm-api');
const rtm = new RTMClient(process.env.SLACK_TOKEN);

//command to change welcome message
const COMMAND = "!msg";
//global variable to save settings
let MSG=``;

//event : new member joined
rtm.on('member_joined_channel', async (event) => {
  try {
    MSG=MSG.replace(`!user`,`<@${event.user}>`);
    rtm.sendMessage(MSG, event.channel);
  } catch (error) {
    console.log('An error occurred:', error);
  }
});


//event : message
rtm.on('message', async (event) => {
  try {
    MSG=event.text.split(` `);
    if(MSG[0]===COMMAND) {
      MSG.shift();
      MSG=MSG.join(` `);
    }
  } catch (error) {
    console.log('An error occurred:', error);
  }
});


(async () => {
  await rtm.start();
})();