// Language switching for the Intel sustainability page.
// Changing the language also changes the page direction, because Arabic is a
// right-to-left language and English is left-to-right.

// Bootstrap ships a separate stylesheet for RTL. Each build has its own
// integrity hash, so the hash has to be swapped along with the URL.
const BOOTSTRAP = {
  ltr: {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
    integrity: "sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB",
  },
  rtl: {
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.rtl.min.css",
    integrity: "sha384-CfCrinSRH2IR6a4e6fy2q6ioOX7O6Mtm1L9vRvFZ1trBncWmMePhzvafv7oIcWiW",
  },
};

const LANGUAGES = {
  ar: { dir: "rtl", title: "إنتل: الاستدامة عبر العصور" },
  en: { dir: "ltr", title: "Intel: Sustainability Through the Ages" },
};

const TRANSLATIONS = {
  ar: {
    logoAlt: "شعار إنتل",
    heroTitle: "الاستدامة عبر العصور",
    heroText:
      "اكتشف رحلة إنتل عبر الزمن، وكيف ساهم التزامنا بالابتكار في تشكيل مستقبل أكثر استدامة للتكنولوجيا ولكوكبنا.",
    card1Title: "تأسيس إنتل",
    card1Body:
      "غيّر روبرت نويس وجوردون مور اسم الشركة المؤسَّسة حديثًا من NM Electronics إلى شركة إنتل، واضعَين بذلك الأساس لعقود من الابتكار التقني.",
    card2Title: "أول معالج دقيق",
    card2Body:
      "أطلقت إنتل المعالج 4004، أول معالج دقيق تجاري في العالم، مُشعلةً ثورة المعالجات الدقيقة ودافعةً بمستقبل أجهزة الحوسبة.",
    card3Title: "المعالج 8086",
    card3Body:
      "إطلاق المعالج 8086، وترسيخ معمارية x86 التي تشغّل عددًا لا يُحصى من الحواسيب والخوادم في العصر الحديث.",
    card4Title: "المعالج 386",
    card4Body:
      "قدّمت إنتل المعالج 386 بمعمارية 32-بت، لتفتح عهدًا جديدًا من الأداء وتعدد المهام في الحواسيب الشخصية.",
    card5Title: "ذروة انبعاثات الغازات الدفيئة",
    card5Body:
      "شهد هذا العام أعلى معدل سنوي لانبعاثات الغازات الدفيئة الناتجة عن عمليات إنتل. وعلى مدى السنوات التالية، استثمرت إنتل بكثافة في معالجة المواد الكيميائية والطاقة المتجددة والتصنيع الموفّر للطاقة لعكس هذا الاتجاه.",
    card6Title: "استراتيجية RISE",
    card6Body:
      "أطلقت إنتل استراتيجية RISE (المسؤولة والشاملة والمستدامة والمُمكِّنة) وأهدافها لعام 2030، بهدف دفع التقدم على مستوى القطاع في العمل المناخي وإدارة المياه وتقليل النفايات.",
    card7Title: "الحياد الكربوني بحلول 2040",
    card7Body:
      "أعلنت إنتل التزامها بتحقيق صافي انبعاثات صفري للغازات الدفيئة (النطاقان 1 و2) عبر عملياتها العالمية بحلول عام 2040، بناءً على سنوات من المبادرات البيئية.",
    card8Title: "الكهرباء المتجددة",
    card8Body:
      "حققت الشركة استخدام الكهرباء المتجددة بنسبة 99% على مستوى العالم، مما ساعد على خفض الانبعاثات الكربونية بدرجة كبيرة ودفع التقدم نحو أهداف إنتل طويلة الأمد للاستدامة.",
    card9Title: "قمة الاستدامة",
    card9Body:
      "استضافت إنتل أول قمة للاستدامة، جمعت المورّدين والمسؤولين الحكوميين وقادة القطاع للتعاون على تصنيع أشباه الموصلات المستدام من الجيل التالي.",
    scrollHint: "مرّر لعرض المخطط الزمني | ضع المؤشر فوق البطاقات لمعرفة المزيد!",
    col1Title: "استراتيجية RISE",
    col1Body:
      "ضمن استراتيجية RISE (المسؤولة والشاملة والمستدامة والمُمكِّنة)، تضع إنتل أهدافًا طموحة لعام 2030، تشمل دفع التقدم على مستوى القطاع في العمل المناخي وإدارة المياه وتقليل النفايات.",
    col2Title: "الالتزام",
    col2Body:
      "في عام 2022، تعهدت إنتل بتحقيق صافي انبعاثات صفري للغازات الدفيئة (النطاقان 1 و2) بحلول عام 2040. ويبني هذا الالتزام على عقود من المبادرات والشراكات البيئية عبر قطاع أشباه الموصلات.",
    col3Title: "المياه والنفايات",
    col3Body:
      "تحافظ إنتل على مليارات الغالونات من المياه سنويًا وتتعاون مع المجتمعات المحلية لاستعادة مستجمعات المياه. كما تعيد إنتل تدوير المواد والاستفادة منها لتقليل النفايات وتعزيز الاقتصاد الدائري.",
    learnMore: "اعرف المزيد",
    formTitle: "اشترك في نشرتنا الإخبارية",
    formIntro:
      "احصل على إنجازات إنتل في مجال الاستدامة وتقارير التقدم مباشرةً إلى بريدك الإلكتروني.",
    labelName: "الاسم",
    labelEmail: "البريد الإلكتروني",
    errName: "يرجى إدخال اسمك.",
    errEmail: "يرجى إدخال بريد إلكتروني صالح.",
    consentLabel: "نعم، أرسلوا لي تحديثات الاستدامة من إنتل.",
    errConsent: "يرجى تأكيد رغبتك في تلقي التحديثات.",
    submitButton: "اشترك",
    successMessage: "شكرًا لاشتراكك! يرجى التحقق من بريدك الإلكتروني للتأكيد.",
    modal1Body:
      "تقوم استراتيجية RISE على أربع ركائز: المسؤولية والشمولية والاستدامة والتمكين. وضمن أهداف عام 2030، تسعى إنتل إلى الاعتماد على الكهرباء المتجددة بنسبة 100% عالميًا، وحفظ 60 مليار غالون من المياه، وتحقيق صفر نفايات إلى المكبّات. كما تعمل الشركة مع مورّديها وشركائها في القطاع لتوسيع أثر هذه الأهداف خارج عملياتها الخاصة.",
    modal2Body:
      "يغطي التزام الحياد الكربوني النطاقين الأول والثاني، أي الانبعاثات المباشرة من عمليات إنتل والانبعاثات غير المباشرة الناتجة عن الطاقة التي تشتريها. ولتحقيق ذلك بحلول عام 2040، تستثمر الشركة في المعدات الموفّرة للطاقة، ومعالجة الغازات الكيميائية، والمباني الحاصلة على شهادات بيئية، إلى جانب البحث عن مواد كيميائية بديلة أقل أثرًا على المناخ.",
    modal3Body:
      "تعيد إنتل إلى المجتمعات المحلية مياهًا عذبة أكثر مما تستهلك، عبر مشاريع لاستعادة مستجمعات المياه في الولايات المتحدة والهند وكوستاريكا والمكسيك. أما على صعيد النفايات، فتعيد الشركة تدوير الغالبية العظمى من نفاياتها التصنيعية، وتعيد استخدام المواد الكيميائية والمعادن بدل التخلص منها، دعمًا لاقتصاد دائري داخل قطاع أشباه الموصلات.",
    closeButton: "إغلاق",
    closeLabel: "إغلاق",
    copyright: "© {year} شركة إنتل. جميع الحقوق محفوظة.",
    footerNavLabel: "روابط التذييل",
    privacyPolicy: "سياسة الخصوصية",
    termsOfUse: "شروط الاستخدام",
    contact: "اتصل بنا",
  },
  en: {
    logoAlt: "Intel Logo",
    heroTitle: "Sustainability Through the Ages",
    heroText:
      "Explore Intel's journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.",
    card1Title: "Intel Founded",
    card1Body:
      "Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.",
    card2Title: "First Microprocessor",
    card2Body:
      "Intel debuts the 4004, the world's first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.",
    card3Title: "8086 Processor",
    card3Body:
      "Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.",
    card4Title: "386 Processor",
    card4Body:
      "Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.",
    card5Title: "Peak GHG Emissions",
    card5Body:
      "This year marks Intel's highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.",
    card6Title: "RISE Strategy",
    card6Body:
      "Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.",
    card7Title: "Net-Zero By 2040",
    card7Body:
      "Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.",
    card8Title: "Renewable Electricity",
    card8Body:
      "The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel's long-term sustainability goals.",
    card9Title: "Sustainability Summit",
    card9Body:
      "Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.",
    scrollHint: "Scroll to view timeline | Hover over cards to learn more!",
    col1Title: "RISE Strategy",
    col1Body:
      "Under its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy, Intel sets ambitious 2030 goals, including driving industry-wide progress on climate action, water stewardship, and waste reduction.",
    col2Title: "Commitment",
    col2Body:
      "In 2022, Intel pledged to achieve net-zero greenhouse gas emissions (Scope 1 and 2) by 2040. This commitment builds on decades of environmental initiatives and partnerships across the semiconductor industry.",
    col3Title: "Water & Waste",
    col3Body:
      "Intel conserves billions of gallons of water annually and collaborates with local communities to restore watersheds. Intel also upcycles and recycles materials to reduce waste and advance a circular economy.",
    learnMore: "Learn More",
    formTitle: "Subscribe to our Newsletter",
    formIntro:
      "Get Intel sustainability milestones and progress reports delivered to your inbox.",
    labelName: "Name",
    labelEmail: "Email address",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    consentLabel: "Yes, send me sustainability updates from Intel.",
    errConsent: "Please confirm you would like to receive updates.",
    submitButton: "Subscribe",
    successMessage: "Thanks for subscribing! Please check your inbox to confirm.",
    modal1Body:
      "The RISE strategy rests on four pillars: Responsible, Inclusive, Sustainable and Enabling. Its 2030 goals include reaching 100% renewable electricity worldwide, conserving 60 billion gallons of water, and sending zero waste to landfill. Intel also works with its suppliers and industry partners to extend the impact of these goals beyond its own operations.",
    modal2Body:
      "The net-zero commitment covers Scope 1 and Scope 2 - the direct emissions from Intel's operations and the indirect emissions from the energy it buys. To reach it by 2040, the company is investing in energy-efficient equipment, chemical abatement, green-certified buildings, and research into alternative chemicals with a lower climate impact.",
    modal3Body:
      "Intel returns more fresh water to local communities than it consumes, through watershed restoration projects in the United States, India, Costa Rica and Mexico. On waste, the company recycles the large majority of its manufacturing waste and reuses chemicals and metals rather than disposing of them, supporting a circular economy within the semiconductor industry.",
    closeButton: "Close",
    closeLabel: "Close",
    copyright: "© {year} Intel Corporation. All rights reserved.",
    footerNavLabel: "Footer links",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms of Use",
    contact: "Contact",
  },
};

const bootstrapLink = document.querySelector("#bootstrap-css");
const switchButtons = document.querySelectorAll(".lang-switch button");

// Point the Bootstrap <link> at the build that matches the direction.
// The integrity hash is per-file, so it has to change with the URL.
function applyBootstrapDirection(dir) {
  const build = BOOTSTRAP[dir];
  if (bootstrapLink.getAttribute("href") === build.href) return;
  bootstrapLink.setAttribute("integrity", build.integrity);
  bootstrapLink.setAttribute("href", build.href);
}

function applyLanguage(lang) {
  const language = LANGUAGES[lang];
  if (!language) return;

  const strings = TRANSLATIONS[lang];

  // The direction change is what makes this RTL mode, not just a translation
  document.documentElement.lang = lang;
  document.documentElement.dir = language.dir;
  document.title = language.title;
  applyBootstrapDirection(language.dir);

  const currentYear = String(new Date().getFullYear());

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = strings[el.dataset.i18n];
    if (value !== undefined) el.textContent = value.replace("{year}", currentYear);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = strings[el.dataset.i18nAlt];
    if (value !== undefined) el.alt = value;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const value = strings[el.dataset.i18nAriaLabel];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  switchButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  try {
    localStorage.setItem("preferredLanguage", lang);
  } catch (error) {
    // Private browsing can block storage; the switcher still works without it
  }
}

// Pick the starting language: a previous choice first, then the browser's own
// language, falling back to Arabic as the page default.
function detectLanguage() {
  // The head script already resolved this before the page painted
  if (window.initialLanguage && LANGUAGES[window.initialLanguage]) {
    return window.initialLanguage;
  }

  try {
    const saved = localStorage.getItem("preferredLanguage");
    if (saved && LANGUAGES[saved]) return saved;
  } catch (error) {
    // ignore and fall through to browser detection
  }

  const browserLanguages = navigator.languages || [navigator.language || ""];
  for (const tag of browserLanguages) {
    const code = tag.toLowerCase().split("-")[0];
    if (LANGUAGES[code]) return code;
  }
  return "ar";
}

switchButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(detectLanguage());

// The text now matches the language, so the page can be shown
document.documentElement.classList.remove("lang-pending");

// --- Subscription form ---------------------------------------------------
// Bootstrap's validation pattern: block submit while anything is invalid,
// and add .was-validated so the styled messages appear.
const form = document.querySelector(".needs-validation");
const successMessage = document.querySelector(".subscribe-success");

form.addEventListener("submit", (event) => {
  // Nothing is sent anywhere - this page is static, so always stop the submit
  event.preventDefault();
  event.stopPropagation();

  if (form.checkValidity()) {
    form.reset();
    form.classList.remove("was-validated");
    successMessage.hidden = false;
  } else {
    form.classList.add("was-validated");
    successMessage.hidden = true;
  }
});
