function initNavbarToggle() {
    const toggle = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-collapse');
    if (!toggle || !menu) {
        return false;
    }
    if (menu.dataset.navInit === 'true') {
        return true;
    }

    menu.style.overflow = 'hidden';
    menu.style.transition = 'max-height 0.35s ease, opacity 0.35s ease';
    menu.style.maxHeight = '0';
    menu.style.opacity = '0';
    menu.classList.remove('show');

    const openMenu = () => {
        menu.classList.add('show');
        menu.style.maxHeight = `${menu.scrollHeight}px`;
        menu.style.opacity = '1';
        toggle.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        menu.classList.remove('show');
        menu.style.maxHeight = '0';
        menu.style.opacity = '0';
        toggle.setAttribute('aria-expanded', 'false');
    };

    const isDesktop = () => window.innerWidth >= 992;
    const updateMenuState = () => {
        if (isDesktop()) {
            menu.classList.add('show');
            menu.style.maxHeight = '';
            menu.style.opacity = '1';
        } else if (!menu.classList.contains('show')) {
            closeMenu();
        }
    };

    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        if (menu.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    window.addEventListener('resize', updateMenuState);
    updateMenuState();
    menu.dataset.navInit = 'true';
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    initNavbarToggle();
    const header = document.getElementById('header');
    if (header) {
        const observer = new MutationObserver(() => {
            initNavbarToggle();
        });
        observer.observe(header, { childList: true, subtree: true });
    }
});
