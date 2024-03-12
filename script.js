let lastScrollTop = 0;
document.getElementById("navbar").style.top = "-100px";

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > 100) {
    // Scroll ke bawah
    document.getElementById("navbar").style.top = "0";
  } else {
    // Scroll ke atas
    document.getElementById("navbar").style.top = "-100px";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Menyimpan posisi scroll terakhir
});

$(document).ready(function () {
  $(".icon-button").click(function () {
    $(".modal").hide();
  });
});
$("#navbar").show();
function modalBox(param) {
  if (param == 1) {
    $(".modal").toggle();
    document.querySelector(".modal-container-title").textContent =
      "Digital Innovation Solutions";
    document.querySelector(".modal-cnt").innerHTML = `
    <p>Digital Innovation Solution adalah kategori lomba yang mendorong peserta untuk mengembangkan solusi digital yang inovatif untuk memecahkan masalah atau tantangan yang ada di masyarakat. Solusi digital yang dikembangkan dapat berupa aplikasi, sistem informasi atau web application.</p>
    <p>Tujuan dari kategori ini adalah untuk:
    </p>
    <ul>
      <li>Mendorong perkembangan teknologi digital di Indonesia
      </li>
      <li>Mendukung kreativitas generasi muda dalam bidang teknologi digital
      </li>
      <li>Mencari dan mengembangkan talenta-talenta muda di bidang teknologi digital
      </li>
    </ul>
    <p>Peserta kategori ini dapat berasal dari pelajar sekolah SMA/SMK sederajat yang berdomisili di jawa tengah. Peserta dapat membentuk tim atau individu.
      <br>Tema lomba innovation digital solution DIGIFEST 2024 yaitu “Digitalisasi di lingkungan sekolah dan Masyarakat “
      </p>
    `;
  } else if (param == 2) {
    $(".modal").toggle();
    document.querySelector(
      ".modal-container-title"
    ).textContent = `Content video Reels
    `;
    document.querySelector(".modal-cnt").innerHTML = `
    <p>Innovation digital solution adalah kategori lomba yang mendorong peserta untuk mengembangkan ide inovatif dengan
      berbentuk konten media konten visual video.
    </p>
    <p>Tujuan dari kategori ini adalah untuk:
    </p>
    <ul>
      <li>Mendorong perkembangan teknologi digital
      </li>
      <li>Mendukung kreativitas generasi muda untuk mengembangkan ide dan gagasan terkait isu perkembangan teknologi
        sekarang
      </li>
      <li>Mencari dan mengembangkan talenta-talenta muda di bidang teknologi digital
      </li>
    </ul>
    <p>Peserta kategori ini dapat berasal dari pelajar sekolah SMA/SMK sederajat yang berdomisili di jawa tengah. Peserta
      dapat membentuk tim atau individu.
    </p>
    <p>Tema oma video reels DIGIFEST 2024 yaitu “Sadar Phising, Lindungi Diri di Era Digital“
    </p>`;
  } else if (param == 3) {
    $(".modal").toggle();
    document.querySelector(
      ".modal-container-title"
    ).textContent = `Kompetisi Poster Infografis

    `;
    document.querySelector(
      ".modal-cnt"
    ).innerHTML = `<p>Innovation digital solution adalah kategori lomba yang mendorong peserta untuk mengembangkan solusi digital yang inovatif untuk memecahkan masalah atau tantangan yang ada di masyarakat. Solusi digital yang dikembangkan dapat berupa konten media visual berupa gambar.
    </p>
    <p>Tujuan dari kategori ini adalah untuk:
    </p>
    <ul>
      <li>Mendorong perkembangan teknologi digital di Indonesia
      </li>
      <li>Mendukung kreativitas generasi muda dalam bidang teknologi digital
      </li>
      <li>Mencari dan mengembangkan talenta-talenta muda di bidang teknologi digital
      </li>
    </ul>
    <p>Peserta kategori ini dapat berasal dari pelajar sekolah SMA/SMK sederajat yang berdomisili di jawa tengah. Peserta dapat membentuk tim atau individu.
    </p>
    <p>Tema lomba poter infografis DIGIFEST 2024 yaitu “Sadar Phising, Lindungi Diri di Era Digital“
    </p>`;
  }
}

// const carouselImg = [
//   "https://media-cdn.tripadvisor.com/media/photo-s/14/11/49/ee/20180809-220112-largejpg.jpg",
//   "https://gudeg.net/cni-content/uploads/modules/direktori/logo/20161223094354.jpeg",
//   "https://cdn.idntimes.com/content-images/community/2018/12/5-e3bb41222376563e3281b2f753e07694.jpg",
// ];

// let currentIndex = 0; // Indeks slide saat ini

// // Fungsi untuk mengubah gambar slide
// const changeSlide = () => {
//   // Dapatkan elemen gambar carousel
//   const carouselImage = document.querySelector(".carousel-img");
//   // Ganti src gambar dengan gambar baru
//   carouselImage.src = carouselImg[currentIndex];
//   // Pindahkan ke indeks slide berikutnya
//   currentIndex = (currentIndex + 1) % carouselImg.length;
// };

// // Jalankan fungsi changeSlide setiap 1 detik
// setInterval(changeSlide, 5000);
