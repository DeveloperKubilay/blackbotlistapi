//Modül sürümü 3.1.3

//Modülün sahibi: kubi#5443 Dangerio studio: https://discord.gg/4Xpwwz6pgN 
//Black Botlist websitesi: https://blackbotlist.tk/ Black Botlist sunucusu: https://discord.gg/cPe9A9vmaE
//Nasıl kullanılır: https://blackbotlist.tk/docs
//Hatamı alıyorsun ilk olarak terminale npm i node-fetch@2.6.1 yaz 
//Halamı hata alıyorsun O zaman Discord serverimize gelin ve ticket açın!

const fetch = require('node-fetch')
module.exports = {

    get: async function (bot, user) {
        if (!bot) throw new TypeError('BlackBotlist Api\nLütfen botun idsini giriniz\nBlack botlist yardım sunucundan hatayı sorabilirsin!: https://discord.gg/cPe9A9vmaE\n' + __dirname);
        if (!user) throw new TypeError('BlackBotlist Api\nLütfen kişi idsini giriniz\nBlack botlist yardım sunucundan hatayı sorabilirsin!: https://discord.gg/cPe9A9vmaE\n' + __dirname);
        const api = await fetch(`https://blackbotlist.tk/apikeyget`).then(response => response.json());
        if (api.error) throw "BlackBotlist Api\nApi'de bir hata oluştu\nBlack botlist yardım sunucundan hatayı sorabilirsin!: https://discord.gg/cPe9A9vmaE";
        var sonuc = undefined;
        if(!api["blackbotlist"]) return sonuc; 
        api["blackbotlist"].map(x =>  {
        if (x.id === bot + "_" + user){
       if(x.süre > Date.now()) sonuc = "true"
        }
     })    
    return sonuc;  
    },

    webhook: async function (bot) {
        if (!bot) throw new TypeError('BlackBotlist Api\nLütfen botun idsini giriniz\nBlack botlist yardım sunucundan hatayı sorabilirsin!: https://discord.gg/cPe9A9vmaE\n' + __dirname);
        const api = await fetch(`https://blackbotlist.tk/apikeywebhook`).then(response => response.json());
        if (api.error) throw "BlackBotlist Api\nApi'de bir hata oluştu\nBlack botlist yardım sunucundan hatayı sorabilirsin!: https://discord.gg/cPe9A9vmaE";
            var sonuc = undefined;   
            if(!api[bot]) return sonuc; 
            var süre = Date.now()-api[bot].süre
            if (süre < 1000) sonuc = api[bot].id 
           return sonuc;    
    }
}
