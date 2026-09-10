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

const currentYear =
    document.getElementById(
        "currentYear"
    );


/* Project modal */

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


/* Image modal */

const imageModal =
    document.getElementById(
        "imageModal"
    );

const imageModalPreview =
    document.getElementById(
        "imageModalPreview"
    );


/* Website selector */

const selectedPackage =
    document.getElementById(
        "selectedPackage"
    );

const selectedDesign =
    document.getElementById(
        "selectedDesign"
    );


/* Instagram slider */

const instagramImage =
    document.getElementById(
        "instagramSlideImage"
    );

const instagramPrev =
    document.getElementById(
        "instagramPrev"
    );

const instagramNext =
    document.getElementById(
        "instagramNext"
    );

const instagramCounter =
    document.getElementById(
        "instagramCounter"
    );

const instagramCaption =
    document.getElementById(
        "instagramCaption"
    );

const instagramDots =
    document.querySelectorAll(
        ".slider-dot"
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

        const opened =
            mobileMenu?.classList.toggle(
                "open"
            );


        menuButton.setAttribute(
            "aria-expanded",
            String(
                Boolean(opened)
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
   REVEAL
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
            (
                entries,
                observerInstance
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


                        observerInstance.unobserve(
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
   WEBSITE PACKAGE SELECTOR
========================================================= */

let chosenPackage =
    "business";

let chosenDesign =
    "Rouh Lil Rouh";


function updateConfiguratorText() {

    if (
        !selectedPackage ||
        !selectedDesign
    ) {
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


    if (
        packageCard
    ) {

        selectedPackage.textContent =
            currentLanguage === "ar"
                ? packageCard.dataset.packageAr
                : packageCard.dataset.packageEn;

    }


    if (
        designCard
    ) {

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
   INSTAGRAM SLIDER
========================================================= */

const instagramImages = [

    "./Picture1.png",
    "./Picture2.png",
    "./Picture3.png",
    "./Picture4.png",
    "./Picture5.png"

];


let currentSlide =
    0;

let slideDirection =
    "next";

let slideTimer =
    null;

let isSliding =
    false;


function updateInstagramSlider(
    index,
    animate = true
) {

    if (
        !instagramImage
    ) {
        return;
    }


    if (
        index < 0
    ) {

        index =
            instagramImages.length - 1;

    }


    if (
        index >=
        instagramImages.length
    ) {

        index =
            0;

    }


    const oldIndex =
        currentSlide;


    currentSlide =
        index;


    const updateText =
        () => {

            if (
                instagramCounter
            ) {

                instagramCounter.textContent =
                    `${currentSlide + 1} / ${instagramImages.length}`;

            }


            if (
                instagramCaption
            ) {

                const number =
                    String(
                        currentSlide + 1
                    ).padStart(
                        2,
                        "0"
                    );


                instagramCaption.textContent =
                    `Post ${number}`;

            }


            instagramDots.forEach(
                (dot, dotIndex) => {

                    dot.classList.toggle(
                        "active",
                        dotIndex === currentSlide
                    );

                }
            );

        };


    /*
      First image = no animation.
    */

    if (
        !animate ||
        oldIndex === currentSlide
    ) {

        instagramImage.src =
            instagramImages[currentSlide];

        instagramImage.classList.remove(
            "slide-out-left",
            "slide-out-right"
        );

        updateText();

        return;

    }


    const outgoingClass =
        slideDirection === "next"
            ? "slide-out-left"
            : "slide-out-right";


    isSliding =
        true;


    instagramImage.classList.add(
        outgoingClass
    );


    window.setTimeout(
        () => {

            instagramImage.src =
                instagramImages[currentSlide];


            instagramImage.classList.remove(
                outgoingClass
            );


            updateText();


            window.setTimeout(
                () => {

                    isSliding =
                        false;

                },
                220
            );

        },
        120
    );

}


function nextInstagramSlide() {

    if (
        isSliding
    ) {
        return;
    }


    slideDirection =
        "next";


    updateInstagramSlider(
        currentSlide + 1
    );

}


function prevInstagramSlide() {

    if (
        isSliding
    ) {
        return;
    }


    slideDirection =
        "prev";


    updateInstagramSlider(
        currentSlide - 1
    );

}


instagramNext?.addEventListener(
    "click",
    nextInstagramSlide
);


instagramPrev?.addEventListener(
    "click",
    prevInstagramSlide
);


instagramDots.forEach(
    (dot) => {

        dot.addEventListener(
            "click",
            () => {

                if (
                    isSliding
                ) {
                    return;
                }


                const target =
                    Number(
                        dot.dataset.slide
                    );


                slideDirection =
                    target > currentSlide
                        ? "next"
                        : "prev";


                updateInstagramSlider(
                    target
                );

            }
        );

    }
);


/*
   Swipe on mobile.
*/

let touchStartX =
    0;

let touchEndX =
    0;


const instagramSlider =
    document.getElementById(
        "instagramSlider"
    );


instagramSlider?.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


instagramSlider?.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event.changedTouches[0].screenX;


        const distance =
            touchEndX -
            touchStartX;


        if (
            Math.abs(distance) < 45
        ) {
            return;
        }


        if (
            distance < 0
        ) {

            nextInstagramSlide();

        } else {

            prevInstagramSlide();

        }

    },
    {
        passive: true
    }
);


/*
   Preload all five images after the
   first one is visible.
*/

function preloadInstagramImages() {

    instagramImages
        .slice(1)
        .forEach(
            (src) => {

                const image =
                    new Image();

                image.src =
                    src;

            }
        );

}


if (
    "requestIdleCallback"
    in window
) {

    window.requestIdleCallback(
        preloadInstagramImages,
        {
            timeout:
                1200
        }
    );

} else {

    window.setTimeout(
        preloadInstagramImages,
        500
    );

}


updateInstagramSlider(
    0,
    false
);



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

    if (
        !projectModal
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


            if (
                projectFrame
            ) {

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
   IMAGE MODAL
========================================================= */

function openImage(
    src
) {

    if (
        !imageModal ||
        !imageModalPreview
    ) {
        return;
    }


    imageModalPreview.src =
        src;


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


function closeImageModal() {

    if (
        !imageModal
    ) {
        return;
    }


    imageModal.classList.remove(
        "open"
    );


    imageModal.setAttribute(
        "aria-hidden",
        "true"
    );


    if (
        imageModalPreview
    ) {

        imageModalPreview.src =
            "";

    }


    body.classList.remove(
        "modal-open"
    );

}


instagramImage?.addEventListener(
    "dblclick",
    () => {

        openImage(
            instagramImages[currentSlide]
        );

    }
);


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
   VIDEOS
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

updateConfiguratorText();