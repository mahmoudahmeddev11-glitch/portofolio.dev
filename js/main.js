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



/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem(
        "portfolio-language"
    ) || "ar";


function applyLanguage(
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


    document
        .querySelectorAll(
            "[data-ar][data-en]"
        )
        .forEach(
            (element) => {

                const text =
                    language === "ar"
                        ? element.dataset.ar
                        : element.dataset.en;


                if (
                    text !== undefined
                ) {

                    element.textContent =
                        text;

                }

            }
        );


    if (
        languageToggle
    ) {

        languageToggle.textContent =
            language === "ar"
                ? "EN"
                : "AR";

    }


    updateWebsiteSummary();


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


function applyTheme(
    theme
) {

    currentTheme =
        theme;


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


        menuButton?.setAttribute(
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
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );



/* =========================================================
   NO JAVASCRIPT SCROLLING
   Native anchor scrolling is handled by CSS.
========================================================= */



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver" in window
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
                    "0px 0px 25px 0px"
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
   WEBSITE CONFIGURATOR
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

const postsGallery =
    document.getElementById(
        "postsGallery"
    );

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

const postsView =
    document.getElementById(
        "postsView"
    );

const postsCounter =
    document.getElementById(
        "postsCounter"
    );

const postsDots =
    [
        ...document.querySelectorAll(
            ".posts-dot"
        )
    ];


/*
   Exact image order.
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
   UI
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
    direction = "next",
    animate = true
) {

    if (
        !postsImage
    ) {
        return;
    }


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


    if (
        targetIndex === currentPost &&
        animate
    ) {
        return;
    }


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


            postsImage.src =
                postImages[currentPost];


            postsImage.classList.remove(
                animationClass
            );


            updatePostsUI();


            window.setTimeout(
                () => {

                    sliderBusy =
                        false;

                },
                80
            );

        },
        80
    );

}



/* ---------------------------------------------------------
   Next / Previous
--------------------------------------------------------- */

function nextPost() {

    changePost(
        currentPost + 1,
        "next"
    );

}


function previousPost() {

    changePost(
        currentPost - 1,
        "prev"
    );

}


postsNext?.addEventListener(
    "click",
    nextPost
);


postsPrev?.addEventListener(
    "click",
    previousPost
);



/* ---------------------------------------------------------
   Dots
--------------------------------------------------------- */

postsDots.forEach(
    (dot) => {

        dot.addEventListener(
            "click",
            () => {

                const target =
                    Number(
                        dot.dataset.post
                    );


                if (
                    target === currentPost
                ) {
                    return;
                }


                changePost(
                    target,
                    target > currentPost
                        ? "next"
                        : "prev"
                );

            }
        );

    }
);



/* =========================================================
   TOUCH / SWIPE
========================================================= */

let touchStartX =
    0;

let touchStartY =
    0;


postsGallery?.addEventListener(
    "touchstart",
    (event) => {

        const touch =
            event.changedTouches[0];


        touchStartX =
            touch.clientX;

        touchStartY =
            touch.clientY;

    },
    {
        passive: true
    }
);


postsGallery?.addEventListener(
    "touchend",
    (event) => {

        const touch =
            event.changedTouches[0];


        const deltaX =
            touch.clientX -
            touchStartX;


        const deltaY =
            touch.clientY -
            touchStartY;


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
   PRELOAD POSTS
========================================================= */

function preloadPosts() {

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
        preloadPosts,
        {
            timeout:
                1000
        }
    );

} else {

    window.setTimeout(
        preloadPosts,
        300
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
   VIDEO CONTROL
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

updateWebsiteSummary();