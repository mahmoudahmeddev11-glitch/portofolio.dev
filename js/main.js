"use strict";


/* =========================================================
   BASIC ELEMENTS
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



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem(
        "portfolio-language"
    ) || "ar";


function setLanguage(
    language
) {

    currentLanguage =
        language;


    document.documentElement.lang =
        language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


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

        setLanguage(
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


function setTheme(
    theme
) {

    currentTheme =
        theme;


    const isLight =
        theme === "light";


    body.classList.toggle(
        "light-theme",
        isLight
    );


    if (
        themeToggle
    ) {

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

        setTheme(
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

function closeMenu() {

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

        const open =
            mobileMenu?.classList.toggle(
                "open"
            );


        menuButton?.setAttribute(
            "aria-expanded",
            String(
                Boolean(open)
            )
        );

    }
);


document
    .querySelectorAll(
        ".mobile-menu a"
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        }
    );



/* =========================================================
   INTERNAL NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (link) => {

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


                    if (
                        !target
                    ) {
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


                    const top =
                        target.getBoundingClientRect().top
                        +
                        window.scrollY
                        -
                        offset
                        -
                        8;


                    window.scrollTo({
                        top,
                        behavior:
                            "smooth"
                    });

                }
            );

        }
    );



/* =========================================================
   REVEAL ANIMATION
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
                    "0px 0px 20px 0px"
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

let selectedWebsitePackage =
    "business";

let selectedWebsiteDesign =
    "Rouh Lil Rouh";


const selectedPackageElement =
    document.getElementById(
        "selectedPackage"
    );

const selectedDesignElement =
    document.getElementById(
        "selectedDesign"
    );


function updateWebsiteSummary() {

    const packageCard =
        document.querySelector(
            `[data-package="${selectedWebsitePackage}"]`
        );


    const designCard =
        document.querySelector(
            `[data-design="${selectedWebsiteDesign}"]`
        );


    if (
        packageCard &&
        selectedPackageElement
    ) {

        selectedPackageElement.textContent =
            currentLanguage === "ar"
                ? packageCard.dataset.packageAr
                : packageCard.dataset.packageEn;

    }


    if (
        designCard &&
        selectedDesignElement
    ) {

        selectedDesignElement.textContent =
            currentLanguage === "ar"
                ? designCard.dataset.designAr
                : designCard.dataset.designEn;

    }

}


document
    .querySelectorAll(
        "[data-package-select]"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    selectedWebsitePackage =
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
                                        selectedWebsitePackage
                                );

                            }
                        );


                    updateWebsiteSummary();

                }
            );

        }
    );


document
    .querySelectorAll(
        ".design-option"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    selectedWebsiteDesign =
                        button.dataset.design;


                    document
                        .querySelectorAll(
                            ".design-option"
                        )
                        .forEach(
                            (item) => {

                                item.classList.toggle(
                                    "active",
                                    item === button
                                );

                            }
                        );


                    updateWebsiteSummary();

                }
            );

        }
    );



/* =========================================================
   POSTS SLIDER
========================================================= */

const postsImage =
    document.getElementById(
        "postsImage"
    );

const postsPrev =
    document.getElementById(
        "postsPrev"
    );

const postsNext =
    document.getElementById(
        "postsNext"
    );

const postsCounter =
    document.getElementById(
        "postsCounter"
    );

const postsView =
    document.getElementById(
        "postsView"
    );

const postsGallery =
    document.getElementById(
        "postsGallery"
    );

const postsDots =
    [
        ...document.querySelectorAll(
            ".posts-dot"
        )
    ];


/*
   The exact files requested by the user.
*/

const postImages = [
    "./Picture1.png",
    "./Picture2.png",
    "./Picture3.png",
    "./Picture4.png",
    "./Picture5.png"
];


let currentPost =
    0;

let sliderBusy =
    false;



/* ---------------------------------------------------------
   Update counter and dots
--------------------------------------------------------- */

function updatePostsUI() {

    if (
        postsCounter
    ) {

        const number =
            String(
                currentPost + 1
            ).padStart(
                2,
                "0"
            );


        postsCounter.textContent =
            `${number} / 05`;

    }


    postsDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentPost
            );

        }
    );

}



/* ---------------------------------------------------------
   Change image
--------------------------------------------------------- */

function changePost(
    targetIndex,
    direction,
    animate = true
) {

    if (
        !postsImage
    ) {
        return;
    }


    /*
       Keep the index inside
       the valid range.
    */

    if (
        targetIndex < 0
    ) {

        targetIndex =
            postImages.length - 1;

    }


    if (
        targetIndex >=
        postImages.length
    ) {

        targetIndex =
            0;

    }


    /*
       Nothing to do.
    */

    if (
        targetIndex === currentPost &&
        animate
    ) {
        return;
    }


    /*
       First load.
    */

    if (
        !animate
    ) {

        currentPost =
            targetIndex;


        postsImage.src =
            postImages[currentPost];


        postsImage.classList.remove(
            "slide-next",
            "slide-prev"
        );


        updatePostsUI();

        return;

    }


    /*
       Prevent double click / double touch
       while the tiny transition is running.
    */

    if (
        sliderBusy
    ) {
        return;
    }


    sliderBusy =
        true;


    const animationClass =
        direction === "prev"
            ? "slide-prev"
            : "slide-next";


    postsImage.classList.add(
        animationClass
    );


    window.setTimeout(
        () => {

            currentPost =
                targetIndex;


            postsImage.onload =
                () => {

                    postsImage.classList.remove(
                        animationClass
                    );

                    updatePostsUI();

                };


            postsImage.onerror =
                () => {

                    postsImage.classList.remove(
                        animationClass
                    );

                    updatePostsUI();

                };


            postsImage.src =
                postImages[currentPost];


            /*
               Fallback in case the browser
               already has the image cached.
            */

            window.setTimeout(
                () => {

                    postsImage.classList.remove(
                        animationClass
                    );

                    updatePostsUI();

                },
                180
            );


        },
        90
    );


    window.setTimeout(
        () => {

            sliderBusy =
                false;

        },
        220
    );

}



/* ---------------------------------------------------------
   Next / previous
--------------------------------------------------------- */

function nextPost() {

    changePost(
        currentPost + 1,
        "next",
        true
    );

}


function previousPost() {

    changePost(
        currentPost - 1,
        "prev",
        true
    );

}



/* ---------------------------------------------------------
   Arrow events
--------------------------------------------------------- */

postsNext?.addEventListener(
    "click",
    (event) => {

        event.preventDefault();
        event.stopPropagation();

        nextPost();

    }
);


postsPrev?.addEventListener(
    "click",
    (event) => {

        event.preventDefault();
        event.stopPropagation();

        previousPost();

    }
);



/* ---------------------------------------------------------
   Dot events
--------------------------------------------------------- */

postsDots.forEach(
    (dot) => {

        dot.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();


                const target =
                    Number(
                        dot.dataset.post
                    );


                if (
                    target === currentPost
                ) {
                    return;
                }


                const direction =
                    target >
                    currentPost
                        ? "next"
                        : "prev";


                changePost(
                    target,
                    direction,
                    true
                );

            }
        );

    }
);



/* =========================================================
   MOBILE SWIPE
========================================================= */

let touchStartX =
    0;

let touchStartY =
    0;

let touchStarted =
    false;


postsGallery?.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.changedTouches[0];


        touchStartX =
            touch.clientX;

        touchStartY =
            touch.clientY;

        touchStarted =
            true;

    },
    {
        passive: true
    }
);


postsGallery?.addEventListener(
    "touchend",
    (event) => {

        if (
            !touchStarted
        ) {
            return;
        }


        touchStarted =
            false;


        const touch =
            event.changedTouches[0];


        const deltaX =
            touch.clientX -
            touchStartX;


        const deltaY =
            touch.clientY -
            touchStartY;


        /*
           Ignore normal vertical scrolling.
        */

        if (
            Math.abs(deltaX) < 45 ||
            Math.abs(deltaX) <=
                Math.abs(deltaY)
        ) {
            return;
        }


        if (
            deltaX < 0
        ) {

            nextPost();

        } else {

            previousPost();

        }

    },
    {
        passive: true
    }
);



/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        /*
           Only operate the slider when
           it is visible in the viewport.
        */

        if (
            !postsGallery
        ) {
            return;
        }


        const rect =
            postsGallery.getBoundingClientRect();


        const visible =
            rect.top <
                window.innerHeight &&
            rect.bottom >
                0;


        if (
            !visible
        ) {
            return;
        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPost();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPost();

        }

    }
);



/* =========================================================
   PRELOAD IMAGES
========================================================= */

function preloadPostImages() {

    postImages
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
        preloadPostImages,
        {
            timeout:
                1000
        }
    );

} else {

    window.setTimeout(
        preloadPostImages,
        350
    );

}


changePost(
    0,
    "next",
    false
);



/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const imageModal =
    document.getElementById(
        "imageModal"
    );

const imageModalPreview =
    document.getElementById(
        "imageModalPreview"
    );


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


postsView?.addEventListener(
    "click",
    () => {

        openImage(
            postImages[currentPost]
        );

    }
);


document
    .querySelectorAll(
        "[data-close-image]"
    )
    .forEach(
        (element) => {

            element.addEventListener(
                "click",
                closeImageModal
            );

        }
    );



/* =========================================================
   PROJECT MODAL
========================================================= */

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


function openProject(
    url
) {

    if (
        !projectModal ||
        !projectFrame
    ) {
        return;
    }


    modalLoading?.classList.remove(
        "hidden"
    );


    projectFrame.src =
        "about:blank";


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


    window.setTimeout(
        () => {

            projectFrame.src =
                url;

        },
        20
    );

}


document
    .querySelectorAll(
        "[data-project]"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    openProject(
                        button.dataset.project
                    );

                }
            );

        }
    );


projectFrame?.addEventListener(
    "load",
    () => {

        modalLoading?.classList.add(
            "hidden"
        );

    }
);



/* ---------------------------------------------------------
   Close project modal
--------------------------------------------------------- */

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
                projectFrame
            ) {

                projectFrame.src =
                    "about:blank";

            }

        },
        180
    );

}


document
    .querySelectorAll(
        "[data-close-project]"
    )
    .forEach(
        (element) => {

            element.addEventListener(
                "click",
                closeProject
            );

        }
    );



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
   ESCAPE
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


        closeImageModal();
        closeProject();
        closeMenu();

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

setLanguage(
    currentLanguage
);

setTheme(
    currentTheme
);

updateWebsiteSummary();