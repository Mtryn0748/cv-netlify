// Sayfa yüklendiğinde sidebar'ın durumunu netleştirelim
window.onload = function() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
};
// Tüm sayfada bir tıklama olup olmadığını dinle
window.onclick = function(event) {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.getElementById("openbtn");

    // Eğer tıklanan yer sidebar değilse VE açma butonu değilse VE sidebar şu an açıksa...
    if (!sidebar.contains(event.target) && !openbtn.contains(event.target) && parseInt(sidebar.style.width) > 0) {
        toggleSidebar();
    }
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    var openbtn = document.getElementById("openbtn");

    if (parseInt(sidebar.style.width) > 0) {  // "250px" === "250px" yerine sayısal karşılaştırma
        sidebar.style.width = "0px";
        content.style.marginLeft = "0px";
        openbtn.style.display = "block";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
        openbtn.style.display = "none";
    }
}

function showSection(sectionId) {
    // 1. Tüm sectionları bul ve gizle
    var sections = document.getElementsByClassName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
        sections[i].style.display = "none"; // Garantiye alalım
    }

    // 2. Tıklanan section'ı bul ve göster
    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add("active");
        activeSection.style.display = "block";
    }
}
