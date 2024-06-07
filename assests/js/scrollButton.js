// Butona tıklanınca sayfanın en üstüne git
document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Sayfa kaydırıldığında butonu göster/gizle
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};