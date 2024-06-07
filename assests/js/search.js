const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
const clear = document.querySelector('.clear');
const searchBox = document.getElementById('mysearch');

clear.onclick = function() {
  searchBox.value = '';
}

icon.onclick = function(event) {
  search.classList.toggle('active');
  searchBox.value = '';
  // Event'in dışına tıklanırsa arama kutusunu kapat
  event.stopPropagation(); // Eğer arama kutusunun içinde tıklarsanız, dışındaki tıklamaları ignore et
}

// Document seviyesinde bir tıklama event listener'ı ekleyerek arama kutusunu kapat
document.addEventListener('click', function(event) {
  const isClickedInside = search.contains(event.target) || icon.contains(event.target);
  if (!isClickedInside) {
    search.classList.remove('active');
    searchBox.value = '';
  }
});


