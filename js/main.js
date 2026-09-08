/* =========================================
   DOM
========================================= */

const body = document.body;

const themeBtn = document.getElementById("themeBtn");

const languageBtn = document.getElementById("languageBtn");

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

const cursorGlow = document.querySelector(".cursor-glow");

const yearElement = document.getElementById("year");


/* =========================================
   YEAR
========================================= */

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   THEME
========================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    body.classList.add("light");

    if (themeBtn) {
        themeBtn.textContent = "☾";
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light");

        const isLight =
            body.classList.contains("light");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeBtn.textContent =
            isLight ? "☾" : "☀";
    });

}


/* =========================================
   LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("language") || "ar";


function updateLanguage() {

    const elements =
        document.querySelectorAll(
            "[data-ar][data-en]"
        );

    elements.forEach((element) => {

        const text =
            currentLanguage === "ar"
                ? element.dataset.ar
                : element.dataset.en;

        if (text) {
            element.textContent = text;
        }

    });


    const isArabic =
        currentLanguage === "ar";

    document.documentElement.lang =
        isArabic ? "ar" : "en";

    document.documentElement.dir =
        isArabic ? "rtl" : "ltr";


    if (languageBtn) {

        languageBtn.textContent =
            isArabic ? "EN" : "AR";
    }

    localStorage.setItem(
        "language",
        currentLanguage
    );
}


updateLanguage();


if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        () => {

            currentLanguage =
                currentLanguage === "ar"
                    ? "en"
                    : "ar";

            updateLanguage();
        }
    );
}


/* =========================================
   MOBILE MENU
========================================= */

if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("active");

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

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
   3D TILT CARDS
========================================= */

const tiltCards =
    document.querySelectorAll(".tilt-card");


const canHover =
    window.matchMedia(
        "(hover: hover)"
    ).matches;


if (canHover) {

    tiltCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -5;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    5;


                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    scale(1.01)
                    `;
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

}


/* =========================================
   CURSOR GLOW
========================================= */

if (
    cursorGlow &&
    canHover
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        }
    );

}


/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


if (canHover) {

    magneticButtons.forEach((button) => {

        button.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `
                    translate(${x * 0.12}px,
                              ${y * 0.12}px)
                    scale(1.03)
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });

}


/* =========================================
   COUNTERS
========================================= */

const counters =
    document.querySelectorAll(
        "[data-counter]"
    );


const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.counter
                    );

                const duration = 1500;

                const startTime =
                    performance.now();


                function updateCounter(
                    currentTime
                ) {

                    const elapsed =
                        currentTime -
                        startTime;

                    const progress =
                        Math.min(
                            elapsed /
                                duration,
                            1
                        );


                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );


                    counter.textContent =
                        Math.floor(
                            eased * target
                        );


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;
                    }
                }


                requestAnimationFrame(
                    updateCounter
                );


                counterObserver.unobserve(
                    counter
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
   PARALLAX HERO
========================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    canHover
) {

    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;

            if (scrollY > 900) {
                return;
            }

            heroVisual.style.transform =
                `translateY(${scrollY * 0.08}px)`;

        },
        {
            passive: true
        }
    );

}


/* =========================================
   ACTIVE NAV
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                navigationLinks.forEach(
                    (link) => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            });

        },
        {
            threshold: 0.3
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================
   CLOSE MENU ON ESC
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (navLinks) {
                navLinks.classList.remove(
                    "active"
                );
            }

        }

    }
);