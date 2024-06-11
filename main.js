// Kode JavaScript untuk animasi teks ketik
const typedText = document.getElementById("typed-text");
const textToType = "Hi! I'm Agustina"; // Teks yang akan diketikkan
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typedText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); // Kecepatan ketik (dalam milidetik)
  } else {
    setTimeout(eraseText, 1000); // Tunggu 1 detik sebelum menghapus teks
  }
}

function eraseText() {
  if (index > 0) {
    typedText.textContent = textToType.substring(0, index - 1);
    index--;
    setTimeout(eraseText, 100); // Kecepatan penghapusan (dalam milidetik)
  } else {
    setTimeout(typeText, 100); // Tunggu 1 detik sebelum mulai mengetik lagi
  }
}

// Mulai animasi ketik ketika halaman dimuat
window.addEventListener("load", () => {
  typeText();
});

//portofolio

//contact
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Menggunakan "form" sebagai selektor
  form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      event.preventDefault(); // Mencegah pengiriman formulir jika ada kolom yang kosong
      alert("Please fill out all fields.");
    } else {
      // Formulir diisi dengan benar, lanjutkan dengan pengiriman
      alert("Form submitted successfully!");
    }
  });
});

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
