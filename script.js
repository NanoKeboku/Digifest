let lastScrollTop = 0;
document.getElementById("navbar").style.top = "-100px";

document.querySelectorAll("#form-btn").forEach((x) => {
  x.addEventListener("click", function () {
    var win = window.open("index2.html", "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  });
});

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
    $(".modal-first").toggle();
  } else if (param == 2) {
    $(".modal-second").toggle();
  } else if (param == 3) {
    $(".modal-third").toggle();
  }
}

$(document).ready(function () {
  document.querySelectorAll(".border-nav")[0].style.background = "white";
  $(".mission-tab .card2").css("display", "flex");
  $(".inovasi-tab .card2").css("display", "none");
  $(".jalur-tab .card2").css("display", "none");
  $(".gift-tab .card2").css("display", "none");
  $(".tab-misi").click(function () {
    $(".mission-tab .card2").css("display", "flex");
    $(".inovasi-tab .card2").css("display", "none");
    $(".jalur-tab .card2").css("display", "none");
    $(".gift-tab .card2").css("display", "none");
    document.querySelectorAll(".border-nav")[0].style.background = "white";
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
