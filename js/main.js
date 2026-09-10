"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;
const loader = document.getElementById("pageLoader");

const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

const projectModal = document.getElementById("projectModal");
const projectFrame = document.getElementById("projectFrame");

const currentYear = document.getElementById("currentYear");



/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    window.setTimeout(() => {
        loader?.classList.add("hidden");
    }, 250);

});



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("portfolio-language") || "ar";


function applyLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {

        const value =
            language === "ar"
                ? element.dataset.ar
                : element.dataset.en;

        if (value !== undefined) {
            element.textContent = value;
        }

    });


    if (languageToggle) {

        languageToggle.textContent =
            language === "ar"
                ? "EN"
                : "AR";

    }


    localStorage.setItem(
        "portfolio-language",
        language
    );

}


languageToggle?.addEventListener("click", () => {

    const nextLanguage =
        currentLanguage === "ar"
            ? "en"
            : "ar";

    applyLanguage(nextLanguage);

});



/* =========================================================
   THEME
========================================================= */

let savedTheme =
    localStorage.getItem("portfolio-theme") || "dark";


function applyTheme(theme) {

    const light =
        theme === "light";

    body.classList.toggle(
        "light-theme",
        light
    );

    if (themeToggle) {

        themeToggle.textContent =
            light
                ? "☾"
                : "☼";

    }

    localStorage.setItem(
        "portfolio-theme",
        theme
    );

}


themeToggle?.addEventListener("click", () => {

    const nextTheme =
        body.classList.contains("light-theme")
            ? "dark"
            : "light";

    applyTheme(nextTheme);

});



/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {

    mobileMenu?.classList.remove("open");

    menuButton?.setAttribute(
        "aria-expanded",
        "false"
    );

}


menuButton?.addEventListener("click", () => {

    const isOpen =
        mobileMenu?.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(Boolean(isOpen))
    );

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach((link) => {

        link.addEventListener("click", () => {

            closeMobileMenu();

        });

    });



/* =========================================================
   SMOOTH NAVIGATION
   مهم:
   لا يوجد smooth scroll عالمي.
   فقط عند الضغط على روابط التنقل.
   وبالتالي scrolling الموبايل الطبيعي لا يتأثر.
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header =
                document.querySelector(".site-header");

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetTop =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                10;

            window.scrollTo({
                top: targetTop,
                behavior: "smooth"
            });

        });

    });



/* =========================================================
   REVEAL ANIMATIONS
   IntersectionObserver فقط
   بدون scroll calculations
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                root: null,
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("visible");

    });

}



/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(url) {

    if (!projectModal || !projectFrame) {
        return;
    }

    projectFrame.src = url;

    projectModal.classList.add("open");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    body.style.overflow = "hidden";

}


function closeProject() {

    if (!projectModal || !projectFrame) {
        return;
    }

    projectModal.classList.remove("open");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    projectFrame.src = "about:blank";

    body.style.overflow = "";

}


document
    .querySelectorAll("[data-project]")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const url =
                button.dataset.project;

            if (url) {
                openProject(url);
            }

        });

    });


document
    .querySelectorAll("[data-close-modal]")
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeProject
        );

    });



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProject();
        closeMobileMenu();

    }

});



/* =========================================================
   VIDEO PERFORMANCE
   تشغيل فيديو واحد فقط في نفس الوقت
========================================================= */

const videos =
    document.querySelectorAll("video");


videos.forEach((video) => {

    video.addEventListener("play", () => {

        videos.forEach((otherVideo) => {

            if (otherVideo !== video) {
                otherVideo.pause();
            }

        });

    });

});



/* =========================================================
   INITIALIZE
========================================================= */

applyLanguage(currentLanguage);
applyTheme(savedTheme);


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}