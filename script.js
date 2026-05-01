const categories = [
  {
    id: 'paylasimlik', title: 'Paylaşımlık Lezzetler', note: 'Masaya başlangıç için', items: [
      { id: 1, name: 'Fırın Ezme Tabağı', desc: 'Köz domates, biber ve nar ekşili özel ezme.', price: 86, img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80', tag: 'Yeni' },
      { id: 2, name: 'Baharatlı Mini Patates', desc: 'Sarımsaklı yoğurt ve kekikli yağ ile servis edilir.', price: 74, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=80', tag: '' },
      { id: 3, name: 'Humus & Çıtır Lavaş', desc: 'Tahinli humus, sumaklı soğan ve sıcak lavaş.', price: 92, img: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=900&q=80', tag: 'Popüler' },
      { id: 4, name: 'Peynirli Sigara Böreği', desc: 'El açması yufka, beyaz peynir ve maydanoz.', price: 68, img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80', tag: '' }
    ]
  },
  {
    id: 'ana', title: 'Ana Yemekler', note: 'Doyurucu tabaklar', items: [
      { id: 5, name: 'Köz Patlıcanlı Dana Lokum', desc: 'Izgara dana parçaları, köz patlıcan püresi ve tereyağlı sos.', price: 248, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80', tag: 'Şefin Önerisi' },
      { id: 6, name: 'Tavuk Izgara Bowl', desc: 'Marine tavuk, bulgur pilavı, yoğurt ve mevsim yeşillikleri.', price: 176, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80', tag: '' },
      { id: 7, name: 'Mantarlı Kremalı Penne', desc: 'Kültür mantarı, krema, parmesan ve taze fesleğen.', price: 142, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80', tag: 'Vejetaryen' },
      { id: 8, name: 'Anadolu Burger', desc: 'Dana köfte, karamelize soğan, cheddar ve ev yapımı sos.', price: 188, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80', tag: 'Popüler' },
      { id: 9, name: 'Somon Izgara', desc: 'Limonlu tereyağı sos, roka ve fırın sebze ile.', price: 264, img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80', tag: '' }
    ]
  },
  {
    id: 'salata', title: 'Salata & Hafif', note: 'Daha hafif seçenekler', items: [
      { id: 10, name: 'Akdeniz Salatası', desc: 'Yeşillik, beyaz peynir, zeytin, ceviz ve nar ekşisi.', price: 118, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80', tag: '' },
      { id: 11, name: 'Izgara Tavuklu Sezar', desc: 'Marul, kruton, parmesan ve özel sezar sos.', price: 136, img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=900&q=80', tag: 'Popüler' },
      { id: 12, name: 'Kinoalı Renkli Kase', desc: 'Kinoa, avokado, mısır, domates ve yoğurtlu sos.', price: 129, img: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=900&q=80', tag: 'Fit' }
    ]
  },
  {
    id: 'tatli', title: 'Tatlılar', note: 'Kapanışı güzel yapın', items: [
      { id: 13, name: 'Lotuslu Magnolia', desc: 'Muz, krema ve bisküvi parçaları ile.', price: 94, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80', tag: 'Yeni' },
      { id: 14, name: 'Sıcak Çikolatalı Kek', desc: 'Akışkan çikolata, dondurma ve kırmızı meyve.', price: 108, img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80', tag: 'Popüler' },
      { id: 15, name: 'Fırın Sütlaç', desc: 'Tarçın ve fındık kırığı ile klasik lezzet.', price: 76, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80', tag: '' }
    ]
  },
  {
    id: 'icecek', title: 'İçecekler', note: 'Sıcak ve soğuk', items: [
      { id: 16, name: 'Ev Limonatası', desc: 'Taze limon, nane ve az şekerli ferah içecek.', price: 54, img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80', tag: '' },
      { id: 17, name: 'Soğuk Americano', desc: 'Çift shot espresso ve buz.', price: 62, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80', tag: 'Popüler' },
      { id: 18, name: 'Türk Kahvesi', desc: 'Lokum ile geleneksel sunum.', price: 48, img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=80', tag: '' },
      { id: 19, name: 'Reyhan Şerbeti', desc: 'Karanfil ve limon aromalı soğuk şerbet.', price: 58, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80', tag: 'Özel' }
    ]
  }
];

let cart = JSON.parse(localStorage.getItem('agoraCart')) || [];

function renderNav(){
  document.getElementById('nav').innerHTML = categories.map(c => `<a href="#${c.id}">${c.title}</a>`).join('');
}

function renderMenu(){
  const menu = document.getElementById('menu');
  menu.innerHTML = categories.map(cat => `
    <section class="cat" id="${cat.id}">
      <div class="cat-title"><h2>${cat.title}</h2><p>${cat.note}</p></div>
      <div class="grid">
        ${cat.items.map(item => `
          <article class="item">
            <img src="${item.img}" alt="${item.name}">
            <div class="content">
              <div class="head"><h3>${item.name}</h3><span class="price">${item.price} TL</span></div>
              <p class="desc">${item.desc}</p>
              ${item.tag ? `<span class="tag">${item.tag}</span>` : ''}
              <button class="add" onclick="addToCart(${item.id})">Sepete Ekle</button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function findItem(id){ return categories.flatMap(c => c.items).find(i => i.id === id); }
function saveCart(){ localStorage.setItem('agoraCart', JSON.stringify(cart)); updateCart(); }
function addToCart(id){
  const item = findItem(id);
  const existing = cart.find(x => x.id === id);
  existing ? existing.qty++ : cart.push({...item, qty:1});
  saveCart();
}
function updateCart(){
  document.getElementById('cartCount').textContent = cart.reduce((t,i)=>t+i.qty,0);
  document.getElementById('cartTotal').textContent = cart.reduce((t,i)=>t+i.price*i.qty,0) + ' TL';
}
function openCart(){
  const list = document.getElementById('cartItems');
  list.innerHTML = cart.length ? cart.map(i => `<div class="row"><span>${i.name} x${i.qty}</span><strong>${i.price*i.qty} TL</strong></div>`).join('') : '<p>Sepet boş.</p>';
  updateCart();
  document.getElementById('cartModal').style.display = 'grid';
}
function closeCart(){ document.getElementById('cartModal').style.display = 'none'; }
function clearCart(){ cart = []; saveCart(); openCart(); }
function makeQR(){
  QRCode.toCanvas(document.getElementById('qrcode'), window.location.href, { width: 190, margin: 1 }, err => { if(err) console.error(err); });
}

document.addEventListener('DOMContentLoaded', () => { renderNav(); renderMenu(); updateCart(); makeQR(); });
