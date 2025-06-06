# Black Botlist API

> ⚠️ **THIS MODULE IS DEPRECATED / NOT IN USE ANYMORE!**  
> It was created to connect to a blacklist.cf API to check if a bot has received a vote.
> Use it for educational/demo purposes only. It will no longer be maintained.  

## Info <br>
[Go to the Black Botlist website](https://blackbotlist.cf/) <br>
[How to use](https://blackbotlist.cf/docs) <br>
[Discord server](https://discord.gg/cPe9A9vmaE) <br>
[Support Discord server](https://discord.gg/4Xpwwz6pgN) <br>

### Usage<br><br>

```js
const blackbotlist = require("blackbotlistapi");

blackbotlist.get("Botid", "UserID").catch(() => {}).then(result => {
  // You can change the result variable name
  if (result) {
    // If the user has voted
  }
})

blackbotlist.get("Botid", "UserID").catch(() => {}).then(result => {
  if (!result) {
    // If the user has NOT voted
  }
})

setInterval(function () {
  blackbotlist.webhook("Botid").catch(() => {}).then(result => {
    if (!result) return;
    // If someone voted for the bot
    console.log(result + " voted for the bot UwU");
  })
}, 5000); // Change the interval if it's repeating or not doing anything
```
## Example Code
```js
const blackbotlist = require("blackbotlistapi");

// Vote command
client.on('message', async msg => {
  if (msg.content === 'ping') {
    blackbotlist.get("Botid", msg.author.id).catch(() => {}).then(result => {
      if (!result) {
        msg.channel.send("You need to vote to use this command.");
      }
      if (result) {
        msg.channel.send("Thank you for voting!");
      }
    })
  }
});

// Webhook
client.on('ready', () => {
  setInterval(function () {
    blackbotlist.webhook("Botid").catch(() => {}).then(result => {
      if (!result) return;
      client.channels.cache.get("ChannelID").send(`UwU <@!${result}> just voted for the bot!`);
    })
  }, 1000);
});

```
#### To install
- ```npm i blackbotlistapi```
#### Getting an error? First try this in your terminal:
- ```npm i node-fetch@2.6.1```
