document.addEventListener("DOMContentLoaded", function() {
    // İçerik tamamen yüklendikten sonra preloader'ı gizlemek için
    setTimeout(function() {
      var preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
      
      var content = document.getElementById('content');
      content.style.display = 'block';
    }, 1000); // 3000 milisaniye (3 saniye) gecikme
  });
  