(() => {
  "use strict";


  /* ======================================================
     HELPERS
  ====================================================== */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


  /* ======================================================
     LOADER
  ====================================================== */

  const loader = $("#pageLoader");

  window.addEventListener("load", () => {
    window.setTimeout(() => {
      loader?.classList.add("hidden");
    }, 180);
  });


  /* ======================================================
     YEAR
  ====================================================== */

  const year = $("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ======================================================
     THEME
  ====================================================== */

  const themeToggle = $("#themeToggle");

  const savedTheme =
    localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }

  const updateThemeIcon = () => {
    const icon =
      $(".theme-icon", themeToggle);

    if (!icon) return;

    icon.textContent =
      document.body.classList.contains("light-theme")
        ? "☾"
        : "☼";
  };

  updateThemeIcon();


  themeToggle?.addEventListener("click", () => {

    const light =
      document.body.classList.toggle("light-theme");

    document.body.classList.toggle(
      "dark-theme",
      !light
    );

    localStorage.setItem(
      "portfolio-theme",
      light ? "light" : "dark"
    );

    updateThemeIcon();
  });


  /* ======================================================
     LANGUAGE
  ====================================================== */

  const languageToggle =
    $("#languageToggle");


  const translations = {

    ar: {

      navHome: "الرئيسية",
      navAbout: "من نحن",
      navServices: "الخدمات",
      navProjects: "المشاريع",
      navPackages: "الباقات",
      navVideos: "الفيديوهات",
      navContact: "تواصل معنا",

      heroEyebrow:
        "التسويق الرقمي • الميديا باينج • تصميم المواقع",

      heroTitle1: "نكبّر",
      heroTitle2: "مشروعك",
      heroTitle3: "بذكاء.",

      heroDescription:
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع تخدم أهداف مشروعك.",

      heroPrimary:
        "ابدأ مشروعك",

      heroSecondary:
        "شوف أعمالنا",

      statOne:
        "استراتيجية",

      statTwo:
        "تنفيذ",

      statThree:
        "تحليل",

      floatGrowth:
        "نمو مستمر",

      floatTarget:
        "استهداف دقيق",


      aboutTitle:
        "مش بس إعلانات.\nبنبني نمو حقيقي.",

      aboutText:
        "بنجمع بين الاستراتيجية، الميديا باينج، تحليل السوق، المحتوى وتصميم المواقع عشان كل خطوة في المشروع يكون ليها هدف واضح.",

      aboutQuote:
        "نجاح مشروعك هو هدفنا.",

      aboutCard1Title:
        "أفكار تسويقية ناجحة",

      aboutCard1Text:
        "أفكار مبنية على السوق والجمهور.",

      aboutCard2Title:
        "استهداف دقيق",

      aboutCard2Text:
        "توجيه الميزانية للجمهور المناسب.",

      aboutCard3Title:
        "تحليل وتطوير",

      aboutCard3Text:
        "نقيس ونحلل ونحسن الأداء باستمرار.",


      servicesTitle:
        "كل خطوة\nليها هدف.",

      service1Title:
        "Media Buying",

      service1Text:
        "حملات إعلانية مدروسة، استهداف دقيق، وإدارة للميزانية بناءً على البيانات.",

      service2Title:
        "Market Analysis",

      service2Text:
        "نحلل السوق، المنافسين، الجمهور ونقاط القوة والضعف.",

      service3Title:
        "Social Media",

      service3Text:
        "محتوى يساعد البراند يظهر بالشكل الصح ويخلق تفاعل حقيقي.",

      service4Title:
        "Web Design",

      service4Text:
        "مواقع عصرية، سريعة ومتجاوبة، مصممة على ستايل البراند وأهداف المشروع.",


      projectsTitle:
        "مشاريع\nتشتغل فعلًا.",

      openProject:
        "افتح المشروع",

      project1Desc:
        "تجربة ويب عصرية لعرض المشروع والخدمات بشكل احترافي.",

      project2Desc:
        "موقع بسيط ومرتب بتجربة استخدام واضحة.",

      project3Desc:
        "مشروع ويب بطابع بصري مختلف وتجربة مرنة.",

      projectNote:
        "بعض المواقع الخارجية قد تمنع المعاينة داخل iframe بسبب سياسة الحماية الخاصة بها.",


      packagesTitle:
        "اختار الباقة\nالمناسبة لمشروعك.",

      package1Title:
        "بداية قوية",

      package1Text:
        "مناسبة للمشاريع اللي لسه بتبدأ أو محتاجة إعادة ترتيب الأساسيات.",

      package2Title:
        "نمو وتسريع",

      package2Text:
        "لمن يريد بناء حضور أقوى وتحسين النتائج بشكل مستمر.",

      package3Title:
        "على حسب المشروع",

      package3Text:
        "باقة مخصصة بالكامل حسب حجم المشروع والأهداف والميزانية.",

      perMonth:
        "شهريًا",

      customPrice:
        "حسب المشروع",

      choosePackage:
        "ابدأ الآن",

      talkToUs:
        "تحدث معنا",

      mostPopular:
        "الأكثر طلبًا",


      customTitle:
        "عايز موقع\nعلى ستايلك؟",

      customText:
        "نصمم لك موقع مخصص من الصفر، بالهوية البصرية اللي تناسب مشروعك، مع تجربة استخدام سريعة ومتجاوبة.",

      customButton:
        "اطلب موقعك",


      showcaseTitle:
        "هنا هنحط\nشغل الحملات.",

      placeholderText:
        "Campaign Image",


      videosTitle:
        "شوف\nالنتائج بنفسك.",

      featuredVideo:
        "FEATURED CAMPAIGN",

      video1Title:
        "Featured Campaign",

      video2Title:
        "Client Testimonial",

      video3Title:
        "Campaign Performance",

      video4Title:
        "Creative Performance",

      video5Title:
        "Client Feedback",


      processTitle:
        "بنشتغل\nبخطوات واضحة.",

      process1Title:
        "Discovery",

      process1Text:
        "نفهم المشروع والأهداف والجمهور.",

      process2Title:
        "Strategy",

      process2Text:
        "نحدد الخطة والقنوات والرسائل.",

      process3Title:
        "Execution",

      process3Text:
        "ننفيذ ونطلق ونختبر.",

      process4Title:
        "Optimization",

      process4Text:
        "نحسن النتائج بناءً على البيانات.",


      contactTitle:
        "جاهز\nنكبر مشروعك؟",

      contactText:
        "ابعت لنا تفاصيل مشروعك وهنحدد لك أنسب طريقة نبدأ بيها.",


      footerText:
        "استراتيجية • إبداع • نمو",

      openExternal:
        "فتح الموقع الأصلي"

    },


    en: {

      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navProjects: "Projects",
      navPackages: "Packages",
      navVideos: "Videos",
      navContact: "Contact",

      heroEyebrow:
        "Digital Marketing • Media Buying • Web Design",

      heroTitle1:
        "Grow",

      heroTitle2:
        "Your Business",

      heroTitle3:
        "Smarter.",

      heroDescription:
        "Successful marketing ideas, precise paid advertising, market and competitor analysis, and websites built around your business goals.",

      heroPrimary:
        "Start Your Project",

      heroSecondary:
        "View Our Work",

      statOne:
        "Strategy",

      statTwo:
        "Execution",

      statThree:
        "Analysis",

      floatGrowth:
        "Continuous growth",

      floatTarget:
        "Precise targeting",


      aboutTitle:
        "Not just ads.\nWe build real growth.",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design so every step of your project has a clear purpose.",

      aboutQuote:
        "Your project's success is our goal.",

      aboutCard1Title:
        "Successful Marketing Ideas",

      aboutCard1Text:
        "Ideas built around the market and audience.",

      aboutCard2Title:
        "Precise Targeting",

      aboutCard2Text:
        "Putting the budget in front of the right audience.",

      aboutCard3Title:
        "Analysis & Optimization",

      aboutCard3Text:
        "We measure, analyze and improve continuously.",


      servicesTitle:
        "Every move\nhas a purpose.",

      service1Title:
        "Media Buying",

      service1Text:
        "Well-planned campaigns, precise targeting and data-driven budget management.",

      service2Title:
        "Market Analysis",

      service2Text:
        "We analyze the market, competitors, audience, strengths and weaknesses.",

      service3Title:
        "Social Media",

      service3Text:
        "Content that helps the brand show up the right way and create real engagement.",

      service4Title:
        "Web Design",

      service4Text:
        "Modern, fast and responsive websites designed around your brand style and business goals.",


      projectsTitle:
        "Projects\nthat actually work.",

      openProject:
        "Open Project",

      project1Desc:
        "A modern web experience built to present the project and services professionally.",

      project2Desc:
        "A clean website with a clear and simple user experience.",

      project3Desc:
        "A web project with a distinct visual direction and flexible experience.",

      projectNote:
        "Some external websites may block iframe previews because of their security policies.",


      packagesTitle:
        "Choose the package\nthat fits your project.",

      package1Title:
        "Strong Start",

      package1Text:
        "Suitable for projects that are starting or need to organize their foundation.",

      package2Title:
        "Growth",

      package2Text:
        "For brands that want a stronger presence and continuous performance improvement.",

      package3Title:
        "Custom",

      package3Text:
        "A fully customized package based on project size, goals and budget.",

      perMonth:
        "monthly",

      customPrice:
        "project-based",

      choosePackage:
        "Get Started",

      talkToUs:
        "Talk To Us",

      mostPopular:
        "Most Popular",


      customTitle:
        "Need a website\nthat feels like you?",

      customText:
        "We build custom websites from scratch with the visual identity that fits your project and a fast responsive experience.",

      customButton:
        "Build My Website",


      showcaseTitle:
        "Campaign work\nwill go here.",

      placeholderText:
        "Campaign Image",


      videosTitle:
        "See the\nresults.",

      featuredVideo:
        "FEATURED CAMPAIGN",

      video1Title:
        "Featured Campaign",

      video2Title:
        "Client Testimonial",

      video3Title:
        "Campaign Performance",

      video4Title:
        "Creative Performance",

      video5Title:
        "Client Feedback",


      processTitle:
        "We work\nwith clear steps.",

      process1Title:
        "Discovery",

      process1Text:
        "We understand the project, goals and audience.",

      process2Title:
        "Strategy",

      process2Text:
        "We define the plan, channels and messaging.",

      process3Title:
        "Execution",

      process3Text:
        "We build, launch and test.",

      process4Title:
        "Optimization",

      process4Text:
        "We improve results based on the data.",


      contactTitle:
        "Ready to\ngrow your business?",

      contactText:
        "Send us your project details and we will define the best way to start.",


      footerText:
        "Strategy • Creativity • Growth",

      openExternal:
        "Open Original Website"

    }

  };


  let currentLanguage =
    localStorage.getItem("portfolio-language") || "ar";


  function applyLanguage(language) {

    currentLanguage = language;

    const dictionary =
      translations[language] || translations.ar;

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      language === "ar"
        ? "rtl"
        : "ltr";


    $$("[data-i18n]").forEach((element) => {

      const key =
        element.dataset.i18n;

      if (!dictionary[key]) {
        return;
      }

      /*
        Using textContent is intentional.
        \n in titles is displayed as a
        line break by CSS/text formatting
        only if element supports it.
        We handle it below.
      */

      element.textContent =
        dictionary[key];

      if (
        key === "heroTitle1" ||
        key === "heroTitle2" ||
        key === "heroTitle3"
      ) {
        return;
      }

    });


    /*
      Convert explicit \n to line breaks
      only for heading elements.
    */

    $$("[data-i18n]").forEach((element) => {

      const key =
        element.dataset.i18n;

      const value =
        dictionary[key];

      if (
        typeof value === "string" &&
        value.includes("\n") &&
        element.tagName !== "INPUT"
      ) {

        element.innerHTML =
          value.replace(/\n/g, "<br>");
      }

    });


    if (languageToggle) {

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


  applyLanguage(currentLanguage);


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


  /* ======================================================
     HEADER
  ====================================================== */

  const header =
    $("#siteHeader");


  const updateHeader = () => {

    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 18
    );

  };


  window.addEventListener(
    "scroll",
    updateHeader,
    {
      passive: true
    }
  );


  updateHeader();


  /* ======================================================
     MOBILE MENU
  ====================================================== */

  const menuToggle =
    $("#menuToggle");

  const mobileMenu =
    $("#mobileMenu");


  function closeMenu() {

    menuToggle?.classList.remove(
      "active"
    );

    mobileMenu?.classList.remove(
      "open"
    );

    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove(
      "lock-scroll"
    );

  }


  menuToggle?.addEventListener(
    "click",
    () => {

      const isOpen =
        menuToggle.classList.toggle(
          "active"
        );

      mobileMenu?.classList.toggle(
        "open",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      document.body.classList.toggle(
        "lock-scroll",
        isOpen
      );

    }
  );


  $$("#mobileMenu a").forEach(
    (link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    }
  );


  /* ======================================================
     REVEAL
  ====================================================== */

  const revealElements =
    $$(".reveal");


  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries, instance) => {

          entries.forEach(
            (entry) => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }

              entry.target.classList.add(
                "is-visible"
              );

              instance.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: 0.08,
          rootMargin:
            "0px 0px -45px 0px"
        }
      );


    revealElements.forEach(
      (element) => {
        observer.observe(element);
      }
    );

  } else {

    revealElements.forEach(
      (element) => {
        element.classList.add(
          "is-visible"
        );
      }
    );

  }


  /* ======================================================
     PROJECT MODAL
  ====================================================== */

  const projectModal =
    $("#projectModal");

  const projectFrame =
    $("#projectModalFrame");

  const projectTitle =
    $("#projectModalTitle");

  const projectExternal =
    $("#projectExternalLink");

  const projectLoader =
    $("#projectLoader");


  function openProject(
    url,
    title
  ) {

    if (
      !projectModal ||
      !projectFrame
    ) {
      return;
    }


    projectTitle.textContent =
      title || "Project";

    projectExternal.href =
      url;


    projectFrame.src = "";

    projectLoader?.classList.remove(
      "hidden"
    );


    projectModal.classList.add(
      "active"
    );


    document.body.classList.add(
      "lock-scroll"
    );


    projectFrame.src =
      url;


    projectFrame.onload =
      () => {

        projectLoader?.classList.add(
          "hidden"
        );

      };

  }


  $$("[data-project]").forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const url =
            button.dataset.project;

          const title =
            button.dataset.title;

          if (!url) {
            return;
          }

          openProject(
            url,
            title
          );

        }
      );

    }
  );


  /* ======================================================
     CLOSE MODAL
  ====================================================== */

  function closeModal(modal) {

    if (!modal) {
      return;
    }

    modal.classList.remove(
      "active"
    );


    if (
      modal === projectModal &&
      projectFrame
    ) {
      projectFrame.src = "";
    }


    if (
      !mobileMenu?.classList.contains(
        "open"
      )
    ) {

      document.body.classList.remove(
        "lock-scroll"
      );

    }

  }


  $$("[data-close-modal]").forEach(
    (element) => {

      element.addEventListener(
        "click",
        () => {

          closeModal(
            element.closest(".modal")
          );

        }
      );

    }
  );


  /* ======================================================
     ESC
  ====================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key !== "Escape"
      ) {
        return;
      }


      if (
        projectModal?.classList.contains(
          "active"
        )
      ) {

        closeModal(
          projectModal
        );

      }


      closeMenu();

    }
  );


  /* ======================================================
     SIMPLE DESKTOP 3D
     No mouse tracking on mobile.
  ====================================================== */

  const canHover =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;


  if (canHover) {

    $$(".tilt-card").forEach(
      (card) => {

        card.addEventListener(
          "mousemove",
          (event) => {

            const rect =
              card.getBoundingClientRect();


            const x =
              event.clientX -
              (rect.left + rect.width / 2);


            const y =
              event.clientY -
              (rect.top + rect.height / 2);


            const rotateY =
              x / rect.width * 4;

            const rotateX =
              -(y / rect.height) * 4;


            card.style.transform =
              `perspective(1000px)
               rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
               translateY(-5px)`;

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


  /* ======================================================
     RESIZE
  ====================================================== */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 780
      ) {
        closeMenu();
      }

    },
    {
      passive: true
    }
  );

})();