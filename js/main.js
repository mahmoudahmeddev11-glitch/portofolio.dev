/* =========================================
   ELEMENTS
========================================= */

const body = document.body;

const header = document.getElementById("header");

const menuBtn = document.getElementById("menuBtn");

const nav = document.getElementById("nav");

const languageBtn =
    document.getElementById("languageBtn");

const scrollProgress =
    document.getElementById("scrollProgress");

const backTop =
    document.getElementById("backTop");

const year =
    document.getElementById("year");


/* =========================================
   YEAR
========================================= */

if (year) {
    year.textContent =
        new Date().getFullYear();
}


/* =========================================
   MOBILE MENU
========================================= */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* =========================================
   HEADER ON SCROLL
========================================= */

function handleHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    handleHeader,
    { passive: true }
);

handleHeader();


/* =========================================
   SCROLL PROGRESS
========================================= */

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    if (scrollProgress) {

        scrollProgress.style.width =
            `${progress}%`;

    }

}

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();


/* =========================================
   BACK TO TOP
========================================= */

function handleBackTop() {

    if (!backTop) return;

    if (window.scrollY > 600) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

}

window.addEventListener(
    "scroll",
    handleBackTop,
    { passive: true }
);


if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   COUNTERS
========================================= */

const counters =
    document.querySelectorAll(
        "[data-counter]"
    );


function animateCounter(element) {

    const target =
        Number(
            element.dataset.counter
        );

    const duration = 1600;

    const startTime =
        performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const current =
            Math.floor(
                target * eased
            );


        element.textContent =
            current;


        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(update);
}


const counterObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                animateCounter(
                    entry.target
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.7
        }
    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =========================================
   LANGUAGE SWITCHER
========================================= */

let currentLanguage =
    localStorage.getItem(
        "site-language"
    ) || "ar";


function setLanguage(language) {

    currentLanguage =
        language;

    const isEnglish =
        language === "en";


    body.classList.toggle(
        "lang-en",
        isEnglish
    );


    document.documentElement.lang =
        isEnglish
            ? "en"
            : "ar";


    document.documentElement.dir =
        isEnglish
            ? "ltr"
            : "rtl";


    const translatedElements =
        document.querySelectorAll(
            "[data-ar][data-en]"
        );


    translatedElements.forEach(
        (element) => {

            const text =
                isEnglish
                    ? element.dataset.en
                    : element.dataset.ar;

            if (text) {

                element.textContent =
                    text;

            }

        }
    );


    if (languageBtn) {

        languageBtn.textContent =
            isEnglish
                ? "AR"
                : "EN";

    }


    localStorage.setItem(
        "site-language",
        language
    );

}


if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        () => {

            setLanguage(
                currentLanguage === "ar"
                    ? "en"
                    : "ar"
            );

        }
    );

}


setLanguage(currentLanguage);


/* =========================================
   3D TILT
========================================= */

const tiltCards =
    document.querySelectorAll(
        ".tilt-card"
    );


tiltCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (
                window.innerWidth < 850
            ) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                    centerX) *
                5;


            const rotateX =
                ((centerY - y) /
                    centerY) *
                5;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


window.addEventListener(
    "mousemove",
    (event) => {

        if (
            !heroVisual ||
            window.innerWidth < 900
        ) {
            return;
        }


        const x =
            (event.clientX /
                window.innerWidth -
                0.5);


        const y =
            (event.clientY /
                window.innerHeight -
                0.5);


        heroVisual.style.transform =
            `translate3d(
                ${x * 8}px,
                ${y * 8}px,
                0
            )`;

    },
    { passive: true }
);


/* =========================================
   IMAGE FALLBACK
========================================= */

document
    .querySelectorAll("img")
    .forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                console.warn(
                    "Image could not be loaded:",
                    image.src
                );

            }
        );

    });


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav
        ) {

            nav.classList.remove(
                "active"
            );

        }

    }
);