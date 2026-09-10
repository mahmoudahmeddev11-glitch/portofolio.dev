"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const body =
    document.body;

const pageLoader =
    document.getElementById("pageLoader");

const languageToggle =
    document.getElementById("languageToggle");

const themeToggle =
    document.getElementById("themeToggle");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const projectModal =
    document.getElementById("projectModal");

const projectFrame =
    document.getElementById("projectFrame");

const currentYear =
    document.getElementById("currentYear");



/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    window.setTimeout(() => {

        pageLoader?.classList.add("hidden");

    }, 180);

});



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem(
        "portfolio-language"
    ) || "ar";


function applyLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    document
        .querySelectorAll(
            "[data-ar][data-en]"
        )
        .forEach((element) => {

            const text =
                language === "ar"
                    ? element.dataset.ar
                    : element.dataset.en;

            if (text !== undefined) {
                element.textContent = text;
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


languageToggle?.addEventListener(
    "click",
    () => {

        applyLanguage(
            currentLanguage === "ar"
                ? "en"
                : "ar"
        );

    }
);



/* =========================================================
   THEME
========================================================= */

let savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    ) || "dark";


function applyTheme(theme) {

    const isLight =
        theme === "light";


    body.classList.toggle(
        "light-theme",
        isLight
    );


    if (themeToggle) {

        themeToggle.textContent =
            isLight
                ? "☾"
                : "☼";

    }


    localStorage.setItem(
        "portfolio-theme",
        theme
    );

}


themeToggle?.addEventListener(
    "click",
    () => {

        applyTheme(
            body.classList.contains(
                "light-theme"
            )
                ? "dark"
                : "light"
        );

    }
);



/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {

    mobileMenu?.classList.remove(
        "open"
    );

    menuButton?.setAttribute(
        "aria-expanded",
        "false"
    );

    body.classList.remove(
        "menu-locked"
    );

}


menuButton?.addEventListener(
    "click",
    () => {

        const opened =
            mobileMenu?.classList.toggle(
                "open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            String(Boolean(opened))
        );


        /*
          لا نقفل scroll الصفحة هنا.
          ده مهم جدًا للموبايل.
        */

    }
);


document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });



/* =========================================================
   NAVIGATION
   Smooth فقط عند الضغط على link.
   Wheel / touch يظل Native.
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const href =
                    link.getAttribute("href");

                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".site-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const top =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    8;


                window.scrollTo({
                    top,
                    behavior: "smooth"
                });

            }
        );

    });



/* =========================================================
   FAST REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            (entries, instance) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        instance.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.02,

                rootMargin:
                    "0px 0px 20px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}



/* =========================================================
   PROJECT MODAL
========================================================= */

function openProject(url) {

    if (
        !projectModal ||
        !projectFrame
    ) {
        return;
    }


    projectFrame.src =
        url;


    projectModal.classList.add(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
      نمنع background فقط داخل الـ modal.
    */

    body.classList.add(
        "menu-locked"
    );

}


function closeProject() {

    if (
        !projectModal ||
        !projectFrame
    ) {
        return;
    }


    projectModal.classList.remove(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    projectFrame.src =
        "about:blank";


    body.classList.remove(
        "menu-locked"
    );

}


document
    .querySelectorAll(
        "[data-project]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const url =
                    button.dataset.project;


                if (url) {

                    openProject(
                        url
                    );

                }

            }
        );

    });


document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeProject
        );

    });



/* =========================================================
   VIDEO PERFORMANCE
========================================================= */

const videos =
    document.querySelectorAll(
        "video"
    );


/*
   أول فيديو أهم واحد:
   نخليه يتحمل تحميله مبكرًا.
*/

const featuredVideo =
    document.querySelector(
        ".video-featured video"
    );


if (featuredVideo) {

    featuredVideo.preload =
        "auto";

}


/*
   متشغلش أكتر من فيديو
   في نفس الوقت.
*/

videos.forEach(
    (video) => {

        video.addEventListener(
            "play",
            () => {

                videos.forEach(
                    (otherVideo) => {

                        if (
                            otherVideo !==
                            video
                        ) {

                            otherVideo.pause();

                        }

                    }
                );

            }
        );

    }
);



/* =========================================================
   VIDEO LOAD PRIORITY
   يجهز metadata للفيديو القريب من الشاشة.
========================================================= */

if (
    "IntersectionObserver"
    in window
) {

    const videoObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const video =
                            entry.target;


                        /*
                          أول ما يبقى قريب من
                          الشاشة، نزود preload.
                        */

                        if (
                            video !==
                            featuredVideo
                        ) {

                            video.preload =
                                "metadata";

                        }


                        observer.unobserve(
                            video
                        );

                    }
                );

            },
            {
                rootMargin:
                    "500px 0px"
            }
        );


    videos.forEach(
        (video) => {

            videoObserver.observe(
                video
            );

        }
    );

}



/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeProject();
            closeMobileMenu();

        }

    }
);



/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



/* =========================================================
   INITIALIZE
========================================================= */

applyLanguage(
    currentLanguage
);

applyTheme(
    savedTheme
);