"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;

const header = document.getElementById("header");

const nav = document.getElementById("nav");

const menuBtn = document.getElementById("menuBtn");

const languageBtn = document.getElementById("languageBtn");

const themeBtn = document.getElementById("themeBtn");

const yearElement = document.getElementById("year");

const navLinks = document.querySelectorAll(".nav-link");

const languageElements = document.querySelectorAll("[data-ar][data-en]");

const revealElements = document.querySelectorAll(".reveal");


/* =========================================================
   CURRENT LANGUAGE
========================================================= */

let currentLanguage = localStorage.getItem("siteLanguage") || "ar";


/* =========================================================
   LANGUAGE
========================================================= */

function updateLanguage() {

    const isArabic = currentLanguage === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    languageBtn.textContent = isArabic ? "EN" : "AR";

    languageElements.forEach((element) => {

        const arabicText = element.getAttribute("data-ar");

        const englishText = element.getAttribute("data-en");

        if (!arabicText || !englishText) {
            return;
        }

        element.textContent = isArabic
            ? arabicText
            : englishText;

    });

    localStorage.setItem("siteLanguage", currentLanguage);
}


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

if (languageBtn) {

    languageBtn.addEventListener("click", () => {

        currentLanguage = currentLanguage === "ar"
            ? "en"
            : "ar";

        updateLanguage();

    });

}


/* =========================================================
   THEME
========================================================= */

const savedTheme = localStorage.getItem("siteTheme");

if (savedTheme === "light") {

    body.classList.add("light-mode");

}


/* =========================================================
   THEME BUTTON
========================================================= */

function updateThemeButton() {

    if (!themeBtn) {
        return;
    }

    const isLight = body.classList.contains("light-mode");

    themeBtn.textContent = isLight ? "☾" : "☀";

}


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        body.classList.toggle("light-mode");

        const isLight = body.classList.contains("light-mode");

        localStorage.setItem(
            "siteTheme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();

    });

}

updateThemeButton();


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   HEADER SCROLL
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {

                const href = link.getAttribute("href");

                link.classList.toggle(
                    "active",
                    href === `#${currentId}`
                );

            });

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================================
   SIMPLE 3D MOUSE EFFECT
========================================================= */

const cards3D = document.querySelectorAll(
    ".service-card, .project-card, .video-card"
);


cards3D.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 900) {
            return;
        }

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        const rotateX =
            ((centerY - y) / centerY) * 3;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-7px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   HERO 3D EFFECT
========================================================= */

const heroWrapper =
    document.querySelector(".hero-image-wrapper");


if (heroWrapper) {

    heroWrapper.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                heroWrapper.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 4;

            const rotateX =
                ((centerY - y) / centerY) * 4;

            heroWrapper.style.transform =
                `perspective(1200px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    heroWrapper.addEventListener(
        "mouseleave",
        () => {

            heroWrapper.style.transform = "";

        }
    );

}


/* =========================================================
   YEAR
========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   INIT
========================================================= */

updateLanguage();