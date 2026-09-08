/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            mobileMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/* Close menu after clicking a link */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* =========================================
   LANGUAGE
========================================= */

const languageSwitcher =
    document.getElementById(
        "languageSwitcher"
    );

const mobileLanguageSwitcher =
    document.getElementById(
        "mobileLanguageSwitcher"
    );


let currentLanguage = "en";


function setLanguage(language) {

    currentLanguage = language;


    document.documentElement.lang =
        language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    languageSwitcher.textContent =
        language === "en"
            ? "العربية"
            : "English";


    mobileLanguageSwitcher.textContent =
        language === "en"
            ? "العربية"
            : "English";


    /*
        هنا بعد ما نخلص كل محتوى الموقع
        هنضيف ترجمة كل النصوص.
    */
}


languageSwitcher.addEventListener(
    "click",
    () => {

        setLanguage(
            currentLanguage === "en"
                ? "ar"
                : "en"
        );

    }
);


mobileLanguageSwitcher.addEventListener(
    "click",
    () => {

        setLanguage(
            currentLanguage === "en"
                ? "ar"
                : "en"
        );

    }
);