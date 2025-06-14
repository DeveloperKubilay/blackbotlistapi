//How to use: https://blackbotlist.cf/docs
//If you're getting an error, first type npm i node-fetch@2.6.1 in your terminal

const fetch = require('node-fetch')
module.exports = {

    get: async function (bot, user) {
        if (!bot || !user)
            throw new TypeError('BlackBotlist API\nPlease enter the bot\'s ID\nYou can ask about the error on the Black botlist help server: https://discord.gg/cPe9A9vmaE\n' + __dirname);
        const api = await fetch(`https://blackbotlist.cf/apikeyget`).then(response => response.json());
        if (api.error) throw "BlackBotlist API\nAn error occurred in the API\nYou can ask about the error on the Black botlist help server: https://discord.gg/cPe9A9vmaE";
        var sonuc = undefined;
        if (!api["blackbotlist"]) return sonuc;
        api["blackbotlist"].map(x => {
            if (x.id === bot + "_" + user) {
                if (x.time > Date.now()) sonuc = "true"
            }
        })
        return sonuc;
    },

    webhook: async function (bot) {
        if (!bot) throw new TypeError('BlackBotlist API\nPlease enter the bot\'s ID\nYou can ask about the error on the Black botlist help server: https://discord.gg/cPe9A9vmaE\n' + __dirname);
        const api = await fetch(`https://blackbotlist.cf/apikeywebhook`).then(response => response.json());
        if (api.error) throw "BlackBotlist API\nAn error occurred in the API\nYou can ask about the error on the Black botlist help server: https://discord.gg/cPe9A9vmaE";
        var sonuc = undefined;
        if (!api[bot]) return sonuc;
        var time = Date.now() - api[bot].time
        if (time < 1000) sonuc = api[bot].id
        return sonuc;
    }
}
