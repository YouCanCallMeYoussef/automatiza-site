/* ============================================================
   TRADUCTIONS — anglais et arabe.
   Le francais n'est pas ici : c'est le texte ecrit dans index.html, celui que
   lit un visiteur sans JavaScript. Chaque cle correspond a un attribut
   data-i18n (contenu), data-i18n-ph (placeholder) ou data-i18n-aria
   (aria-label) de la page. Une cle absente laisse le francais en place :
   une traduction oubliee se voit, elle ne casse rien.

   Pour ajouter une langue : un bloc de plus dans `page`, `paliers` et `msg`,
   puis son code dans LANGUES (tete de index.html).
   ============================================================ */
window.AZ_I18N = {

/* ---------- textes de la page ---------- */
page: {
en: {
  "meta.title": "Automatiza — AI agents that automate your business processes",
  "meta.desc": "AI agents that work for your company like your employees do: documents, dashboards, team reminders, leads, emails. A 1–3 day audit, then monthly support. Dubai.",
  "skip": "Skip to content",
  "langues": "Language",

  "eq.titre": "Colleagues who never watch the clock.",
  "eq.intro": "Automatiza sets up AI agents that work for your company the way your employees do: each one has a role, tools and tasks. Your teams keep the decisions; the agents take the re-typing. Dubai and remote.",
  "eq.scene": "Four agents at work in the same office:",
  "eq.r1": "Writer", "eq.r2": "Analyst", "eq.r3": "Coordinator", "eq.r4": "Sales",

  "hero.aria": "What Automatiza automates",
  "hint": "<span>↓</span><span>Scroll</span>",

  "how.eyebrow": "How it works",
  "how.h2": "We don't quote anything before the audit.",
  "how.p": "One quote per project, then a monthly support plan. The first is calculated after the audit; the second earns its keep every month.",
  "sh.ref": "Reference",
  "sh.duree": "Audit length", "sh.duree.v": "1 to 3 days",
  "sh.livrable": "Deliverable", "sh.livrable.v": "Specification + quote",
  "sh.engagement": "Commitment", "sh.engagement.v": "None at this stage",
  "e1.h": "Process audit",
  "e1.p": "We look at the real work: who does what, in which tool, how many times a day. On site when possible, remotely otherwise. This step decides everything else — a process we haven't seen running can't be priced.",
  "e2.h": "Specification and quote",
  "e2.p": "What we automate, what stays with your teams, what it costs and what it returns. A written, priced scope that doesn't move without an amendment.",
  "e3.h": "Development",
  "e3.p": "Agents, orchestration, integrations with your existing tools. You see a first version running well before delivery.",
  "e4.h": "Delivery and training",
  "e4.p": "Go-live and hand-over to your teams. A system nobody knows how to take over is a system you don't own.",
  "e5.h": "Monthly support",
  "e5.p": "Monitoring, fixes, one minor improvement per month and a measurement review. Models change, and so do your processes: the plan exists so the system keeps up.",

  "svc.eyebrow": "Services",
  "svc.h2": "Every automation starts from a problem we've heard you describe.",
  "svc.pb": "The problem",
  "s1.h": "The quote is re-typed by hand, and the contract copies the quote.",
  "s1.sol": "<strong>Documents.</strong> Quotes, contracts, reports and spreadsheets produced from your data, checked and formatted to your template. Discrepancies are flagged; you review and sign.",
  "s2.h": "Monday's dashboard shows Friday's numbers.",
  "s2.sol": "<strong>Up-to-date dashboards.</strong> Figures flow in on their own from your tools — ERP, CRM, spreadsheets — and the dashboard refreshes every morning, with an alert when a metric slips.",
  "s3.h": "One missed deadline costs more than ten reminders.",
  "s3.sol": "<strong>Smart reminders.</strong> Deadlines, renewals, unpaid invoices, overdue tasks: the agent alerts the right person by email, Teams or WhatsApp, and follows up until something moves.",
  "s4.h": "An inbound enquiry waits three hours before anyone reads it.",
  "s4.sol": "<strong>Leads and CRM.</strong> An agent qualifies the enquiry, logs it in the CRM, pulls context from your history and drafts the reply — then follows up if the prospect goes quiet. Your sales team decides instead of typing.",
  "s5.h": "Sorting a shared inbox costs more than answering it.",
  "s5.sol": "<strong>Email automation.</strong> Sorting, routing to the right person, drafts ready to review. Nothing is sent without your approval until you ask for it.",
  "svc.more": "This list isn't closed. A repetitive process, written down and measurable, is a candidate — that is exactly what the audit checks.",

  "ct.eyebrow": "Request an audit",
  "ct.h2": "Six questions, and we'll call you back.",
  "ct.p": "The indicative budget commits you to nothing. It tells us whether to propose a three-week project or a six-month one.",
  "f.nom": "Name", "f.soc": "Company", "f.sec": "Industry", "f.bes": "Need",
  "f.bud": "Indicative budget", "f.ctc": "Contact",
  "f.sec.ph": "Transport, distribution, financial services…",
  "f.bes.ph": "The process you redo every day.",
  "f.bud.ph": "A range is enough — €10–20k, €50k+…",
  "f.ctc.ph": "Email or phone",
  "f.envoyer": "Send request",

  "faq.eyebrow": "Questions",
  "faq.h2": "What we're asked before signing.",
  "q1.q": "How much does it cost?",
  "q1.a": "We don't know before the audit, and nobody should tell you before then. The audit takes one to three days and produces a written estimate; from then on, the price doesn't move without an amendment. The monthly support plan is a separate line, announced at the same time.",
  "q2.q": "What if the audit finds nothing worth automating?",
  "q2.a": "Then we tell you. A process that changes every month, isn't written down anywhere or runs ten times a year won't pay back an automation. You leave with the specification — useful either way — and nothing commits you further.",
  "q3.q": "How long before it's running?",
  "q3.a": "You see a first version running well before delivery: that's the point of step 03. A three-week scope delivers in three weeks. A six-month project delivers in pieces, process by process, not all at once at the end.",
  "q4.q": "Do we need to change our tools?",
  "q4.a": "No. We plug into what you have: your ERP, your shared inbox, your spreadsheets, your CRM. If a tool has to change anyway, it's written in the specification with the reason and the cost, and the decision stays yours.",
  "q5.q": "Where does our data go?",
  "q5.a": "The data scope comes out of the audit and is written into the specification: what leaves your systems, to which provider, for how long. When a process can't let anything out, we say so before pricing it rather than after.",
  "q6.q": "Who owns what is built?",
  "q6.a": "You do. The code, the instructions given to the agents, the integrations and the documentation are handed over at step 04, and the training exists so your teams can take them over. A system nobody knows how to take over is a system you don't own.",
  "q7.q": "Why a monthly plan?",
  "q7.a": "Because an agent isn't frozen software. Models change, so do your processes, and an integration that worked in January breaks in June. The plan covers monitoring, fixes, one minor improvement per month and a measurement review. It stops when you decide.",
  "q8.q": "Does it replace jobs?",
  "q8.a": "That's not what we sell. The processes we automate are the ones nobody claims: re-typing, sorting, reconciling. If your goal is to cut jobs, say so at the audit — neither the scope nor the price will be the same.",
  "q9.q": "Do you work outside Dubai?",
  "q9.a": "Yes. The audit is done on site when possible and remotely otherwise; monthly support is remote by default. When travel is needed, it appears as a line on the quote, not as a surprise.",

  "foot.txt": "Automatiza — AI process automation. Dubai. Published by <strong>FTL Company</strong>.",
  "foot.nav": "Legal information",
  "foot.mentions": "Legal notice (in French)",
  "foot.confid": "Privacy (in French)",
  "foot.brand": "Automatiza, back to top",
  "cta": "Request an audit"
},

ar: {
  "meta.title": "Automatiza — وكلاء ذكاء اصطناعي لأتمتة عمليات شركتك",
  "meta.desc": "وكلاء ذكاء اصطناعي يعملون لشركتك كما يعمل موظفوك: المستندات، لوحات المتابعة، تذكيرات الفريق، العملاء المحتملون، البريد الإلكتروني. تدقيق خلال يوم إلى ثلاثة أيام، ثم متابعة شهرية. دبي.",
  "skip": "انتقل إلى المحتوى",
  "langues": "اللغة",

  "eq.titre": "زملاء لا ينظرون إلى الساعة.",
  "eq.intro": "تُطلق Automatiza وكلاء ذكاء اصطناعي يعملون لشركتك كما يعمل موظفوك: لكلٍّ منهم دوره وأدواته ومهامه. يحتفظ فريقك بالقرارات، ويتولّى الوكلاء إعادة الإدخال. في دبي وعن بُعد.",
  "eq.scene": "أربعة وكلاء يعملون في المكتب نفسه:",
  "eq.r1": "محرِّر", "eq.r2": "محلِّل", "eq.r3": "منسِّق", "eq.r4": "مبيعات",

  "hero.aria": "ما تؤتمته Automatiza",
  "hint": "<span>↓</span><span>مرِّر للأسفل</span>",

  "how.eyebrow": "كيف نعمل",
  "how.h2": "لا نُسعّر شيئًا قبل إجراء التدقيق.",
  "how.p": "عرض سعر لكل مشروع، ثم باقة متابعة شهرية. يُحتسب الأول بعد التدقيق، ويُثبت الثاني جدواه كل شهر.",
  "sh.ref": "المرجع",
  "sh.duree": "مدة التدقيق", "sh.duree.v": "من يوم إلى 3 أيام",
  "sh.livrable": "المُخرَج", "sh.livrable.v": "دفتر شروط + عرض سعر",
  "sh.engagement": "الالتزام", "sh.engagement.v": "لا شيء في هذه المرحلة",
  "e1.h": "تدقيق العمليات",
  "e1.p": "ننظر إلى العمل الفعلي: من يفعل ماذا، وبأي أداة، وكم مرة في اليوم. في موقعكم متى أمكن، وعن بُعد في غير ذلك. هذه الخطوة تحدّد كل ما يليها — فالعملية التي لم نرها تعمل لا يمكن تسعيرها.",
  "e2.h": "دفتر الشروط وعرض السعر",
  "e2.p": "ما سنؤتمته، وما يبقى لفرقكم، وكم يكلّف وما يعود به. نطاق مكتوب ومُسعَّر لا يتغيّر إلا بملحق.",
  "e3.h": "التطوير",
  "e3.p": "وكلاء، وتنسيق، وتكامل مع أدواتكم الحالية. ترون نسخة أولى تعمل قبل التسليم بوقت طويل.",
  "e4.h": "التسليم والتدريب",
  "e4.p": "التشغيل الفعلي وتمكين فرقكم من استخدامه. النظام الذي لا يعرف أحد كيف يتولّاه هو نظام لا تملكونه.",
  "e5.h": "المتابعة الشهرية",
  "e5.p": "إشراف، وإصلاحات، وتحسين بسيط كل شهر، ومراجعة للقياس. النماذج تتغيّر، وعملياتكم كذلك: الباقة موجودة ليواكب النظام هذا التغيّر.",

  "svc.eyebrow": "الخدمات",
  "svc.h2": "كل أتمتة تنطلق من مشكلة سمعناكم تصفونها.",
  "svc.pb": "المشكلة",
  "s1.h": "يُعاد كتابة عرض السعر يدويًا، ثم يُنسخ العقد منه.",
  "s1.sol": "<strong>المستندات.</strong> عروض أسعار وعقود وتقارير وجداول بيانات تُنتَج من بياناتكم، وتُراجَع وتُنسَّق وفق نموذجكم. تُرفَع الفروقات، وأنتم تراجعون وتوقّعون.",
  "s2.h": "لوحة متابعة يوم الاثنين تعرض أرقام يوم الجمعة.",
  "s2.sol": "<strong>لوحات متابعة محدَّثة.</strong> تصل الأرقام تلقائيًا من أدواتكم — نظام ERP، وCRM، وجداول البيانات — وتتحدّث اللوحة كل صباح، مع تنبيه عندما يتراجع مؤشر.",
  "s3.h": "موعد نهائي فائت يكلّف أكثر من عشرة تذكيرات.",
  "s3.sol": "<strong>تذكيرات ذكية.</strong> مواعيد نهائية، تجديدات، فواتير غير مدفوعة، مهام متأخرة: يُنبّه الوكيل الشخص المناسب عبر البريد الإلكتروني أو Teams أو WhatsApp، ويعاود التذكير حتى يتحرّك الأمر.",
  "s4.h": "طلب وارد ينتظر ثلاث ساعات قبل أن يقرأه أحد.",
  "s4.sol": "<strong>العملاء المحتملون وCRM.</strong> يُصنّف الوكيل الطلب، ويسجّله في CRM، ويجلب السياق من سجلاتكم، ويصوغ الرد — ثم يتابع إن صمت العميل. يتفرّغ فريق المبيعات للقرار بدل الإدخال.",
  "s5.h": "فرز صندوق بريد مشترك يكلّف أكثر من الرد على رسائله.",
  "s5.sol": "<strong>أتمتة البريد الإلكتروني.</strong> فرز، وتوجيه إلى الشخص المناسب، ومسودات جاهزة للمراجعة. لا يُرسَل شيء دون موافقتكم ما لم تطلبوا ذلك.",
  "svc.more": "هذه القائمة ليست مغلقة. أي عملية متكرّرة، موصوفة كتابيًا وقابلة للقياس، هي مرشّحة للأتمتة — والتدقيق وُجد للتحقق من ذلك تحديدًا.",

  "ct.eyebrow": "اطلب تدقيقًا",
  "ct.h2": "ستة أسئلة، ثم نعاود الاتصال بكم.",
  "ct.p": "الميزانية التقديرية لا تُلزمكم بشيء. هي تساعدنا على معرفة ما إذا كنا سنقترح مشروعًا لثلاثة أسابيع أم لستة أشهر.",
  "f.nom": "الاسم", "f.soc": "الشركة", "f.sec": "القطاع", "f.bes": "الحاجة",
  "f.bud": "الميزانية التقديرية", "f.ctc": "وسيلة التواصل",
  "f.sec.ph": "النقل، التوزيع، الخدمات المالية…",
  "f.bes.ph": "العملية التي تكرّرونها كل يوم.",
  "f.bud.ph": "يكفي نطاق تقريبي — 10–20 ألف يورو، 50 ألف يورو فأكثر…",
  "f.ctc.ph": "بريد إلكتروني أو رقم هاتف",
  "f.envoyer": "أرسل الطلب",

  "faq.eyebrow": "أسئلة",
  "faq.h2": "ما يُسأل عنه قبل التوقيع.",
  "q1.q": "كم التكلفة؟",
  "q1.a": "لا نعرف ذلك قبل التدقيق، ولا ينبغي لأحد أن يعلنه لكم قبله. يستغرق التدقيق من يوم إلى ثلاثة أيام وينتج عنه تقدير مكتوب؛ ومن بعده لا يتغيّر السعر إلا بملحق. باقة المتابعة الشهرية بند منفصل يُعلَن في الوقت نفسه.",
  "q2.q": "وماذا لو خلص التدقيق إلى أنه لا شيء يستحق الأتمتة؟",
  "q2.a": "عندها نخبركم بذلك. العملية التي تتغيّر كل شهر، أو غير الموثّقة، أو التي لا تتكرّر سوى عشر مرات في السنة، لا تُغطّي تكلفة أتمتتها. تحتفظون بدفتر الشروط — فهو مفيد في كل الأحوال — ولا شيء يُلزمكم بعد ذلك.",
  "q3.q": "كم من الوقت قبل أن يعمل النظام؟",
  "q3.a": "ترون نسخة أولى تعمل قبل التسليم بوقت طويل: هذا هو جوهر الخطوة 03. النطاق الذي يستغرق ثلاثة أسابيع يُسلَّم خلال ثلاثة أسابيع. أما مشروع الستة أشهر فيُسلَّم على مراحل، عملية تلو الأخرى، لا دفعة واحدة في النهاية.",
  "q4.q": "هل علينا تغيير أدواتنا؟",
  "q4.a": "لا. نتصل بما لديكم: نظام ERP، وصندوق البريد المشترك، وجداول البيانات، وCRM. وإن لزم تغيير أداة رغم ذلك، يُذكر في دفتر الشروط مع السبب والتكلفة، ويبقى القرار لكم.",
  "q5.q": "أين تذهب بياناتنا؟",
  "q5.a": "يُحدَّد نطاق البيانات خلال التدقيق ويُدوَّن في دفتر الشروط: ما الذي يغادر أنظمتكم، وإلى أي مزوّد، ولأي مدة. وحين لا يمكن لعملية أن تُخرج أي بيانات، نقول ذلك قبل التسعير لا بعده.",
  "q6.q": "لمن تعود ملكية ما يُطوَّر؟",
  "q6.a": "لكم. الشيفرة، والتعليمات المُعطاة للوكلاء، والتكاملات، والتوثيق تُسلَّم لكم في الخطوة 04، والتدريب موجود لتتمكّن فرقكم من تولّيها. النظام الذي لا يعرف أحد كيف يتولّاه هو نظام لا تملكونه.",
  "q7.q": "لماذا باقة شهرية؟",
  "q7.a": "لأن الوكيل ليس برنامجًا جامدًا. النماذج تتغيّر، وعملياتكم كذلك، والتكامل الذي كان يعمل في يناير قد يتعطّل في يونيو. تغطي الباقة الإشراف، والإصلاحات، وتحسينًا بسيطًا كل شهر، ومراجعة للقياس. وتتوقف متى قرّرتم.",
  "q8.q": "هل يحلّ ذلك محلّ وظائف؟",
  "q8.a": "ليس هذا ما نبيعه. العمليات التي نؤتمتها هي تلك التي لا يريدها أحد: إعادة الإدخال، والفرز، والمطابقة. وإن كان هدفكم تقليص الوظائف، فقولوا ذلك منذ التدقيق — فلا النطاق ولا التسعير سيكونان كما هما.",
  "q9.q": "هل تعملون خارج دبي؟",
  "q9.a": "نعم. يُجرى التدقيق في موقعكم متى أمكن، وعن بُعد في غير ذلك؛ والمتابعة الشهرية عن بُعد افتراضيًا. وحين يلزم السفر، يظهر بندًا في عرض السعر لا مفاجأة.",

  "foot.txt": "Automatiza — أتمتة العمليات بالذكاء الاصطناعي. دبي. تصدر عن <strong>FTL Company</strong>.",
  "foot.nav": "معلومات قانونية",
  "foot.mentions": "الإشعارات القانونية (بالفرنسية)",
  "foot.confid": "الخصوصية (بالفرنسية)",
  "foot.brand": "Automatiza، العودة إلى الأعلى",
  "cta": "اطلب تدقيقًا"
}
},

/* ---------- les paliers du heros, dans l'ordre de PALIERS ----------
   Seuls le mot, l'accroche et la fiche changent ; couleurs, positions et
   formes restent celles de index.html. */
paliers: {
en: [
  { mot:"Documents",
    accroche:"A quote, a contract, a monthly report, a spreadsheet to update. Drafted from your data, ready to review and sign.",
    fiche:[["Quotes, contracts, reports, spreadsheets","What we automate"],["Agents + templates + ERP","Technology"],["≈ 3 h per week per administrator","Target benefit","obj"]] },
  { mot:"Reporting",
    accroche:"Every Monday, someone copies the week's figures into the dashboard. Now it's up to date before you arrive.",
    fiche:[["Dashboard updates","What we automate"],["Connectors + agents + BI","Technology"],["≈ 1 day a month given back to finance","Target benefit","obj"]] },
  { mot:"Reminders",
    accroche:"A deadline, a contract to renew, a client silent for ten days. The team is alerted at the right time, on the right channel.",
    fiche:[["Team reminders and follow-ups","What we automate"],["Agents + calendar + messaging","Technology"],["≈ 95% of deadlines handled on time","Target benefit","obj"]] },
  { mot:"Leads",
    accroche:"An enquiry arrives on a Friday evening. It's qualified, logged in the CRM and followed up on Monday morning — without anyone having to think about it.",
    fiche:[["Qualification, CRM, follow-ups","What we automate"],["Agents + CRM + WhatsApp","Technology"],["≈ 80% of enquiries qualified without intervention","Target benefit","obj"]] },
  { mot:"Emails",
    accroche:"Four hundred messages a day in a shared inbox. Sorting now takes longer than replying.",
    fiche:[["Sorting, routing, drafts","What we automate"],["Agents + shared inbox","Technology"],["≈ 90% of messages routed without intervention","Target benefit","obj"]] }
],
ar: [
  { mot:"المستندات",
    accroche:"عرض سعر، عقد، تقرير شهري، جدول بيانات يحتاج إلى تحديث. تُصاغ من بياناتكم، جاهزة للمراجعة والتوقيع.",
    fiche:[["عروض أسعار، عقود، تقارير، جداول بيانات","ما نؤتمته"],["وكلاء + نماذج + ERP","التقنية"],["≈ 3 ساعات أسبوعيًا لكل موظف إداري","الفائدة المستهدفة","obj"]] },
  { mot:"التقارير",
    accroche:"كل يوم اثنين، ينسخ أحدهم أرقام الأسبوع إلى لوحة المتابعة. الآن تكون محدَّثة قبل وصولكم.",
    fiche:[["تحديث لوحات المتابعة","ما نؤتمته"],["موصِلات + وكلاء + BI","التقنية"],["≈ يوم عمل شهريًا يُعاد إلى الإدارة المالية","الفائدة المستهدفة","obj"]] },
  { mot:"التذكيرات",
    accroche:"موعد نهائي، عقد للتجديد، عميل لم يرد منذ عشرة أيام. يُنبَّه الفريق في الوقت المناسب، عبر القناة المناسبة.",
    fiche:[["تذكيرات الفريق ومتابعاته","ما نؤتمته"],["وكلاء + تقويم + مراسلة","التقنية"],["≈ 95% من المواعيد تُنجَز في وقتها","الفائدة المستهدفة","obj"]] },
  { mot:"العملاء",
    accroche:"يصل طلب مساء الجمعة. يُصنَّف، ويُسجَّل في CRM، ويُتابَع صباح الاثنين — دون أن يضطر أحد للتفكير فيه.",
    fiche:[["التصنيف، CRM، المتابعات","ما نؤتمته"],["وكلاء + CRM + WhatsApp","التقنية"],["≈ 80% من الطلبات تُصنَّف دون تدخل","الفائدة المستهدفة","obj"]] },
  { mot:"البريد",
    accroche:"أربعمئة رسالة يوميًا في صندوق بريد مشترك. صار الفرز يستغرق وقتًا أطول من الرد.",
    fiche:[["فرز، توجيه، مسودات","ما نؤتمته"],["وكلاء + صندوق بريد مشترك","التقنية"],["≈ 90% من الرسائل تُوجَّه دون تدخل","الفائدة المستهدفة","obj"]] }
]
},

/* ---------- messages du formulaire ----------
   Le francais est ici aussi : ces textes n'existent pas dans le HTML, le
   script les ecrit. {n} est remplace par le nombre de champs en erreur. */
msg: {
fr: {
  nom:"Indiquez un nom — c'est celui qu'on demandera en vous rappelant.",
  bes:"Décrivez le process en une phrase. Sans lui, l'audit n'a pas de point de départ.",
  bud:"Indiquez une plage, même approximative — c'est ce qui permet de chiffrer.",
  ctc:"Indiquez un email ou un numéro — sans quoi on ne peut pas vous rappeler.",
  format:"Ce contact n'est ni un email ni un numéro de téléphone. Vérifiez la saisie.",
  errPlusieurs:"{n} champs sont à corriger avant l'envoi.",
  errUn:"Un champ est à corriger avant l'envoi.",
  envoi:"Envoi en cours…",
  recu:"Demande reçue. Nous vous rappelons.",
  echec:"L'envoi n'a pas abouti. Vos réponses sont toujours là — réessayez dans un instant.",
  proto:"Prototype — ",
  protoNote:"Prototype — le formulaire n'envoie rien.",
  protoValide:"Prototype — rien n'a été envoyé, mais le formulaire est valide."
},
en: {
  nom:"Enter a name — it's the one we'll ask for when we call you back.",
  bes:"Describe the process in one sentence. Without it, the audit has no starting point.",
  bud:"Give a range, even a rough one — that's what lets us price it.",
  ctc:"Enter an email or a phone number — otherwise we can't call you back.",
  format:"This contact is neither an email nor a phone number. Please check it.",
  errPlusieurs:"{n} fields need fixing before sending.",
  errUn:"One field needs fixing before sending.",
  envoi:"Sending…",
  recu:"Request received. We'll call you back.",
  echec:"Sending failed. Your answers are still here — try again in a moment.",
  proto:"Prototype — ",
  protoNote:"Prototype — the form sends nothing.",
  protoValide:"Prototype — nothing was sent, but the form is valid."
},
ar: {
  nom:"أدخلوا اسمًا — هو الاسم الذي سنسأل عنه حين نتصل بكم.",
  bes:"صِفوا العملية في جملة واحدة. من دونها لا نقطة انطلاق للتدقيق.",
  bud:"حدّدوا نطاقًا، ولو تقريبيًا — فهو ما يتيح لنا التسعير.",
  ctc:"أدخلوا بريدًا إلكترونيًا أو رقم هاتف — وإلا فلن نتمكّن من الاتصال بكم.",
  format:"وسيلة التواصل هذه ليست بريدًا إلكترونيًا ولا رقم هاتف. يُرجى التحقق منها.",
  errPlusieurs:"عدد الحقول التي تحتاج إلى تصحيح قبل الإرسال: {n}.",
  errUn:"حقل واحد يحتاج إلى تصحيح قبل الإرسال.",
  envoi:"جارٍ الإرسال…",
  recu:"تم استلام طلبكم. سنتصل بكم.",
  echec:"لم يكتمل الإرسال. إجاباتكم ما زالت هنا — حاولوا مجددًا بعد لحظات.",
  proto:"نموذج أولي — ",
  protoNote:"نموذج أولي — هذا النموذج لا يُرسل شيئًا.",
  protoValide:"نموذج أولي — لم يُرسَل شيء، لكن النموذج صالح."
}
}
};
