// Import pustaka jsencrypt
import JSEncrypt from 'jsencrypt';

// Buat objek JSEncrypt dengan kunci publik
const encrypt = new JSEncrypt();
encrypt.setPublicKey('...'); // Ganti dengan kunci publik RSA Anda

// Buat objek JSEncrypt dengan kunci pribadi
const decrypt = new JSEncrypt();
decrypt.setPrivateKey('...'); // Ganti dengan kunci pribadi RSA Anda

// Handler untuk tombol enkripsi
document.getElementById('encrypt-button').addEventListener('click', () => {
    const plaintext = document.getElementById('encrypt-input').value;
    const encrypted = encrypt.encrypt(plaintext);
    document.getElementById('encrypted-text').value = encrypted;
});

// Handler untuk tombol dekripsi
document.getElementById('decrypt-button').addEventListener('click', () => {
    const ciphertext = document.getElementById('decrypt-input').value;
    const decrypted = decrypt.decrypt(ciphertext);
    document.getElementById('decrypted-text').value = decrypted;
});