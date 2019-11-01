![Imgur](https://cdn.discordapp.com/attachments/570216668807299083/639825588810416157/rensder.png)

<h1>
  Coders.db Sizin Botlarınız İçin Kolayca Database Oluşturan Bir Sistemdir 
  Daha Çok Bilgi İçin <a href="https://discord.gg/N2H8pPD">Tıkla</a>
</h1>

![Imgur](https://cdn.discordapp.com/attachments/570216668807299083/639825276578299934/render.png)

```js
const cdb = require('coders.db');


// Veritabanındaki bir nesneyi ayarlama:
cdb.set('Kullanıcıbilgisi', { zorluk: 'Easy' })
// -> { difficulty: 'Easy' }


// Bir nesneyi bir nesnede bir diziye (henüz mevcut olmayan) iterek:
cdb.push('Kullanıcıbilgisi.eşyalar', 'Kılıç')
// -> {zorluk: 'Kolay', eşyalar: ['Kılıç']}


// Bir nesnede bir numaraya (henüz mevcut değil) ekleme:
cdb.add('Kullanıcıbilgisi.para', 2500)

// -> {zorluk: 'Kolay', eşyalar: ['Kılıç'], bakiye: 2500}

// Repeating previous examples:
cdb.push('Kullanıcıbilgisi.eşyalar', 'TV')

// -> {zorluk: 'Kolay', eşyalar: ['Kılıç', 'TV'], bakiye: 2500}
cdb.add('Kullanıcıbilgisi.para', 2500)

// -> {zorluk: 'Kolay', eşyalar: ['Kılıç', 'TV'], denge: 2500}

// Bireysel özellikleri alma
cdb.get('Kullanıcıbilgisi.para') // -> Toplam PARA: 10000
cdb.get('Kullanıcıbilgisi.eşyalar') // -> Toplam EŞYA: ['Kılıç', 'TV']
```

![Imgur](https://i.imgur.com/nmROfQr.png)

```js
const cdb = require('coders.db');

// Setting an object in the database:
cdb.set('userInfo', { difficulty: 'Easy' })
// -> { difficulty: 'Easy' }

// Pushing an element to an array (that doesn't exist yet) in an object:
cdb.push('userInfo.items', 'Sword')
// -> { difficulty: 'Easy', items: ['Sword'] }

// Adding to a number (that doesn't exist yet) in an object:
cdb.add('userInfo.balance', 2500)
// -> { difficulty: 'Easy', items: ['Sword'], balance: 2500 }

// Repeating previous examples:
cdb.push('userInfo.items', 'TV')
// -> { difficulty: 'Easy', items: ['Sword', 'TV'], balance: 2500 }
cdb.add('userInfo.balance', 2500)
// -> { difficulty: 'Easy', items: ['Sword', 'TV'], balance: 2500 }

// Fetching individual properties
cdb.get('userInfo.balance') // -> 10000
cdb.get('userInfo.items') // ['Sword', 'TV']
```