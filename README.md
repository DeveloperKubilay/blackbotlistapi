# Black botlist api
Versiyon: **3.1.3**
Modülün sahibi: **kubi#5443**
## Bilgiler <br>
[Black botlist web siteye yönlendir](https://blackbotlist.tk/) <br>
[Nasıl kullanılır](https://blackbotlist.tk/docs) <br>
[Discord sunucusu](https://discord.gg/cPe9A9vmaE) <br>
[Discord yardım sunucusu](https://discord.gg/4Xpwwz6pgN) <br>
### Kullanımı<br> <br>
```js
const blackbotlist = require("blackbotlistapi");

blackbotlist.get("Botid","Kisininidsi").catch(() => {}).then(sonuc => {//sonucu değiştirebilirsiniz
if(sonuc)  {
//Kisininidsi oy verdiyse
}})

blackbotlist.get("Botid","Kisininidsi").catch(() => {}).then(sonuc => {
if(!sonuc)  {
//Kisininidsi oy vermediyse
}})

setInterval(function(){
blackbotlist.webhook("Botid").catch(() => {}).then(sonuc => {
if(!sonuc) return;
//Bota bir kişi oy verdiyse
console.log(sonuc+"'idli kişi bota oy verdi UwU")
})
},5000)//Tekrarlıyorsa yada birşey yapmıyorsa süreyi değiştirin
```
### Örnek kod
```js
const blackbotlist = require("blackbotlistapi");

//Oy ver komutu
client.on('message', async msg => {
if (msg.content === 'ping') {
blackbotlist.get("Botid",msg.author.id).catch(() => {}).then(sonuc => {
if(!sonuc)  {
msg.channel.send("Bu komutu kullanabilmeniz icin oy vermeniz gerekmektedir")
}
if(sonuc) {
msg.channel.send("teşekkürler")
}})
}});

//Webhook
client.on('ready', () => {
setInterval(function(){
blackbotlist.webhook("Botid").catch(() => {}).then(sonuc => {
if(!sonuc) return;
client.channels.cache.get("Kanalid").send(`UwU <@!${sonuc}> Bota oy verdi!`)
})
},1000)
});

```
#### Yüklemek için
- ```npm i blackbotlistapi```

#### Hatamı alıyorsun ilk olarak terminale npm i node-fetch@2.6.1 yaz
#### Halamı hata alıyorsun o zaman hemen [discord sunucumuza gel](https://discord.gg/cPe9A9vmaE) ve ticket aç!

## Dangerio Studio