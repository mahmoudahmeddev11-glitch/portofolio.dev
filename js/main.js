"use strict";


/* =========================================================
   ELEMENTS
========================================================= */

const body =
    document.body;

const languageToggle =
    document.getElementById("languageToggle");

const themeToggle =
    document.getElementById("themeToggle");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const currentYear =
    document.getElementById("currentYear");


const projectModal =
    document.getElementById("projectModal");

const projectFrame =
    document.getElementById("projectFrame");

const modalLoading =
    document.getElementById("modalLoading");

const modalExternalLink =
    document.getElementById("modalExternalLink");


const imageModal =
    document.getElementById("imageModal");

const imageModalPreview =
    document.getElementById("imageModalPreview");


const selectedPackage =
    document.getElementById("selectedPackage");

const selectedDesign =
    document.getElementById("selectedDesign");



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


    if (languageToggle) {

        languageToggle.textContent =
            language === "ar"
                ? "EN"
                : "AR";

    }


    /*
      Update selected design/package
      text in the current language.
    */

    updateConfiguratorText();


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
   Smooth ONLY for clicked anchor links.
   Native touch/wheel scrolling remains untouched.
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
   WEBSITE PACKAGE SELECTOR
========================================================= */

let chosenPackage =
    "business";

let chosenDesign =
    "Rouh Lil Rouh";


function updateConfiguratorText() {

    if (!selectedPackage || !selectedDesign) {
        return;
    }


    const packageCard =
        document.querySelector(
            `[data-package="${chosenPackage}"]`
        );


    const designCard =
        document.querySelector(
            `[data-design="${chosenDesign}"]`
        );


    if (packageCard) {

        selectedPackage.textContent =
            currentLanguage === "ar"
                ? packageCard.dataset.packageAr
                : packageCard.dataset.packageEn;

    }


    if (designCard) {

        selectedDesign.textContent =
            currentLanguage === "ar"
                ? designCard.dataset.designAr
                : designCard.dataset.designEn;

    }

}


document
    .querySelectorAll(
        "[data-package-select]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                chosenPackage =
                    button.dataset.packageSelect;


                document
                    .querySelectorAll(
                        ".website-package"
                    )
                    .forEach(
                        (card) => {

                            card.classList.toggle(
                                "selected",
                                card.dataset.package ===
                                    chosenPackage
                            );

                        }
                    );


                updateConfiguratorText();


                /*
                  Move the summary into view
                  without changing global scroll behavior.
                */

                const summary =
                    document.querySelector(
                        ".website-summary"
                    );


                summary?.scrollIntoView({
                    behavior:
                        "smooth",
                    block:
                        "nearest"
                });

            }
        );

    });



/* =========================================================
   DESIGN SELECTOR
========================================================= */

document
    .querySelectorAll(
        ".design-option"
    )
    .forEach((design) => {

        design.addEventListener(
            "click",
            () => {

                chosenDesign =
                    design.dataset.design;


                document
                    .querySelectorAll(
                        ".design-option"
                    )
                    .forEach(
                        (item) => {

                            item.classList.toggle(
                                "active",
                                item ===
                                    design
                            );

                        }
                    );


                updateConfiguratorText();

            }
        );

    });



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


    if (
        modalExternalLink
    ) {

        modalExternalLink.href =
            url;

    }


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
   CLOSE PROJECT
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
        "[data-close-project]"
    )
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeProject
        );

    });



/* =========================================================
   INSTAGRAM IMAGE MODAL
========================================================= */

document
    .querySelectorAll(
        ".instagram-post[data-image]"
    )
    .forEach((post) => {

        post.addEventListener(
            "click",
            () => {

                const image =
                    post.dataset.image;


                if (
                    !imageModal ||
                    !imageModalPreview
                ) {
                    return;
                }


                imageModalPreview.src =
                    image;


                imageModal.classList.add(
                    "open"
                );


                imageModal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                body.classList.add(
                    "modal-open"
                );

            }
        );

    });



/* =========================================================
   CLOSE IMAGE MODAL
========================================================= */

function closeImageModal() {

    if (!imageModal) {
        return;
    }


    imageModal.classList.remove(
        "open"
    );


    imageModal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (imageModalPreview) {

        imageModalPreview.src =
            "";

    }


    body.classList.remove(
        "modal-open"
    );

}


document
    .querySelectorAll(
        "[data-close-image]"
    )
    .forEach((element) => {

        element.addEventListener(
            "click",
            closeImageModal
        );

    });



/* =========================================================
   VIDEO PERFORMANCE
========================================================= */

const videos =
    [
        ...document.querySelectorAll(
            ".portfolio-video"
        )
    ];


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
   EARLY VIDEO PREPARATION
========================================================= */

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


                        if (
                            video.preload !==
                            "auto"
                        ) {

                            video.preload =
                                "auto";


                            /*
                              Start preparing
                              before user presses play.
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
                    "1000px 0px"
            }
        );


    videos.forEach(
        (video) => {

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
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !==
            "Escape"
        ) {
            return;
        }


        closeProject();
        closeImageModal();
        closeMobileMenu();

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
    currentTheme
);


updateConfiguratorText();