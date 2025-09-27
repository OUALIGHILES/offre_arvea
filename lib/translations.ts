export type Language = 'fr' | 'ar' | 'en'

export interface Translations {
  // Header
  home: string
  methods: string
  strategies: string
  contact: string
  start: string
  
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  startJourney: string
  learnMore: string
  activeMembers: string
  totalEarnings: string
  successRate: string
  
  // Earning Methods
  earningMethodsTitle: string
  earningMethodsSubtitle: string
  freelanceServices: string
  freelanceDescription: string
  digitalProducts: string
  digitalDescription: string
  affiliateMarketing: string
  affiliateDescription: string
  flexibleSchedule: string
  globalClients: string
  skillDevelopment: string
  passiveIncome: string
  scalableBusiness: string
  creativeFreedom: string
  noInventory: string
  performanceBased: string
  multipleStreams: string
  keyBenefits: string
  beginner: string
  intermediate: string
  advanced: string
  
  // Success Strategies
  successStrategiesTitle: string
  successStrategiesSubtitle: string
  startSmallThinkBig: string
  startSmallDescription: string
  focusOnValue: string
  focusOnValueDescription: string
  buildPersonalBrand: string
  buildPersonalBrandDescription: string
  diversifyIncome: string
  diversifyIncomeDescription: string
  investInLearning: string
  investInLearningDescription: string
  networkCollaborate: string
  networkCollaborateDescription: string
  
  // Lead Form
  formTitle: string
  formSubtitle: string
  firstName: string
  lastName: string
  location: string
  phoneNumber: string
  workedOnline: string
  workedOnlineYes: string
  workedOnlineNo: string
  additionalNotes: string
  privacyConsent: string
  getStartedNow: string
  submitting: string
  success: string
  successDescription: string
  error: string
  privacyRequired: string
  privacyDescription: string
  
  // WhatsApp Message
  whatsappMessage: string
}

export const translations: Record<Language, Translations> = {
  fr: {
    // Header
    home: "Accueil",
    methods: "Méthodes",
    strategies: "Stratégies",
    contact: "Contact",
    start: "Commencer",
    
    // Hero Section
    heroTitle: "Débloquez Votre Potentiel de Gains en Ligne avec ARVEA",
    heroSubtitle: "Découvrez des stratégies éprouvées pour générer des revenus en ligne. Rejoignez des milliers de personnes qui ont transformé leur avenir financier grâce aux opportunités numériques.",
    startJourney: "Commencez Votre Voyage Aujourd'hui",
    learnMore: "En Savoir Plus",
    activeMembers: "Membres Actifs",
    totalEarnings: "Gains Totaux",
    successRate: "Taux de Réussite",
    
    // Earning Methods
    earningMethodsTitle: "Trois Méthodes Éprouvées pour Gagner en Ligne",
    earningMethodsSubtitle: "Choisissez le chemin qui correspond à vos compétences et objectifs. Chaque méthode a aidé nos membres à atteindre l'indépendance financière.",
    freelanceServices: "Services Freelance",
    freelanceDescription: "Offrez vos compétences en rédaction, design, programmation ou conseil à des clients du monde entier.",
    digitalProducts: "Produits Numériques",
    digitalDescription: "Créez et vendez des cours en ligne, ebooks, modèles ou outils numériques pour un revenu passif.",
    affiliateMarketing: "Marketing d'Affiliation",
    affiliateDescription: "Promouvez des produits et services en lesquels vous croyez et gagnez des commissions sur chaque vente.",
    flexibleSchedule: "Horaire Flexible",
    globalClients: "Clients Mondiaux",
    skillDevelopment: "Développement des Compétences",
    passiveIncome: "Revenu Passif",
    scalableBusiness: "Entreprise Évolutive",
    creativeFreedom: "Liberté Créative",
    noInventory: "Pas d'Inventaire",
    performanceBased: "Basé sur la Performance",
    multipleStreams: "Flux Multiples",
    keyBenefits: "Avantages Clés",
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
    
    // Success Strategies
    successStrategiesTitle: "Stratégies pour Réussir en Ligne",
    successStrategiesSubtitle: "Suivez ces stratégies éprouvées que nos membres les plus performants utilisent pour maximiser leurs gains en ligne.",
    startSmallThinkBig: "Commencez Petit, Pensez Grand",
    startSmallDescription: "Commencez par des projets gérables pour développer votre confiance et votre expérience avant de passer à l'échelle.",
    focusOnValue: "Concentrez-vous sur la Création de Valeur",
    focusOnValueDescription: "Priorisez toujours la livraison d'une valeur authentique à vos clients ou clients pour un succès à long terme.",
    buildPersonalBrand: "Construisez Votre Marque Personnelle",
    buildPersonalBrandDescription: "Établissez la crédibilité et la confiance grâce à un travail de qualité constant et une communication professionnelle.",
    diversifyIncome: "Diversifiez Vos Sources de Revenus",
    diversifyIncomeDescription: "Ne vous fiez pas à une seule source - combinez plusieurs méthodes pour un revenu stable et croissant.",
    investInLearning: "Investissez dans l'Apprentissage Continu",
    investInLearningDescription: "Restez à jour avec les tendances de l'industrie et améliorez continuellement vos compétences et connaissances.",
    networkCollaborate: "Réseautage et Collaboration",
    networkCollaborateDescription: "Construisez des relations avec d'autres professionnels et clients potentiels dans votre domaine.",
    
    // Lead Form
    formTitle: "Prêt à Commencer Votre Voyage en Ligne ?",
    formSubtitle: "Remplissez le formulaire ci-dessous et nous vous connecterons avec les meilleures opportunités pour votre situation.",
    firstName: "Prénom",
    lastName: "Nom de famille",
    location: "Localisation",
    phoneNumber: "Numéro de téléphone",
    workedOnline: "Avez-vous déjà travaillé en ligne ?",
    workedOnlineYes: "Oui, j'ai de l'expérience en travail en ligne",
    workedOnlineNo: "Non, je suis nouveau dans le travail en ligne",
    additionalNotes: "Notes supplémentaires",
    privacyConsent: "Je consens à la collecte et au traitement de mes données personnelles dans le but de recevoir des informations sur les opportunités d'emploi Arvea. Je comprends que je peux retirer ce consentement à tout moment.",
    getStartedNow: "Commencer Maintenant",
    submitting: "Soumission en cours...",
    success: "Succès !",
    successDescription: "Vos informations ont été soumises avec succès. Ouverture de WhatsApp...",
    error: "Erreur",
    privacyRequired: "Consentement de Confidentialité Requis",
    privacyDescription: "Veuillez accepter la politique de confidentialité pour continuer.",
    
    // WhatsApp Message
    whatsappMessage: "🟢 NOUVEAU LEAD ARVEA 🟢\n\n👤 Nom: {firstName} {lastName}\n📍 Localisation: {location}\n📞 Téléphone: {phone}\n💻 Expérience en ligne: {workedOnline}\n📝 Notes: {notes}\n\n✅ Formulaire soumis avec succès sur le site Arvea\n🕐 Date: {date}\n\nMerci de contacter ce prospect rapidement !"
  },
  
  ar: {
    // Header
    home: "الرئيسية",
    methods: "الطرق",
    strategies: "الاستراتيجيات",
    contact: "اتصل",
    start: "ابدأ",
    
    // Hero Section
    heroTitle: "أطلق إمكاناتك في الكسب عبر الإنترنت مع أرفيا",
    heroSubtitle: "اكتشف استراتيجيات مثبتة لتوليد الدخل عبر الإنترنت. انضم إلى آلاف الأشخاص الذين غيروا مستقبلهم المالي من خلال الفرص الرقمية.",
    startJourney: "ابدأ رحلتك اليوم",
    learnMore: "اعرف المزيد",
    activeMembers: "أعضاء نشطون",
    totalEarnings: "إجمالي الأرباح",
    successRate: "معدل النجاح",
    
    // Earning Methods
    earningMethodsTitle: "ثلاث طرق مثبتة للكسب عبر الإنترنت",
    earningMethodsSubtitle: "اختر المسار الذي يناسب مهاراتك وأهدافك. كل طريقة ساعدت أعضائنا على تحقيق الاستقلال المالي.",
    freelanceServices: "خدمات العمل الحر",
    freelanceDescription: "اعرض مهاراتك في الكتابة والتصميم والبرمجة أو الاستشارة للعملاء في جميع أنحاء العالم.",
    digitalProducts: "المنتجات الرقمية",
    digitalDescription: "أنشئ وبيع الدورات التدريبية عبر الإنترنت والكتب الإلكترونية والقوالب أو الأدوات الرقمية للحصول على دخل سلبي.",
    affiliateMarketing: "التسويق بالعمولة",
    affiliateDescription: "روج للمنتجات والخدمات التي تؤمن بها واكسب عمولات على كل عملية بيع.",
    flexibleSchedule: "جدول مرن",
    globalClients: "عملاء عالميون",
    skillDevelopment: "تطوير المهارات",
    passiveIncome: "دخل سلبي",
    scalableBusiness: "عمل قابل للتوسع",
    creativeFreedom: "حرية إبداعية",
    noInventory: "لا مخزون",
    performanceBased: "قائم على الأداء",
    multipleStreams: "تيارات متعددة",
    keyBenefits: "الفوائد الرئيسية",
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم",
    
    // Success Strategies
    successStrategiesTitle: "استراتيجيات للنجاح عبر الإنترنت",
    successStrategiesSubtitle: "اتبع هذه الاستراتيجيات المثبتة التي يستخدمها أعضاؤنا الأكثر نجاحاً لتعظيم أرباحهم عبر الإنترنت.",
    startSmallThinkBig: "ابدأ صغيراً، فكر كبيراً",
    startSmallDescription: "ابدأ بمشاريع قابلة للإدارة لبناء الثقة والخبرة قبل التوسع.",
    focusOnValue: "ركز على خلق القيمة",
    focusOnValueDescription: "أول دائماً تقديم قيمة حقيقية لعملائك أو زبائنك للنجاح على المدى الطويل.",
    buildPersonalBrand: "ابن علامتك التجارية الشخصية",
    buildPersonalBrandDescription: "أنشئ المصداقية والثقة من خلال العمل الجيد المستمر والتواصل المهني.",
    diversifyIncome: "نوع مصادر دخلك",
    diversifyIncomeDescription: "لا تعتمد على مصدر واحد - اجمع بين طرق متعددة لدخل مستقر ومتنامي.",
    investInLearning: "استثمر في التعلم المستمر",
    investInLearningDescription: "ابق محدثاً مع اتجاهات الصناعة وحسن مهاراتك ومعرفتك باستمرار.",
    networkCollaborate: "الشبكات والتعاون",
    networkCollaborateDescription: "ابن علاقات مع محترفين آخرين وعملاء محتملين في مجالك.",
    
    // Lead Form
    formTitle: "مستعد لبدء رحلتك عبر الإنترنت؟",
    formSubtitle: "املأ النموذج أدناه وسنربطك بأفضل الفرص المناسبة لحالتك.",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    location: "الموقع",
    phoneNumber: "رقم الهاتف",
    workedOnline: "هل عملت عبر الإنترنت من قبل؟",
    workedOnlineYes: "نعم، لدي خبرة في العمل عبر الإنترنت",
    workedOnlineNo: "لا، أنا جديد في العمل عبر الإنترنت",
    additionalNotes: "ملاحظات إضافية",
    privacyConsent: "أوافق على جمع ومعالجة بياناتي الشخصية لغرض تلقي معلومات حول فرص العمل في أرفيا. أفهم أنه يمكنني سحب هذا الموافقة في أي وقت.",
    getStartedNow: "ابدأ الآن",
    submitting: "جاري الإرسال...",
    success: "نجح!",
    successDescription: "تم إرسال معلوماتك بنجاح. فتح واتساب...",
    error: "خطأ",
    privacyRequired: "موافقة الخصوصية مطلوبة",
    privacyDescription: "يرجى قبول سياسة الخصوصية للمتابعة.",
    
    // WhatsApp Message
    whatsappMessage: "🟢 عميل محتمل جديد من أرفيا 🟢\n\n👤 الاسم: {firstName} {lastName}\n📍 الموقع: {location}\n📞 الهاتف: {phone}\n💻 خبرة عبر الإنترنت: {workedOnline}\n📝 ملاحظات: {notes}\n\n✅ تم إرسال النموذج بنجاح من موقع أرفيا\n🕐 التاريخ: {date}\n\nيرجى الاتصال بهذا العميل المحتمل بسرعة!"
  },
  
  en: {
    // Header
    home: "Home",
    methods: "Methods",
    strategies: "Strategies",
    contact: "Contact",
    start: "Start",
    
    // Hero Section
    heroTitle: "Unlock Your Online Earning Potential with ARVEA",
    heroSubtitle: "Discover proven strategies to generate income online. Join thousands who have transformed their financial future through digital opportunities.",
    startJourney: "Start Your Journey Today",
    learnMore: "Learn More",
    activeMembers: "Active Members",
    totalEarnings: "Total Earnings",
    successRate: "Success Rate",
    
    // Earning Methods
    earningMethodsTitle: "Three Proven Ways to Earn Online",
    earningMethodsSubtitle: "Choose the path that matches your skills and goals. Each method has helped our members achieve financial independence.",
    freelanceServices: "Freelance Services",
    freelanceDescription: "Offer your skills in writing, design, programming, or consulting to clients worldwide.",
    digitalProducts: "Digital Products",
    digitalDescription: "Create and sell online courses, ebooks, templates, or digital tools to passive income.",
    affiliateMarketing: "Affiliate Marketing",
    affiliateDescription: "Promote products and services you believe in and earn commissions on every sale.",
    flexibleSchedule: "Flexible Schedule",
    globalClients: "Global Clients",
    skillDevelopment: "Skill Development",
    passiveIncome: "Passive Income",
    scalableBusiness: "Scalable Business",
    creativeFreedom: "Creative Freedom",
    noInventory: "No Inventory",
    performanceBased: "Performance Based",
    multipleStreams: "Multiple Streams",
    keyBenefits: "Key Benefits",
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
    
    // Success Strategies
    successStrategiesTitle: "Strategies to Succeed Online",
    successStrategiesSubtitle: "Follow these proven strategies that our most successful members use to maximize their online earnings.",
    startSmallThinkBig: "Start Small, Think Big",
    startSmallDescription: "Begin with manageable projects to build confidence and experience before scaling up.",
    focusOnValue: "Focus on Value Creation",
    focusOnValueDescription: "Always prioritize delivering genuine value to your clients or customers for long-term success.",
    buildPersonalBrand: "Build Your Personal Brand",
    buildPersonalBrandDescription: "Establish credibility and trust through consistent quality work and professional communication.",
    diversifyIncome: "Diversify Your Income Streams",
    diversifyIncomeDescription: "Don't rely on a single source - combine multiple methods for stable, growing income.",
    investInLearning: "Invest in Continuous Learning",
    investInLearningDescription: "Stay updated with industry trends and continuously improve your skills and knowledge.",
    networkCollaborate: "Network and Collaborate",
    networkCollaborateDescription: "Build relationships with other professionals and potential clients in your field.",
    
    // Lead Form
    formTitle: "Ready to Start Your Online Journey?",
    formSubtitle: "Fill out the form below and we'll connect you with the best opportunities for your situation.",
    firstName: "First Name",
    lastName: "Last Name",
    location: "Location",
    phoneNumber: "Phone Number",
    workedOnline: "Have you worked online before?",
    workedOnlineYes: "Yes, I have experience working online",
    workedOnlineNo: "No, I'm new to online work",
    additionalNotes: "Additional Notes",
    privacyConsent: "I consent to the collection and processing of my personal data for the purpose of receiving information about Arvea job opportunities. I understand I can withdraw this consent at any time.",
    getStartedNow: "Get Started Now",
    submitting: "Submitting...",
    success: "Success!",
    successDescription: "Your information has been submitted successfully. Opening WhatsApp...",
    error: "Error",
    privacyRequired: "Privacy Consent Required",
    privacyDescription: "Please accept the privacy policy to continue.",
    
    // WhatsApp Message
    whatsappMessage: "🟢 NEW ARVEA LEAD 🟢\n\n👤 Name: {firstName} {lastName}\n📍 Location: {location}\n📞 Phone: {phone}\n💻 Online Experience: {workedOnline}\n📝 Notes: {notes}\n\n✅ Form submitted successfully on Arvea website\n🕐 Date: {date}\n\nPlease contact this prospect quickly!"
  }
}
