
let db = require('../index.js');



console.log(db.set('kullanıcıBilgi', { zorlukSeviyesi: 'Kolay' }));

 

console.log(db.push('kullanıcıBilgi.itemler', 'Kılıç'));


console.log(db.add('kullanıcıBilgi.param', 12500));

 

console.log(db.push('kullanıcıBilgi.itemler', 'Dondurma'));

console.log(db.add('kullanıcıBilgi.param', 500));

 

console.log(db.get('kullanıcıBilgi.param')); 
console.log(db.get('kullanıcıBilgi.itemler')); 
console.log(db.get('kullanıcıBilgi'));
console.log(db.all(x => x))
console.log(db);

//////////////////////////////////////////////////////////////
console.warn("")
console.warn("modül hazır!")
console.warn("")