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

  const loader =
    document.getElementById(
      "loader"
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

  const projectFrame =
    document.getElementById(
      "projectFrame"
    );

  const projectTitle =
    document.getElementById(
      "projectModalTitle"
    );

  const projectFallback =
    document.getElementById(
      "projectFallback"
    );

  const projectExternalLink =
    document.getElementById(
      "projectExternalLink"
    );

  const projectModalClose =
    document.getElementById(
      "projectModalClose"
    );

  const videoModal =
    document.getElementById(
      "videoModal"
    );

  const videoFrame =
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

  const videoModalClose =
    document.getElementById(
      "videoModalClose"
    );

  const yearElement =
    document.getElementById(
      "year"
    );

  /* =====================================================
     STATE
  ====================================================== */

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
        "العملاء",

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
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع تساعد مشروعك يكبر بشكل واضح.",

      heroButtonOne:
        "شوف أعمالنا",

      heroButtonTwo:
        "شوف الباقات",

      proofOne:
        "مشاريع ويب مباشرة",

      proofTwo:
        "فيديوهات عملاء",

      proofThree:
        "حلول مخصصة",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "مش بس إعلانات.",

      aboutTitle:
        "بنبني <span>نمو حقيقي.</span>",

      aboutText:
        "بنجمع الاستراتيجية والميديا باينج وتحليل السوق والمحتوى وتصميم المواقع في منظومة واحدة هدفها إنها تخلي المشروع ينمو بطريقة أوضح وأذكى.",

      aboutOneTitle:
        "أفكار تسويقية ناجحة",

      aboutOneText:
        "أفكار مبنية على الجمهور والسوق.",

      aboutTwoTitle:
        "إعلانات باستهداف دقيق",

      aboutTwoText:
        "نوجّه الميزانية للناس الأقرب للهدف.",

      aboutThreeTitle:
        "تحليل مستمر",

      aboutThreeText:
        "نقيس ونراجع ونطوّر الأداء باستمرار.",

      servicesKicker:
        "الخدمات",

      servicesTitle:
        "كل حاجة <span>تخدم النمو.</span>",

      servicesText:
        "من أول تحليل السوق والاستراتيجية لحد الإعلان والموقع وتجربة العميل.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "إدارة الحملات المدفوعة واستهداف الجمهور وتحسين الإنفاق الإعلاني.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "استراتيجية رقمية مترابطة تخدم أهداف المشروع من أكثر من قناة.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "فهم المنافسين والجمهور والفرص قبل اتخاذ قرارات التسويق.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "مواقع حديثة وسريعة ومتوافقة مع هوية المشروع وأهدافه.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "بناء حضور اجتماعي واضح، محتوى جذاب ورسالة ثابتة للبراند.",

      projectsKicker:
        "مشاريع الويب",

      projectsTitle:
        "مشاريع <span>حقيقية.</span>",

      projectsText:
        "العميل يقدر يشوف المشاريع من داخل البورتفوليو نفسه.",

      projectOpen:
        "افتح المشروع",

      packagesKicker:
        "الباقات والأسعار",

      packagesTitle:
        "اختار <span>المناسب ليك.</span>",

      packagesText:
        "أرقام مبدئية تقدر تغيّرها بعدين حسب خدماتك وتسعيرك الحقيقي.",

      starterName:
        "STARTER",

      monthly:
        "جنيه / شهريًا",

      starterDescription:
        "باقة بداية مناسبة للمشاريع الصغيرة اللي عايزة تسويق منظم.",

      starterOne:
        "إدارة حملة إعلانية",

      starterTwo:
        "تحليل أساسي للجمهور",

      starterThree:
        "خطة محتوى أساسية",

      starterFour:
        "تقرير شهري",

      growthName:
        "GROWTH",

      growthDescription:
        "للمشاريع اللي عايزة إدارة ونمو بشكل أكثر شمولًا.",

      growthOne:
        "إدارة وتحسين الحملات",

      growthTwo:
        "تحليل السوق والمنافسين",

      growthThree:
        "استراتيجية محتوى",

      growthFour:
        "تقارير وتحسين مستمر",

      growthFive:
        "متابعة شهرية",

      recommended:
        "الأكثر طلبًا",

      choosePackage:
        "اختار الباقة",

      customName:
        "CUSTOM",

      customPrice:
        "على حسب المشروع",

      customDescription:
        "مشروعك مختلف؟ نعمل لك خطة وموقع وتجربة رقمية على مقاسه.",

      customOne:
        "موقع مخصص",

      customTwo:
        "تصميم وهوية خاصة",

      customThree:
        "صفحات ووظائف حسب الاحتياج",

      customFour:
        "استراتيجية تسويق مخصصة",

      customButton:
        "اتكلم معانا",

      customSiteTitle:
        "عايز موقع <span>على مزاجك؟</span>",

      customSiteText:
        "نقدر نبدأ من الصفر ونصمم موقع يناسب شخصيتك، خدماتك، جمهورك وأهدافك.",

      customSiteButton:
        "اطلب موقع مخصص",

      showcaseKicker:
        "معرض الأعمال",

      showcaseTitle:
        "حط شغلك <span>هنا.</span>",

      showcaseText:
        "أماكن جاهزة تضيف فيها صور الحملات والكرياتيف والـCase Studies.",

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
        "أول فيديو مميز، وبعده باقي الفيديوهات.",

      featured:
        "FEATURED",

      videoOneTitle:
        "تجربة عميل — الفيديو المميز",

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
        "ننّفذ",

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
        "الموقع منع التضمين.",

      projectFallbackText:
        "ده من إعدادات أمان الموقع نفسه.",

      openWebsite:
        "فتح الموقع",

      videoModalTitle:
        "رأي عميل",

      facebookFallbackTitle:
        "Facebook رفض تضمين الفيديو.",

      facebookFallbackText:
        "رابط Share الحالي مش direct embed URL.",

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
        "Clients",

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
        "View packages",

      proofOne:
        "Live web projects",

      proofTwo:
        "Client videos",

      proofThree:
        "Custom solutions",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "More than ads.",

      aboutTitle:
        "We build <span>real growth.</span>",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design into one system built to help businesses grow with more clarity.",

      aboutOneTitle:
        "Winning marketing ideas",

      aboutOneText:
        "Ideas built around the market and audience.",

      aboutTwoTitle:
        "Precise paid advertising",

      aboutTwoText:
        "Guide the budget toward the right audience.",

      aboutThreeTitle:
        "Continuous analysis",

      aboutThreeText:
        "Measure, review and improve performance.",

      servicesKicker:
        "Services",

      servicesTitle:
        "Everything <span>serves growth.</span>",

      servicesText:
        "From market analysis and strategy to advertising, websites and customer experience.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "Manage paid campaigns, target the right audience and improve ad spend.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "Build a connected digital strategy around your business goals.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "Understand competitors, audience and opportunities before making decisions.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "Modern, fast websites built around your brand and goals.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "Build a clear social presence through engaging content and consistent messaging.",

      projectsKicker:
        "Web projects",

      projectsTitle:
        "Real <span>projects.</span>",

      projectsText:
        "Visitors can explore the projects from inside the portfolio.",

      projectOpen:
        "Open project",

      packagesKicker:
        "Packages & pricing",

      packagesTitle:
        "Choose what <span>fits you.</span>",

      packagesText:
        "Starting prices that you can change later based on your actual services and pricing.",

      starterName:
        "STARTER",

      monthly:
        "EGP / month",

      starterDescription:
        "A good starting package for smaller businesses that need organized marketing.",

      starterOne:
        "One ad campaign",

      starterTwo:
        "Basic audience analysis",

      starterThree:
        "Basic content plan",

      starterFour:
        "Monthly report",

      growthName:
        "GROWTH",

      growthDescription:
        "For businesses that need broader management and stronger growth.",

      growthOne:
        "Campaign management & optimization",

      growthTwo:
        "Market & competitor analysis",

      growthThree:
        "Content strategy",

      growthFour:
        "Continuous reporting & optimization",

      growthFive:
        "Monthly follow-up",

      recommended:
        "Most popular",

      choosePackage:
        "Choose package",

      customName:
        "CUSTOM",

      customPrice:
        "Based on the project",

      customDescription:
        "Need something different? We can build a strategy, website and digital experience around your project.",

      customOne:
        "Custom website",

      customTwo:
        "Custom visual identity",

      customThree:
        "Custom pages & functionality",

      customFour:
        "Custom marketing strategy",

      customButton:
        "Talk to us",

      customSiteTitle:
        "Need a website <span>your way?</span>",

      customSiteText:
        "We can start from zero and create a website around your brand, services, audience and goals.",

      customSiteButton:
        "Request custom website",

      showcaseKicker:
        "Work showcase",

      showcaseTitle:
        "Put your work <span>here.</span>",

      showcaseText:
        "Prepared spaces for campaigns, creative work and case studies.",

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
        "The first video is featured, followed by the remaining videos.",

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
        "Review performance and data continuously.",

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
        "This site blocked iframe embedding.",

      projectFallbackText:
        "This comes from the website's own security settings.",

      openWebsite:
        "Open website",

      videoModalTitle:
        "Client feedback",

      facebookFallbackTitle:
        "Facebook rejected the video embed.",

      facebookFallbackText:
        "The current URL is a Share link rather than a direct embed URL.",

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

      applyLanguage(
        language
      );

      applyTheme(
        theme
      );

      initLoader();
      initHeader();
      initMobileMenu();
      initReveal();
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

  function applyLanguage(
    nextLanguage
  ) {

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

    languageToggle.textContent =
      language === "ar"
        ? "EN"
        : "AR";

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

  function applyTheme(
    nextTheme
  ) {

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

    const updateHeader =
      () => {

        header.classList.toggle(
          "scrolled",
          window.scrollY > 15
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

    const closeMenu =
      () => {

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

      };

    menuToggle.addEventListener(
      "click",
      () => {

        const open =
          mobileNav.classList.toggle(
            "open"
          );

        menuToggle.classList.toggle(
          "active",
          open
        );

        menuToggle.setAttribute(
          "aria-expanded",
          String(open)
        );

      }
    );

    mobileNav
      .querySelectorAll("a")
      .forEach(
        (link) => {

          link.addEventListener(
            "click",
            closeMenu
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

          closeMenu();

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

    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {

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
          observerInstance
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

              observerInstance.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold:
            0.1,

          rootMargin:
            "0px 0px -40px 0px"
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
     PROJECTS
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
              ".project-open"
            );

          if (!button) {
            return;
          }

          button.addEventListener(
            "click",
            () => {

              const title =
                card.dataset.title ||
                "Project";

              const url =
                card.dataset.url ||
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

    projectTitle.textContent =
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
      70
    );

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

  function buildFacebookEmbedUrl(
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

    videoFrame.src =
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

        videoFrame.src =
          buildFacebookEmbedUrl(
            url
          );

      },
      70
    );

    /*
      Facebook Share URLs are not guaranteed to be embeddable.
      We give the iframe enough time to load before displaying
      the fallback.
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
      8500
    );

  }

  /* =====================================================
     MODALS
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
      modal ===
      projectModal
    ) {

      projectFrame.src =
        "about:blank";

    }

    if (
      modal ===
      videoModal
    ) {

      videoFrame.src =
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
        ".modal-backdrop"
      )
      .forEach(
        (backdrop) => {

          backdrop.addEventListener(
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
          event.key !== "Escape"
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

    if (yearElement) {

      yearElement.textContent =
        String(
          new Date().getFullYear()
        );

    }

  }

})();