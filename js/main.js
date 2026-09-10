"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const body =
    document.body;

const languageToggle =
    document.getElementById(
        "languageToggle"
    );

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const projectModal =
    document.getElementById(
        "projectModal"
    );

const projectFrame =
    document.getElementById(
        "projectFrame"
    );

const modalLoading =
    document.getElementById(
        "modalLoading"
    );

const modalExternalLink =
    document.getElementById(
        "modalExternalLink"
    );

const currentYear =
    document.getElementById(
        "currentYear"
    );



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem(
        "portfolio-language"
    ) || "ar";


function applyLanguage(language) {

    currentLanguage =
        language;


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

            const value =
                language === "ar"
                    ? element.dataset.ar
                    : element.dataset.en;


            if (
                value !== undefined
            ) {
                element.textContent =
                    value;
            }

        });


    if (
        languageToggle
    ) {

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

let currentTheme =
    localStorage.getItem(
        "portfolio-theme"
    ) || "dark";


function applyTheme(theme) {

    const light =
        theme === "light";


    body.classList.toggle(
        "light-theme",
        light
    );


    if (
        themeToggle
    ) {

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

}


menuButton?.addEventListener(
    "click",
    () => {

        const isOpen =
            mobileMenu?.classList.toggle(
                "open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            String(
                Boolean(isOpen)
            )
        );

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
   Only anchor clicks use smooth behavior.
   Wheel/touch scrolling stays native.
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
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        href
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".site-header"
                    );


                const offset =
                    header
                        ? header.offsetHeight
                        : 0;


                const position =
                    target
                        .getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    offset
                    -
                    8;


                window.scrollTo({
                    top:
                        position,

                    behavior:
                        "smooth"
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

    const revealObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {

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


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold:
                    0.02,

                rootMargin:
                    "0px 0px 30px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
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
        "about:blank";


    modalLoading?.classList.remove(
        "hidden"
    );


    modalExternalLink.href =
        url;


    projectModal.classList.add(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    body.classList.add(
        "modal-open"
    );


    /*
       Start loading immediately.
    */

    requestAnimationFrame(
        () => {

            projectFrame.src =
                url;

        }
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


projectFrame?.addEventListener(
    "load",
    () => {

        modalLoading?.classList.add(
            "hidden"
        );

    }
);



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProject() {

    if (!projectModal) {
        return;
    }


    projectModal.classList.remove(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    body.classList.remove(
        "modal-open"
    );


    /*
       Free the external page
       when modal is closed.
    */

    window.setTimeout(
        () => {

            if (
                projectModal.classList.contains(
                    "open"
                )
            ) {
                return;
            }


            if (projectFrame) {

                projectFrame.src =
                    "about:blank";

            }

        },
        200
    );

}


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
   ESCAPE
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
   VIDEO PERFORMANCE
========================================================= */

const videos =
    [
        ...document.querySelectorAll(
            ".portfolio-video"
        )
    ];


/*
   Never play more than one video
   at the same time.
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


/*
   Prepare videos BEFORE they are
   actually reached.
*/

if (
    "IntersectionObserver"
    in window
) {

    const videoObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {

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
                           Start loading the
                           actual video early.
                        */

                        if (
                            video
                            .preload !==
                            "auto"
                        ) {

                            video.preload =
                                "auto";

                            /*
                               load() makes the
                               browser reconsider
                               the newly-set source
                               immediately.
                            */

                            video.load();

                        }


                        observer.unobserve(
                            video
                        );

                    }
                );

            },
            {
                rootMargin:
                    "1200px 0px"
            }
        );


    videos.forEach(
        (video) => {

            /*
              First video is already
              preload=auto in HTML.
            */

            if (
                video !==
                videos[0]
            ) {

                videoObserver.observe(
                    video
                );

            }

        }
    );

}



/* =========================================================
   CURRENT YEAR
========================================================= */

if (
    currentYear
) {

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
    currentTheme
);