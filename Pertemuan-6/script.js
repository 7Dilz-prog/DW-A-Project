console.log("✅ Halo dari script.js! File berhasil terhubung.");

// Memilih elemen input (sumber data)
const inputNamaResep = document.querySelector('#recipe-name');

// Memilih elemen pratinjau (target perubahan)
const judulPratinjau = document.querySelector('article header h1');

// Uji coba di console
console.log(inputNamaResep);
console.log(judulPratinjau);

inputNamaResep.addEventListener('input', function() {
    console.log("🍳 Pengguna sedang mengetik!");
});

inputNamaResep.addEventListener('input', function() {
    const teksInputan = inputNamaResep.value;
    
    if (teksInputan === "") {
        // Jika kosong, tampilkan teks placeholder
        judulPratinjau.textContent = "Judul Resep Akan Muncul Di Sini";
    } else {
        // Jika ada isi, tampilkan isinya
        judulPratinjau.textContent = teksInputan;
    }
});

const inputWaktuPersiapan = document.querySelector('#prep-time');
const waktuPratinjau = document.querySelector('article header p');

inputWaktuPersiapan.addEventListener('input', function() {
    const waktuInputan = inputWaktuPersiapan.value;
    
    if (waktuInputan === "" || waktuInputan === "0") {
        waktuPratinjau.textContent = "Waktu persiapan: -- menit";
    } else {
        waktuPratinjau.textContent = "Waktu persiapan: " + waktuInputan + " menit";
    }
});

const inputDeskripsi = document.querySelector('#description');
const deskripsiPratinjau = document.querySelector('#preview-description');

inputDeskripsi.addEventListener('input', function() {
    const deskripsiInputan = inputDeskripsi.value;
    
    if (deskripsiInputan === "") {
        deskripsiPratinjau.textContent = "Deskripsi resep akan muncul di sini...";
    } else {
        deskripsiPratinjau.textContent = deskripsiInputan;
    }
});

const inputKesulitan = document.querySelector('#difficulty');
const kesulitanMeter = document.querySelector('#preview-difficulty');
const kesulitanText = document.querySelector('#preview-difficulty-text');

inputKesulitan.addEventListener('input', function() {
    const nilaiKesulitan = inputKesulitan.value;
    
    // Update atribut 'value' dari <meter>
    kesulitanMeter.setAttribute('value', nilaiKesulitan);
    
    // Update teks deskriptif
    let textKesulitan = "";
    switch(nilaiKesulitan) {
        case "1":
            textKesulitan = "Sangat Mudah";
            break;
        case "2":
            textKesulitan = "Mudah";
            break;
        case "3":
            textKesulitan = "Sedang";
            break;
        case "4":
            textKesulitan = "Sulit";
            break;
        case "5":
            textKesulitan = "Sangat Sulit";
            break;
    }
    
    kesulitanText.textContent = textKesulitan;
});