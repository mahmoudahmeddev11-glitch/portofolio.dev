/* =========================================================
   DIGITAL MARKETING PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE LOADER
    ====================================================== */

    const pageLoader = document.getElementById("pageLoader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            pageLoader.classList.add("loaded");

        }, 500);

    });


    /* =====================================================
       HEADER SCROLL
    ====================================================== */

    const header = document.getElementById("header");

    const handleHeader = () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };

    window.addEventListener("scroll", handleHeader);

    handleHeader();


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileNav =
        document.getElementById("mobileNav");


    mobileMenuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        mobileMenuButton.classList.toggle("active");

    });


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            mobileMenuButton.classList.remove("active");

        });

    });


    /* =====================================================
       LANGUAGE SYSTEM
    ====================================================== */

    let currentLanguage =
        localStorage.getItem("siteLanguage") || "en";


    const languageSwitch =
        document.getElementById("languageSwitch");

    const mobileLanguageSwitch =
        document.getElementById("mobileLanguageSwitch");


    function updateLanguage() {

        const isArabic =
            currentLanguage === "ar";


        document.documentElement.lang =
            isArabic ? "ar" : "en";


        document.documentElement.dir =
            isArabic ? "rtl" : "ltr";


        document.body.dir =
            isArabic ? "rtl" : "ltr";


        document.querySelectorAll("[data-en]").forEach(element => {

            const text =
                isArabic
                    ? element.getAttribute("data-ar")
                    : element.getAttribute("data-en");


            if (text !== null) {

                element.textContent = text;

            }

        });


        if (languageSwitch) {

            languageSwitch.textContent =
                isArabic ? "EN" : "AR";

        }


        if (mobileLanguageSwitch) {

            mobileLanguageSwitch.textContent =
                isArabic ? "English" : "العربية";

        }

    }


    function toggleLanguage() {

        currentLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";


        localStorage.setItem(
            "siteLanguage",
            currentLanguage
        );


        updateLanguage();

    }


    languageSwitch.addEventListener(
        "click",
        toggleLanguage
    );


    mobileLanguageSwitch.addEventListener(
        "click",
        toggleLanguage
    );


    updateLanguage();


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       3D TILT
    ====================================================== */

    const tiltCards =
        document.querySelectorAll(".tilt-card");


    tiltCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;


            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
                scale(1.01)
                `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });


    /* =====================================================
       COUNTERS
    ====================================================== */

    const counters =
        document.querySelectorAll("[data-count]");


    const animateCounter = element => {

        const target =
            Number(
                element.getAttribute("data-count")
            );


        const duration = 1400;

        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            const eased =
                1 - Math.pow(1 - progress, 3);


            const value =
                Math.floor(target * eased);


            element.textContent =
                value;


            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                element.textContent =
                    target;

            }

        }


        requestAnimationFrame(update);

    };


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: .7
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* =====================================================
       MOUSE GLOW
    ====================================================== */

    const serviceCards =
        document.querySelectorAll(".service-card");


    serviceCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                ((event.clientX - rect.left) /
                    rect.width) * 100;


            const y =
                ((event.clientY - rect.top) /
                    rect.height) * 100;


            card.style.background =
                `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(255,210,26,.08),
                    rgba(255,255,255,.025) 35%,
                    rgba(255,255,255,.01)
                )
                `;

        });


        card.addEventListener("mouseleave", () => {

            card.style.background =
                "";

        });

    });


    /* =====================================================
       PARALLAX BACKGROUND
    ====================================================== */

    const liquidElements =
        document.querySelectorAll(".liquid");


    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;


            liquidElements.forEach(
                (liquid, index) => {

                    const speed =
                        (index + 1) * 0.025;


                    liquid.style.transform =
                        `translateY(${scrollY * speed}px)`;

                }
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       ACTIVE NAV
    ====================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    const navLinks =
        document.querySelectorAll(
            ".main-nav a"
        );


    const activeSectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");


                        navLinks.forEach(link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute("href")
                                === `#${id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            {
                threshold: .35
            }
        );


    sections.forEach(section => {

        activeSectionObserver.observe(
            section
        );

    });


    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ====================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {

            mobileNav.classList.remove("active");

            mobileMenuButton.classList.remove(
                "active"
            );

        }

    });


    /* =====================================================
       SMOOTH ANCHOR OFFSET
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener("click", event => {

            const targetId =
                anchor.getAttribute("href");


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


            const headerHeight =
                header.offsetHeight;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;


            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


});