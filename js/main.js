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
     PAGE LOADER
  ====================================================== */

  const pageLoader = $("#pageLoader");

  window.addEventListener("load", () => {
    window.setTimeout(() => {
      pageLoader?.classList.add("hidden");
    }, 250);
  });


  /* ======================================================
     YEAR
  ====================================================== */

  const yearElement = $("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }


  /* ======================================================
     THEME
  ====================================================== */

  const themeToggle = $("#themeToggle");

  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "light") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }

  const updateThemeIcon = () => {
    if (!themeToggle) return;

    const icon = $(".theme-icon", themeToggle);

    if (!icon) return;

    icon.textContent = document.body.classList.contains("light-theme")
      ? "☾"
      : "☼";
  };

  updateThemeIcon();

  themeToggle?.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");

    document.body.classList.toggle("dark-theme", !isLight);

    localStorage.setItem(
      "portfolio-theme",
      isLight ? "light" : "dark"
    );

    updateThemeIcon();
  });


  /* ======================================================
     LANGUAGE
  ====================================================== */

  const languageToggle = $("#languageToggle");

  const translations = {
    ar: {
      navHome: "الرئيسية",
      navAbout: "من نحن",
      navServices: "الخدمات",
      navProjects: "المشاريع",
      navPackages: "الباقات",
      navVideos: "النتائج",
      navContact: "تواصل معنا",

      heroEyebrow:
        "التسويق الرقمي • الميديا باينج • تصميم المواقع",

      heroTitle1: "نكبّر",
      heroTitle2: "مشروعك",
      heroTitle3: "بذكاء.",

      heroDescription:
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع تخدم أهداف مشروعك.",

      heroPrimary: "ابدأ مشروعك",
      heroSecondary: "شوف أعمالنا",

      statOne: "استراتيجية",
      statTwo: "تنفيذ",
      statThree: "تحليل",

      floatGrowth: "نمو مستمر",
      floatTarget: "استهداف دقيق",

      aboutKicker: "ABOUT",
      aboutTitle: "مش بس إعلانات.\nبنبني نمو حقيقي.",

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

      servicesKicker: "SERVICES",

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

      projectsKicker:
        "SELECTED WORK",

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
        "المعاينة داخل الموقع قد لا تعمل لبعض المواقع الخارجية بسبب سياسات حماية الـ iframe الخاصة بها.",

      packagesKicker:
        "PACKAGES",

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

      customKicker:
        "CUSTOM WEBSITE",

      customTitle:
        "عايز موقع\nعلى ستايلك؟",

      customText:
        "نصمم لك موقع مخصص من الصفر، بالهوية البصرية اللي تناسب مشروعك، مع تجربة استخدام سريعة ومتجاوبة.",

      customButton:
        "اطلب موقعك",

      showcaseKicker:
        "CASE STUDIES",

      showcaseTitle:
        "هنا هنحط\nشغل الحملات.",

      placeholderText:
        "Campaign Image",

      videosKicker:
        "RESULTS",

      videosTitle:
        "شوف\nالنتائج بنفسك.",

      featuredVideo:
        "FEATURED",

      videoResult:
        "Campaign Result",

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

      processKicker:
        "PROCESS",

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
        "ننفذ ونطلق ونختبر.",

      process4Title:
        "Optimization",

      process4Text:
        "نحسن النتائج بناءً على البيانات.",

      contactKicker:
        "LET'S WORK TOGETHER",

      contactTitle:
        "جاهز\nنكبر مشروعك؟",

      contactText:
        "ابعت لنا تفاصيل مشروعك وهنحدد لك أنسب طريقة نبدأ بيها.",

      footerText:
        "استراتيجية • إبداع • نمو",

      openExternal:
        "فتح الموقع الأصلي",

      videoModalTitle:
        "Campaign Video",

      watchOnFacebook:
        "مشاهدة على Facebook"
    },


    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navProjects: "Projects",
      navPackages: "Packages",
      navVideos: "Results",
      navContact: "Contact",

      heroEyebrow:
        "Digital Marketing • Media Buying • Web Design",

      heroTitle1: "Grow",
      heroTitle2: "Your Business",
      heroTitle3: "Smarter.",

      heroDescription:
        "Successful marketing ideas, precise paid advertising, market and competitor analysis, and websites built around your business goals.",

      heroPrimary: "Start Your Project",
      heroSecondary: "View Our Work",

      statOne: "Strategy",
      statTwo: "Execution",
      statThree: "Analysis",

      floatGrowth: "Continuous growth",
      floatTarget: "Precise targeting",

      aboutKicker: "ABOUT",
      aboutTitle:
        "Not just ads.\nWe build real growth.",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design so every step of your project has a clear purpose.",

      aboutQuote:
        "Your project’s success is our goal.",

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

      servicesKicker: "SERVICES",

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

      projectsKicker:
        "SELECTED WORK",

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
        "Some external websites may not load inside the preview because of their iframe security policies.",

      packagesKicker:
        "PACKAGES",

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
        "A fully customized package based on the project size, goals and budget.",

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

      customKicker:
        "CUSTOM WEBSITE",

      customTitle:
        "Need a website\nthat feels like you?",

      customText:
        "We build custom websites from scratch with the visual identity that fits your project, plus a fast responsive experience.",

      customButton:
        "Build My Website",

      showcaseKicker:
        "CASE STUDIES",

      showcaseTitle:
        "Campaign work\nwill go here.",

      placeholderText:
        "Campaign Image",

      videosKicker:
        "RESULTS",

      videosTitle:
        "See the\nresults.",

      featuredVideo:
        "FEATURED",

      videoResult:
        "Campaign Result",

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

      processKicker:
        "PROCESS",

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

      contactKicker:
        "LET'S WORK TOGETHER",

      contactTitle:
        "Ready to\ngrow your business?",

      contactText:
        "Send us your project details and we will define the best way to start.",

      footerText:
        "Strategy • Creativity • Growth",

      openExternal:
        "Open Original Website",

      videoModalTitle:
        "Campaign Video",

      watchOnFacebook:
        "Watch on Facebook"
    }
  };


  let currentLanguage =
    localStorage.getItem("portfolio-language") || "ar";

  const applyLanguage = (language) => {
    currentLanguage = language;

    const dictionary =
      translations[language] || translations.ar;

    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (!dictionary[key]) return;

      element.textContent =
        dictionary[key];
    });

    if (languageToggle) {
      languageToggle.textContent =
        language === "ar" ? "EN" : "AR";
    }

    localStorage.setItem(
      "portfolio-language",
      language
    );
  };

  applyLanguage(currentLanguage);

  languageToggle?.addEventListener("click", () => {
    applyLanguage(
      currentLanguage === "ar"
        ? "en"
        : "ar"
    );
  });


  /* ======================================================
     HEADER
  ====================================================== */

  const siteHeader = $("#siteHeader");

  const updateHeader = () => {
    siteHeader?.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );
  };

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();


  /* ======================================================
     MOBILE MENU
  ====================================================== */

  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");

  const closeMenu = () => {
    menuToggle?.classList.remove("active");
    mobileMenu?.classList.remove("open");
    menuToggle?.setAttribute(
      "aria-expanded",
      "false"
    );
    document.body.classList.remove("menu-open");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen =
      menuToggle.classList.toggle("active");

    mobileMenu?.classList.toggle(
      "open",
      isOpen
    );

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "menu-open",
      isOpen
    );
  });

  $$("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });


  /* ======================================================
     REVEAL ON SCROLL
  ====================================================== */

  const revealItems = $$(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(entry.target);
          });

        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -60px 0px"
        }
      );

    revealItems.forEach((item) => {
      revealObserver.observe(item);
    });

  } else {

    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

  }


  /* ======================================================
     MAGNETIC BUTTONS
     Desktop / mouse only
  ====================================================== */

  const magneticButtons =
    $$(".magnetic");

  const supportsHover =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

  if (supportsHover) {

    magneticButtons.forEach((button) => {

      button.addEventListener(
        "mousemove",
        (event) => {

          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX -
            (rect.left + rect.width / 2);

          const y =
            event.clientY -
            (rect.top + rect.height / 2);

          button.style.transform =
            `translate3d(${x * 0.08}px, ${y * 0.08}px, 0)`;
        }
      );

      button.addEventListener(
        "mouseleave",
        () => {
          button.style.transform = "";
        }
      );

    });
  }


  /* ======================================================
     PROJECT MODAL
  ====================================================== */

  const projectModal = $("#projectModal");
  const projectFrame = $("#projectModalFrame");
  const projectTitle = $("#projectModalTitle");
  const projectExternalLink =
    $("#projectExternalLink");

  const openProjectModal = (
    url,
    title
  ) => {

    if (!projectModal || !projectFrame) {
      return;
    }

    projectTitle.textContent = title;
    projectExternalLink.href = url;

    projectFrame.src = "";

    const loading =
      $(".modal-loading", projectModal);

    loading?.classList.remove("hidden");

    projectModal.classList.add("active");
    projectModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );

    window.setTimeout(() => {
      projectFrame.src = url;
    }, 50);

    projectFrame.onload = () => {
      loading?.classList.add("hidden");
    };
  };

  $$("[data-project]").forEach((button) => {

    button.addEventListener("click", () => {

      const url =
        button.dataset.project;

      const title =
        button.dataset.title ||
        "Project";

      if (!url) return;

      openProjectModal(
        url,
        title
      );
    });

  });


  /* ======================================================
     FACEBOOK VIDEO MODAL
  ====================================================== */

  const videoModal = $("#videoModal");
  const videoFrame = $("#videoModalFrame");
  const videoExternalLink =
    $("#videoExternalLink");

  const facebookEmbedUrl = (url) => {
    return (
      "https://www.facebook.com/plugins/video.php" +
      "?href=" +
      encodeURIComponent(url) +
      "&show_text=false" +
      "&width=1280"
    );
  };

  const openVideoModal = (url) => {

    if (
      !videoModal ||
      !videoFrame ||
      !url
    ) {
      return;
    }

    const loading =
      $(".modal-loading", videoModal);

    loading?.classList.remove("hidden");

    videoExternalLink.href = url;

    videoFrame.src =
      facebookEmbedUrl(url);

    videoModal.classList.add("active");

    videoModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "menu-open"
    );

    window.setTimeout(() => {
      loading?.classList.add("hidden");
    }, 2500);
  };

  $$(".video-card[data-video]").forEach(
    (card) => {

      card.addEventListener(
        "click",
        () => {
          openVideoModal(
            card.dataset.video
          );
        }
      );

    }
  );


  /* ======================================================
     CLOSE MODALS
  ====================================================== */

  const closeModal = (modal) => {

    if (!modal) return;

    modal.classList.remove("active");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (modal === projectModal) {
      if (projectFrame) {
        projectFrame.src = "";
      }
    }

    if (modal === videoModal) {
      if (videoFrame) {
        videoFrame.src = "";
      }
    }

    if (
      !mobileMenu?.classList.contains("open")
    ) {
      document.body.classList.remove(
        "menu-open"
      );
    }
  };

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
     ESC KEY
  ====================================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key !== "Escape") {
        return;
      }

      if (
        projectModal?.classList.contains(
          "active"
        )
      ) {
        closeModal(projectModal);
      }

      if (
        videoModal?.classList.contains(
          "active"
        )
      ) {
        closeModal(videoModal);
      }

      closeMenu();
    }
  );


  /* ======================================================
     BACKDROP CLICK
  ====================================================== */

  $$(".modal-backdrop").forEach(
    (backdrop) => {

      backdrop.addEventListener(
        "click",
        () => {
          closeModal(
            backdrop.closest(".modal")
          );
        }
      );

    }
  );


  /* ======================================================
     WINDOW RESIZE
  ====================================================== */

  let resizeTimer = null;

  window.addEventListener(
    "resize",
    () => {

      window.clearTimeout(resizeTimer);

      resizeTimer = window.setTimeout(() => {

        if (
          window.innerWidth > 780 &&
          mobileMenu?.classList.contains("open")
        ) {
          closeMenu();
        }

      }, 120);
    },
    { passive: true }
  );

})();