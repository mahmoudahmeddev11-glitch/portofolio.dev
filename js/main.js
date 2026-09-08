"use strict";

/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;

const header =
    document.getElementById("header");

const nav =
    document.querySelector(".desktop-nav");

const menuBtn =
    document.getElementById("menuBtn");

const languageBtn =
    document.getElementById("languageBtn");

const themeBtn =
    document.getElementById("themeBtn");

const cursorGlow =
    document.querySelector(".cursor-glow");

const yearElement =
    document.getElementById("year");

const revealElements =
    document.querySelectorAll(".reveal");


/* =========================================================
   YEAR
========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   THEME
========================================================= */

let currentTheme =
    localStorage.getItem("siteTheme") || "dark";


function updateTheme() {

    const isLight =
        currentTheme === "light";

    body.classList.toggle(
        "light",
        isLight
    );

    themeBtn.textContent =
        isLight ? "☾" : "☼";

    localStorage.setItem(
        "siteTheme",
        currentTheme
    );

}


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            currentTheme =
                currentTheme === "dark"
                    ? "light"
                    : "dark";

            updateTheme();

        }
    );

}


updateTheme();


/* =========================================================
   LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("siteLanguage") || "ar";


function updateLanguage() {

    const isEnglish =
        currentLanguage === "en";


    document.documentElement.lang =
        isEnglish ? "en" : "ar";


    document.documentElement.dir =
        isEnglish ? "ltr" : "rtl";


    body.classList.toggle(
        "lang-en",
        isEnglish
    );


    document
        .querySelectorAll(
            "[data-ar][data-en]"
        )
        .forEach((element) => {

            const text =
                isEnglish
                    ? element.dataset.en
                    : element.dataset.ar;


            if (text) {

                element.textContent =
                    text;

            }

        });


    languageBtn.textContent =
        isEnglish ? "AR" : "EN";


    localStorage.setItem(
        "siteLanguage",
        currentLanguage
    );

}


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


updateLanguage();


/* =========================================================
   MOBILE NAV
========================================================= */

if (menuBtn && nav) {

    menuBtn.addEventListener(
        "click",
        () => {

            const opened =
                nav.classList.toggle("open");

            menuBtn.setAttribute(
                "aria-expanded",
                String(opened)
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   HEADER SCROLL
========================================================= */

function updateHeader() {

    if (!header) {
        return;
    }


    header.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================================
   SCROLL REVEAL
========================================================= */

if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target
                            .classList
                            .add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
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
   3D TILT
========================================================= */

const tiltCards =
    document.querySelectorAll(
        ".service-card, .project-card, .video-card"
    );


const hasFinePointer =
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;


if (hasFinePointer) {

    tiltCards.forEach(
        (card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateY =
                        ((x - centerX) /
                            centerX) *
                        3;


                    const rotateX =
                        ((centerY - y) /
                            centerY) *
                        3;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-6px)
                        scale(1.005)
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

        }
    );

}


/* =========================================================
   CURSOR GLOW
========================================================= */

if (
    cursorGlow &&
    hasFinePointer
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            cursorGlow.style.left =
                `${event.clientX}px`;

            cursorGlow.style.top =
                `${event.clientY}px`;

        },
        {
            passive: true
        }
    );

}


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

const projectModalTitle =
    document.getElementById(
        "projectModalTitle"
    );


function openProjectModal(
    url,
    title
) {

    if (!projectModal || !projectFrame) {
        return;
    }


    projectModalTitle.textContent =
        title || "Project";


    projectFrame.src =
        url;


    projectModal.classList.add(
        "open"
    );


    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


function closeProjectModal() {

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


    projectFrame.src =
        "about:blank";


    document.body.style.overflow =
        "";
}


document
    .querySelectorAll(
        ".preview-btn"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                openProjectModal(
                    button.dataset.projectUrl,
                    button.dataset.projectTitle
                );

            }
        );

    });


/* =========================================================
   FACEBOOK VIDEO MODAL
========================================================= */

const videoModal =
    document.getElementById(
        "videoModal"
    );

const videoFrame =
    document.getElementById(
        "videoFrame"
    );

const videoModalTitle =
    document.getElementById(
        "videoModalTitle"
    );

const videoEmbedMessage =
    document.getElementById(
        "videoEmbedMessage"
    );


function openVideoModal(
    url,
    title
) {

    if (!videoModal || !videoFrame) {
        return;
    }


    videoModalTitle.textContent =
        title || "Client Video";


    /*
     * Facebook /share/r URLs may refuse iframe embedding.
     * We still load the URL in the in-page modal.
     * If Facebook blocks framing, the fallback message
     * explains the limitation.
     */

    videoEmbedMessage.textContent =
        currentLanguage === "ar"
            ? "لو Facebook منع التضمين، هنحتاج رابط Embed مباشر للفيديو."
            : "If Facebook blocks embedding, we will need the direct Facebook Embed URL.";


    videoFrame.src =
        url;


    videoModal.classList.add(
        "open"
    );


    videoModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


function closeVideoModal() {

    if (!videoModal) {
        return;
    }


    videoModal.classList.remove(
        "open"
    );


    videoModal.setAttribute(
        "aria-hidden",
        "true"
    );


    videoFrame.src =
        "about:blank";


    document.body.style.overflow =
        "";
}


document
    .querySelectorAll(
        ".video-play"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                openVideoModal(
                    button.dataset.videoUrl,
                    button.dataset.videoTitle
                );

            }
        );

    });


/* =========================================================
   GENERIC CLOSE BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-close]"
    )
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const modalId =
                    button.dataset.close;


                if (
                    modalId ===
                    "projectModal"
                ) {

                    closeProjectModal();

                }


                if (
                    modalId ===
                    "videoModal"
                ) {

                    closeVideoModal();

                }

            }
        );

    });


/* =========================================================
   CLOSE MODAL BY BACKDROP
========================================================= */

document
    .querySelectorAll(
        ".modal-backdrop"
    )
    .forEach((backdrop) => {

        backdrop.addEventListener(
            "click",
            () => {

                const modal =
                    backdrop.closest(
                        ".modal"
                    );


                if (!modal) {
                    return;
                }


                if (
                    modal.id ===
                    "projectModal"
                ) {

                    closeProjectModal();

                }


                if (
                    modal.id ===
                    "videoModal"
                ) {

                    closeVideoModal();

                }

            }
        );

    });


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        closeProjectModal();

        closeVideoModal();

    }
);


/* =========================================================
   CLOSE MOBILE MENU ON RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850
        ) {

            if (nav) {
                nav.classList.remove(
                    "open"
                );
            }

            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);