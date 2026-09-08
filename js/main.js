(() => {
  "use strict";

  /* =====================================================
     ELEMENTS
  ====================================================== */

  const body =
    document.body;

  const root =
    document.documentElement;

  const header =
    document.getElementById(
      "header"
    );

  const themeToggle =
    document.getElementById(
      "themeToggle"
    );

  const languageToggle =
    document.getElementById(
      "languageToggle"
    );

  const menuToggle =
    document.getElementById(
      "menuToggle"
    );

  const mobileNav =
    document.getElementById(
      "mobileNav"
    );

  const projectModal =
    document.getElementById(
      "projectModal"
    );

  const projectModalClose =
    document.getElementById(
      "projectModalClose"
    );

  const projectModalTitle =
    document.getElementById(
      "projectModalTitle"
    );

  const projectFrame =
    document.getElementById(
      "projectFrame"
    );

  const projectFallback =
    document.getElementById(
      "projectFallback"
    );

  const projectExternalLink =
    document.getElementById(
      "projectExternalLink"
    );

  const videoModal =
    document.getElementById(
      "videoModal"
    );

  const videoModalClose =
    document.getElementById(
      "videoModalClose"
    );

  const facebookVideoFrame =
    document.getElementById(
      "facebookVideoFrame"
    );

  const videoFallback =
    document.getElementById(
      "videoFallback"
    );

  const videoExternalLink =
    document.getElementById(
      "videoExternalLink"
    );

  const year =
    document.getElementById(
      "year"
    );

  /* =====================================================
     DEVICE STATE
  ====================================================== */

  const touchDevice =
    window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  /* =====================================================
     STORAGE
  ====================================================== */

  let language =
    localStorage.getItem(
      "mahmoud-language"
    ) || "ar";

  let theme =
    localStorage.getItem(
      "mahmoud-theme"
    ) || "dark";

  /* =====================================================
     TRANSLATIONS
  ====================================================== */

  const translations = {

    ar: {

      navServices:
        "الخدمات",

      navProjects:
        "المشاريع",

      navPackages:
        "الباقات",

      navVideos:
        "آراء العملاء",

      navContact:
        "تواصل",

      headerCta:
        "ابدأ مشروع",

      heroEyebrow:
        "وكالة نمو وتسويق رقمي",

      heroTitleOne:
        "نكبّر مشروعك",

      heroTitleTwo:
        "بذكاء.",

      heroDescription:
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع تخدم أهداف مشروعك.",

      heroButtonOne:
        "شوف أعمالنا",

      heroButtonTwo:
        "ابدأ معانا",

      heroStatOne:
        "مشاريع ويب",

      heroStatTwo:
        "فيديوهات عملاء",

      heroStatThree:
        "حلول مخصصة",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "مش بس إعلانات.",

      aboutTitle:
        "بنبني <span>نمو حقيقي.</span>",

      aboutText:
        "بنجمع بين الاستراتيجية، الميديا باينج، تحليل السوق، المحتوى وتصميم المواقع عشان كل خطوة في المشروع يكون ليها هدف واضح.",

      aboutPointOneTitle:
        "أفكار تسويقية ناجحة",

      aboutPointOneText:
        "أفكار مبنية على السوق والجمهور.",

      aboutPointTwoTitle:
        "استهداف دقيق",

      aboutPointTwoText:
        "توجيه الميزانية للجمهور المناسب.",

      aboutPointThreeTitle:
        "تحليل وتطوير",

      aboutPointThreeText:
        "نقيس ونحلل ونحسن الأداء باستمرار.",

      servicesKicker:
        "الخدمات",

      servicesTitle:
        "كل حاجة <span>تخدم النمو.</span>",

      servicesText:
        "من أول التحليل والاستراتيجية لحد الإعلانات وتصميم الموقع وتجربة العميل.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "إدارة الحملات المدفوعة واستهداف الجمهور المناسب وتحسين الميزانية.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "بناء استراتيجية رقمية مترابطة تخدم أهداف المشروع.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "تحليل السوق والمنافسين والجمهور قبل اتخاذ القرار.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "مواقع حديثة وسريعة ومصممة حسب هوية واحتياجات المشروع.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "بناء حضور قوي على السوشيال ميديا من خلال محتوى ورسالة واضحة.",

      projectsKicker:
        "مشاريع الويب",

      projectsTitle:
        "شوف شغلنا <span>من هنا.</span>",

      projectsText:
        "كل مشروع بيتفتح داخل الموقع عشان العميل يقدر يشوف التجربة بنفسه.",

      projectType:
        "WEB EXPERIENCE",

      projectButton:
        "افتح المشروع",

      packagesKicker:
        "الباقات والأسعار",

      packagesTitle:
        "اختار <span>المناسب ليك.</span>",

      packagesText:
        "أسعار مبدئية تقدر تعدّلها بعدين حسب الخدمة ومتطلبات العميل.",

      starterName:
        "STARTER",

      starterDescription:
        "بداية مناسبة للمشاريع اللي عايزة حضور وتسويق منظم.",

      currency:
        "جنيه / شهريًا",

      starterFeatureOne:
        "إدارة حملة إعلانية",

      starterFeatureTwo:
        "تحليل أساسي للجمهور",

      starterFeatureThree:
        "محتوى وتسويق أساسي",

      starterFeatureFour:
        "تقرير شهري",

      growthName:
        "GROWTH",

      growthDescription:
        "للمشاريع اللي عايزة نمو أقوى وإدارة تسويقية أكثر شمولًا.",

      growthFeatureOne:
        "إدارة وتحسين الحملات",

      growthFeatureTwo:
        "تحليل السوق والمنافسين",

      growthFeatureThree:
        "استراتيجية محتوى",

      growthFeatureFour:
        "تقارير وتحسين مستمر",

      growthFeatureFive:
        "متابعة شهرية",

      recommended:
        "الأكثر طلبًا",

      choosePackage:
        "اختار الباقة",

      customName:
        "CUSTOM",

      customPrice:
        "على حسب مشروعك",

      customDescription:
        "عايز حاجة مختلفة؟ نقدر نصمم لك خطة وموقع وتجربة رقمية على مقاس مشروعك.",

      customFeatureOne:
        "موقع مخصص",

      customFeatureTwo:
        "هوية وتصميم خاص",

      customFeatureThree:
        "صفحات ووظائف حسب احتياجك",

      customFeatureFour:
        "استراتيجية تسويق مخصصة",

      customButton:
        "اتكلم معانا",

      customSiteTitle:
        "عايز موقع <span>على مزاجك؟</span>",

      customSiteText:
        "نبدأ من الصفر: التصميم، الأقسام، الحركة، الوظائف وتجربة المستخدم — وكل حاجة تتعمل حسب شخصية مشروعك وهدفه.",

      customSiteButton:
        "اطلب موقع مخصص",

      showcaseKicker:
        "معرض الأعمال",

      showcaseTitle:
        "حط صور <span>شغلك هنا.</span>",

      showcaseText:
        "أماكن مجهزة للـCampaigns والـCreatives والـCase Studies والصور.",

      showcaseOne:
        "CAMPAIGN",

      showcaseTwo:
        "CREATIVE",

      showcaseThree:
        "CASE STUDY",

      showcaseFour:
        "BRAND CONTENT",

      imageHint:
        "أضف الصورة هنا",

      videosKicker:
        "آراء العملاء",

      videosTitle:
        "الكلام <span>من العملاء.</span>",

      videosText:
        "الفيديو الأول مميز، وبعده باقي التجارب بنفس الشكل.",

      featured:
        "FEATURED",

      videoOneTitle:
        "تجربة العميل — الفيديو المميز",

      videoGenericTitle:
        "رأي عميل",

      processKicker:
        "طريقة شغلنا",

      processTitle:
        "من الفكرة <span>للنتيجة.</span>",

      processText:
        "خطوات واضحة بدل الشغل العشوائي.",

      processOneTitle:
        "نفهم",

      processOneText:
        "نفهم المشروع والسوق والجمهور والأهداف.",

      processTwoTitle:
        "نخطط",

      processTwoText:
        "نحدد الاستراتيجية والقنوات والرسائل.",

      processThreeTitle:
        "ننفذ",

      processThreeText:
        "ننّفذ الإعلانات والمحتوى والموقع.",

      processFourTitle:
        "نحلل",

      processFourText:
        "نراجع البيانات والأداء باستمرار.",

      processFiveTitle:
        "نكبر",

      processFiveText:
        "نزود الاستثمار في اللي بيحقق نتيجة.",

      contactTitle:
        "جاهز <span>تكبر مشروعك؟</span>",

      contactText:
        "ابعتلنا فكرتك ونشوف إزاي نقدر نحولها لخطة واضحة وتنفيذ قوي.",

      contactButton:
        "ابدأ محادثة",

      footerServices:
        "Digital Marketing · Media Buying · Web · Strategy",

      projectFallbackTitle:
        "الموقع منع التضمين داخل الصفحة.",

      projectFallbackText:
        "ده بسبب إعدادات الموقع نفسه.",

      openWebsite:
        "فتح الموقع",

      videoModalTitle:
        "رأي عميل",

      facebookFallbackTitle:
        "Facebook رفض تضمين الفيديو.",

      facebookFallbackText:
        "روابط Share الحالية ليست direct embed URLs.",

      openFacebook:
        "فتح على Facebook"

    },

    en: {

      navServices:
        "Services",

      navProjects:
        "Projects",

      navPackages:
        "Packages",

      navVideos:
        "Testimonials",

      navContact:
        "Contact",

      headerCta:
        "Start a project",

      heroEyebrow:
        "Digital growth agency",

      heroTitleOne:
        "Grow your business",

      heroTitleTwo:
        "smarter.",

      heroDescription:
        "Winning marketing ideas, precise paid advertising, market and competitor analysis, and web design built around your business goals.",

      heroButtonOne:
        "Explore our work",

      heroButtonTwo:
        "Start with us",

      heroStatOne:
        "Web projects",

      heroStatTwo:
        "Client videos",

      heroStatThree:
        "Custom solutions",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "More than ads.",

      aboutTitle:
        "We build <span>real growth.</span>",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design so every part of the project has a clear purpose.",

      aboutPointOneTitle:
        "Winning marketing ideas",

      aboutPointOneText:
        "Ideas built around the market and audience.",

      aboutPointTwoTitle:
        "Precise targeting",

      aboutPointTwoText:
        "Guide the budget toward the right audience.",

      aboutPointThreeTitle:
        "Continuous improvement",

      aboutPointThreeText:
        "Measure, analyze and improve performance continuously.",

      servicesKicker:
        "Services",

      servicesTitle:
        "Everything <span>serves growth.</span>",

      servicesText:
        "From analysis and strategy to advertising, websites and customer experience.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "Manage paid campaigns, target the right audience and improve budget efficiency.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "Build a connected digital strategy around your business goals.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "Analyze the market, competitors and audience before making decisions.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "Modern, fast websites designed around your brand and business needs.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "Build a strong social presence through clear messaging and engaging content.",

      projectsKicker:
        "Web projects",

      projectsTitle:
        "Explore our work <span>right here.</span>",

      projectsText:
        "Each project opens inside the site so visitors can experience it.",

      projectType:
        "WEB EXPERIENCE",

      projectButton:
        "Open project",

      packagesKicker:
        "Packages & pricing",

      packagesTitle:
        "Choose what <span>fits you.</span>",

      packagesText:
        "Starter prices that you can customize later based on the service and client requirements.",

      starterName:
        "STARTER",

      starterDescription:
        "A clean starting point for businesses that need organized marketing and presence.",

      currency:
        "EGP / month",

      starterFeatureOne:
        "One campaign management",

      starterFeatureTwo:
        "Basic audience analysis",

      starterFeatureThree:
        "Basic marketing content",

      starterFeatureFour:
        "Monthly report",

      growthName:
        "GROWTH",

      growthDescription:
        "For businesses that want stronger growth and broader marketing management.",

      growthFeatureOne:
        "Campaign management & optimization",

      growthFeatureTwo:
        "Market & competitor analysis",

      growthFeatureThree:
        "Content strategy",

      growthFeatureFour:
        "Reporting & continuous optimization",

      growthFeatureFive:
        "Monthly follow-up",

      recommended:
        "Most popular",

      choosePackage:
        "Choose package",

      customName:
        "CUSTOM",

      customPrice:
        "Based on your project",

      customDescription:
        "Need something different? We can build a custom strategy, website and digital experience around your project.",

      customFeatureOne:
        "Custom website",

      customFeatureTwo:
        "Custom visual direction",

      customFeatureThree:
        "Custom pages & functionality",

      customFeatureFour:
        "Custom marketing strategy",

      customButton:
        "Talk to us",

      customSiteTitle:
        "Need a website <span>your way?</span>",

      customSiteText:
        "We can start from zero: design, sections, motion, functionality and UX — all built around your brand and business goals.",

      customSiteButton:
        "Request a custom website",

      showcaseKicker:
        "Work showcase",

      showcaseTitle:
        "Put your work <span>right here.</span>",

      showcaseText:
        "Prepared spaces for campaigns, creative assets, case studies and images.",

      showcaseOne:
        "CAMPAIGN",

      showcaseTwo:
        "CREATIVE",

      showcaseThree:
        "CASE STUDY",

      showcaseFour:
        "BRAND CONTENT",

      imageHint:
        "Add image here",

      videosKicker:
        "Client feedback",

      videosTitle:
        "Straight <span>from clients.</span>",

      videosText:
        "The first video is featured, followed by the remaining experiences.",

      featured:
        "FEATURED",

      videoOneTitle:
        "Client experience — featured video",

      videoGenericTitle:
        "Client feedback",

      processKicker:
        "Our process",

      processTitle:
        "From idea <span>to result.</span>",

      processText:
        "Clear steps instead of random execution.",

      processOneTitle:
        "Discover",

      processOneText:
        "Understand the business, market, audience and goals.",

      processTwoTitle:
        "Plan",

      processTwoText:
        "Define strategy, channels and messaging.",

      processThreeTitle:
        "Execute",

      processThreeText:
        "Execute advertising, content and web.",

      processFourTitle:
        "Analyze",

      processFourText:
        "Review data and performance continuously.",

      processFiveTitle:
        "Scale",

      processFiveText:
        "Invest more in what creates results.",

      contactTitle:
        "Ready to <span>grow your business?</span>",

      contactText:
        "Send us your idea and let's turn it into a clear plan and strong execution.",

      contactButton:
        "Start a conversation",

      footerServices:
        "Digital Marketing · Media Buying · Web · Strategy",

      projectFallbackTitle:
        "The website blocked iframe embedding.",

      projectFallbackText:
        "This comes from the website's own settings.",

      openWebsite:
        "Open website",

      videoModalTitle:
        "Client feedback",

      facebookFallbackTitle:
        "Facebook rejected the video embed.",

      facebookFallbackText:
        "The current Share URLs are not direct embed URLs.",

      openFacebook:
        "Open on Facebook"

    }

  };

  /* =====================================================
     INITIALIZATION
  ====================================================== */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      applyLanguage(language);
      applyTheme(theme);

      initLoader();
      initHeader();
      initMobileMenu();
      initReveal();
      initTilt();
      initMagnetic();
      initProjects();
      initVideos();
      initModals();
      initYear();

    }
  );

  /* =====================================================
     LOADER
  ====================================================== */

  function initLoader() {

    window.addEventListener(
      "load",
      () => {

        body.classList.add(
          "loaded"
        );

      },
      {
        once: true
      }
    );

    window.setTimeout(
      () => {

        body.classList.add(
          "loaded"
        );

      },
      1400
    );

  }

  /* =====================================================
     LANGUAGE
  ====================================================== */

  function applyLanguage(nextLanguage) {

    language =
      nextLanguage === "en"
        ? "en"
        : "ar";

    root.lang =
      language;

    root.dir =
      language === "ar"
        ? "rtl"
        : "ltr";

    document
      .querySelectorAll(
        "[data-i18n]"
      )
      .forEach(
        (element) => {

          const key =
            element.dataset.i18n;

          const value =
            translations[
              language
            ][key];

          if (
            typeof value ===
            "string"
          ) {

            element.textContent =
              value;

          }

        }
      );

    document
      .querySelectorAll(
        "[data-i18n-html]"
      )
      .forEach(
        (element) => {

          const key =
            element.dataset.i18nHtml;

          const value =
            translations[
              language
            ][key];

          if (
            typeof value ===
            "string"
          ) {

            element.innerHTML =
              value;

          }

        }
      );

    languageToggle.textContent =
      language === "ar"
        ? "EN"
        : "AR";

    /*
      Package prices intentionally use Arabic digits
      in Arabic and western digits in English.
    */

    document
      .querySelectorAll(
        "[data-price-ar]"
      )
      .forEach(
        (element) => {

          element.textContent =
            language === "ar"
              ? element.dataset.priceAr
              : element.dataset.priceEn;

        }
      );

    localStorage.setItem(
      "mahmoud-language",
      language
    );

  }

  languageToggle?.addEventListener(
    "click",
    () => {

      applyLanguage(
        language === "ar"
          ? "en"
          : "ar"
      );

    }
  );

  /* =====================================================
     THEME
  ====================================================== */

  function applyTheme(nextTheme) {

    theme =
      nextTheme === "light"
        ? "light"
        : "dark";

    body.classList.toggle(
      "light-theme",
      theme === "light"
    );

    const themeMeta =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    if (themeMeta) {

      themeMeta.content =
        theme === "light"
          ? "#f1f1ec"
          : "#070707";

    }

    localStorage.setItem(
      "mahmoud-theme",
      theme
    );

  }

  themeToggle?.addEventListener(
    "click",
    () => {

      applyTheme(
        theme === "dark"
          ? "light"
          : "dark"
      );

    }
  );

  /* =====================================================
     HEADER
  ====================================================== */

  function initHeader() {

    if (!header) {
      return;
    }

    const update =
      () => {

        header.classList.toggle(
          "scrolled",
          window.scrollY > 15
        );

      };

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true
      }
    );

    update();

  }

  /* =====================================================
     MOBILE MENU
  ====================================================== */

  function initMobileMenu() {

    if (
      !menuToggle ||
      !mobileNav
    ) {
      return;
    }

    function close() {

      mobileNav.classList.remove(
        "open"
      );

      menuToggle.classList.remove(
        "active"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

    menuToggle.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileNav.classList.toggle(
            "open"
          );

        menuToggle.classList.toggle(
          "active",
          isOpen
        );

        menuToggle.setAttribute(
          "aria-expanded",
          String(isOpen)
        );

      }
    );

    mobileNav
      .querySelectorAll("a")
      .forEach(
        (link) => {

          link.addEventListener(
            "click",
            close
          );

        }
      );

    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth >
          1080
        ) {

          close();

        }

      }
    );

  }

  /* =====================================================
     REVEAL
  ====================================================== */

  function initReveal() {

    const elements =
      document.querySelectorAll(
        ".reveal"
      );

    if (!elements.length) {
      return;
    }

    if (reducedMotion) {

      elements.forEach(
        (element) => {

          element.classList.add(
            "visible"
          );

        }
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        (
          entries,
          instance
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

              instance.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold:
            0.1,

          rootMargin:
            "0px 0px -45px 0px"
        }
      );

    elements.forEach(
      (element) => {

        observer.observe(
          element
        );

      }
    );

  }

  /* =====================================================
     3D TILT
  ====================================================== */

  function initTilt() {

    if (
      touchDevice ||
      reducedMotion
    ) {
      return;
    }

    const cards =
      document.querySelectorAll(
        ".tilt-card"
      );

    cards.forEach(
      (card) => {

        let frame =
          null;

        function reset() {

          if (frame) {

            cancelAnimationFrame(
              frame
            );

          }

          card.style.transform =
            "";

        }

        function move(event) {

          const rect =
            card.getBoundingClientRect();

          const x =
            (
              event.clientX -
              rect.left
            ) /
            rect.width;

          const y =
            (
              event.clientY -
              rect.top
            ) /
            rect.height;

          const rotateX =
            (0.5 - y) * 5;

          const rotateY =
            (x - 0.5) * 7;

          if (frame) {

            cancelAnimationFrame(
              frame
            );

          }

          frame =
            requestAnimationFrame(
              () => {

                card.style.transform =
                  `
                    perspective(1400px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                  `;

              }
            );

        }

        card.addEventListener(
          "pointermove",
          move,
          {
            passive: true
          }
        );

        card.addEventListener(
          "pointerleave",
          reset
        );

      }
    );

  }

  /* =====================================================
     MAGNETIC BUTTONS
  ====================================================== */

  function initMagnetic() {

    if (
      touchDevice ||
      reducedMotion
    ) {
      return;
    }

    document
      .querySelectorAll(
        ".button"
      )
      .forEach(
        (button) => {

          let frame =
            null;

          button.addEventListener(
            "pointermove",
            (event) => {

              const rect =
                button.getBoundingClientRect();

              const x =
                event.clientX -
                (
                  rect.left +
                  rect.width / 2
                );

              const y =
                event.clientY -
                (
                  rect.top +
                  rect.height / 2
                );

              if (frame) {

                cancelAnimationFrame(
                  frame
                );

              }

              frame =
                requestAnimationFrame(
                  () => {

                    button.style.transform =
                      `
                        translate3d(
                          ${x * 0.07}px,
                          ${y * 0.09}px,
                          0
                        )
                      `;

                  }
                );

            },
            {
              passive: true
            }
          );

          button.addEventListener(
            "pointerleave",
            () => {

              if (frame) {

                cancelAnimationFrame(
                  frame
                );

              }

              button.style.transform =
                "";

            }
          );

        }
      );

  }

  /* =====================================================
     PROJECT MODAL
  ====================================================== */

  function initProjects() {

    document
      .querySelectorAll(
        ".project-card"
      )
      .forEach(
        (card) => {

          const button =
            card.querySelector(
              ".project-button"
            );

          if (!button) {
            return;
          }

          button.addEventListener(
            "click",
            () => {

              const title =
                card.dataset.projectTitle ||
                "Project";

              const url =
                card.dataset.projectUrl ||
                "";

              openProject(
                title,
                url
              );

            }
          );

        }
      );

  }

  function openProject(
    title,
    url
  ) {

    projectModalTitle.textContent =
      title;

    projectExternalLink.href =
      url || "#";

    projectFallback.classList.remove(
      "show"
    );

    projectFrame.src =
      "about:blank";

    openModal(
      projectModal
    );

    window.setTimeout(
      () => {

        if (
          projectModal.classList.contains(
            "open"
          )
        ) {

          projectFrame.src =
            url;

        }

      },
      80
    );

    /*
      We intentionally do NOT force a short timeout fallback.
      A normal website may need a few seconds to load.
    */

  }

  /* =====================================================
     FACEBOOK VIDEOS
  ====================================================== */

  function initVideos() {

    document
      .querySelectorAll(
        ".video-play"
      )
      .forEach(
        (button) => {

          button.addEventListener(
            "click",
            () => {

              const url =
                button.dataset.videoUrl ||
                "";

              openVideo(
                url
              );

            }
          );

        }
      );

  }

  function getFacebookEmbed(
    url
  ) {

    return (
      "https://www.facebook.com/plugins/video.php" +
      "?href=" +
      encodeURIComponent(
        url
      ) +
      "&show_text=false" +
      "&width=1280"
    );

  }

  function openVideo(
    url
  ) {

    videoExternalLink.href =
      url || "#";

    videoFallback.classList.remove(
      "show"
    );

    facebookVideoFrame.src =
      "about:blank";

    openModal(
      videoModal
    );

    window.setTimeout(
      () => {

        if (!url) {

          videoFallback.classList.add(
            "show"
          );

          return;
        }

        facebookVideoFrame.src =
          getFacebookEmbed(
            url
          );

      },
      80
    );

    /*
      IMPORTANT:
      Facebook Share URLs may not resolve into embeddable
      content. We cannot force Facebook to allow framing.
    */

    window.setTimeout(
      () => {

        if (
          videoModal.classList.contains(
            "open"
          )
        ) {

          videoFallback.classList.add(
            "show"
          );

        }

      },
      9000
    );

  }

  /* =====================================================
     MODAL HELPERS
  ====================================================== */

  function openModal(
    modal
  ) {

    if (!modal) {
      return;
    }

    modal.classList.add(
      "open"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    body.classList.add(
      "modal-open"
    );

  }

  function closeModal(
    modal
  ) {

    if (!modal) {
      return;
    }

    modal.classList.remove(
      "open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (
      !projectModal.classList.contains(
        "open"
      ) &&
      !videoModal.classList.contains(
        "open"
      )
    ) {

      body.classList.remove(
        "modal-open"
      );

    }

    if (
      modal === projectModal
    ) {

      projectFrame.src =
        "about:blank";

    }

    if (
      modal === videoModal
    ) {

      facebookVideoFrame.src =
        "about:blank";

    }

  }

  function initModals() {

    projectModalClose?.addEventListener(
      "click",
      () => {

        closeModal(
          projectModal
        );

      }
    );

    videoModalClose?.addEventListener(
      "click",
      () => {

        closeModal(
          videoModal
        );

      }
    );

    document
      .querySelectorAll(
        ".modal-background"
      )
      .forEach(
        (background) => {

          background.addEventListener(
            "click",
            () => {

              closeModal(
                projectModal
              );

              closeModal(
                videoModal
              );

            }
          );

        }
      );

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key !==
          "Escape"
        ) {
          return;
        }

        closeModal(
          projectModal
        );

        closeModal(
          videoModal
        );

        mobileNav?.classList.remove(
          "open"
        );

        menuToggle?.classList.remove(
          "active"
        );

        menuToggle?.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  }

  /* =====================================================
     YEAR
  ====================================================== */

  function initYear() {

    if (year) {

      year.textContent =
        String(
          new Date().getFullYear()
        );

    }

  }

})();