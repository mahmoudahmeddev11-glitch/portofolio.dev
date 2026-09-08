/* =====================================================
   LANGUAGE
===================================================== */

const languageBtn =
    document.getElementById("languageBtn");

const mobileLanguageBtn =
    document.getElementById("mobileLanguageBtn");

let currentLanguage = "en";


function updateLanguage(language) {

    currentLanguage = language;

    /*
     * Change HTML language
     */

    document.documentElement.lang =
        language;


    /*
     * Change direction
     */

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    /*
     * Translate all elements
     */

    const elements =
        document.querySelectorAll(
            "[data-en][data-ar]"
        );


    elements.forEach(element => {

        const text =
            element.getAttribute(
                `data-${language}`
            );

        if (text !== null) {

            element.textContent =
                text;
        }

    });


    /*
     * Update language buttons
     */

    const buttonText =
        language === "en"
            ? "العربية"
            : "English";


    languageBtn.textContent =
        buttonText;

    mobileLanguageBtn.textContent =
        buttonText;


    /*
     * Save selected language
     */

    localStorage.setItem(
        "website-language",
        language
    );
}


/* =====================================================
   DESKTOP LANGUAGE BUTTON
===================================================== */

languageBtn.addEventListener(
    "click",
    () => {

        const newLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        updateLanguage(
            newLanguage
        );
    }
);


/* =====================================================
   MOBILE LANGUAGE BUTTON
===================================================== */

mobileLanguageBtn.addEventListener(
    "click",
    () => {

        const newLanguage =
            currentLanguage === "en"
                ? "ar"
                : "en";

        updateLanguage(
            newLanguage
        );

    }
);


/* =====================================================
   LOAD SAVED LANGUAGE
===================================================== */

const savedLanguage =
    localStorage.getItem(
        "website-language"
    );


if (
    savedLanguage === "ar" ||
    savedLanguage === "en"
) {

    updateLanguage(
        savedLanguage
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


menuBtn.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "active"
        );

    }
);


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "active"
            );

        }
    );

});