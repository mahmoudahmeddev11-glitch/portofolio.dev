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

const postsView =
    document.getElementById(
        "postsView"
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


function applyTheme(
    theme
) {

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
   NAVIGATION
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

        }
    );



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
    .forEach(
        (button) => {

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

        }
    );



/* =========================================================
   DESIGN SELECTOR
========================================================= */

document
    .querySelectorAll(
        ".design-option"
    )
    .forEach(
        (design) => {

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
                                    item === design
                                );

                            }
                        );


                    updateConfiguratorText();

                }
            );

        }
    );



/* =========================================================
   POSTS GALLERY
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

const postsDots =
    [
        ...document.querySelectorAll(
            ".posts-dot"
        )
    ];


const postImages = [

    "./Picture1.png",
    "./Picture2.png",
    "./Picture3.png",
    "./Picture4.png",
    "./Picture5.png"

];


let currentPost =
    0;

let isPostAnimating =
    false;


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


function changePost(
    newIndex,
    direction = "next",
    animate = true
) {

    if (
        !postsImage
    ) {
        return;
    }


    if (
        newIndex < 0
    ) {

        newIndex =
            postImages.length - 1;

    }


    if (
        newIndex >=
        postImages.length
    ) {

        newIndex =
            0;

    }


    if (
        newIndex === currentPost &&
        animate
    ) {
        return;
    }


    if (
        !animate
    ) {

        currentPost =
            newIndex;

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
        isPostAnimating
    ) {
        return;
    }


    isPostAnimating =
        true;


    const outgoingClass =
        direction === "next"
            ? "slide-next"
            : "slide-prev";


    postsImage.classList.add(
        outgoingClass
    );


    window.setTimeout(
        () => {

            currentPost =
                newIndex;


            postsImage.src =
                postImages[currentPost];


            postsImage.classList.remove(
                outgoingClass
            );


            updatePostsUI();


            window.setTimeout(
                () => {

                    isPostAnimating =
                        false;

                },
                180
            );

        },
        100
    );

}


function showNextPost() {

    changePost(
        currentPost + 1,
        "next"
    );

}


function showPreviousPost() {

    changePost(
        currentPost - 1,
        "prev"
    );

}


postsNext?.addEventListener(
    "click",
    showNextPost
);


postsPrev?.addEventListener(
    "click",
    showPreviousPost
);


postsDots.forEach(
    (dot) => {

        dot.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        dot.dataset.post
                    );


                if (
                    index === currentPost
                ) {
                    return;
                }


                const direction =
                    index > currentPost
                        ? "next"
                        : "prev";


                changePost(
                    index,
                    direction
                );

            }
        );

    }
);



/* =========================================================
   TOUCH SWIPE FOR POSTS
========================================================= */

const postsGallery =
    document.getElementById(
        "postsGallery"
    );


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

            showNextPost();

        } else {

            showPreviousPost();

        }

    },
    {
        passive: true
    }
);



/* =========================================================
   PRELOAD GALLERY IMAGES
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
        400
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
    .forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const url =
                        button.dataset.project;


                    if (
                        url
                    ) {

                        openProject(
                            url
                        );

                    }

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