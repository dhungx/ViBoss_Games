
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const menuList = document.getElementById('menu-list');

    hamburgerToggle.addEventListener('change', function() {
        if (hamburgerToggle.checked) {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    });
});