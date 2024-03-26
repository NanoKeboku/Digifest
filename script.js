let lastScrollTop = 0;
document.getElementById("navbar").style.top = "-100px";

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > 200) {
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

$(document).ready(function () {
  document.querySelectorAll(".border-nav")[0].style.background = "black";
  $(".mission-tab .card2").css("display", "flex");
  $(".inovasi-tab .card2").css("display", "none");
  $(".jalur-tab .card2").css("display", "none");
  $(".gift-tab .card2").css("display", "none");
  $(".tab-misi").click(function () {
    $(".mission-tab .card2").css("display", "flex");
    $(".inovasi-tab .card2").css("display", "none");
    $(".jalur-tab .card2").css("display", "none");
    $(".gift-tab .card2").css("display", "none");
    document.querySelectorAll(".border-nav")[0].style.background = "black";
  });
  $(".tab-inovasi").click(function () {
    $(".mission-tab .card2").css("display", "none");
    $(".inovasi-tab .card2").css("display", "flex");
    $(".jalur-tab .card2").css("display", "none");
    $(".gift-tab .card2").css("display", "none");
    document.querySelectorAll(".border-nav")[0].style.background =
      "transparent";
  });
  $(".tab-jalur").click(function () {
    $(".mission-tab .card2").css("display", "none");
    $(".inovasi-tab .card2").css("display", "none");
    $(".jalur-tab .card2").css("display", "flex");
    $(".gift-tab .card2").css("display", "none");
    document.querySelectorAll(".border-nav")[0].style.background =
      "transparent";
  });
  $(".tab-hadiah").click(function () {
    $(".mission-tab .card2").css("display", "none");
    $(".inovasi-tab .card2").css("display", "none");
    $(".jalur-tab .card2").css("display", "none");
    $(".gift-tab .card2").css("display", "flex");
    document.querySelectorAll(".border-nav")[0].style.background =
      "transparent";
  });
});
