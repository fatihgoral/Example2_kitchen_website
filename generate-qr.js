const QRCode = require('qrcode');
const path = require('path');

const url = 'https://fatihgoral.github.io/Example2_kitchen_website/';
const outputPath = path.join(__dirname, 'agora_mutfak_qr.png');

QRCode.toFile(outputPath, url, {
  color: {
    dark: '#12100d',
    light: '#fff4df'
  },
  width: 500,
  margin: 2
}, (err) => {
  if (err) {
    console.error('QR Kod oluştururken hata:', err);
  } else {
    console.log(`✅ QR Kod başarıyla oluşturuldu: ${outputPath}`);
    console.log(`📱 Link: ${url}`);
  }
});
