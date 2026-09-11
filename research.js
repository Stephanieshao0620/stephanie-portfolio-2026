(() => {
const researchParams = new URLSearchParams(location.search);
const researchProject = researchParams.get('project') === 'payment' ? 'payment' : 'donor';
const researchLanguage = ['zh', 'en'].includes(researchParams.get('lang'))
  ? researchParams.get('lang')
  : localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en';
const zh = researchLanguage === 'zh';

const copy = {
  donor: {
    title: zh ? '多多益善｜捐款者需求分析' : 'RIGHT PLUS | DONOR NEEDS ANALYSIS',
    description: zh ? '多多益善捐款者需求分析：理解信任、支持來源、溝通偏好與捐款意義。' : 'Right Plus donor research: trust, discovery, communication preferences, and the meaning of giving.',
  },
  payment: {
    title: zh ? '行動支付｜結帳體驗游擊訪談' : 'MOBILE PAYMENT | CHECKOUT EXPERIENCE RESEARCH',
    description: zh ? '以 26 位受訪者的游擊訪談，快速辨認行動支付流程中的使用摩擦。' : 'An exploratory study of 26 interviews identifying friction in mobile payment journeys.',
  },
};

function metric(label, value, note, tone = '') {
  return `<article class="report-metric ${tone}" data-reveal><span>${label}</span><strong>${value}</strong><p>${note}</p></article>`;
}

function card(label, title, body, tone = '') {
  return `<article class="report-card ${tone}" data-reveal><span>${label}</span><h3>${title}</h3><p>${body}</p></article>`;
}

function sectionHeading(label, title, body = '') {
  return `<header class="report-heading${body ? '' : ' report-heading-single'}"><div><span>${label}</span><h2>${title}</h2></div>${body ? `<p>${body}</p>` : ''}</header>`;
}

function donorPage() {
  const t = zh ? {
    heroLabel: 'DONOR INSIGHT / 2026', name: '多多益善', subject: '捐款者需求分析', thesis: '同樣一筆捐款，在不同人心裡完成的不是同一件事。', meta: '分析日期 2026.08.02　NPS × 信任 × 溝通偏好', responses: '有效回覆', nps: '淨推薦值', npsNote: '56 推薦者　17 中立者　5 批評者',
    scopeLabel: 'RESEARCH SCOPE', scopeTitle: '先說清楚，<br>這份資料代表誰', scopeLead: '這是已接觸「多多益善」支持者的自選回覆，適合描述這群受訪者，不代表所有捐款者或一般大眾。', scopeNote: '原始報告不同題組使用 N=78、77 或 76。信任評分高度集中，分群與關聯只作趨勢觀察，不作因果推論。',
    signalsLabel: 'CORE SIGNALS', signalsTitle: '這群受訪者透露什麼', signalsBody: '數字先描述受訪者，再談可協助調整的方向。', avg: '平均推薦 9.09 分', promoters: '56 位推薦者', trust: '兩項信任題皆給 4 分以上', reporting: '內容品質是重要支持理由', start: '支持如何開始', startTitle: '不是被推薦進來，<br>而是讀著讀著決定支持。', startNote: '議題認同約九成｜理念近七成｜親友推薦僅 3.9%', red: '共同紅線', redText: '最不能忍受煽情募款或查證不嚴謹。',
    commLabel: 'COMMUNICATION SIGNALS', commTitle: '四種溝通偏好', commBody: '以下是問卷選項形成的偏好訊號，不是標準化人格測驗。', evidence: '嚴謹查證', evidenceBody: '方法、證據、查證完整', mixed: '混合偏好', mixedBody: '適合多元內容組合測試', outcome: '成果導向', outcomeBody: '里程碑、成果與下一步', social: '陪伴與互動', socialBody: '幕後故事與社群連結', people: '人',
    lensesLabel: 'TWO DONOR LENSES', lensesTitle: '同樣支持，期待的內容不同', lensesBody: '這兩種視角不是人格類型，只是幫助整理內容偏好的分析切面。', inside: '認同型支持者', insideQuote: '「我是多多的一部分」', insideBody: '在意專業方法與完整觀點。', outside: '價值型支持者', outsideQuote: '「我讓多多繼續存在」', outsideBody: '更容易透過人物故事確認價值。',
    meaningLabel: 'WHAT A DONATION COMPLETES', meaningTitle: '一筆捐款，完成了四件不同的事', protect: '守住一個標準', place: '有了一個位置', line: '保住一條線', possibility: '撐住一個可能',
    directionLabel: 'PRACTICAL DIRECTION', directionTitle: '不是增加工作，而是調整既有內容順序', statement: '先給「規格、可驗證指標、調查方法」，再補情境故事', trustEntry: '信任敘事入口', trustBody: '先放查證方法與資料來源。', result: '成果與風險', resultBody: '同時說明成果、限制與未完成項目。', hierarchy: '優化既有版位', hierarchyBody: '依溝通偏好調整內容層級。',
    conclusionLabel: 'CONCLUSION', conclusion: '同樣一筆捐款，<br>在不同人心裡完成了不同的事。', limits: '解讀限制', limitLines: ['樣本為自選回覆', '不同題組分母為 78、77 或 76', '信任分數可能有天花板效應', '偏好分類不是人格測驗', '所有關聯都不能解讀為因果'], back: '返回研究作品',
  } : {
    heroLabel: 'DONOR INSIGHT / 2026', name: 'RIGHT PLUS', subject: 'DONOR NEEDS ANALYSIS', thesis: 'The same donation can serve a different purpose for each supporter.', meta: 'ANALYZED 2026.08.02　NPS × TRUST × COMMUNICATION', responses: 'VALID RESPONSES', nps: 'NET PROMOTER SCORE', npsNote: '56 promoters　17 passives　5 detractors',
    scopeLabel: 'RESEARCH SCOPE', scopeTitle: 'First clarify<br>who the data represents', scopeLead: 'These self-selected responses come from people already familiar with Right Plus. They describe this group, not all donors or the broader public.', scopeNote: 'Question sets use N=78, 77, or 76. Trust scores are highly concentrated. Segments and associations are descriptive, not causal.',
    signalsLabel: 'CORE SIGNALS', signalsTitle: 'What these respondents reveal', signalsBody: 'Describe respondents first, then identify practical directions.', avg: 'Average recommendation: 9.09', promoters: '56 promoters', trust: 'Both trust items rated 4 or above', reporting: 'Content quality is a key support reason', start: 'HOW SUPPORT STARTS', startTitle: 'Not through referrals.<br>They read, then decide to support.', startNote: 'Issue alignment about 90% | mission near 70% | referrals only 3.9%', red: 'SHARED RED LINE', redText: 'Emotional pressure and weak verification are least tolerated.',
    commLabel: 'COMMUNICATION SIGNALS', commTitle: 'Four communication preferences', commBody: 'These are survey-based preference signals, not standardized personality types.', evidence: 'Evidence-led', evidenceBody: 'Methods, evidence, and verification', mixed: 'Mixed preference', mixedBody: 'Test combinations of content', outcome: 'Outcome-led', outcomeBody: 'Milestones, outcomes, and next steps', social: 'Support and interaction', socialBody: 'Behind-the-scenes stories and connection', people: 'people',
    lensesLabel: 'TWO DONOR LENSES', lensesTitle: 'Same support, different content expectations', lensesBody: 'These lenses organize content preferences. They are not personality categories.', inside: 'Identity-aligned supporters', insideQuote: '“I am part of Right Plus.”', insideBody: 'Prioritize rigorous methods and complete perspectives.', outside: 'Value-aligned supporters', outsideQuote: '“I help Right Plus continue.”', outsideBody: 'Use personal stories to confirm shared values.',
    meaningLabel: 'WHAT A DONATION COMPLETES', meaningTitle: 'One donation can complete four different tasks', protect: 'Protect a standard', place: 'Find a place', line: 'Keep a connection', possibility: 'Sustain a possibility',
    directionLabel: 'PRACTICAL DIRECTION', directionTitle: 'Reorder existing content instead of adding work', statement: 'Lead with specifications, verifiable indicators, and research methods. Add stories after.', trustEntry: 'Trust entry point', trustBody: 'Show verification methods and sources first.', result: 'Outcomes and risks', resultBody: 'State outcomes, limits, and unfinished work together.', hierarchy: 'Use existing placements', hierarchyBody: 'Adjust hierarchy for different communication preferences.',
    conclusionLabel: 'CONCLUSION', conclusion: 'The same donation<br>completes something different for each person.', limits: 'INTERPRETATION LIMITS', limitLines: ['Self-selected respondents', 'Question sets use N=78, 77, or 76', 'Trust ratings may show a ceiling effect', 'Preference groups are not personality types', 'No association should be read as causal'], back: 'Back to research work',
  };

  return `<section class="report-hero"><div class="report-hero-copy"><div><span>${t.heroLabel}</span><h1>${t.name}</h1><h2>${t.subject}</h2><p>${t.thesis}</p></div><small>${t.meta}</small></div><aside class="report-hero-metric"><div><span>${t.responses}</span><strong>78</strong></div><div><span>${t.nps}</span><strong class="ink">+65</strong><p>${t.npsNote}</p></div></aside></section>
  <section class="report-section paper">${sectionHeading(t.scopeLabel, t.scopeTitle)}<div class="report-scope"><h3>${t.scopeLead}</h3><p>${t.scopeNote}</p></div></section>
  <section class="report-section sand">${sectionHeading(t.signalsLabel, t.signalsTitle, t.signalsBody)}<div class="metric-grid">${metric('NPS','+65',t.avg)}${metric('PROMOTERS','71%',t.promoters)}${metric('TRUST','77 / 77',t.trust)}${metric('DEEP REPORTING','61.8%',t.reporting)}</div><div class="statement-grid"><article class="statement light"><span>${t.start}</span><h3>${t.startTitle}</h3><p>${t.startNote}</p></article><article class="statement dark"><span>${t.red}</span><strong>64%</strong><p>${t.redText}</p></article></div></section>
  <section class="report-section paper">${sectionHeading(t.commLabel, t.commTitle, t.commBody)}<div class="preference-grid">${card('C / 48.7%',t.evidence,t.evidenceBody,'dark tall')} ${card('MIXED / 27.6%',t.mixed,t.mixedBody,'tall')} ${card('D / 9.2%',t.outcome,t.outcomeBody,'tall')} ${card('S + I / 14.5%',t.social,t.socialBody,'tall')}</div><div class="report-caution"><b>${zh?'解讀提醒':'READING NOTE'}</b><p>${t.commBody}</p></div></section>
  <section class="report-section sand">${sectionHeading(t.lensesLabel, t.lensesTitle, t.lensesBody)}<div class="comparison-grid"><article class="comparison light" data-reveal><span>${t.inside}</span><h3>${t.insideQuote}</h3><p>${t.insideBody}</p><dl><div><dt>${zh?'分析與方法論':'Analysis and methods'}</dt><dd>38%</dd></div><div><dt>${zh?'人物故事':'Personal stories'}</dt><dd>29%</dd></div><div><dt>${zh?'團隊幕後':'Behind the scenes'}</dt><dd>23%</dd></div></dl></article><article class="comparison dark" data-reveal><span>${t.outside}</span><h3>${t.outsideQuote}</h3><p>${t.outsideBody}</p><dl><div><dt>${zh?'人物故事':'Personal stories'}</dt><dd>52%</dd></div><div><dt>${zh?'分析與方法論':'Analysis and methods'}</dt><dd>28%</dd></div><div><dt>${zh?'關鍵數據':'Key metrics'}</dt><dd>10%</dd></div></dl></article></div></section>
  <section class="report-section paper">${sectionHeading(t.meaningLabel, t.meaningTitle)}<div class="outcome-grid">${metric('30', '30', t.protect, 'accent')} ${metric('18', '18', t.place)} ${metric('19', '19', t.line)} ${metric('10', '10', t.possibility)}</div></section>
  <section class="report-section sand">${sectionHeading(t.directionLabel, t.directionTitle)}<div class="wide-statement">${t.statement}</div><div class="three-grid">${card('01',t.trustEntry,t.trustBody)}${card('02',t.result,t.resultBody)}${card('03',t.hierarchy,t.hierarchyBody)}</div></section>
  <section class="report-conclusion"><div><span>${t.conclusionLabel}</span><h2>${t.conclusion}</h2><a href="index.html?lang=${researchLanguage}#ux-research">← ${t.back}</a></div><aside><h3>${t.limits}</h3><ol>${t.limitLines.map((line,index)=>`<li><b>${String(index+1).padStart(2,'0')}</b>${line}</li>`).join('')}</ol></aside></section>`;
}

function paymentPage() {
  const t = zh ? {
    heroLabel:'PAYMENT FRICTION / RAPID STUDY', name:'行動支付', subject:'結帳體驗游擊訪談', thesis:'不是為了證明市場，而是快速找出付款旅程反覆出現的摩擦。', meta:'研究型態：游擊訪談　探索型研究　未經代表性抽樣', interviews:'位受訪者', linePay:'最常使用 LINE Pay',
    scopeLabel:'RESEARCH FRAME', scopeTitle:'先快速找到問題，<br>再決定下一步驗證什麼', scopeLead:'本研究從便利商店與校園場域訪談，共 26 位受訪者；目的在快速辨認行動支付結帳時的常見摩擦。', scopeNote:'這些訪談是探索型資料，不代表市場比例。設計機會必須再透過任務測試或原型驗證。',
    signalsLabel:'REPEATED SIGNALS', signalsTitle:'這 26 次對話，反覆出現什麼', signalsBody:'先看重複訊號，再把摩擦整理為下一步可驗證問題。', interviewNote:'完成探索訪談', age:'集中於 21-40 歲', spend:'便利商店與日常消費', other:'提到其他常用支付', whyTitle:'方便、習慣與回饋，讓行動支付自然進入日常。', whyBody:'受訪者選擇支付工具，常從熟悉度與回饋開始。', verifyTitle:'店家支援、網路與步驟，讓付款旅程被迫繞路。', verifyBody:'限制不是單一畫面，而是支援、網路與流程的組合。',
    chainLabel:'EVIDENCE CHAIN', chainTitle:'從原話一路走到設計問題', chainBody:'保留原話脈絡，不把少數受訪者放大成市場結論。', q1:'受訪者原話', q1t:'「要退 4 個步驟才能結帳很痛苦」', q2:'初始標籤', q2t:'切換付款不夠直覺', q3:'摩擦主題', q3t:'消費金額會過幾天才被扣款', q4:'設計問題', q4t:'付款碼、條碼與 QR Code 如何更易切換？', chainNote:'以上為探索訪談的編碼示例，仍需透過任務測試驗證。',
    frictionLabel:'FRICTION THEMES', frictionTitle:'摩擦發生在結帳瞬間的限制', frictionBody:'依訪談回應整理，不是使用率或市場比例。', f1:'通路與網路卡限制', f1b:'店家不支援、卡別不支援，或網路不穩。', f2:'網路與速度同步', f2b:'網路延遲、確認不明，增加等待感。', f3:'消費感知模糊', f3b:'付款太快，難察覺支出累積。', f4:'切換支付狀態', f4b:'付款碼、條碼與掃描入口不夠清楚。',
    hypothesisLabel:'DESIGN HYPOTHESES', hypothesisTitle:'把問題轉成下一步可驗證的方向', hypothesisBody:'以下是由訪談形成的假設，仍需任務測試確認。', h1:'更快喚出支付碼', h1b:'縮短從開啟到付款的步驟。', h2:'付款失敗後續援', h2b:'清楚顯示原因與可替代方案。', h3:'即時支出回饋', h3b:'付款後立即顯示本次與累積金額。', h4:'依情境提示卡別', h4b:'在限制發生前提示可用方式。',
    nextLabel:'NEXT STEP', next:'先把付款任務跑完，<br>再決定哪個方向值得做。', nextBody:'下一輪應以真實結帳任務測試支付碼切換、失敗後續援與即時支出回饋。', limits:'研究限制', limitLines:['便利取樣，共 26 人，不代表市場比例','25 / 26 為 21-40 歲，年齡分布集中','受訪者以既有使用者為主','設計方向都是待驗證假設'], back:'返回研究作品',
  } : {
    heroLabel:'PAYMENT FRICTION / RAPID STUDY', name:'MOBILE PAYMENT', subject:'CHECKOUT EXPERIENCE INTERVIEWS', thesis:'Not to prove the market, but to quickly identify repeated friction in the payment journey.', meta:'METHOD: GUERRILLA INTERVIEWS　EXPLORATORY STUDY　NON-REPRESENTATIVE', interviews:'INTERVIEWS', linePay:'MOST USED LINE PAY',
    scopeLabel:'RESEARCH FRAME', scopeTitle:'Find the problem fast.<br>Then decide what to validate.', scopeLead:'This study used 26 short interviews in convenience-store and campus contexts to identify recurring friction during mobile checkout.', scopeNote:'The findings are exploratory and do not represent market share. Design opportunities require task-based prototype validation.',
    signalsLabel:'REPEATED SIGNALS', signalsTitle:'What repeated across 26 conversations', signalsBody:'Start with repeated signals, then turn friction into testable questions.', interviewNote:'exploratory interviews', age:'participants aged 21-40', spend:'everyday convenience spending', other:'mentioned another payment tool', whyTitle:'Convenience, habit, and rewards make mobile payment part of daily life.', whyBody:'Familiarity and incentives often shape the initial payment choice.', verifyTitle:'Merchant support, connectivity, and steps can force the journey to detour.', verifyBody:'The constraint is a combination of support, network, and flow.',
    chainLabel:'EVIDENCE CHAIN', chainTitle:'From raw quote to a design question', chainBody:'Keep the context. Do not turn a few interviews into a market claim.', q1:'RAW QUOTE', q1t:'“Going back four steps before paying is painful.”', q2:'INITIAL LABEL', q2t:'Switching payment methods is unclear', q3:'FRICTION THEME', q3t:'Charges may appear days after the purchase', q4:'DESIGN QUESTION', q4t:'How might payment codes and QR scanning switch more clearly?', chainNote:'This is an example of exploratory coding and still requires task testing.',
    frictionLabel:'FRICTION THEMES', frictionTitle:'Constraints surface at the checkout moment', frictionBody:'Themes summarize interview mentions, not usage or market rates.', f1:'Merchant and card support', f1b:'Some merchants, cards, or networks are unavailable.', f2:'Connectivity and speed', f2b:'Delay and unclear confirmation increase waiting.', f3:'Weak spending awareness', f3b:'Fast payment can hide accumulated spending.', f4:'Payment-state switching', f4b:'Code, barcode, and scanning entry points feel unclear.',
    hypothesisLabel:'DESIGN HYPOTHESES', hypothesisTitle:'Turn friction into testable directions', hypothesisBody:'These are interview-derived hypotheses, not validated solutions.', h1:'Reach the payment code faster', h1b:'Reduce the steps from opening to paying.', h2:'Recover from failure', h2b:'Show the cause and a usable alternative.', h3:'Immediate spending feedback', h3b:'Show this payment and the running total.', h4:'Contextual card guidance', h4b:'Warn about unavailable methods before checkout.',
    nextLabel:'NEXT STEP', next:'Run the payment task first.<br>Then decide what is worth building.', nextBody:'The next round should test code switching, failure recovery, and immediate spending feedback in realistic checkout tasks.', limits:'RESEARCH LIMITS', limitLines:['Convenience sample of 26, not a market estimate','25 of 26 participants were aged 21-40','Participants were mostly existing users','Every design direction remains a hypothesis'], back:'Back to research work',
  };

  return `<section class="report-hero"><div class="report-hero-copy"><div><span>${t.heroLabel}</span><h1>${t.name}</h1><h2>${t.subject}</h2><p>${t.thesis}</p></div><small>${t.meta}</small></div><aside class="report-hero-metric"><div><span>${t.interviews}</span><strong>26</strong></div><div><span>${t.linePay}</span><strong class="ink">19 / 26</strong><p>${zh?'最常使用者提及':'most-used mentions'}</p></div></aside></section>
  <section class="report-section paper">${sectionHeading(t.scopeLabel,t.scopeTitle)}<div class="report-scope"><h3>${t.scopeLead}</h3><p>${t.scopeNote}</p></div></section>
  <section class="report-section sand">${sectionHeading(t.signalsLabel,t.signalsTitle,t.signalsBody)}<div class="metric-grid">${metric('INTERVIEWS','26',t.interviewNote)}${metric('LINE PAY','19 / 26',t.linePay,'accent')}${metric('AGE 21-40','25 / 26',t.age,'dark')}${metric('SPENDING SCENARIO','3',t.other)}</div><div class="statement-grid"><article class="statement light"><span>${zh?'WHY PEOPLE ADOPT':'WHY PEOPLE ADOPT'}</span><h3>${t.whyTitle}</h3><p>${t.whyBody}</p></article><article class="statement light"><span>${zh?'WHERE CHECKOUT BREAKS':'WHERE CHECKOUT BREAKS'}</span><h3>${t.verifyTitle}</h3><p>${t.verifyBody}</p></article></div></section>
  <section class="report-section paper">${sectionHeading(t.chainLabel,t.chainTitle,t.chainBody)}<div class="four-grid accent-cards">${card('01',t.q1,t.q1t,'accent tall')} ${card('02',t.q2,t.q2t,'accent tall')} ${card('03',t.q3,t.q3t,'accent tall')} ${card('04',t.q4,t.q4t,'accent tall')}</div><div class="report-caution"><b>${zh?'實證邊界':'EVIDENCE BOUNDARY'}</b><p>${t.chainNote}</p></div></section>
  <section class="report-section sand">${sectionHeading(t.frictionLabel,t.frictionTitle,t.frictionBody)}<div class="four-grid accent-cards">${card('ACCESS / SUPPORT',t.f1,t.f1b,'accent tall')} ${card('FLOW / NETWORK',t.f2,t.f2b,'accent tall')} ${card('AWARENESS',t.f3,t.f3b,'accent tall')} ${card('SWITCHING',t.f4,t.f4b,'accent tall')}</div><div class="report-caution"><b>${zh?'樣本說明':'SAMPLE NOTE'}</b><p>${zh?'多人重複提及的問題形成主題，但提及頻率不能當作市場比例。':'Repeated mentions form themes, but mention frequency is not a market rate.'}</p></div></section>
  <section class="report-section paper">${sectionHeading(t.hypothesisLabel,t.hypothesisTitle,t.hypothesisBody)}<div class="four-grid accent-cards">${card('01',t.h1,t.h1b,'accent tall')} ${card('02',t.h2,t.h2b,'accent tall')} ${card('03',t.h3,t.h3b,'accent tall')} ${card('04',t.h4,t.h4b,'accent tall')}</div><div class="report-caution"><b>${zh?'不等於結論':'NOT A CONCLUSION'}</b><p>${t.hypothesisBody}</p></div></section>
  <section class="report-conclusion"><div><span>${t.nextLabel}</span><h2>${t.next}</h2><p>${t.nextBody}</p><a href="index.html?lang=${researchLanguage}#ux-research">← ${t.back}</a></div><aside><h3>${t.limits}</h3><ol>${t.limitLines.map((line,index)=>`<li><b>${String(index+1).padStart(2,'0')}</b>${line}</li>`).join('')}</ol></aside></section>`;
}

const researchMain = document.querySelector('.research-report');
document.documentElement.lang = zh ? 'zh-Hant' : 'en';
document.body.classList.add(`research-${researchProject}`);
researchMain.innerHTML = researchProject === 'payment' ? paymentPage() : donorPage();
document.title = copy[researchProject].title;
document.querySelector('meta[name="description"]').content = copy[researchProject].description;
})();
