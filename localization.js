const requestedLanguage = new URLSearchParams(location.search).get('lang');
const language = requestedLanguage === 'en' || requestedLanguage === 'zh'
  ? requestedLanguage
  : localStorage.getItem('portfolio-language') === 'zh' ? 'zh' : 'en';

const copy = [
  ['張勻瑄', 'Stephanie Chang'],
  ['張勻瑄 /', 'Stephanie Chang /'],
  ['史蒂芬妮', 'Stephanie'],
  ['選單', 'Menu'],
  ['關閉', 'Close'],
  ['作品', 'Work'],
  ['關於', 'About'],
  ['履歷', 'Resume'],
  ['聯絡', 'Contact'],
  ['產品設計・介面體驗設計・網頁設計', 'Product Design · UI/UX Design · Web Designer'],
  ['將複雜化為清晰、可擴充的數位產品。', 'Turning complexity into clear, scalable digital products.'],
  ['將', 'Turning'],
  ['複雜轉化為', 'Complexity into'],
  ['清楚、可擴充的', 'Clear, scalable'],
  ['數位產品。', 'Digital products.'],
  ['將複雜需求轉化為清楚、可擴充且能實際落地的產品體驗。', 'Translating complex requirements into clear, scalable, and deliverable product experiences.'],
  ['查看精選作品', 'View selected works'],
  ['下載履歷', 'Download resume'],
  ['三年以上經驗', '3+ years'],
  ['精選作品', 'Selected works'],
  ['四個案例，涵蓋產品上線、可擴充系統與響應式設計。', 'Four case studies spanning product launches, scalable systems, and responsive design.'],
  ['使用者研究', 'UX Research'],
  ['研究與洞察', 'Research & insights'],
  ['兩項研究專案，連結使用者行為、證據與可落地的產品決策。', 'Two research projects connecting user behavior, evidence, and practical product decisions.'],
  ['付款旅程', 'Payment Journey'],
  ['從發現到確認的付款旅程', 'Payment journey from discovery to confirmation'],
  ['信任在哪一步中斷？', 'Where does trust break?'],
  ['發現', 'Discover'],
  ['驗證', 'Verify'],
  ['付款', 'Pay'],
  ['確認', 'Confirm'],
  ['行動支付使用者研究', 'Mobile Payment UX Research'],
  ['理解支付習慣、決策因素與阻礙，找出體驗改善機會。', 'Understanding payment habits, decision factors, and barriers to uncover experience opportunities.'],
  ['問卷・使用者行為・洞察整理', 'Survey / User Behavior / Insight Synthesis'],
  ['產品問卷調查', 'Product Survey Research'],
  ['將產品問卷調查整理為優先項目', 'Product survey findings summarized into priorities'],
  ['回饋轉為優先項目', 'Feedback → priorities'],
  ['描述性證據・自選樣本', 'Descriptive · Self-selected Sample'],
  ['多多益善捐款人問卷分析', 'Donor Survey Analysis'],
  ['將捐款人回饋整理為清楚的證據、溝通重點與低負擔改善方向。', 'Turning donor feedback into clear evidence, communication priorities, and low-burden improvements.'],
  ['問卷分析・NPS・利害關係人溝通', 'Survey Analysis / NPS / Stakeholder Communication'],
  ['多多益善捐款者問卷分析', 'Right Plus Donor Survey Analysis'],
  ['與多多益善真實合作案例－捐款者調查', 'A real-world donor research collaboration with Right Plus.'],
  ['問卷分析 / NPS / 溝通偏好', 'Survey Analysis / NPS / Communication Patterns'],
  ['查看完整報告 ↗', 'View report ↗'],
  ['查看多多益善捐款者需求分析完整報告', 'View the complete Right Plus donor research report'],
  ['四個案例，涵蓋產品上線、', 'Four case studies spanning product launches,'],
  ['可擴充系統與響應式設計。', 'scalable systems, and responsive design.'],
  ['手機應用程式與產品入口', 'Mobile App & Product Portal'],
  ['從初期產品企劃與功能架構，到跨平台上線及香港產品發表。', 'From early product planning and functional architecture to cross-platform launch and a Hong Kong product event.'],
  ['產品企劃・介面體驗・視覺方向・上線', 'Product Planning · UI/UX · Visual Direction · Launch'],
  ['第三代網路預測遊戲', 'Web3 Prediction Game'],
  ['橫跨桌機與手機的響應式遊戲介面，以及多語系產品頁面。', 'Responsive game interfaces and multilingual product pages across desktop and mobile.'],
  ['遊戲介面・響應式設計・多語系・第三代網路', 'Game UI · Responsive · Multilingual · Web3'],
  ['白標產品系統', 'White-label Product System'],
  ['由成熟產品延伸為可重組模組與多種視覺方向，支援手機端客製交付。', 'A mature product extended into reusable modules and visual directions for customized mobile delivery.'],
  ['產品系統・模組化介面・手機端交付', 'Product System · Modular UI · Mobile Delivery'],
  ['直播平台', 'Live Streaming Platform'],
  ['將直播內容產品延伸為涵蓋三種裝置的響應式觀看與創作者體驗。', 'A live-content product expanded into responsive viewer and creator experiences across three device types.'],
  ['響應式介面・直播互動・設計系統', 'Responsive UI · Live Interaction · Design System'],
  ['專業能力', 'Capabilities'],
  ['結合產品思維、視覺設計與人工智慧輔助執行的複合能力。', 'A multidisciplinary practice combining product thinking, visual design, and AI-assisted execution.'],
  ['結合產品思維、視覺設計', 'A multidisciplinary practice combining product thinking, visual design,'],
  ['與人工智慧輔助執行的複合能力。', 'and AI-assisted execution.'],
  ['產品設計策略', 'Product Design Strategy'],
  ['介面設計・線框稿・產品企劃', 'Figma · Wireframing · Product Planning'],
  ['將商業需求轉化為模組化產品架構與可擴充的介面決策。', 'Translating business requirements into modular product architecture and scalable interface decisions.'],
  ['人工智慧強化工作流程', 'AI-enhanced Workflow'],
  ['生成式研究・概念探索・素材製作', 'ChatGPT · Midjourney · Gemini · Liblib AI · JiMeng'],
  ['運用生成式工具加速研究整合、概念發想與素材製作。', 'Using generative tools to accelerate research synthesis, concept development, and asset production.'],
  ['視覺設計與素材', 'Visual Design & Assets'],
  ['向量繪圖・影像處理・基礎三維渲染', 'Illustrator · Photoshop · 3D Rendering Basics'],
  ['建立具辨識度的視覺系統與可跨產品接觸點使用的行銷素材。', 'Building distinctive visual systems and campaign assets for use across product touchpoints.'],
  ['工作經歷', 'Experience'],
  ['介面設計師', 'UI Designer'],
  ['網頁設計師', 'Web Designer'],
  ['白標產品・產品開發・視覺系統', 'White-label Products · Product Development · Visual Systems'],
  ['網頁設計・視覺設計・產品開發', 'Web Design · Visual Design · Product Development'],
  ['介面設計・視覺設計・產品管理', 'UI Design · Visual Design · Product Management'],
  ['業鈞數位有限公司', 'Ye Jun Digital Co., Ltd.'],
  ['星翰有限公司', 'Xing Han Co., Ltd.'],
  ['主橙資訊科技有限公司', 'Ju Cheng Information Technology Co., Ltd.'],
  ['為清晰度、擴充性與推進力而設計。', 'Designing for clarity, scale, and momentum.'],
  ['具備三年以上介面體驗實務經驗，擅長把複雜需求轉化為模組化、可擴充的產品體驗。', 'More than three years of UI/UX experience, specializing in turning complex requirements into modular, scalable product experiences.'],
  ['具備三年以上介面體驗實務經驗，擅長把複雜需求轉化為模組化、可擴充的產品體驗。', 'More than three years of UI/UX experience, specializing in turning complex requirements into modular, scalable product experiences.'],
  ['台中・臺灣・2026 作品集', 'Taichung, Taiwan · 2026 Portfolio'],
  ['期待合作', "Let's work together"],
  ['有值得打造的產品嗎？', 'Have a product worth shaping?'],
  ['歡迎透過電話或電子郵件聯絡合作。', 'Get in touch by phone or email to discuss a collaboration.'],
  ['歡迎透過電話或電子郵件聯絡合作。', 'Get in touch by phone or email to discuss a collaboration.'],
  ['電話', 'Phone'],
  ['電子郵件', 'Email'],
  ['跳到主要內容', 'Skip to main content'],
  ['主要導覽', 'Main navigation'],
  ['查看手機應用程式與產品入口案例詳情', 'View the Mobile App & Product Portal case study'],
  ['查看手機應用程式與產品入口案例詳情', 'View the Mobile App & Product Portal case study'],
  ['查看第三代網路預測遊戲案例詳情', 'View the Web3 Prediction Game case study'],
  ['查看第三代網路預測遊戲案例詳情', 'View the Web3 Prediction Game case study'],
  ['查看白標產品系統案例詳情；將滑鼠移入或取得焦點可切換介面展示', 'View the White-label Product System case study; hover or focus to change the interface preview'],
  ['查看白標產品系統案例詳情；將滑鼠移入或取得焦點可切換介面展示', 'View the White-label Product System case study; hover or focus to change the interface preview'],
  ['查看直播平台案例詳情', 'View the Live Streaming Platform case study'],
  ['查看直播平台案例詳情', 'View the Live Streaming Platform case study'],
  ['專業能力', 'Expertise'],
  ['為清晰度、擴充性與推進力而設計，', 'Designing for clarity,'],
  ['兼顧規模與推進力。', 'Scale and momentum.'],
  ['有值得打造的產品', 'Have a product'],
  ['嗎？', 'worth shaping?'],
  ['張勻瑄的形象照', "Stephanie Chang's portrait"],
  ['史蒂芬妮首頁', 'Stephanie homepage'],

  ['精選案例', 'Featured Case Study'],
  ['系統案例', 'System Case Study'],
  ['響應式產品', 'Responsive Product'],
  ['遊戲產品', 'Game Product'],
  ['產品案例', 'Product Case Study'],
  ['從產品規格到可上線的手機體驗。', 'From product specification to a launch-ready mobile experience.'],
  ['從成熟產品到可重用模組與客製交付。', 'From a mature product to reusable modules and client-specific delivery.'],
  ['橫跨三種裝置的響應式觀眾端與創作者端體驗。', 'A responsive viewer and creator experience across three device types.'],
  ['跨越多邊形鏈、開放網路鏈與音速鏈生態的響應式預測遊戲。', 'A responsive prediction game adapted across Polygon, TON, and Sonic ecosystems.'],
  ['響應式遊戲介面與多語產品交付。', 'Responsive game interfaces and multilingual product delivery.'],
  ['返回精選作品', 'Back to selected works'],
  ['下一個案例', 'Next case'],
  ['期間', 'Period'],
  ['角色', 'Role'],
  ['團隊', 'Team'],
  ['產出', 'Output'],
  ['平台', 'Platforms'],
  ['狀態', 'Status'],
  ['里程碑', 'Milestone'],
  ['流程', 'Process'],
  ['發布', 'Release'],

  ['從複雜娛樂平台規格、功能邏輯與品牌方向，整理為可實際開發、測試及上架的產品體驗。', 'Complex entertainment-platform specifications, functional logic, and brand direction were organized into an experience ready for development, testing, and release.'],
  ['產品企劃・主導介面設計', 'Product Planning · Lead UI Design'],
  ['專案經理・前端・後端・應用程式工程・三位介面設計師', 'PM · Front-end · Back-end · App Engineering · 3 UI Designers'],
  ['產品需求文件・手機介面・品牌角色・商店上架', 'PRD · Mobile UI · Brand IP · Store Release'],
  ['從模糊需求到公開發表', 'From Ambiguous Requirements to Public Launch'],
  ['從複雜娛樂平台規格，到可上架、可展示並可延伸的產品基礎。', 'From complex entertainment-platform specifications to a product foundation ready to launch, present, and extend.'],
  ['負責初版產品企劃與產品需求文件架構，整理功能、資訊架構與操作邏輯；並與技術主管及專案經理反覆確認流水限制、贈禮與玩家留存等機制的可行性。技術與金流細節由相關部門提供，再將回饋整合進規格與介面交付。', 'Owned the initial product plan and PRD structure, organizing features, information architecture, and interaction logic. Feasibility for turnover limits, gifting, and player retention was aligned repeatedly with technical leadership and the PM. Technical and payment details came from the relevant teams and were incorporated into specifications and UI delivery.'],
  ['從產品到公開上線', 'From Product to Public Launch'],
  ['香港發表會與雙平台發布紀錄', 'Hong Kong event and dual-platform release records'],
  ['挑戰', 'The Challenge'],
  ['問題不只在介面，而在如何讓多方對同一套規則達成共識。', 'The challenge was not only the interface, but helping multiple disciplines align on the same rules.'],
  ['複雜產品規則', 'Complex Product Rules'],
  ['流水限制、會員升等、贈禮與玩家留存機制互相影響，需要把商業需求轉為工程可確認的條件。', 'Turnover limits, membership progression, gifting, and retention mechanics affected one another, requiring business needs to become engineering-verifiable conditions.'],
  ['變動中的決策', 'Shifting Decisions'],
  ['工程確認後仍可能因專案經理的最終決策重新調整；規格書與介面必須反覆改寫，才能維持一致。', 'Even after engineering review, final PM decisions could trigger further changes. Specifications and interfaces had to be revised together to remain consistent.'],
  ['間接且延遲的資訊', 'Indirect and Late Input'],
  ['設計端並非直接接觸客戶，需求經由專案經理傳遞，且部分變更接近下班才確認，壓縮設計與開發交付時間。', 'Design did not communicate with the client directly. Requirements were relayed through the PM, and some changes were confirmed late in the day, compressing design and development time.'],
  ['設計回應', 'Design Response'],
  ['快速推進，提早對齊。', 'Move Fast, Align Early.'],
  ['收到新需求後，優先整理可行方案並盡快與工程師確認，讓規則、畫面與實作限制在交付前被看見。', 'When new requirements arrived, feasible options were organized and reviewed with engineering early so rules, screens, and implementation constraints became visible before handoff.'],
  ['釐清資訊', 'Clarify Input'],
  ['整理專案經理傳遞的需求，標記不確定條件與待決策項目。', 'Organize PM-relayed requirements and flag uncertain conditions and pending decisions.'],
  ['轉化為規則', 'Translate into Rules'],
  ['將流水、升等、贈禮等需求轉成操作與判斷邏輯。', 'Translate turnover, progression, and gifting requirements into interaction and decision logic.'],
  ['與工程對齊', 'Align with Engineering'],
  ['確認狀態、限制與例外處理方式。', 'Confirm states, constraints, and exception handling.'],
  ['修改與交付', 'Revise and Handoff'],
  ['依決策同步規格與介面，交付可實作版本。', 'Synchronize specifications and UI with decisions, then hand off an implementable version.'],
  ['產品架構', 'Product Architecture'],
  ['把功能規格整理成工程與設計可以共同確認的產品結構。', 'Organizing functional specifications into a product structure that design and engineering could validate together.'],
  ['帳號與玩家入口', 'Account and Player Entry'],
  ['登入、綁定、個人資料與帳號狀態。', 'Login, account linking, profile, and account states.'],
  ['錢包與會員等級', 'Wallet and Membership Tiers'],
  ['儲值、兌換、餘額、會員等級與金流入口。', 'Top-up, exchange, balance, membership tiers, and payment entry points.'],
  ['互動與留存', 'Interaction and Retention'],
  ['贈禮、聊天、公告、活動與回訪機制。', 'Gifting, chat, announcements, campaigns, and return mechanisms.'],
  ['規格迭代', 'Specification Iteration'],
  ['初版規劃', 'Initial Plan'],
  ['初版功能與頁面大綱', 'Initial feature and page outline'],
  ['工程審查', 'Engineering Review'],
  ['確認狀態與技術限制', 'Confirm states and technical constraints'],
  ['專案決策', 'PM Decision'],
  ['更新商業決策', 'Update business decisions'],
  ['規格修改', 'Specification Revision'],
  ['同步規格與介面', 'Synchronize specifications and UI'],
  ['交付', 'Handoff'],
  ['交付可實作版本', 'Deliver an implementable version'],
  ['責任說明', 'Responsibility Note'],
  ['負責初版產品架構與規格整理，並持續整合專案經理、工程及相關部門回饋；金流與後端技術規則由各專業角色共同確認。', 'Responsible for the initial product architecture and specification organization, while continuously integrating feedback from the PM, engineering, and relevant teams. Payment and back-end rules were validated by the corresponding specialists.'],
  ['人工智慧輔助品牌角色開發', 'AI-assisted IP Development'],
  ['從角色探索到可重用的視覺語言。', 'From character exploration to a reusable visual language.'],
  ['以生成式人工智慧加速探索，再由設計判斷統整角色與品牌語言。', 'Generative AI accelerated exploration, followed by design judgment to unify character and brand language.'],
  ['設計意圖', 'Design Intent'],
  ['好記、親切，並適合推廣。', 'Memorable, Friendly, and Built for Promotion.'],
  ['角色需要在遊戲介面、活動橫幅、商店預覽與實體物料中保持辨識度。', 'The characters needed to remain recognizable across game UI, campaign banners, store previews, and physical materials.'],
  ['視覺要素', 'Visual DNA'],
  ['輪廓', 'Silhouette'],
  ['圓潤且親切', 'Rounded and approachable'],
  ['識別特徵', 'Signature'],
  ['墨鏡・金鍊', 'Sunglasses · gold chain'],
  ['色彩', 'Palette'],
  ['陽光金・紅・暖米白', 'Sun gold · red · warm cream'],
  ['應用', 'Application'],
  ['介面・行銷・商店・印刷', 'UI · campaign · store · print'],
  ['最終成果', 'Final Applications'],
  ['從產品介面延伸至發布與宣傳接觸點', 'Extending from product UI to launch and campaign touchpoints'],
  ['設計角色', 'Design Role'],
  ['使用生成式人工智慧探索角色方向，並負責挑選、調整與統整最終視覺，使角色能一致應用於產品介面、商店預覽與發表會物料。', 'Used generative AI to explore character directions, then selected, refined, and unified the final visual language for consistent use across product UI, store previews, and event materials.'],

  ['設計與品牌演進', 'Design and Brand Evolution'],
  ['從功能開發稿到具品牌規範的跨裝置體驗', 'From Functional Drafts to a Branded Multi-device Experience'],
  ['初期版本從未正式上線，但核心直播與會員功能持續配合開發；後續版本依客戶指定的品牌素材與視覺規範，完成跨裝置介面與新增功能的介面設計。', 'The initial version never launched publicly, but core live-streaming and membership features continued in development. Later versions applied client-provided brand assets and visual guidelines across devices and new features.'],
  ['初期產品草稿', 'Initial Product Draft'],
  ['初期手機版本', 'Initial Mobile Version'],
  ['未正式上線的早期設計稿；核心直播、私聊、付費與會員功能持續配合開發。', 'An early design draft that did not launch publicly; core live-streaming, private chat, payment, and membership features remained in development.'],
  ['重新設計', 'Redesign'],
  ['視覺與響應式設計', 'Visual and Responsive Design'],
  ['依客戶陸續提供的品牌素材與指定方向，完成視覺套用並重整跨裝置介面。', 'Applied client-provided brand assets and direction, then reorganized interfaces across devices.'],
  ['系統', 'System'],
  ['可重用元件', 'Reusable Components'],
  ['整理跨頁共用元件，支援桌機、手機與新增狀態。', 'Organized shared components across pages to support desktop, mobile, and new states.'],
  ['更新品牌版本', 'Updated Brand Version'],
  ['依客戶提供的品牌名稱、標誌、色彩與視覺方向完成跨裝置介面；公開展示採匿名處理。', 'Completed cross-device UI using the client-provided brand name, logo, colors, and visual direction; public presentation is anonymized.'],
  ['需求持續變動，但交付節奏不能停', 'Requirements Kept Changing, but Delivery Could Not Stop'],
  ['挑戰不只來自介面本身，更來自間接需求、晚到決策與工程可行性之間的反覆確認。', 'The challenge extended beyond the interface to repeated alignment among indirect requirements, late decisions, and engineering feasibility.'],
  ['間接取得需求', 'Indirect Input'],
  ['設計端並非第一線接觸客戶，需等待專案經理彙整後才能確認修改內容，資訊可能在不同角色間再次轉譯。', 'Design was not in direct contact with the client and had to wait for PM synthesis before confirming changes, allowing information to be reinterpreted between roles.'],
  ['決策時間集中', 'Late Decisions'],
  ['部分關鍵決策接近下班前才確認，設計與工程需要在有限時間內重新對齊優先順序。', 'Some key decisions were confirmed late in the day, leaving design and engineering limited time to realign priorities.'],
  ['技術細節反覆確認', 'Technical Alignment'],
  ['新功能常需與工程師重新釐清判斷條件、狀態與限制，才能形成可實作共識。', 'New features often required renewed clarification of conditions, states, and constraints with engineering before reaching an implementable agreement.'],
  ['把變動轉成工程可執行的設計決策', 'Turning Change into Engineering-ready Design Decisions'],
  ['收到新需求後，優先提出可比較方案，盡量不把時間壓力往工程端延後', 'When new requirements arrived, comparable options were proposed first to avoid passing time pressure downstream to engineering.'],
  ['收集', 'Capture'],
  ['即時收集修改', 'Capture Changes in Real Time'],
  ['以設計稿進行線上展示，讓客戶直接指出需要調整的位置。', 'Presented designs online so the client could point directly to areas needing adjustment.'],
  ['釐清', 'Clarify'],
  ['拆解狀態與限制', 'Break Down States and Constraints'],
  ['將口頭回饋整理成畫面狀態、邏輯條件與待確認項目。', 'Converted verbal feedback into screen states, logical conditions, and pending questions.'],
  ['對齊', 'Align'],
  ['與工程確認可行性', 'Validate Feasibility with Engineering'],
  ['針對小功能與實作限制提出疑問，確認可執行方向。', 'Raised questions about small features and implementation constraints to confirm a feasible direction.'],
  ['快速更新與驗收', 'Rapid Updates and Review'],
  ['更新介面、響應式設計與元件，配合開發流程完成交付修正。', 'Updated UI, responsive layouts, and components, then completed delivery revisions alongside development.'],
  ['角色界線｜參與部分需求釐清與觀眾端小功能討論；未負責主播端流程規劃與線框稿。', 'Role boundary | Participated in selected requirement clarification and small viewer-side feature discussions; did not own creator-side flow planning or wireframes.'],
  ['功能擴充與設計主導', 'Feature Expansion and Design Leadership'],
  ['在既有功能上擴充內容、互動與直播體驗', 'Expanding Content, Interaction, and Live Experiences'],
  ['客戶提供品牌名稱、標誌、色彩與視覺規範；設計職責是將其落實為桌機、平板、手機的完整介面，並主導兩位設計師之間的視覺方向與交付一致性。', 'The client provided the brand name, logo, colors, and visual guidelines. Design translated them into complete desktop, tablet, and mobile interfaces while leading visual direction and delivery consistency across two designers.'],
  ['響應式觀眾端首頁', 'Responsive Viewer Homepage'],
  ['同一首頁，對應桌機、平板、手機三種尺寸', 'One Homepage Across Desktop, Tablet, and Mobile'],
  ['保留相同內容層級與品牌規範，依裝置重新安排導覽、卡片密度與側欄／底部選單。公開版本已遮蔽標誌與敏感名稱。', 'The same content hierarchy and brand rules were retained while navigation, card density, sidebars, and bottom navigation were rearranged for each device. Logos and sensitive names are hidden in the public version.'],
  ['桌機', 'Desktop'],
  ['平板', 'Tablet'],
  ['手機', 'Mobile'],
  ['內容與訂閱', 'Content and Subscription'],
  ['從頻道訂閱延伸至付費內容', 'From Channel Subscriptions to Paid Content'],
  ['將追蹤、訂閱狀態與單篇內容解鎖整合進創作者頁面，建立直播之外的內容接觸點。', 'Integrated following, subscription states, and single-post unlocking into creator pages to establish content touchpoints beyond live streams.'],
  ['直播互動', 'Live Interaction'],
  ['串接私聊、打賞與雙方向直播體驗', 'Connecting Private Chat, Gifting, and Two Live Formats'],
  ['在私訊、付費互動與直播觀看之間維持一致操作邏輯，並分別處理直式與橫式內容比例。', 'Maintained consistent interaction logic across messaging, paid interactions, and live viewing while accommodating portrait and landscape content.'],
  ['創作者工具', 'Creator Tools'],
  ['整合開播調整、主播美顏美體與收禮回饋', 'Integrating Broadcast Controls, Beauty Tools, and Gift Feedback'],
  ['將即時效果入口、身形調整與收禮排行榜收斂於直播情境中，兼顧快速操作與狀態辨識。', 'Consolidated live-effect access, body adjustments, and gift rankings within the broadcast context for fast operation and clear states.'],
  ['設計主導', 'Design Leadership'],
  ['主導跨裝置介面方向與交付一致性', 'Leading Cross-device UI Direction and Delivery Consistency'],
  ['品牌識別由客戶提供；設計責任是將既定規範轉化為可開發的跨裝置介面、整合新增功能，並統整設計交付。', 'The client provided the brand identity. Design translated those rules into development-ready cross-device UI, integrated new features, and coordinated delivery.'],
  ['三種裝置', '3 Device Types'],
  ['兩位介面設計師', '2 UI Designers'],
  ['八人核心團隊', '8-person Core Team'],
  ['人工智慧素材流程', 'AI Asset Workflow'],
  ['主導整體方向與協作', 'Led overall direction and collaboration'],
  ['一位專案經理・三位前端・兩位後端・兩位介面設計師', '1 PM · 3 FE · 2 BE · 2 UI'],
  ['人工智慧人物生成與素材整理', 'AI character generation and asset organization'],
  ['公開展示原則', 'Public Display Policy'],
  ['標誌、客戶、公司與金流名稱皆匿名；僅展示經裁切的部分介面，人工智慧人物素材僅作介面情境示意。', 'Logos, client, company, and payment names are anonymized. Only cropped UI is shown, and AI-generated people are used solely as interface scenarios.'],

  ['核心遊戲體驗', 'Core Game Experience'],
  ['桌機與手機正式介面', 'Desktop and Mobile Production UI'],
  ['產品演進・多鏈別調整', 'Product Evolution · Multi-chain Adaptation'],
  ['一套遊戲機制，三種鏈別調整', 'One Game Mechanic, Three Chain Adaptations'],
  ['保留核心預測流程與操作架構，依不同鏈別重新整理代幣、錢包、品牌名稱與生態溝通。', 'The core prediction flow and interaction structure were retained while tokens, wallets, brand naming, and ecosystem messaging were adapted for each chain.'],
  ['早期版本', 'Early Version'],
  ['版本延伸', 'Version Extension'],
  ['設計貢獻', 'Design Contribution'],
  ['聚焦實際參與的介面設計與工程交付', 'Focused on hands-on UI design and engineering delivery'],
  ['資訊層級', 'Information Hierarchy'],
  ['將倒數、即時數值、走勢圖與雙向池資訊集中於同一操作視野，讓玩家快速掌握當前狀態。', 'Brought countdowns, live values, trend charts, and two-sided pool information into one operating view so players could understand the current state quickly.'],
  ['響應式遊戲介面', 'Responsive Game UI'],
  ['依桌機與三百二十像素手機尺寸重新安排資訊密度，保留選擇方向、金額與主要數據。', 'Reorganized information density for desktop and 320-pixel mobile layouts while preserving direction selection, amount, and key data.'],
  ['工程交付', 'Production Handoff'],
  ['配合前端實作限制調整介面，整理多語言頁面與交付細節，支援產品完成開發與上線。', 'Adjusted UI around front-end constraints and organized multilingual pages and delivery details to support development and launch.'],
  ['上線與行銷證據', 'Launch and Marketing Evidence'],
  ['從開放網路鏈發布到公開行銷活動', 'From TON Release to Public Campaigns'],
  ['從產品發布管道、官方品牌帳號到行銷視覺，保留可驗證的公開痕跡與設計成果。', 'Verifiable public traces and design outcomes were retained across product release channels, official brand accounts, and campaign visuals.'],
  ['2024.11 通訊軟體發布', 'TON · November 2024 Telegram Release'],
  ['曾透過通訊軟體小型應用程式提供遊玩。', 'Previously available through a Telegram Mini App.'],
  ['官方社群帳號', 'Official X Account · @BITVS_168'],
  ['官方品牌帳號仍保留公開識別。', 'The official brand account still retains a public identity.'],
  ['目前狀態', 'Current Status'],
  ['機器人帳號可被辨識，遊戲服務是否運作未確認。', 'The bot remains identifiable; current game service availability is unverified.'],
  ['發布管道・通訊軟體小型應用程式', 'Release Channel · Telegram Mini App'],
  ['產品於 2024.11 透過通訊軟體小型應用程式發布，使用者可由官方機器人帳號進入遊戲。', 'The product launched through a Telegram Mini App in November 2024, allowing users to enter through the official bot.'],
  ['證據說明', 'Evidence Boundary'],
  ['此證據用來說明產品曾有正式發布入口，不代表設計職責包含機器人開發、系統部署，亦不表示目前服務仍在線。', 'This evidence demonstrates that the product had an official release entry point. It does not imply responsibility for bot development or system deployment, nor that the service remains online.'],
  ['線下體驗物料', 'Offline Experience Materials'],
  ['從螢幕延伸至實體接觸點', 'From Screen to Physical Touchpoint'],
  ['設計線下體驗使用的實體宣傳物料與導流卡片，協助參與者由行動條碼進入產品，讓數位體驗延伸到實體活動場景。', 'Designed physical promotional materials and access cards that helped participants enter the product through QR codes, extending the digital experience into an in-person event.'],
  ['設計責任', 'Design Responsibility'],
  ['負責物料視覺與印刷稿設計；未出席現場發表會，也不負責現場活動執行。', 'Responsible for visual and print-ready material design; did not attend the event or manage on-site execution.'],
  ['現場照片顯示參與者實際接觸物料並操作產品。', 'Event photos show participants interacting with the materials and product.'],
  ['設計角色・行銷視覺設計', 'Design Role · Marketing Visual Design'],
  ['跨產品、第三代網路與社群內容的行銷視覺', 'Campaign Visuals Across Product, Web3, and Social Content'],
  ['負責產品功能推廣、第三代網路／開放網路鏈溝通、社群迷因與節慶內容的行銷視覺設計。', 'Designed campaign visuals for product features, Web3 and TON communication, social memes, and seasonal content.'],

  ['頁面不存在', 'Page Not Found'],
  ['似乎有些地方出錯了，請重新載入。', 'Oops! It seems something went wrong. Please reload.'],
  ['重新載入', 'Reload'],
  ['返回首頁', 'Back to Home'],
];

const donorCopy = new Map([
  ['多多益善', 'Right Plus'],
  ['捐款者需求分析', 'Donor Needs Analysis'],
  ['對不同的支持者來說，', 'For different supporters,'],
  ['一筆捐款究竟完成了什麼？', 'what does a donation actually accomplish?'],
  ['份有效回覆', 'valid responses'],
  ['淨推薦值 NPS', 'Net Promoter Score'],
  ['NPS × 信任指標 × 溝通偏好', 'NPS × trust indicators × communication preferences'],
  ['先說清楚，', 'First, clarify'],
  ['這份研究能回答什麼。', 'what this research can answer.'],
  ['這是一份針對既有支持者的描述性分析，用來理解他們如何形成信任、接近品牌，以及如何解讀自己的捐款。', 'This descriptive study focuses on existing supporters: how trust forms, how they find the organization, and how they interpret their donations.'],
  ['研究對象', 'Participants'],
  ['已接觸多多益善的支持者，並非一般大眾或所有捐款者。', 'People already familiar with Right Plus—not the general public or all donors.'],
  ['分析材料', 'Inputs'],
  ['NPS、信任題、接觸來源、內容偏好與情境分類。', 'NPS, trust ratings, discovery sources, content preferences, and scenario-based categories.'],
  ['樣本口徑', 'Sample bases'],
  ['原始報告不同題組為 N=78、77 或 76；各圖保留實際分母。', 'Question sets use N=78, 77, or 76; each chart retains its actual denominator.'],
  ['解讀界線', 'Interpretation boundary'],
  ['結果呈現關聯與傾向，不代表因果、人格定型或整體市場結論。', 'Results describe associations and tendencies—not causality, fixed personality types, or the broader market.'],
  ['高信任，', 'High trust,'],
  ['也高度願意推薦。', 'and a strong willingness to recommend.'],
  ['推薦分數集中在高分區，同時 77 位有效作答者都在兩個信任題給出 4 分以上。', 'Recommendation scores cluster at the high end, while all 77 valid respondents rated both trust items at 4 or above.'],
  ['平均推薦分數 9.09', 'Average recommendation score: 9.09'],
  ['中位數 10', 'Median: 10'],
  ['推薦者', 'Promoters'],
  ['中立者', 'Passives'],
  ['批評者', 'Detractors'],
  ['認為捐款被妥善運用', 'believe donations are used responsibly'],
  ['評分 4 分以上', 'rated 4 or above'],
  ['認為是值得信任的媒體', 'consider it a trustworthy media organization'],
  ['信任與推薦分數高度集中，可能存在天花板效應；這能描述受訪支持者的評價，不能直接證明組織成效。', 'Trust and recommendation ratings are highly concentrated and may show a ceiling effect. They describe respondents’ perceptions, not proof of organizational impact.'],
  ['他們不是被推薦進來，', 'They were not referred in—'],
  ['而是讀著讀著，自己走進來。', 'they kept reading and chose to step in.'],
  ['受訪者主要因議題、理念與內容品質開始支持；親友推薦只占 3.9%。', 'Support began mainly with issue alignment, shared values, and content quality; referrals from friends and family account for only 3.9%.'],
  ['認同關注議題', 'Issue alignment'],
  ['認同多多理念', 'Shared mission'],
  ['支持獨立媒體', 'Support for independent media'],
  ['深度報導', 'In-depth reporting'],
  ['募款專案', 'Fundraising campaign'],
  ['親友推薦', 'Friends and family'],
  ['約 90%', 'about 90%'],
  ['近 70%', 'nearly 70%'],
  ['約 67%', 'about 67%'],
  ['「有故事」負責吸引注意；', 'Stories capture attention;'],
  ['「有方法、有證據、有追蹤」負責讓人留下。', 'methods, evidence, and follow-through build lasting support.'],
  ['不是人格標籤，', 'Not personality labels—'],
  ['是五種溝通偏好訊號。', 'five signals of communication preference.'],
  ['原問卷用 DiSC 情境選項整理回應傾向。這裡把它視為溝通線索，不當作標準化人格測驗。', 'The survey used DiSC-inspired scenarios to organize response patterns. Here they are communication cues, not a standardized personality test.'],
  ['嚴謹查證', 'Evidence-led'],
  ['偏好分析、數據與方法論，最反感情緒操弄與查證不足。', 'Prefers analysis, data, and methodology; rejects emotional manipulation and weak verification.'],
  ['混合偏好', 'Mixed preference'],
  ['三題回答分散，沒有單一主導傾向。', 'Responses were distributed across three items with no dominant tendency.'],
  ['成果導向', 'Outcome-led'],
  ['重視具體成果與里程碑，樣本數較小。', 'Values tangible outcomes and milestones; the subgroup is small.'],
  ['溫暖陪伴', 'Steady support'],
  ['在意穩定與長期陪伴，樣本數較小。', 'Values stability and long-term presence; the subgroup is small.'],
  ['社群互動', 'Community-led'],
  ['被人物故事與交流吸引，樣本極小。', 'Drawn to personal stories and interaction; the subgroup is very small.'],
  ['兩種支持視角，', 'Two supporter lenses,'],
  ['在意的是不同的連結。', 'each seeking a different connection.'],
  ['兩群對關鍵數據的偏好同為 10%，差異主要出現在方法論、人物故事與幕後內容。', 'Both groups show 10% preference for key metrics; their main differences lie in methodology, personal stories, and behind-the-scenes content.'],
  ['認同型支持者', 'Identity-aligned supporters'],
  ['「我是多多的一部分」', '“I am part of Right Plus.”'],
  ['把支持視為對專業的判斷與背書，更在意分析方法是否可靠、觀點是否完整。', 'They see support as professional judgment and endorsement, paying closer attention to rigorous methods and complete perspectives.'],
  ['價值型支持者', 'Value-aligned supporters'],
  ['「我讓多多繼續存在」', '“I help Right Plus continue.”'],
  ['與議題保持一條持續的線，更容易透過人物故事確認自己在乎的價值仍然存在。', 'They maintain a continuing connection to the issue and use personal stories to confirm that the values they care about still endure.'],
  ['分析與方法論', 'Analysis and methodology'],
  ['人物故事', 'Personal stories'],
  ['團隊幕後', 'Behind the scenes'],
  ['關鍵數據', 'Key metrics'],
  ['共同的紅線：', 'A shared red line:'],
  ['不能被操弄。', 'do not manipulate.'],
  ['兩種支持視角的答案幾乎一致：他們要的是可靠，不是煽情。', 'Both supporter lenses agree: they want reliability, not emotional pressure.'],
  ['最無法忍受', 'least tolerated'],
  ['「煽情募款／查證不嚴謹」', '“emotional fundraising / weak verification”'],
  ['全體樣本的主要紅線', 'the leading red line across the sample'],
  ['同樣一筆錢，', 'The same donation'],
  ['在不同人心裡完成的不是同一件事。', 'accomplishes something different for each person.'],
  ['這題不只問「為什麼捐錢」，也在問受訪者如何理解自己一直捐款這件事。', 'This question asks not only why people donate, but how they understand the act of continuing to give.'],
  ['守住了一個標準', 'Protect a standard'],
  ['相信專業不隨波逐流，用實事求是的態度呈現真相。', 'Keep professional standards grounded in facts rather than following the crowd.'],
  ['有了一個位置', 'Find a place'],
  ['感受到自己正參與一個有意義的良善社群。', 'Feel part of a meaningful community doing good.'],
  ['保住了一條線', 'Keep a connection alive'],
  ['能默默陪伴弱勢群體，是令人安心的存在。', 'Quietly stand alongside vulnerable communities as a reassuring presence.'],
  ['撐住了一個可能', 'Sustain a possibility'],
  ['相信支持能帶來實質的社會推進與改變。', 'Believe support can enable tangible social progress and change.'],
  ['支持多多的理由不必相同，', 'The reasons for supporting Right Plus do not have to be the same,'],
  ['因為每個人完成的，', 'because each person fulfills'],
  ['是自己相信的那件事。', 'the thing they believe in.'],
  ['閱讀限制', 'Reading limits'],
  ['本頁描述的是自選、且多為既有支持者的回覆；信任分數有天花板效應，子群樣本偏小，所有關聯與差異均不能解讀為因果。', 'This page describes a self-selected sample composed largely of existing supporters. Trust scores show a ceiling effect, subgroup samples are small, and no association or difference should be read as causal.'],
  ['← 返回研究作品', '← Back to research work'],
]);

const translateDonorText = (value) => {
  const translated = donorCopy.get(value.trim());
  if (!translated) return value;
  return `${value.match(/^\s*/)[0]}${translated}${value.match(/\s*$/)[0]}`;
};

const variants = new Map();
copy.forEach(([zh, en]) => {
  variants.set(zh.toLocaleLowerCase(), { zh, en });
  variants.set(en.toLocaleLowerCase(), { zh, en });
});

const replacements = copy
  .map(([zh, en]) => [language === 'zh' ? en : zh, language === 'zh' ? zh : en])
  .sort(([a], [b]) => b.length - a.length);

const sourceOverrides = new Map([
  ['PRODUCT DESIGN · UI/UX DESIGN · WEB DESIGNER', { zh: '產品設計・介面體驗設計・網頁設計', en: 'PRODUCT DESIGN · UI/UX DESIGN · WEB DESIGNER' }],
  ['四個案例，涵蓋產品上線、', { zh: '四個案例，涵蓋產品上線、', en: 'Four case studies spanning product launches,' }],
  ['可擴充系統與響應式設計。', { zh: '可擴充系統與響應式設計。', en: 'scalable systems, and responsive design.' }],
  ['與 AI 輔助執行的複合能力。', { zh: '與人工智慧輔助執行的複合能力。', en: 'and AI-assisted execution.' }],
  ['具備 3 年 UI/UX 實務經驗，擅長把複雜需求轉化為模組化、可擴充的產品體驗。', { zh: '具備三年以上介面體驗實務經驗，擅長把複雜需求轉化為模組化、可擴充的產品體驗。', en: 'More than three years of UI/UX experience, specializing in turning complex requirements into modular, scalable product experiences.' }],
  ['歡迎透過電話或 Email 聯絡合作。', { zh: '歡迎透過電話或電子郵件聯絡合作。', en: 'Get in touch by phone or email to discuss a collaboration.' }],
  ['張勻瑄 Stephanie 的形象照', { zh: '張勻瑄的形象照', en: "Stephanie Chang's portrait" }],
  ['查看 Mobile App & Product Portal 案例詳情', { zh: '查看手機應用程式與產品入口案例詳情', en: 'View the Mobile App & Product Portal case study' }],
  ['查看 Web3 Prediction Game 案例詳情', { zh: '查看 WEB3 預測遊戲案例詳情', en: 'View the Web3 Prediction Game case study' }],
  ['查看 White-label Product System 案例詳情；將滑鼠移入或取得焦點可切換介面展示', { zh: '查看白標產品系統案例詳情；將滑鼠移入或取得焦點可切換介面展示', en: 'View the White-label Product System case study; hover or focus to change the interface preview' }],
  ['查看 Live Streaming Platform 案例詳情', { zh: '查看直播平台案例詳情', en: 'View the Live Streaming Platform case study' }],
  ['跳至案例內容', { zh: '跳至案例內容', en: 'Skip to case study content' }],
  ['WEB3 PREDICTION', { zh: '區塊鏈預測', en: 'WEB3 PREDICTION' }],
  ['GAME', { zh: '遊戲', en: 'GAME' }],
  ['A RESPONSIVE PREDICTION GAME ADAPTED ACROSS POLYGON, TON AND SONIC ECOSYSTEMS.', { zh: '橫跨三種區塊鏈生態的響應式預測遊戲。', en: 'A responsive prediction game adapted across Polygon, TON, and Sonic ecosystems.' }],
  ['以同一套預測遊戲機制為核心，延伸 Polygon、TON 與 Sonic 三種鏈別版本，並維持跨裝置與多語言的一致體驗。', { zh: '以同一套預測遊戲機制為核心，延伸至三種鏈別版本，並維持跨裝置與多語言的一致體驗。', en: 'One prediction mechanic was extended across Polygon, TON, and Sonic while maintaining a consistent multi-device, multilingual experience.' }],
  ['負責主視覺、遊戲介面與網頁設計，涵蓋 Desktop、Mobile 與多語言頁面，並依不同鏈別調整代幣、錢包與產品溝通。TON 版本於 2024 年 11 月透過 Telegram 上線；目前公開連結可能已撤除。', { zh: '負責主視覺、遊戲介面、響應式網頁與多語言頁面，並依不同鏈別調整代幣、錢包與產品溝通。其中一個版本於 2024.11 透過通訊軟體上線；目前公開連結可能已撤除。', en: 'Responsible for key visuals, game UI, responsive web design, and multilingual pages, adapting tokens, wallets, and product messaging for each chain. The TON version launched through Telegram in November 2024; its public link may no longer be available.' }],
  ['UI DESIGN', { zh: '介面設計', en: 'UI DESIGN' }],
  ['GAME INTERFACE', { zh: '遊戲介面', en: 'GAME INTERFACE' }],
  ['MULTI-CHAIN UI', { zh: '多鏈別介面', en: 'MULTI-CHAIN UI' }],
  ['DESKTOP / MOBILE', { zh: '桌機・手機', en: 'DESKTOP · MOBILE' }],
  ['TON VIA TELEGRAM', { zh: '透過通訊軟體發布', en: 'TON VIA TELEGRAM' }],
  ['2024.11 RELEASE', { zh: '2024.11 發布', en: 'NOVEMBER 2024 RELEASE' }],
  ['Desktop / Mobile production UI', { zh: '桌機與手機正式介面', en: 'Desktop and mobile production UI' }],
  ['PRODUCT EVOLUTION / MULTI-CHAIN ADAPTATION', { zh: '產品演進・多鏈別調整', en: 'PRODUCT EVOLUTION · MULTI-CHAIN ADAPTATION' }],
  ['以 Polygon MATIC 與 Wallet Connect 為核心，建立 Web3 預測遊戲的初始產品架構。', { zh: '以代幣與錢包連接為核心，建立區塊鏈預測遊戲的初始產品架構。', en: 'Built the initial Web3 prediction-game architecture around Polygon MATIC and Wallet Connect.' }],
  ['整合 TON 錢包與 Telegram 生態，並透過官方 Bot 發布，延伸社群與線下推廣物料。', { zh: '整合鏈上錢包與通訊軟體生態，並透過官方機器人帳號發布，延伸社群與線下推廣物料。', en: 'Integrated the TON wallet and Telegram ecosystem, launched through the official bot, and extended the experience into social and offline campaign materials.' }],
  ['延續核心遊戲介面，改寫為 Sonic 生態、$S 支付與相對應的品牌內容。', { zh: '延續核心遊戲介面，調整為另一鏈別生態、代幣支付與相對應的品牌內容。', en: 'Extended the core game UI for the Sonic ecosystem, $S payments, and corresponding brand content.' }],
  ['聚焦實際參與的 UI 設計與工程交付', { zh: '聚焦實際參與的介面設計與工程交付', en: 'Focused on hands-on UI design and engineering delivery' }],
  ['依 Desktop 與 320 px Mobile 尺寸重新安排資訊密度，保留選擇方向、金額與主要數據。', { zh: '依桌機與三百二十像素手機尺寸重新安排資訊密度，保留選擇方向、金額與主要數據。', en: 'Reorganized information density for desktop and 320-pixel mobile layouts while preserving direction selection, amount, and key data.' }],
  ['LAUNCH & MARKETING EVIDENCE', { zh: '上線與行銷證據', en: 'LAUNCH & MARKETING EVIDENCE' }],
  ['TON / 2024.11 TELEGRAM RELEASE', { zh: 'TON · 2024.11 通訊軟體發布', en: 'TON · NOVEMBER 2024 TELEGRAM RELEASE' }],
  ['曾透過 Telegram Mini App 提供遊玩。', { zh: '曾透過通訊軟體小型應用程式提供遊玩。', en: 'Previously available through a Telegram Mini App.' }],
  ['OFFICIAL X / @BITVS_168', { zh: '官方社群帳號', en: 'OFFICIAL X · @BITVS_168' }],
  ['Bot 可被辨識，遊戲服務是否運作未確認。', { zh: '機器人帳號仍可被辨識，遊戲服務是否運作未確認。', en: 'The bot remains identifiable; current game service availability is unverified.' }],
  ['RELEASE CHANNEL / TELEGRAM MINI APP', { zh: '發布管道・通訊軟體小型應用程式', en: 'RELEASE CHANNEL · TELEGRAM MINI APP' }],
  ['BITVS BOT', { zh: '官方機器人帳號', en: 'BITVS BOT' }],
  ['產品於 2024 年 11 月透過 Telegram Mini App 發布，使用者可由官方 Bot 進入遊戲。', { zh: '產品於 2024.11 透過通訊軟體小型應用程式發布，使用者可由官方機器人帳號進入遊戲。', en: 'The product launched through a Telegram Mini App in November 2024, allowing users to enter through the official bot.' }],
  ['此證據用來說明產品曾有正式發布入口，不代表設計職責包含 Bot 開發、系統部署，亦不表示目前服務仍在線。', { zh: '此證據用來說明產品曾有正式發布入口，不代表設計職責包含機器人開發、系統部署，亦不表示目前服務仍在線。', en: 'This evidence demonstrates that the product had an official release entry point. It does not imply responsibility for bot development or system deployment, nor that the service remains online.' }],
  ['設計線下體驗使用的實體宣傳物料與導流卡片，協助參與者由 QR Code 進入產品，讓數位體驗延伸到實體活動場景。', { zh: '設計線下體驗使用的實體宣傳物料與導流卡片，協助參與者由行動條碼進入產品，讓數位體驗延伸到實體活動場景。', en: 'Designed physical promotional materials and access cards that helped participants enter the product through QR codes, extending the digital experience into an in-person event.' }],
  ['DESIGN ROLE / MARKETING VISUAL DESIGN', { zh: '設計角色・行銷視覺設計', en: 'DESIGN ROLE · MARKETING VISUAL DESIGN' }],
  ['CAMPAIGN VISUALS ACROSS PRODUCT, WEB3 AND SOCIAL CONTENT', { zh: '跨產品、區塊鏈與社群內容的行銷視覺', en: 'CAMPAIGN VISUALS ACROSS PRODUCT, WEB3, AND SOCIAL CONTENT' }],
  ['負責產品功能推廣、Web3／TON 溝通、社群迷因與節慶內容的行銷視覺設計。', { zh: '負責產品功能推廣、區塊鏈產品溝通、社群迷因與節慶內容的行銷視覺設計。', en: 'Designed campaign visuals for product features, Web3 and TON communication, social memes, and seasonal content.' }],
  ['LIVE STREAMING', { zh: '直播', en: 'LIVE STREAMING' }],
  ['PLATFORM', { zh: '平台', en: 'PLATFORM' }],
  ['TRANSLATING CLIENT-PROVIDED BRAND DIRECTION INTO A RESPONSIVE, MULTI-DEVICE PRODUCT EXPERIENCE.', { zh: '將客戶提供的品牌方向轉化為響應式跨裝置產品體驗。', en: 'Translating client-provided brand direction into a responsive, multi-device product experience.' }],
  ['從核心功能持續開發的早期設計稿出發，依客戶提供的品牌規範完成視覺落地，並將新增功能整合至觀眾端與主播端的跨裝置介面。', { zh: '從核心功能持續開發的早期設計稿出發，依客戶提供的品牌規範完成視覺落地，並將新增功能整合至觀眾端與主播端的跨裝置介面。', en: 'Starting from early designs whose core features remained in development, the client-provided brand system was applied and new features were integrated across viewer and creator interfaces.' }],
  ['本案例聚焦於 UI 視覺改版、RWD、元件整理與工程交付；不宣稱主導主播端流程規劃。', { zh: '本案例聚焦於介面視覺改版、響應式設計、元件整理與工程交付；不宣稱主導主播端流程規劃。', en: 'This case study focuses on UI redesign, responsive design, component organization, and engineering delivery; it does not claim ownership of creator-side flow planning.' }],
  ['UI REDESIGN', { zh: '介面重新設計', en: 'UI REDESIGN' }],
  ['RWD / COMPONENT SYSTEM', { zh: '響應式設計・元件系統', en: 'RESPONSIVE DESIGN · COMPONENT SYSTEM' }],
  ['VIEWER / CREATOR', { zh: '觀眾端・創作者端', en: 'VIEWER · CREATOR' }],
  ['DESKTOP / TABLET / MOBILE', { zh: '桌機・平板・手機', en: 'DESKTOP · TABLET · MOBILE' }],
  ['DESIGN DELIVERED', { zh: '設計已交付', en: 'DESIGN DELIVERED' }],
  ['PUBLIC LAUNCH UNVERIFIED', { zh: '公開上線狀態未確認', en: 'PUBLIC LAUNCH UNVERIFIED' }],
  ['DESIGN & BRAND EVOLUTION', { zh: '設計與品牌演進', en: 'DESIGN & BRAND EVOLUTION' }],
  ['初期版本從未正式上線，但核心直播與會員功能持續配合開發；後續版本依客戶指定的品牌素材與視覺規範，完成跨裝置介面與新增功能的 UI 設計。', { zh: '初期版本從未正式上線，但核心直播與會員功能持續配合開發；後續版本依客戶指定的品牌素材與視覺規範，完成跨裝置介面與新增功能的介面設計。', en: 'The initial version never launched publicly, but core live-streaming and membership features continued in development. Later versions applied client-provided brand assets and visual guidelines across devices and new features.' }],
  ['Visual & RWD', { zh: '視覺與響應式設計', en: 'Visual & Responsive Design' }],
  ['整理跨頁共用元件，支援 Desktop、Mobile 與新增狀態。', { zh: '整理跨頁共用元件，支援桌機、手機與新增狀態。', en: 'Organized shared components across pages to support desktop, mobile, and new states.' }],
  ['依客戶提供的品牌名稱、Logo、色彩與視覺方向完成跨裝置 UI；公開展示採匿名處理。', { zh: '依客戶提供的品牌名稱、標誌、色彩與視覺方向完成跨裝置介面；公開展示採匿名處理。', en: 'Completed cross-device UI using the client-provided brand name, logo, colors, and visual direction; public presentation is anonymized.' }],
  ['設計端並非第一線接觸客戶，需等待 PM 彙整後才能確認修改內容，資訊可能在不同角色間再次轉譯。', { zh: '設計端並非第一線接觸客戶，需等待專案經理彙整後才能確認修改內容，資訊可能在不同角色間再次轉譯。', en: 'Design was not in direct contact with the client and had to wait for PM synthesis before confirming changes, allowing information to be reinterpreted between roles.' }],
  ['更新 UI、RWD 與元件，配合開發流程完成交付修正。', { zh: '更新介面、響應式設計與元件，配合開發流程完成交付修正。', en: 'Updated UI, responsive layouts, and components, then completed delivery revisions alongside development.' }],
  ['ROLE BOUNDARY｜參與部分需求釐清與觀眾端小功能討論；未負責主播端流程規劃與 Wireframe。', { zh: '角色界線｜參與部分需求釐清與觀眾端小功能討論；未負責主播端流程規劃與線框稿。', en: 'Role boundary | Participated in selected requirement clarification and small viewer-side feature discussions; did not own creator-side flow planning or wireframes.' }],
  ['FEATURE EXPANSION & DESIGN LEADERSHIP', { zh: '功能擴充與設計主導', en: 'FEATURE EXPANSION & DESIGN LEADERSHIP' }],
  ['客戶提供品牌名稱、Logo、色彩與視覺規範；設計職責是將其落實為 Desktop、Tablet、Mobile 的完整 UI，並主導兩位設計師之間的視覺方向與交付一致性。', { zh: '客戶提供品牌名稱、標誌、色彩與視覺規範；設計職責是將其落實為桌機、平板、手機的完整介面，並主導兩位設計師之間的視覺方向與交付一致性。', en: 'The client provided the brand name, logo, colors, and visual guidelines. Design translated them into complete desktop, tablet, and mobile interfaces while leading visual direction and delivery consistency across two designers.' }],
  ['同一首頁，對應 Desktop、Tablet、Mobile 三種尺寸', { zh: '同一首頁，對應桌機、平板、手機三種尺寸', en: 'One Homepage Across Desktop, Tablet, and Mobile' }],
  ['保留相同內容層級與品牌規範，依裝置重新安排導覽、卡片密度與側欄／底部選單。公開版本已遮蔽 Logo 與敏感名稱。', { zh: '保留相同內容層級與品牌規範，依裝置重新安排導覽、卡片密度與側欄／底部選單。公開版本已遮蔽標誌與敏感名稱。', en: 'The same content hierarchy and brand rules were retained while navigation, card density, sidebars, and bottom navigation were rearranged for each device. Logos and sensitive names are hidden in the public version.' }],
  ['主導跨裝置 UI 方向與交付一致性', { zh: '主導跨裝置介面方向與交付一致性', en: 'Leading Cross-device UI Direction and Delivery Consistency' }],
  ['品牌識別由客戶提供；設計責任是將既定規範轉化為可開發的跨裝置 UI、整合新增功能，並統整設計交付。', { zh: '品牌識別由客戶提供；設計責任是將既定規範轉化為可開發的跨裝置介面、整合新增功能，並統整設計交付。', en: 'The client provided the brand identity. Design translated those rules into development-ready cross-device UI, integrated new features, and coordinated delivery.' }],
  ['AI-ASSET WORKFLOW', { zh: '人工智慧素材流程', en: 'AI-ASSET WORKFLOW' }],
  ['AI 人物生成與素材整理', { zh: '人工智慧人物生成與素材整理', en: 'AI character generation and asset organization' }],
  ['Logo、客戶、公司與金流名稱皆匿名；僅展示經裁切的部分 UI，AI 人物素材僅作介面情境示意。', { zh: '標誌、客戶、公司與金流名稱皆匿名；僅展示經裁切的部分介面，人工智慧人物素材僅作介面情境示意。', en: 'Logos, client, company, and payment names are anonymized. Only cropped UI is shown, and AI-generated people are used solely as interface scenarios.' }],
  ['負責初版產品企劃與 PRD 架構，整理功能、資訊架構與操作邏輯；並與技術主管及 PM 反覆確認流水限制、贈禮與玩家留存等機制的可行性。技術與金流細節由相關部門提供，再將回饋整合進規格與 UI 交付。', { zh: '負責初版產品企劃與產品需求文件架構，整理功能、資訊架構與操作邏輯；並與技術主管及專案經理反覆確認流水限制、贈禮與玩家留存等機制的可行性。技術與金流細節由相關部門提供，再將回饋整合進規格與介面交付。', en: 'Owned the initial product plan and PRD structure, organizing features, information architecture, and interaction logic. Feasibility for turnover limits, gifting, and player retention was aligned repeatedly with technical leadership and the PM. Technical and payment details came from the relevant teams and were incorporated into specifications and UI delivery.' }],
  ['PRODUCT PLANNING', { zh: '產品企劃', en: 'PRODUCT PLANNING' }],
  ['LEAD UI DESIGN', { zh: '主導介面設計', en: 'LEAD UI DESIGN' }],
  ['PM / FRONT-END / BACK-END', { zh: '專案經理・前端・後端', en: 'PM · FRONT-END · BACK-END' }],
  ['APP ENGINEERING / 3 UI DESIGNERS', { zh: '應用程式工程・三位介面設計師', en: 'APP ENGINEERING · 3 UI DESIGNERS' }],
  ['2025.06.19 HONG KONG LAUNCH', { zh: '2025.06.19 香港發表', en: 'JUNE 19, 2025 · HONG KONG LAUNCH' }],
  ['APP STORE & GOOGLE PLAY RELEASE', { zh: '雙平台商店上架', en: 'APP STORE & GOOGLE PLAY RELEASE' }],
  ['流水限制、VIP 升等、贈禮與玩家留存機制互相影響，需要把商業需求轉為工程可確認的條件。', { zh: '流水限制、會員升等、贈禮與玩家留存機制互相影響，需要把商業需求轉為工程可確認的條件。', en: 'Turnover limits, membership progression, gifting, and retention mechanics affected one another, requiring business needs to become engineering-verifiable conditions.' }],
  ['工程確認後仍可能因 PM 的最終決策重新調整；規格書與介面必須反覆改寫，才能維持一致。', { zh: '工程確認後仍可能因專案經理的最終決策重新調整；規格書與介面必須反覆改寫，才能維持一致。', en: 'Even after engineering review, final PM decisions could trigger further changes. Specifications and interfaces had to be revised together to remain consistent.' }],
  ['設計端並非直接接觸客戶，需求經由 PM 傳遞，且部分變更接近下班才確認，壓縮設計與開發交付時間。', { zh: '設計端並非直接接觸客戶，需求經由專案經理傳遞，且部分變更接近下班才確認，壓縮設計與開發交付時間。', en: 'Design did not communicate with the client directly. Requirements were relayed through the PM, and some changes were confirmed late in the day, compressing design and development time.' }],
  ['整理 PM 傳遞的需求，標記不確定條件與待決策項目。', { zh: '整理專案經理傳遞的需求，標記不確定條件與待決策項目。', en: 'Organize PM-relayed requirements and flag uncertain conditions and pending decisions.' }],
  ['依決策同步規格與 UI，交付可實作版本。', { zh: '依決策同步規格與介面，交付可實作版本。', en: 'Synchronize specifications and UI with decisions, then hand off an implementable version.' }],
  ['儲值、兌換、餘額、VIP 與金流入口。', { zh: '儲值、兌換、餘額、會員等級與金流入口。', en: 'Top-up, exchange, balance, membership tiers, and payment entry points.' }],
  ['同步規格與 UI', { zh: '同步規格與介面', en: 'Synchronize specifications and UI' }],
  ['負責初版產品架構與規格整理，並持續整合 PM、工程及相關部門回饋；金流與後端技術規則由各專業角色共同確認。', { zh: '負責初版產品架構與規格整理，並持續整合專案經理、工程及相關部門回饋；金流與後端技術規則由各專業角色共同確認。', en: 'Responsible for the initial product architecture and specification organization, while continuously integrating feedback from the PM, engineering, and relevant teams. Payment and back-end rules were validated by the corresponding specialists.' }],
  ['以生成式 AI 加速探索，再由設計判斷統整角色與品牌語言。', { zh: '以生成式人工智慧加速探索，再由設計判斷統整角色與品牌語言。', en: 'Generative AI accelerated exploration, followed by design judgment to unify character and brand language.' }],
  ['角色需要在遊戲介面、活動 Banner、商店預覽與實體物料中保持辨識度。', { zh: '角色需要在遊戲介面、活動橫幅、商店預覽與實體物料中保持辨識度。', en: 'The characters needed to remain recognizable across game UI, campaign banners, store previews, and physical materials.' }],
  ['使用生成式 AI 探索角色方向，並負責挑選、調整與統整最終視覺，使角色能一致應用於產品介面、商店預覽與發表會物料。', { zh: '使用生成式人工智慧探索角色方向，並負責挑選、調整與統整最終視覺，使角色能一致應用於產品介面、商店預覽與發表會物料。', en: 'Used generative AI to explore character directions, then selected, refined, and unified the final visual language for consistent use across product UI, store previews, and event materials.' }],
  ['WHITE-LABEL', { zh: '白標', en: 'WHITE-LABEL' }],
  ['PRODUCT SYSTEM', { zh: '產品系統', en: 'PRODUCT SYSTEM' }],
  ['從成熟產品整理出可重組模組，建立可快速選擇與延伸的白標交付流程。', { zh: '從成熟產品整理出可重組模組，建立可快速選擇與延伸的白標交付流程。', en: 'Reusable modules were extracted from a mature product to create a white-label delivery process that supports fast selection and extension.' }],
  ['以 Project Portal 為源頭整理功能與 UI，先提供多組版型與主色方向協助客戶選擇，再依確認結果延伸完整產品；此處展示的是僅需手機端的客製案例。', { zh: '以既有產品入口為源頭整理功能與介面，先提供多組版型與主色方向協助客戶選擇，再依確認結果延伸完整產品；此處展示的是僅需手機端的客製案例。', en: 'Using the existing Product Portal as the source, features and UI were organized into layout and color directions for client selection, then expanded into a complete product. The example shown here required mobile delivery only.' }],
  ['MODULAR UI', { zh: '模組化介面', en: 'MODULAR UI' }],
  ['VISUAL DIRECTION', { zh: '視覺方向', en: 'VISUAL DIRECTION' }],
  ['MOBILE PRODUCT', { zh: '手機產品', en: 'MOBILE PRODUCT' }],
  ['MULTILINGUAL UI', { zh: '多語言介面', en: 'MULTILINGUAL UI' }],
  ['SOURCE → MODULES', { zh: '來源產品 → 共用模組', en: 'SOURCE → MODULES' }],
  ['DIRECTION → DELIVERY', { zh: '方向確認 → 完成交付', en: 'DIRECTION → DELIVERY' }],
  ['PRODUCT EVOLUTION', { zh: '產品演進', en: 'PRODUCT EVOLUTION' }],
  ['從成熟產品到客製交付', { zh: '從成熟產品到客製交付', en: 'From a Mature Product to Customized Delivery' }],
  ['SOURCE PRODUCT', { zh: '既有產品', en: 'SOURCE PRODUCT' }],
  ['以 Project Portal 的完整規格、功能與 UI，作為後續產品整理的源頭。', { zh: '以既有產品入口的完整規格、功能與介面，作為後續產品整理的源頭。', en: 'Used the complete specifications, features, and UI of the Product Portal as the source for subsequent product organization.' }],
  ['MODULE EXTRACTION', { zh: '模組整理', en: 'MODULE EXTRACTION' }],
  ['整理可重複使用的功能與介面模式，形成能重新組合的產品結構。', { zh: '整理可重複使用的功能與介面模式，形成能重新組合的產品結構。', en: 'Organized reusable features and interface patterns into a product structure that could be recombined.' }],
  ['先用多組版型與主色方向協助客戶做選擇，不將每個方向全部展開。', { zh: '先用多組版型與主色方向協助客戶做選擇，不將每個方向全部展開。', en: 'Used multiple layout and primary-color directions to support client selection without fully expanding every option.' }],
  ['CLIENT DELIVERY', { zh: '客戶交付', en: 'CLIENT DELIVERY' }],
  ['依確認方向延伸完整 UI；GanaYa 為只需要手機端的客製案例。', { zh: '依確認方向延伸完整介面；此案例只需要手機端客製版本。', en: 'Expanded the selected direction into complete UI. GanaYa was a customized case requiring mobile delivery only.' }],
  ['MODULAR SCOPE & CONFIGURATION', { zh: '模組範圍與配置', en: 'MODULAR SCOPE & CONFIGURATION' }],
  ['從完整產品轉化為可配置的手機方案', { zh: '從完整產品轉化為可配置的手機方案', en: 'Turning a Complete Product into a Configurable Mobile Solution' }],
  ['此客製版本沿用 Project Portal 已成熟的大部分產品功能與操作邏輯，將交付範圍集中於手機端；設計工作的核心是重組既有模組、調整品牌視覺與功能配置，而非重新建立一套產品。', { zh: '此客製版本沿用既有產品入口已成熟的大部分功能與操作邏輯，將交付範圍集中於手機端；設計工作的核心是重組既有模組、調整品牌視覺與功能配置，而非重新建立一套產品。', en: 'This customized version retained most mature Product Portal features and interaction logic while focusing delivery on mobile. The work centered on recombining modules and adapting brand visuals and feature configuration rather than rebuilding the product.' }],
  ['CORE MODULES', { zh: '核心模組', en: 'CORE MODULES' }],
  ['保留大部分既有核心模組與操作邏輯，包含帳號、會員、遊戲、交易與服務相關功能。', { zh: '保留大部分既有核心模組與操作邏輯，包含帳號、會員、遊戲、交易與服務相關功能。', en: 'Retained most core modules and interaction logic, including account, membership, game, transaction, and service features.' }],
  ['CONFIGURABLE', { zh: '可配置項目', en: 'CONFIGURABLE' }],
  ['依客戶需求調整品牌色、Logo、Banner、導覽、功能開關、語言與金流整合方式。', { zh: '依客戶需求調整品牌色、標誌、橫幅、導覽、功能開關、語言與金流整合方式。', en: 'Adapted brand colors, logo, banners, navigation, feature toggles, language, and payment integration to client needs.' }],
  ['DELIVERY SCOPE', { zh: '交付範圍', en: 'DELIVERY SCOPE' }],
  ['專注於手機版與多語系 UI；不包含 App 上架、廣告宣傳、品牌 IP 與官方網站。', { zh: '專注於手機版與多語系介面；不包含應用程式上架、廣告宣傳、品牌角色與官方網站。', en: 'Focused on mobile and multilingual UI; app-store release, advertising, brand IP, and an official website were outside scope.' }],
  ['VISUAL DIRECTION EXPLORATION', { zh: '視覺方向探索', en: 'VISUAL DIRECTION EXPLORATION' }],
  ['在既有產品架構上，建立可比較的視覺方向', { zh: '在既有產品架構上，建立可比較的視覺方向', en: 'Building Comparable Visual Directions on an Existing Product Architecture' }],
  ['根據 PM 彙整的色彩與風格需求，以既有首頁架構為基礎製作多組配色與介面風格 Demo。設計保留主要功能、資訊層級與操作結構，調整品牌色、明暗模式、元件造型與視覺素材，作為後續客製 UI 製作的參考起點。', { zh: '根據專案經理彙整的色彩與風格需求，以既有首頁架構為基礎製作多組配色與介面風格示範。設計保留主要功能、資訊層級與操作結構，調整品牌色、明暗模式、元件造型與視覺素材，作為後續客製介面製作的參考起點。', en: 'Based on color and style requirements synthesized by the PM, multiple palettes and interface demos were created on the existing homepage structure. Core features, hierarchy, and interactions were preserved while color, light and dark modes, component styling, and visual assets were adjusted as a starting point for customized UI.' }],
  ['STRUCTURE PRESERVED', { zh: '保留產品結構', en: 'STRUCTURE PRESERVED' }],
  ['保留功能架構、資訊層級與主要操作方式。', { zh: '保留功能架構、資訊層級與主要操作方式。', en: 'Preserved functional architecture, information hierarchy, and primary interactions.' }],
  ['VISUAL VARIABLES', { zh: '視覺變因', en: 'VISUAL VARIABLES' }],
  ['調整主輔色、明暗模式、元件造型與視覺素材。', { zh: '調整主輔色、明暗模式、元件造型與視覺素材。', en: 'Adjusted primary and secondary colors, light and dark modes, component forms, and visual assets.' }],
  ['INTERNAL DEMO OUTPUT', { zh: '內部示範產出', en: 'INTERNAL DEMO OUTPUT' }],
  ['建立可比較的視覺 Demo，供後續客製製作參考。', { zh: '建立可比較的視覺示範，供後續客製製作參考。', en: 'Created comparable visual demos as references for subsequent customization.' }],
  ['SCOPE NOTE', { zh: '範圍說明', en: 'SCOPE NOTE' }],
  ['這些畫面屬於內部視覺探索，並非完整客戶提案或最終上線版本。', { zh: '這些畫面屬於內部視覺探索，並非完整客戶提案或最終上線版本。', en: 'These screens were internal visual explorations, not complete client proposals or final launched versions.' }],
  ['CLIENT CONFIGURATION EXAMPLES', { zh: '客戶配置案例', en: 'CLIENT CONFIGURATION EXAMPLES' }],
  ['同一套產品，因營運模式形成不同交付結果', { zh: '同一套產品，因營運模式形成不同交付結果', en: 'One Product, Different Delivery Outcomes by Operating Model' }],
  ['白標不只是更換品牌色，而是依客戶的市場、會員制度與營運方式，重新配置視覺識別、功能範圍與入口政策。', { zh: '白標不只是更換品牌色，而是依客戶的市場、會員制度與營運方式，重新配置視覺識別、功能範圍與入口政策。', en: 'White-label delivery involved more than changing brand colors. Visual identity, feature scope, and access policies were reconfigured around each client market, membership model, and operation.' }],
  ['保留大部分核心功能，轉為較俐落的科技感手機介面，並完成簡中、英文與西班牙文版本。', { zh: '保留大部分核心功能，轉為較俐落的科技感手機介面，並完成簡中、英文與西班牙文版本。', en: 'Retained most core features in a sharper technology-oriented mobile interface delivered in Simplified Chinese, English, and Spanish.' }],
  ['因服務僅供旗下會員使用，移除公開註冊流程；密碼問題改由客服協助，並客製品牌 IP 與部分頁面。', { zh: '因服務僅供旗下會員使用，移除公開註冊流程；密碼問題改由客服協助，並客製品牌角色與部分頁面。', en: 'Because the service was limited to existing members, public registration was removed. Password issues were handled by support, with custom brand IP and selected pages.' }],
  ['MOBILE APP &', { zh: '手機應用程式與', en: 'MOBILE APP &' }],
  ['PRODUCT PORTAL', { zh: '產品入口', en: 'PRODUCT PORTAL' }],
  ['INDIRECT & LATE INPUT', { zh: '間接且延遲的資訊', en: 'INDIRECT & LATE INPUT' }],
  ['MOVE FAST,', { zh: '快速推進，', en: 'MOVE FAST,' }],
  ['ALIGN EARLY.', { zh: '提早對齊。', en: 'ALIGN EARLY.' }],
  ['REVISE & HANDOFF', { zh: '修正與交付', en: 'REVISE & HANDOFF' }],
  ['ENTRY & ACCOUNT', { zh: '帳號與入口', en: 'ENTRY & ACCOUNT' }],
  ['WALLET & VIP', { zh: '錢包與會員', en: 'WALLET & VIP' }],
  ['SOCIAL & RETENTION', { zh: '互動與留存', en: 'SOCIAL & RETENTION' }],
  ['SPEC REVISION', { zh: '規格修改', en: 'Specification Revision' }],
  ['MEMORABLE, FRIENDLY,', { zh: '好記、親切，', en: 'MEMORABLE, FRIENDLY,' }],
  ['AND BUILT FOR PROMOTION.', { zh: '並適合推廣。', en: 'AND BUILT FOR PROMOTION.' }],
  ['Rounded & approachable', { zh: '圓潤且親切', en: 'Rounded and approachable' }],
  ['Sunglasses / gold chain', { zh: '墨鏡・金鍊', en: 'Sunglasses · gold chain' }],
  ['Sun gold / red / warm cream', { zh: '陽光金・紅・暖米白', en: 'Sun gold · red · warm cream' }],
  ['UI / campaign / store / print', { zh: '介面・行銷・商店・印刷', en: 'UI · campaign · store · print' }],
  ['MATURE PRODUCT', { zh: '成熟產品', en: 'MATURE PRODUCT' }],
  ['REUSABLE MODULES', { zh: '共用模組', en: 'REUSABLE MODULES' }],
  ['CLIENT CONFIGURATION', { zh: '客戶配置', en: 'CLIENT CONFIGURATION' }],
  ['MOBILE DELIVERY', { zh: '手機端交付', en: 'MOBILE DELIVERY' }],
  ['MARKET LOCALIZATION', { zh: 'MARKET LOCALIZATION', en: 'MARKET LOCALIZATION' }],
  ['GANAYA', { zh: 'GANAYA', en: 'GANAYA' }],
  ['MOBILE ONLY / MULTILINGUAL / VISUAL RESTYLE', { zh: 'MOBILE ONLY / MULTILINGUAL / VISUAL RESTYLE', en: 'MOBILE ONLY / MULTILINGUAL / VISUAL RESTYLE' }],
  ['CLOSED MEMBER ACCESS', { zh: 'CLOSED MEMBER ACCESS', en: 'CLOSED MEMBER ACCESS' }],
  ['369 CALIFORNIA CASINO', { zh: '369 CALIFORNIA CASINO', en: '369 CALIFORNIA CASINO' }],
  ['MOBILE ONLY / LOGIN ONLY / CUSTOM IP', { zh: 'MOBILE ONLY / LOGIN ONLY / CUSTOM IP', en: 'MOBILE ONLY / LOGIN ONLY / CUSTOM IP' }],
]);

const translateText = (value) => {
  const leading = value.match(/^\s*/)[0];
  const trailing = value.match(/\s*$/)[0];
  const current = value.trim();
  const override = sourceOverrides.get(current)?.[language];
  if (override) return `${leading}${override}${trailing}`;
  const translated = variants.get(current.toLocaleLowerCase())?.[language];
  if (translated) return `${leading}${translated}${trailing}`;
  let result = current;
  replacements.forEach(([source, target]) => {
    result = result.replaceAll(source, target);
    result = result.replaceAll(source.toUpperCase(), target);
  });
  return result === current ? value : `${leading}${result}${trailing}`;
};

const translatePage = () => {
  document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
  document.title = language === 'zh'
    ? document.title.replaceAll('Stephanie', '史蒂芬妮').replaceAll('Product Designer', '產品設計師').replaceAll('Case Study', '設計案例')
    : document.title.replaceAll('張勻瑄', 'Stephanie Chang').replaceAll('史蒂芬妮', 'Stephanie');
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest('.donor-report')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = translateText(node.nodeValue); });

  const donorReport = document.querySelector('.donor-report');
  if (donorReport && language === 'en') {
    const donorWalker = document.createTreeWalker(donorReport, NodeFilter.SHOW_TEXT);
    const donorNodes = [];
    while (donorWalker.nextNode()) donorNodes.push(donorWalker.currentNode);
    donorNodes.forEach((node) => { node.nodeValue = translateDonorText(node.nodeValue); });
    donorReport.querySelectorAll('[aria-label]').forEach((element) => {
      element.setAttribute('aria-label', translateDonorText(element.getAttribute('aria-label')));
    });
  }

  const donorResearchCard = document.querySelector('#donor-research-card');
  if (donorResearchCard) {
    const donorCardCopy = language === 'zh'
      ? {
          label: '產品問卷調查',
          headline: '回饋轉為優先項目',
          evidence: '描述性證據・自選樣本',
          title: '多多益善捐款者問卷分析',
          description: '與多多益善真實合作案例－捐款者調查',
          tags: '問卷分析 / NPS / 溝通偏好',
          action: '查看完整報告 ↗',
          aria: '查看多多益善捐款者需求分析完整報告',
        }
      : {
          label: 'PRODUCT SURVEY RESEARCH',
          headline: 'Feedback → priorities',
          evidence: 'Descriptive · Self-selected Sample',
          title: 'Right Plus Donor Survey Analysis',
          description: 'A real-world donor research collaboration with Right Plus.',
          tags: 'SURVEY ANALYSIS / NPS / COMMUNICATION PATTERNS',
          action: 'VIEW REPORT ↗',
          aria: 'View the complete Right Plus donor research report',
        };
    const visual = donorResearchCard.querySelector('.research-visual');
    const info = donorResearchCard.querySelector('.research-info');
    visual.querySelector('p').textContent = donorCardCopy.label;
    visual.querySelector('h3').textContent = donorCardCopy.headline;
    visual.querySelector('small').textContent = donorCardCopy.evidence;
    info.querySelector('h3').textContent = donorCardCopy.title;
    info.querySelector('p').textContent = donorCardCopy.description;
    const meta = info.querySelector('small');
    meta.replaceChildren(document.createTextNode(`${donorCardCopy.tags} `));
    const action = document.createElement('b');
    action.textContent = donorCardCopy.action;
    meta.append(action);
    donorResearchCard.setAttribute('aria-label', donorCardCopy.aria);
  }

  const paymentResearchCard = document.querySelector('#payment-research-card');
  if (paymentResearchCard) {
    const paymentCardCopy = language === 'zh'
      ? {
          label: '付款旅程',
          headline: '信任在哪裡中斷？',
          title: '行動支付使用者研究',
          description: '透過 26 位受訪者的探索型游擊訪談，整理付款習慣、決策因素與結帳摩擦。',
          tags: '游擊訪談 / 使用者行為 / 洞察整理',
          action: '查看完整報告 ↗',
          aria: '查看行動支付使用者研究完整報告',
        }
      : {
          label: 'PAYMENT JOURNEY',
          headline: 'Where does trust break?',
          title: 'Mobile Payment UX Research',
          description: 'Understanding payment habits, decision factors, and checkout friction through 26 exploratory interviews.',
          tags: 'GUERRILLA INTERVIEWS / USER BEHAVIOR / INSIGHT SYNTHESIS',
          action: 'VIEW REPORT ↗',
          aria: 'View the complete mobile payment UX research report',
        };
    const visual = paymentResearchCard.querySelector('.research-visual');
    const info = paymentResearchCard.querySelector('.research-info');
    visual.querySelector('p').textContent = paymentCardCopy.label;
    visual.querySelector('h3').textContent = paymentCardCopy.headline;
    info.querySelector('h3').textContent = paymentCardCopy.title;
    info.querySelector('p').textContent = paymentCardCopy.description;
    const meta = info.querySelector('small');
    meta.replaceChildren(document.createTextNode(`${paymentCardCopy.tags} `));
    const action = document.createElement('b');
    action.textContent = paymentCardCopy.action;
    meta.append(action);
    paymentResearchCard.setAttribute('aria-label', paymentCardCopy.aria);
  }

  document.querySelectorAll('[aria-label],[alt],[title]').forEach((element) => {
    ['aria-label', 'alt', 'title'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translateText(element.getAttribute(attribute)));
    });
  });

  document.querySelectorAll('img[alt]').forEach((image) => {
    const alt = image.alt;
    if (language === 'en' && /[\u3400-\u9fff]/.test(alt)) image.alt = 'Project interface image';
    if (language === 'zh' && /[A-Za-z]/.test(alt)) image.alt = '專案介面圖片';
  });

  const brand = document.querySelector('.brand');
  if (brand) {
    const mark = brand.querySelector('img');
    brand.replaceChildren(mark, document.createTextNode('STEPHANIE'));
    brand.setAttribute('aria-label', language === 'zh' ? 'STEPHANIE 首頁' : 'Stephanie homepage');
  }

  document.querySelector('.hero-summary')?.remove();
  const portraitCaption = document.querySelector('.portrait-panel figcaption span');
  if (portraitCaption) portraitCaption.textContent = 'STEPHANIE';
  const heroTitle = document.querySelector('#hero-title');
  if (heroTitle) heroTitle.innerHTML = language === 'zh'
    ? '將複雜轉化為<br />清楚、可擴充的數位產品'
    : 'TURNING<br />COMPLEXITY INTO<br />CLEAR, SCALABLE<br />DIGITAL PRODUCTS.';
  const web3Card = document.querySelector('a[href*="project=sonic-ton"] .project-info h3');
  if (web3Card && language === 'zh') web3Card.textContent = 'WEB3 預測遊戲';
  const projectTags = [
    'PRODUCT PLANNING / UI/UX / VISUAL DIRECTION / LAUNCH',
    'GAME UI / RESPONSIVE / MULTILINGUAL / WEB3',
    'PRODUCT SYSTEM / MODULAR UI / MOBILE DELIVERY',
    'RESPONSIVE UI / LIVE INTERACTION / DESIGN SYSTEM',
  ];
  document.querySelectorAll('.project-info small').forEach((label, index) => {
    if (projectTags[index]) label.textContent = projectTags[index];
  });
  const companyNames = ['業鈞數位有限公司', '星翰有限公司', '主橙資訊科技有限公司'];
  document.querySelectorAll('.experience-list article > div > p').forEach((company, index) => {
    if (companyNames[index]) company.textContent = companyNames[index];
  });
  if (language === 'zh') {
    const aiHeading = document.querySelector('.capability-grid article:nth-child(2) h3');
    if (aiHeading) aiHeading.textContent = 'AI 輔助設計流程';
    const roles = ['UI Designer', 'Web Designer', 'UI Designer'];
    const experienceTags = [
      'WHITE-LABEL PRODUCTS · PRODUCT DEVELOPMENT · VISUAL SYSTEMS',
      'WEB DESIGN · VISUAL DESIGN · PRODUCT DEVELOPMENT',
      'UI DESIGN · VISUAL DESIGN · PRODUCT MANAGEMENT',
    ];
    document.querySelectorAll('.experience-list article').forEach((article, index) => {
      const role = article.querySelector('h3');
      const tag = article.querySelector(':scope > p');
      if (role && roles[index]) role.textContent = roles[index];
      if (tag && experienceTags[index]) tag.textContent = experienceTags[index];
    });
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = '一起打造更好的產品';
  }
  const aboutTitle = document.querySelector('#about-title');
  const aboutDescription = document.querySelector('.about-copy > div > p:last-child');
  const copyright = document.querySelector('.site-copyright');
  if (aboutTitle) {
    aboutTitle.textContent = language === 'zh'
      ? '把複雜的事，整理成好用的產品。'
      : 'MAKING COMPLEX PRODUCTS EASIER TO USE.';
  }
  if (aboutDescription) {
    aboutDescription.textContent = language === 'zh'
      ? '累積三年以上介面設計經驗，從需求整理、介面規劃到設計交付，與產品及工程團隊一起把功能做完整。'
      : 'Over three years of UI design experience, working from requirements and interface planning through design delivery with product and engineering teams.';
  }
  if (copyright) {
    copyright.textContent = 'TAICHUNG, TAIWAN · © 2026 STEPHANIE CHANG';
  }

  if (language === 'zh') {
    const caseHeadings = [
      ['.sunny-hero-copy h1', '手機應用程式與產品入口'],
      ['.wl-hero-copy h1', '白標產品系統'],
      ['.live-hero-copy h1', '直播平台'],
      ['.sonic-hero-copy h1', '區塊鏈預測遊戲'],
      ['.sunny-response h2', '快速推進，提早對齊。'],
    ];
    caseHeadings.forEach(([selector, value]) => {
      const heading = document.querySelector(selector);
      if (heading) heading.textContent = value;
    });
    const sunnyMilestone = document.querySelector('.sunny-meta > div:nth-child(4) span');
    if (sunnyMilestone) sunnyMilestone.textContent = '成果發表';
    const sunnyHandoff = document.querySelector('.sunny-response li:nth-child(4) b');
    if (sunnyHandoff) sunnyHandoff.textContent = '04　修正與交付';
    const whiteSource = document.querySelector('.wl-evolution article:first-child h3');
    if (whiteSource) whiteSource.textContent = '既有產品';
    const whiteDelivery = document.querySelector('.wl-flow > div:nth-child(4) b');
    if (whiteDelivery) whiteDelivery.textContent = '04　MOBILE DELIVERY';
    const liveDraft = document.querySelector('.live-evolution article:first-child > b');
    if (liveDraft) liveDraft.textContent = '初期產品草稿';
    const liveDeliver = document.querySelector('.live-flow article:nth-child(4) b');
    if (liveDeliver) liveDeliver.textContent = '交付';
    const evidenceBoundary = document.querySelector('.sonic-telegram b');
    if (evidenceBoundary) evidenceBoundary.textContent = '證據說明';
  } else {
    const whiteFlowCopy = [
      'Mature product foundation',
      'Shared feature modules',
      'Brand and scope configuration',
      'Multilingual mobile handoff',
    ];
    document.querySelectorAll('.wl-flow > div > p').forEach((paragraph, index) => {
      if (whiteFlowCopy[index]) paragraph.textContent = whiteFlowCopy[index];
    });
    const liveDeliver = document.querySelector('.live-flow article:nth-child(4) b');
    if (liveDeliver) liveDeliver.textContent = 'Deliver';
  }
  document.querySelectorAll('article').forEach((article) => {
    const label = article.querySelector(':scope > b');
    const heading = article.querySelector(':scope > h3');
    if (label && heading && label.textContent.trim().toLocaleLowerCase() === heading.textContent.trim().toLocaleLowerCase()) label.remove();
  });

  const caseTitle = document.querySelector('#case-content h1')?.textContent.trim();
  const isDonorReport = document.body.classList.contains('donor-body') || document.body.classList.contains('research-donor');
  const isPaymentReport = document.body.classList.contains('research-payment');
  const isError = document.body.classList.contains('error-body');
  document.title = isError
    ? language === 'zh' ? '找不到頁面｜張勻瑄' : 'Page Not Found | Stephanie Chang'
    : isPaymentReport
      ? language === 'zh' ? '行動支付｜結帳體驗游擊訪談' : 'Mobile Payment | Checkout Experience Research'
    : isDonorReport
      ? language === 'zh' ? '多多益善｜捐款者需求分析' : 'Right Plus | Donor Survey Analysis'
    : caseTitle
      ? `${caseTitle}｜${language === 'zh' ? '張勻瑄' : 'Stephanie Chang'}`
      : language === 'zh' ? '張勻瑄｜產品設計師' : 'Stephanie Chang | Product Designer';

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('assets/') || href.includes('/assets/')) return;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;
    url.searchParams.set('lang', language);
    link.href = `${url.pathname.split('/').pop() || 'index.html'}${url.search}${url.hash}`;
  });
};

const languageMenu = () => {
  const host = document.querySelector('.site-nav');
  if (!host) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'language-switcher';
  const currentLabel = language === 'zh' ? '繁體中文' : 'English';
  const triggerLabel = language === 'zh' ? '語言' : 'Language';
  const otherLabel = language === 'zh' ? '英文' : 'Traditional Chinese';
  const other = language === 'zh' ? 'en' : 'zh';
  wrapper.innerHTML = `
    <button class="language-trigger" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${language === 'zh' ? '選擇語言' : 'Choose language'}">
      <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"></path></svg>
      <span>${triggerLabel}</span>
      <svg class="language-chevron" aria-hidden="true" viewBox="0 0 16 10"><path d="m2 2 6 6 6-6"></path></svg>
    </button>
    <div class="language-options" hidden>
      <button type="button" aria-current="true">${currentLabel}<svg aria-hidden="true" viewBox="0 0 16 12"><path d="m1 6 4 4L15 1"></path></svg></button>
      <button type="button" data-language="${other}">${otherLabel}</button>
    </div>`;

  host.append(wrapper);

  const trigger = wrapper.querySelector('.language-trigger');
  const options = wrapper.querySelector('.language-options');
  trigger.addEventListener('click', () => {
    const open = options.hidden;
    options.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  });
  wrapper.querySelector('[data-language]').addEventListener('click', (event) => {
    const url = new URL(location.href);
    url.searchParams.set('lang', event.currentTarget.dataset.language);
    localStorage.setItem('portfolio-language', event.currentTarget.dataset.language);
    location.href = url;
  });
  document.addEventListener('click', (event) => {
    if (wrapper.contains(event.target)) return;
    options.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  });
  wrapper.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    options.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  });
};

translatePage();
languageMenu();
