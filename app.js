// Sağ tık menüsünü devre dışı bırak
document.addEventListener('contextmenu', event => event.preventDefault());

// Klavye kısayollarını engelleme
document.onkeydown = function(e) {
    // F12 DevTools engelleme
    if (e.keyCode == 123) {
        return false;
    }

    // CTRL+I DevTools engelleme
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    // CTRL+J DevTools engelleme
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // CTRL+S Kaydetme engelleme
    if (e.ctrlKey && e.keyCode == 83) {
        return false;
    }

    // CTRL+U Kaynak kodu görüntüleme engelleme
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

// Geliştirici araçlarını engelleme için özel obje tanımı
const element = new Image();
Object.defineProperty(element, 'id', {
  get: function () {
    /* TODO */
    alert('囧');
  }
});
console.log('%cHello', element);

