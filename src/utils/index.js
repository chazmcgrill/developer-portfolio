export function scrollTo(element, to, duration) {
    if (duration <= 0) return;

    let difference = to - window.scrollY;
    let perTick = difference / duration * 10;

    if (perTick) {
        setTimeout(() => {
            window.scroll(0, window.scrollY + perTick);
            if (window.scrollY === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    }
}

export function navClick(navId) {
    navId = navId ? navId.toLowerCase() : 'bio';
    const section = document.getElementById(navId);
    scrollTo(document.body, section.offsetTop, 500);
}