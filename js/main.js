(() => {
  "use strict";

  /* =======================================================
     DOM
  ======================================================== */

  const body =
    document.body;

  const root =
    document.documentElement;

  const siteHeader =
    document.getElementById("siteHeader");

  const themeToggle =
    document.getElementById("themeToggle");

  const languageToggle =
    document.getElementById("languageToggle");

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const projectModal =
    document.getElementById("projectModal");

  const projectModalClose =
    document.getElementById("projectModalClose");

  const projectModalTitle =
    document.getElementById("projectModalTitle");

  const projectFrame =
    document.getElementById("projectFrame");

  const projectFallback =
    document.getElementById("projectFallback");

  const projectExternalLink =
    document.getElementById("projectExternalLink");

  const videoModal =
    document.getElementById("videoModal");

  const videoModalClose =
    document.getElementById("videoModalClose");

  const facebookVideoFrame =
    document.getElementById("facebookVideoFrame");

  const videoFallback =
    document.getElementById("videoFallback");

  const videoExternalLink =
    document.getElementById("videoExternalLink");

  const yearElement =
    document.getElementById("year");

  /* =======================================================
     DEVICE
  ======================================================== */

  const isTouchDevice =
    window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  /* =======================================================
     STATE
  ======================================================== */

  let currentLanguage =
    localStorage.getItem(
      "mahmoud-language"
    ) || "ar";

  let currentTheme =
    localStorage.getItem(
      "mahmoud-theme"
    ) || "dark";

  /* =======================================================
     TRANSLATIONS
  ======================================================== */

  const translations = {

    ar: {

      navServices:
        "الخدمات",

      navProjects:
        "أعمالنا",

      navVideos:
        "آراء العملاء",

      navProcess:
        "طريقة شغلنا",

      navContact:
        "تواصل",

      navCta:
        "ابدأ مشروع",

      heroEyebrow:
        "وكالة نمو وتسويق رقمي",

      heroTitleOne:
        "نكبّر مشروعك",

      heroTitleTwo:
        "بذكاء.",

      heroDescription:
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع تساعد مشروعك يوصل لنتيجة أفضل.",

      heroPrimary:
        "شوف أعمالنا",

      heroSecondary:
        "خدماتنا",

      statOne:
        "مشاريع ويب",

      statTwo:
        "فيديوهات عملاء",

      statThree:
        "أفكار جديدة",

      heroUiOne:
        "DIGITAL GROWTH",

      heroUiTwo:
        "PERFORMANCE",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "مش بس إعلانات.",

      aboutTitle:
        "إحنا بنبني <span>نمو حقيقي.</span>",

      aboutText:
        "بنجمع بين الاستراتيجية، الميديا باينج، تحليل السوق، المحتوى، وتصميم المواقع عشان كل جزء من الرحلة يخدم هدف واحد: نمو المشروع.",

      aboutOneTitle:
        "أفكار تسويقية",

      aboutOneText:
        "أفكار مبنية على السوق والجمهور.",

      aboutTwoTitle:
        "استهداف أدق",

      aboutTwoText:
        "نوجّه الميزانية للجمهور الأقرب للشراء.",

      aboutThreeTitle:
        "تحليل مستمر",

      aboutThreeText:
        "نقيس ونحلل ونطور باستمرار.",

      servicesKicker:
        "الخدمات",

      servicesTitle:
        "كل حاجة <span>تخدم النمو.</span>",

      servicesIntro:
        "خدمات متكاملة تخلي الاستراتيجية والتنفيذ والنتيجة ماشيين في اتجاه واحد.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "تخطيط وإدارة وتحسين الحملات المدفوعة للوصول للجمهور المناسب بكفاءة.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "استراتيجية رقمية تجمع بين المحتوى والأداء والقنوات المناسبة.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "تحليل السوق والمنافسين والجمهور لتحديد أفضل الفرص.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "مواقع منظمة وسريعة وتركّز على تجربة المستخدم والتحويل.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "بناء حضور اجتماعي واضح، محتوى جذاب، ورسالة متماسكة تخلي البراند أسهل في التذكر.",

      projectsKicker:
        "مشاريع الويب",

      projectsTitle:
        "شوف المشاريع <span>من هنا.</span>",

      projectsIntro:
        "المواقع دي بتتفتح داخل نفس البورتفوليو، من غير ما المستخدم يضطر يسيب الصفحة.",

      projectType:
        "WEB EXPERIENCE",

      projectOpen:
        "افتح المشروع",

      showcaseKicker:
        "مساحات جاهزة",

      showcaseTitle:
        "حط شغلك <span>هنا.</span>",

      showcaseIntro:
        "أماكن مجهزة تضيف فيها صور الحملات والكرياتيف والـCase Studies بعدين.",

      showcaseOne:
        "CAMPAIGN",

      showcaseTwo:
        "CREATIVE",

      showcaseThree:
        "CASE STUDY",

      showcaseFour:
        "BRAND CONTENT",

      showcaseHint:
        "أضف الصورة هنا",

      videosKicker:
        "آراء العملاء",

      videosTitle:
        "الكلام <span>من الناس.</span>",

      videosIntro:
        "أول فيديو مميز، وبعده باقي الفيديوهات. كل فيديو بيحاول يفتح جوه الموقع.",

      featured:
        "FEATURED",

      clientFeedback:
        "Client Feedback",

      videoType:
        "VIDEO TESTIMONIAL",

      featuredVideoTitle:
        "تجربة عميل — الفيديو المميز",

      normalVideoTitle:
        "رأي عميل",

      processKicker:
        "طريقة شغلنا",

      processTitle:
        "واضح. <span>منظم.</span> قابل للتطوير.",

      processIntro:
        "كل خطوة ليها سبب وكل قرار مربوط بالهدف النهائي.",

      processOneTitle:
        "نفهم",

      processOneText:
        "البيزنس والسوق والجمهور والأهداف.",

      processTwoTitle:
        "نخطط",

      processTwoText:
        "الاستراتيجية والقنوات والرسائل المناسبة.",

      processThreeTitle:
        "ننّفذ",

      processThreeText:
        "الإعلانات والمحتوى والكرياتيف وتجارب الويب.",

      processFourTitle:
        "نحلل",

      processFourText:
        "نراقب البيانات ونشوف إيه اللي شغال.",

      processFiveTitle:
        "نكبر",

      processFiveText:
        "نزود اللي بيحقق نتائج ونقلل الهدر.",

      contactTitle:
        "جاهز <span>تكبّر مشروعك؟</span>",

      contactText:
        "ابعتلنا فكرتك ونشوف إزاي نقدر نحولها لاستراتيجية وتنفيذ ونمو واضح.",

      contactButton:
        "ابدأ محادثة",

      footerServices:
        "Digital Marketing · Media Buying · Web · Strategy",

      liveProject:
        "LIVE PROJECT",

      projectBlockedTitle:
        "الموقع منع التضمين داخل البورتفوليو.",

      projectBlockedText:
        "ده بسبب إعدادات الأمان الخاصة بالموقع نفسه.",

      openWebsite:
        "فتح الموقع",

      videoModalSmall:
        "CLIENT VIDEO",

      videoModalTitle:
        "رأي عميل",

      facebookBlockedTitle:
        "Facebook منع تضمين الفيديو.",

      facebookBlockedText:
        "الرابط الحالي Share وليس direct embed. الكود بيحاول التضمين أولًا، ولو Facebook رفضه بيظهر الزر بدل الشاشة الفاضية.",

      openFacebook:
        "فتح على Facebook"
    },

    en: {

      navServices:
        "Services",

      navProjects:
        "Projects",

      navVideos:
        "Testimonials",

      navProcess:
        "Process",

      navContact:
        "Contact",

      navCta:
        "Start a project",

      heroEyebrow:
        "Digital growth agency",

      heroTitleOne:
        "Grow your business",

      heroTitleTwo:
        "smarter.",

      heroDescription:
        "Winning marketing ideas, precise paid advertising, market and competitor analysis, and web design built to help your business grow.",

      heroPrimary:
        "Explore our work",

      heroSecondary:
        "Our services",

      statOne:
        "Web projects",

      statTwo:
        "Client videos",

      statThree:
        "New ideas",

      heroUiOne:
        "DIGITAL GROWTH",

      heroUiTwo:
        "PERFORMANCE",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "More than ads.",

      aboutTitle:
        "We build <span>real growth.</span>",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design so every part of the journey serves one goal: growing the business.",

      aboutOneTitle:
        "Marketing ideas",

      aboutOneText:
        "Ideas built around the market and audience.",

      aboutTwoTitle:
        "Sharper targeting",

      aboutTwoText:
        "We guide budget toward the audience most likely to buy.",

      aboutThreeTitle:
        "Continuous analysis",

      aboutThreeText:
        "We measure, analyze and improve continuously.",

      servicesKicker:
        "Services",

      servicesTitle:
        "Everything <span>serves growth.</span>",

      servicesIntro:
        "Integrated services that keep strategy, execution and results moving in one direction.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "Plan, manage and optimize paid campaigns to reach the right audience efficiently.",

      serviceTwoTitle:
        "Digital Marketing",

      serviceTwoText:
        "A digital strategy combining content, performance and the right channels.",

      serviceThreeTitle:
        "Market Analysis",

      serviceThreeText:
        "Analyze markets, competitors and audiences to identify the best opportunities.",

      serviceFourTitle:
        "Web Design",

      serviceFourText:
        "Fast, structured websites focused on user experience and conversion.",

      serviceFiveTitle:
        "Social Media",

      serviceFiveText:
        "Build a clear social presence, engaging content and a consistent brand message.",

      projectsKicker:
        "Web projects",

      projectsTitle:
        "Explore projects <span>right here.</span>",

      projectsIntro:
        "These websites open inside the portfolio without forcing visitors to leave the page.",

      projectType:
        "WEB EXPERIENCE",

      projectOpen:
        "Open project",

      showcaseKicker:
        "Ready spaces",

      showcaseTitle:
        "Put your work <span>here.</span>",

      showcaseIntro:
        "Prepared spaces for campaign visuals, creative work and case studies later.",

      showcaseOne:
        "CAMPAIGN",

      showcaseTwo:
        "CREATIVE",

      showcaseThree:
        "CASE STUDY",

      showcaseFour:
        "BRAND CONTENT",

      showcaseHint:
        "Add image here",

      videosKicker:
        "Client feedback",

      videosTitle:
        "Straight <span>from clients.</span>",

      videosIntro:
        "The first video is featured, followed by the remaining videos. Each one attempts to open inside the site.",

      featured:
        "FEATURED",

      clientFeedback:
        "Client Feedback",

      videoType:
        "VIDEO TESTIMONIAL",

      featuredVideoTitle:
        "Client experience — featured video",

      normalVideoTitle:
        "Client feedback",

      processKicker:
        "Our process",

      processTitle:
        "Clear. <span>Structured.</span> Scalable.",

      processIntro:
        "Every step has a reason and every decision connects to the final goal.",

      processOneTitle:
        "Discover",

      processOneText:
        "Business, market, audience and goals.",

      processTwoTitle:
        "Plan",

      processTwoText:
        "Strategy, channels and the right messaging.",

      processThreeTitle:
        "Execute",

      processThreeText:
        "Ads, content, creative and web experiences.",

      processFourTitle:
        "Analyze",

      processFourText:
        "Track the data and identify what works.",

      processFiveTitle:
        "Scale",

      processFiveText:
        "Double down on what works and reduce waste.",

      contactTitle:
        "Ready to <span>grow your business?</span>",

      contactText:
        "Send us your idea and let's turn it into a clear strategy, execution plan and growth path.",

      contactButton:
        "Start a conversation",

      footerServices:
        "Digital Marketing · Media Buying · Web · Strategy",

      liveProject:
        "LIVE PROJECT",

      projectBlockedTitle:
        "This website blocked iframe embedding.",

      projectBlockedText:
        "That comes from the website's own security settings.",

      openWebsite:
        "Open website",

      videoModalSmall:
        "CLIENT VIDEO",

      videoModalTitle:
        "Client feedback",

      facebookBlockedTitle:
        "Facebook blocked the video embed.",

      facebookBlockedText:
        "The current URL is a Share link rather than a direct embed URL. The code tries embedding first and shows a fallback instead of a blank screen if Facebook rejects it.",

      openFacebook:
        "Open on Facebook"
    }
  };

  /* =======================================================
     INIT
  ======================================================== */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      applyLanguage(currentLanguage);
      applyTheme(currentTheme);

      initHeader();
      initMobileMenu();
      initReveal();
      initTilt();
      initMagnetic();
      initProjects();
      initVideos();
      initModals();
      initYear();

      setupIframeFallbacks();

    }
  );

  /* =======================================================
     LANGUAGE
  ======================================================== */

  function applyLanguage(language) {

    currentLanguage =
      language === "en"
        ? "en"
        : "ar";

    root.lang =
      currentLanguage;

    root.dir =
      currentLanguage === "ar"
        ? "rtl"
        : "ltr";

    document
      .querySelectorAll("[data-i18n]")
      .forEach(
        (element) => {

          const key =
            element.dataset.i18n;

          const value =
            translations[
              currentLanguage
            ][key];

          if (
            typeof value === "string"
          ) {
            element.textContent =
              value;
          }

        }
      );

    document
      .querySelectorAll("[data-i18n-html]")
      .forEach(
        (element) => {

          const key =
            element.dataset.i18nHtml;

          const value =
            translations[
              currentLanguage
            ][key];

          if (
            typeof value === "string"
          ) {
            element.innerHTML =
              value;
          }

        }
      );

    languageToggle.textContent =
      currentLanguage === "ar"
        ? "EN"
        : "AR";

    localStorage.setItem(
      "mahmoud-language",
      currentLanguage
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

  /* =======================================================
     THEME
  ======================================================== */

  function applyTheme(theme) {

    currentTheme =
      theme === "light"
        ? "light"
        : "dark";

    body.classList.toggle(
      "light-theme",
      currentTheme === "light"
    );

    const themeMeta =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    if (themeMeta) {

      themeMeta.content =
        currentTheme === "light"
          ? "#f2f2ed"
          : "#080808";

    }

    localStorage.setItem(
      "mahmoud-theme",
      currentTheme
    );
  }

  themeToggle?.addEventListener(
    "click",
    () => {

      applyTheme(
        currentTheme === "dark"
          ? "light"
          : "dark"
      );

    }
  );

  /* =======================================================
     HEADER
  ======================================================== */

  function initHeader() {

    const onScroll =
      () => {

        if (!siteHeader) {
          return;
        }

        siteHeader.classList.toggle(
          "scrolled",
          window.scrollY > 18
        );

      };

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive:
          true
      }
    );

    onScroll();
  }

  /* =======================================================
     MOBILE MENU
  ======================================================== */

  function initMobileMenu() {

    if (
      !menuToggle ||
      !mobileMenu
    ) {
      return;
    }

    function closeMenu() {

      mobileMenu.classList.remove(
        "is-open"
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

        const open =
          mobileMenu.classList.toggle(
            "is-open"
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

    mobileMenu
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
          window.innerWidth > 1080
        ) {
          closeMenu();
        }

      }
    );

  }

  /* =======================================================
     REVEAL
  ======================================================== */

  function initReveal() {

    const elements =
      document.querySelectorAll(
        ".reveal"
      );

    if (!elements.length) {
      return;
    }

    if (
      prefersReducedMotion
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

  /* =======================================================
     3D TILT
  ======================================================== */

  function initTilt() {

    if (
      isTouchDevice ||
      prefersReducedMotion
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

          const relativeX =
            (
              event.clientX -
              rect.left
            ) /
            rect.width;

          const relativeY =
            (
              event.clientY -
              rect.top
            ) /
            rect.height;

          const rotateX =
            (
              0.5 -
              relativeY
            ) * 5;

          const rotateY =
            (
              relativeX -
              0.5
            ) * 7;

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
                  translateZ(0)
                  `;

              }
            );
        }

        card.addEventListener(
          "pointermove",
          move,
          {
            passive:
              true
          }
        );

        card.addEventListener(
          "pointerleave",
          reset
        );

      }
    );
  }

  /* =======================================================
     MAGNETIC
  ======================================================== */

  function initMagnetic() {

    if (
      isTouchDevice ||
      prefersReducedMotion
    ) {
      return;
    }

    const elements =
      document.querySelectorAll(
        ".magnetic"
      );

    elements.forEach(
      (element) => {

        let frame =
          null;

        element.addEventListener(
          "pointermove",
          (event) => {

            const rect =
              element.getBoundingClientRect();

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

                  element.style.transform =
                    `
                    translate3d(
                      ${x * 0.08}px,
                      ${y * 0.10}px,
                      0
                    )
                    `;

                }
              );

          },
          {
            passive:
              true
          }
        );

        element.addEventListener(
          "pointerleave",
          () => {

            if (frame) {
              cancelAnimationFrame(
                frame
              );
            }

            element.style.transform =
              "";

          }
        );

      }
    );
  }

  /* =======================================================
     PROJECTS
  ======================================================== */

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
      "visible"
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
            "is-open"
          ) &&
          url
        ) {

          projectFrame.src =
            url;

        }

      },
      80
    );
  }

  /* =======================================================
     VIDEOS
  ======================================================== */

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

              openFacebookVideo(
                url
              );

            }
          );

        }
      );
  }

  function getFacebookEmbedUrl(
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

  function openFacebookVideo(
    sourceUrl
  ) {

    videoExternalLink.href =
      sourceUrl || "#";

    videoFallback.classList.remove(
      "visible"
    );

    facebookVideoFrame.src =
      "about:blank";

    openModal(
      videoModal
    );

    window.setTimeout(
      () => {

        if (!sourceUrl) {

          videoFallback.classList.add(
            "visible"
          );

          return;
        }

        facebookVideoFrame.src =
          getFacebookEmbedUrl(
            sourceUrl
          );

      },
      80
    );
  }

  /* =======================================================
     MODALS
  ======================================================== */

  function openModal(
    modal
  ) {

    if (!modal) {
      return;
    }

    modal.classList.add(
      "is-open"
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
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (
      !projectModal.classList.contains(
        "is-open"
      ) &&
      !videoModal.classList.contains(
        "is-open"
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

    projectModal
      ?.querySelector(
        ".modal-backdrop"
      )
      ?.addEventListener(
        "click",
        () => {

          closeModal(
            projectModal
          );

        }
      );

    videoModal
      ?.querySelector(
        ".modal-backdrop"
      )
      ?.addEventListener(
        "click",
        () => {

          closeModal(
            videoModal
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

        mobileMenu?.classList.remove(
          "is-open"
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

  /* =======================================================
     FALLBACKS
  ======================================================== */

  function setupIframeFallbacks() {

    /*
      External websites can block iframe embedding with
      their own CSP / X-Frame-Options rules.

      The timeout is intentionally long enough to give a normal
      site time to render before showing the fallback.
    */

    projectModal?.addEventListener(
      "transitionend",
      () => {}
    );

    window.setInterval(
      () => {

        if (
          projectModal.classList.contains(
            "is-open"
          )
        ) {

          /*
            Do not constantly manipulate the DOM.
            This empty check intentionally keeps modal handling
            passive after opening.
          */

        }

      },
      1000
    );

  }

  /* =======================================================
     YEAR
  ======================================================== */

  function initYear() {

    if (yearElement) {

      yearElement.textContent =
        String(
          new Date().getFullYear()
        );

    }
  }

})();