(() => {
  "use strict";

  /* =======================================================
     ELEMENTS
  ======================================================== */

  const body = document.body;
  const root = document.documentElement;

  const siteHeader =
    document.getElementById("siteHeader");

  const pageLoader =
    document.getElementById("pageLoader");

  const themeToggle =
    document.getElementById("themeToggle");

  const languageToggle =
    document.getElementById("languageToggle");

  const menuToggle =
    document.getElementById("menuToggle");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const cursorGlow =
    document.getElementById("cursorGlow");

  const currentYear =
    document.getElementById("currentYear");

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

  /* =======================================================
     SETTINGS
  ======================================================== */

  let currentLanguage =
    localStorage.getItem("agency-language") || "ar";

  let currentTheme =
    localStorage.getItem("agency-theme") || "dark";

  const isTouchDevice =
    window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
        "أفكار تسويقية ناجحة، إعلانات ممولة باستهداف دقيق، تحليل للسوق والمنافسين، وتصميم مواقع يساعد البيزنس يوصل لنتيجة أفضل.",

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

      floatOneSmall:
        "Growth",

      floatOneStrong:
        "More Reach",

      floatTwoSmall:
        "Strategy",

      floatTwoStrong:
        "Precise",

      floatingPill:
        "Always optimizing",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "مش بس إعلانات.",

      aboutTitle:
        "إحنا بنبني <span>نمو حقيقي.</span>",

      aboutText:
        "بنجمع بين الاستراتيجية، الميديا باينج، تحليل السوق، المحتوى، وتصميم المواقع عشان كل جزء من الرحلة يخدم الهدف الأساسي: نمو المشروع.",

      aboutItemOneTitle:
        "أفكار تسويقية",

      aboutItemOneText:
        "أفكار مبنية على السوق والجمهور.",

      aboutItemTwoTitle:
        "استهداف أدق",

      aboutItemTwoText:
        "نوجّه الميزانية للجمهور الأقرب للشراء.",

      aboutItemThreeTitle:
        "تحليل مستمر",

      aboutItemThreeText:
        "نقيس ونحلل ونطور بدل ما نسيب الحملة.",

      servicesKicker:
        "الخدمات",

      servicesTitle:
        "كل حاجة <span>تخدم النمو.</span>",

      servicesIntro:
        "خدمات متكاملة تخلي الاستراتيجية والتنفيذ والنتيجة ماشيين في اتجاه واحد.",

      serviceOneTitle:
        "Media Buying",

      serviceOneText:
        "تخطيط وإدارة وتحسين الحملات المدفوعة للوصول للجمهور المناسب بكفاءة أفضل.",

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
        "ادخل المشروع <span>من هنا.</span>",

      projectsIntro:
        "استكشف المشاريع من داخل البورتفوليو بدون تغيير الصفحة.",

      projectType:
        "WEB EXPERIENCE",

      projectOpen:
        "افتح المشروع",

      showcaseKicker:
        "مساحات جاهزة",

      showcaseTitle:
        "حط شغلك <span>هنا.</span>",

      showcaseIntro:
        "أماكن مجهزة تقدر تحط فيها صور الحملات والكرياتيف والـCase Studies بعدين.",

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
        "أول فيديو مميز، وبعده باقي الفيديوهات في نفس المكان.",

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

      backTop:
        "رجوع لأعلى ↑",

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
        "روابط Share الحالية مش روابط Embed مباشرة. الكود بيحاول التضمين، ولو Facebook رفضه بيظهر الزر بدل شاشة فاضية.",

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
        "Winning marketing ideas, precise paid advertising, market and competitor analysis, and web design built to help businesses grow.",

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

      floatOneSmall:
        "Growth",

      floatOneStrong:
        "More Reach",

      floatTwoSmall:
        "Strategy",

      floatTwoStrong:
        "Precise",

      floatingPill:
        "Always optimizing",

      aboutLabel:
        "ABOUT",

      aboutKicker:
        "More than ads.",

      aboutTitle:
        "We build <span>real growth.</span>",

      aboutText:
        "We combine strategy, media buying, market analysis, content and web design so every part of the journey serves one goal: growing the business.",

      aboutItemOneTitle:
        "Marketing ideas",

      aboutItemOneText:
        "Ideas built around the market and audience.",

      aboutItemTwoTitle:
        "Sharper targeting",

      aboutItemTwoText:
        "We guide budget toward the audience most likely to buy.",

      aboutItemThreeTitle:
        "Continuous analysis",

      aboutItemThreeText:
        "Measure, analyze and improve instead of running campaigns blindly.",

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
        "Build a clear social presence, engaging content and a memorable brand message.",

      projectsKicker:
        "Web projects",

      projectsTitle:
        "Open the project <span>here.</span>",

      projectsIntro:
        "Explore the projects inside the portfolio without leaving the page.",

      projectType:
        "WEB EXPERIENCE",

      projectOpen:
        "Open project",

      showcaseKicker:
        "Ready spaces",

      showcaseTitle:
        "Put your work <span>here.</span>",

      showcaseIntro:
        "Prepared spaces for campaign images, creative work and case studies later.",

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
        "The first video is featured, followed by the remaining videos in the same place.",

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

      backTop:
        "Back to top ↑",

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
        "The current Share URLs are not direct embed URLs. The code tries the official embed route and shows a fallback instead of a blank box if Facebook rejects it.",

      openFacebook:
        "Open on Facebook"

    }

  };

  /* =======================================================
     INITIALIZE
  ======================================================== */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      setLanguage(currentLanguage);
      setTheme(currentTheme);

      initLoader();
      initHeader();
      initMobileMenu();
      initReveal();
      initTilt();
      initMagneticButtons();
      initCursorGlow();
      initProjects();
      initVideos();
      initModalEvents();
      initYear();

    }
  );

  /* =======================================================
     LOADER
  ======================================================== */

  function initLoader() {

    window.addEventListener(
      "load",
      () => {
        body.classList.add("loaded");
      },
      { once: true }
    );

    window.setTimeout(
      () => {
        body.classList.add("loaded");
      },
      1600
    );
  }

  /* =======================================================
     LANGUAGE
  ======================================================== */

  function setLanguage(language) {

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
      .forEach((element) => {

        const key =
          element.dataset.i18n;

        const value =
          translations[currentLanguage][key];

        if (
          typeof value === "string"
        ) {
          element.textContent = value;
        }

      });

    document
      .querySelectorAll("[data-i18n-html]")
      .forEach((element) => {

        const key =
          element.dataset.i18nHtml;

        const value =
          translations[currentLanguage][key];

        if (
          typeof value === "string"
        ) {
          element.innerHTML = value;
        }

      });

    languageToggle.textContent =
      currentLanguage === "ar"
        ? "EN"
        : "AR";

    localStorage.setItem(
      "agency-language",
      currentLanguage
    );
  }

  languageToggle?.addEventListener(
    "click",
    () => {

      setLanguage(
        currentLanguage === "ar"
          ? "en"
          : "ar"
      );

    }
  );

  /* =======================================================
     THEME
  ======================================================== */

  function setTheme(theme) {

    currentTheme =
      theme === "light"
        ? "light"
        : "dark";

    body.classList.toggle(
      "light-theme",
      currentTheme === "light"
    );

    /*
      The current design is intentionally dark-first.
      The button still stores the preference and changes
      the browser theme meta safely.
    */

    const themeColor =
      currentTheme === "light"
        ? "#f4f4ef"
        : "#080808";

    let metaTheme =
      document.querySelector(
        'meta[name="theme-color"]'
      );

    if (!metaTheme) {

      metaTheme =
        document.createElement("meta");

      metaTheme.name =
        "theme-color";

      document.head.appendChild(
        metaTheme
      );
    }

    metaTheme.content =
      themeColor;

    localStorage.setItem(
      "agency-theme",
      currentTheme
    );
  }

  themeToggle?.addEventListener(
    "click",
    () => {

      setTheme(
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
        passive: true
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

      menuToggle.classList.remove(
        "active"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      mobileMenu.classList.remove(
        "is-open"
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
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMenu
        );

      });

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
     SCROLL REVEAL
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
        (entries, observerInstance) => {

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
          threshold: 0.12,
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
            cancelAnimationFrame(frame);
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
            (0.5 - y) * 6;

          const rotateY =
            (x - 0.5) * 8;

          if (frame) {
            cancelAnimationFrame(frame);
          }

          frame =
            requestAnimationFrame(
              () => {

                card.style.transform = `
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
          { passive: true }
        );

        card.addEventListener(
          "pointerleave",
          reset
        );

      }
    );
  }

  /* =======================================================
     MAGNETIC BUTTONS
  ======================================================== */

  function initMagneticButtons() {

    if (
      isTouchDevice ||
      prefersReducedMotion
    ) {
      return;
    }

    const items =
      document.querySelectorAll(
        ".magnetic"
      );

    items.forEach(
      (item) => {

        let frame =
          null;

        item.addEventListener(
          "pointermove",
          (event) => {

            const rect =
              item.getBoundingClientRect();

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

            const moveX =
              x * 0.1;

            const moveY =
              y * 0.12;

            if (frame) {
              cancelAnimationFrame(
                frame
              );
            }

            frame =
              requestAnimationFrame(
                () => {

                  item.style.transform =
                    `translate3d(${moveX}px, ${moveY}px, 0)`;

                }
              );

          },
          { passive: true }
        );

        item.addEventListener(
          "pointerleave",
          () => {

            if (frame) {
              cancelAnimationFrame(
                frame
              );
            }

            item.style.transform =
              "";

          }
        );

      }
    );
  }

  /* =======================================================
     CURSOR GLOW
  ======================================================== */

  function initCursorGlow() {

    if (
      !cursorGlow ||
      isTouchDevice ||
      prefersReducedMotion
    ) {
      return;
    }

    let frame =
      null;

    let mouseX =
      0;

    let mouseY =
      0;

    function update() {

      cursorGlow.style.transform =
        `
        translate3d(
          ${mouseX}px,
          ${mouseY}px,
          0
        )
        translate(-50%, -50%)
        `;

      frame =
        null;
    }

    window.addEventListener(
      "pointermove",
      (event) => {

        mouseX =
          event.clientX;

        mouseY =
          event.clientY;

        cursorGlow.style.opacity =
          "1";

        if (!frame) {
          frame =
            requestAnimationFrame(
              update
            );
        }

      },
      { passive: true }
    );

    window.addEventListener(
      "blur",
      () => {
        cursorGlow.style.opacity =
          "0";
      }
    );
  }

  /* =======================================================
     PROJECTS
  ======================================================== */

  function initProjects() {

    const projectCards =
      document.querySelectorAll(
        ".project-card"
      );

    projectCards.forEach(
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
      100
    );

    /*
      Some websites intentionally block iframe embedding
      using CSP or X-Frame-Options.

      There is no reliable browser API that lets the parent
      page detect every such case immediately, so we provide
      a timeout fallback rather than showing a permanently
      empty frame.
    */

    window.setTimeout(
      () => {

        if (
          projectModal.classList.contains(
            "is-open"
          )
        ) {

          projectFallback.classList.add(
            "visible"
          );

        }

      },
      8000
    );
  }

  /* =======================================================
     VIDEOS
  ======================================================== */

  function initVideos() {

    const buttons =
      document.querySelectorAll(
        ".video-play"
      );

    buttons.forEach(
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
    sourceUrl
  ) {

    return (
      "https://www.facebook.com/plugins/video.php" +
      "?href=" +
      encodeURIComponent(
        sourceUrl
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

        if (
          sourceUrl
        ) {

          facebookVideoFrame.src =
            getFacebookEmbedUrl(
              sourceUrl
            );

        } else {

          videoFallback.classList.add(
            "visible"
          );

        }

      },
      100
    );

    /*
      Facebook Share URLs are not guaranteed to resolve
      to embeddable videos. We deliberately provide a fallback
      instead of leaving the user with a blank black modal.
    */

    window.setTimeout(
      () => {

        if (
          videoModal.classList.contains(
            "is-open"
          )
        ) {

          videoFallback.classList.add(
            "visible"
          );

        }

      },
      7000
    );
  }

  /* =======================================================
     MODAL
  ======================================================== */

  function openModal(modal) {

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

  function closeModal(modal) {

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

  function initModalEvents() {

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
        ".modal-overlay"
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
        ".modal-overlay"
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
     YEAR
  ======================================================== */

  function initYear() {

    if (currentYear) {

      currentYear.textContent =
        String(
          new Date().getFullYear()
        );

    }
  }

})();