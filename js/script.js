const semuaTombol = document.querySelectorAll(".btn-tambah");


semuaTombol.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        tombol.textContent = "✅ ditambahkan"

        setTimeout(function() {
            tombol.textContent = " + Tambah"
        }, 1000);
    });
});

//fitur kirim pesan
const formKontak = document.getElementById("form-kontak");
const responseMessage = document.getElementById("response-message");

formKontak.addEventListener("submit", function(event) {
    event.preventDefault();
    responseMessage.style.display = "block";
    formKontak.reset();

    setTimeout(function() {
        responseMessage.style.display = "none";
    }, 3000);
});
