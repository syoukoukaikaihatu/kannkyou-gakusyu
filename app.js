const KEY='wme_v31_state';
const OLD_KEY='wme_v3_state';
const VERSION='3.1.0';
const curriculum=[
 {stage:'Stage 1｜法令・処理業の全体像',lessons:[
  ['01','処理会社の事業構造','廃棄物が発生してから最終処分までの全体像と、収集運搬・中間処理・最終処分の役割を自社の流れで説明する。'],
  ['02','一廃・産廃・特別管理産廃','区分、処理責任、許可・運用の違いを整理し、迷ったときに何を確認するかを身につける。'],
  ['03','許可証を読む','業の許可・施設の許可、品目、区域、条件、有効期限等を自社の許可証で確認できるようにする。'],
  ['04','排出事業者責任と処理業者責任','委託して終わりではない排出事業者責任と、受託側が守るべき基準を区別する。'] ]},
 {stage:'Stage 2｜契約・マニフェスト',lessons:[
  ['05','委託契約書を読む','収集運搬・処分契約で確認すべき事項を把握し、自社契約書をチェックできるようにする。'],
  ['06','マニフェストの全体像','排出から運搬・処分・最終処分終了確認までの情報の流れを説明できるようにする。'],
  ['07','JWNET実務','登録・運搬終了報告・処分終了報告・最終処分終了報告と社内運用を確認する。'],
  ['08','契約・マニフェストの事故','誤登録、品目相違、数量差、期限超過等が起きた際の確認・是正・再発防止を考える。'] ]},
 {stage:'Stage 3｜収集運搬・処理技術',lessons:[
  ['09','収集運搬と原価','車両・人員・ルート・積載・容器・待機時間から回収原価を考える。'],
  ['10','感染性廃棄物の実務','分類、梱包・容器、保管、収集運搬、中間処理までを実物と現場運用で確認する。'],
  ['11','焼却処理の仕組み','投入から燃焼、熱回収、排ガス、灰までの一連の工程を理解する。'],
  ['12','焼却以外の処理と最終処分','破砕・圧縮・選別・脱水等の目的と、処理後物・残さの行先を理解する。'] ]},
 {stage:'Stage 4｜設備・資格・保全',lessons:[
  ['13','焼却炉を構成する設備','受入、供給、燃焼、送風、排ガス、灰処理など主要設備の役割と故障影響を整理する。'],
  ['14','ボイラー・蒸気・熱回収','ボイラー、蒸気、熱利用と運転・資格・停止リスクを整理する。'],
  ['15','電気・受変電設備','受電から工場設備への供給、電気主任技術者、保安管理と停電時の影響を学ぶ。'],
  ['16','排ガス・排水・公害防止','環境基準・測定・処理設備・異常時対応の関係を経営者目線で整理する。'],
  ['17','工場の重要資格・選任者','法定選任、技能資格、保全人材を洗い出し、1人依存を見える化する。'],
  ['18','定修・予防保全・停止リスク','定修計画、予防保全、予備品、復旧時間、バックアップ体制を整理する。'] ]},
 {stage:'Stage 5｜自治体・行政・災害',lessons:[
  ['19','市町村の一般廃棄物処理','市町村の処理責任、一般廃棄物処理計画、委託・民間活用の全体像を理解する。'],
  ['20','自治体施設の定修・故障時受入れ','定期修繕や故障時に民間施設が受け入れる際の契約、手続、能力、運用を実案件で確認する。'],
  ['21','災害廃棄物・広域処理','災害時の処理体制、協定、仮置場、広域処理、民間事業者の役割を理解する。'] ]},
 {stage:'Stage 6｜原価・営業・経営',lessons:[
  ['22','処理原価を理解する','人件費・燃料・薬剤・電力・修繕・灰処分等を分解して処理原価を見る。'],
  ['23','料金・契約・顧客別採算','kg単価だけでなく回収条件、頻度、性状、容器、リスクを含め顧客採算を考える。'],
  ['24','経営者として工場を管理する','法令・設備・資格・人材・顧客・行政・BCPを統合した経営管理の型を完成させる。'] ]}
];
const officialSources=[
 {name:'環境省｜廃棄物・リサイクル対策',url:'https://www.env.go.jp/recycle/waste/'},
 {name:'JWセンター｜電子マニフェスト（JWNET）',url:'https://www.jwnet.or.jp/jwnet/'},
 {name:'JWNET｜電子マニフェストの運用',url:'https://www.jwnet.or.jp/jwnet/practice/index.html'},
 {name:'環境省｜災害廃棄物対策情報サイト',url:'https://policies.env.go.jp/recycle/disaster_waste/'}
];
const starterKnowledge=[
 {cat:'基礎',title:'一廃・産廃・特管の区分',body:'まず「何の廃棄物か」「誰が排出したか」「どの事業活動から生じたか」「特別管理に該当するか」を確認する。区分により処理責任・許可・委託方法が変わるため、現物だけで決めず法令・行政資料・許可内容で確認する。'},
 {cat:'事務',title:'電子マニフェストの基本フロー',body:'一般的には排出事業者が登録し、収集運搬業者が運搬終了報告、処分業者が処分終了報告・必要な最終処分終了報告を行う。自社では「誰が・いつ・どの情報で」操作するかを確認する。'},
 {cat:'経営',title:'資格は「操業継続リスク」で見る',body:'資格名の一覧だけでは不十分。法定選任の要否、現有人数、年齢・退職リスク、代替可否、外部委託可否、後継者、取得までの期間をセットで管理する。'},
 {cat:'行政',title:'自治体受入れは案件ごとに条件確認',body:'定修・故障・災害時の一般廃棄物受入れは、自治体の計画、契約、施設・業の許可、受入廃棄物の性状、能力、搬入・残さ処理等を案件ごとに確認する。一般論だけで可否を断定しない。'},
 {cat:'設備',title:'設備は「停止したら何が起きるか」で学ぶ',body:'各機器の名称暗記より、役割・前後工程・故障モード・停止時の影響・予備機・復旧時間・必要資格をつなげて理解する。'}
];
function freshState(){return {version:VERSION,quickInbox:[],knowledgeLevels:{},bridge:[],roadmapProgress:{},monthlyReviews:{},completed:[],lessonNotes:{},actions:[
 {id:crypto.randomUUID(),title:'第三種電気主任技術者の選任・外部委託条件を確認',status:'未対応',priority:'高',owner:'',due:'',source:'資格MAP'},
 {id:crypto.randomUUID(),title:'特級ボイラー関連の選任要件・代替可能性・後継候補を整理',status:'確認中',priority:'高',owner:'',due:'',source:'資格MAP'},
 {id:crypto.randomUUID(),title:'自治体の定修・緊急受入れの実案件を1件選び契約から処理まで確認',status:'未対応',priority:'中',owner:'',due:'',source:'行政'}],licenses:[
 {id:crypto.randomUUID(),name:'第三種電気主任技術者',legal:'要確認',count:'1',successor:'未定',outsourcing:'要確認',risk:'高',memo:'法定選任・外部委託の可否は自社設備条件で確認'},
 {id:crypto.randomUUID(),name:'特級ボイラー技士',legal:'設備条件を確認',count:'2',successor:'要確認',outsourcing:'要確認',risk:'高',memo:'工場運転上の必要性と選任要件を確認'},
 {id:crypto.randomUUID(),name:'1級ボイラー技士',legal:'設備条件を確認',count:'複数',successor:'有',outsourcing:'-',risk:'低',memo:''}],facilities:[],alignment:[
 {id:crypto.randomUUID(),topic:'重要資格の1人依存を放置しない',status:'議論中',decision:'',owner:''},
 {id:crypto.randomUUID(),topic:'自治体定修・緊急受入れを地域BCPの観点でも整理する',status:'未確認',decision:'',owner:''}],knowledge:starterKnowledge,meetingNotes:'',currentLesson:'01',growth:[],factoryVoice:[],executiveIssues:[],lastUpdated:new Date().toISOString()};}
let state=load(); state.quickInbox=state.quickInbox||[]; state.knowledgeLevels=state.knowledgeLevels||{}; state.bridge=state.bridge||[]; let currentPage='home';
function load(){try{const raw=localStorage.getItem(KEY)||localStorage.getItem(OLD_KEY);return raw?{...freshState(),...JSON.parse(raw)}:freshState()}catch(e){return freshState()}}
function save(){state.lastUpdated=new Date().toISOString();localStorage.setItem(KEY,JSON.stringify(state));const el=document.getElementById('saveState');if(el){el.textContent='保存しました';setTimeout(()=>el.textContent='自動保存',900)}}
const navItems=[['home','HOME'],['quick','QUICK CAPTURE｜30秒メモ'],['inbox','INBOX｜未整理'],['roadmap','ROADMAP｜12か月'],['growth','MY GROWTH｜成長記録'],['learning','LEARNING｜実務研修'],['knowledge','KNOWLEDGE｜実務知識'],['facility','FACILITY｜設備'],['license','LICENSE｜資格・人材'],['government','GOVERNMENT｜行政・自治体'],['bridge','MANAGEMENT BRIDGE｜経営への論点'],['alignment','ALIGNMENT｜共通認識'],['actions','ACTION｜課題管理'],['meeting','MEETING｜工場経営共有']];
function renderNav(){document.getElementById('nav').innerHTML=navItems.map(([id,label])=>`<button class="nav-btn ${currentPage===id?'active':''}" data-page="${id}">${label}</button>`).join('');document.querySelectorAll('.nav-btn').forEach(b=>b.onclick=()=>go(b.dataset.page));}
function go(p,arg){currentPage=p;renderNav();document.getElementById('sidebar').classList.remove('open');render(p,arg)}
function allLessons(){return curriculum.flatMap(s=>s.lessons.map(x=>({stage:s.stage,no:x[0],title:x[1],goal:x[2]})))}
function lessonByNo(n){return allLessons().find(x=>x.no===n)}
function riskClass(r){return r==='高'?'risk-high':r==='中'?'risk-mid':'risk-low'}
function pct(){return Math.round(state.completed.length/24*100)}
function render(page,arg){const c=document.getElementById('content'),title=document.getElementById('pageTitle');const labels=Object.fromEntries(navItems);title.textContent=labels[page]||'研修'; if(page==='home')home(c); if(page==='roadmap')roadmap(c); if(page==='growth')growth(c); if(page==='voice')voice(c); if(page==='issues')issues(c); if(page==='learning')learning(c); if(page==='lesson')lesson(c,arg||state.currentLesson); if(page==='knowledge')knowledge(c); if(page==='facility')facility(c); if(page==='license')license(c); if(page==='government')government(c); if(page==='management')management(c); if(page==='alignment')alignment(c); if(page==='actions')actions(c); if(page==='meeting')meeting(c);}

const yearlyRoadmap=[
 ['2026年10月','現場・全体像','搬入から最終処分までを自分の言葉で説明','主要工程マップ／疑問リスト'],
 ['2026年11月','操業・人','各職種の役割と属人化を把握','キーパーソンMAP／現場ヒアリング'],
 ['2026年12月','主要設備','焼却炉・送風・排ガス・灰処理の役割を理解','設備MAP／停止影響一覧'],
 ['2027年1月','ボイラー・電気・保全','停止リスク・予備機・復旧時間を質問できる','重要設備リスクMAP'],
 ['2027年2月','法令・許認可','自社許可と受入条件を説明','許認可一覧／確認事項'],
 ['2027年3月','契約・マニフェスト・資格','契約から処理終了までと重要資格を説明','資格人材MAP／事務フロー'],
 ['2027年4月','組織・後継者','1人依存と育成課題を経営課題化','後継者計画／教育課題'],
 ['2027年5月','安全・BCP','事故・故障・停止時の初動と代替を理解','BCP論点／バックアップ整理'],
 ['2027年6月','原価','処理・回収原価の構造を理解','原価構造MAP／KPI定義'],
 ['2027年7月','顧客・採算','単価だけでなく条件別採算を考える','顧客採算の考え方／改善仮説'],
 ['2027年8月','自治体・行政','定修・緊急・災害受入れを説明','自治体案件フロー／地域BCP論点'],
 ['2027年9月','統合・経営判断','工場の課題と3〜5年方針を経営会議で説明','工場経営レビュー／次年度計画']
];

function quickCapture(c){
 c.innerHTML=`<div class="hero"><span class="badge blue">30 SECOND CAPTURE</span><h2>現場では整理しない。まず残す。</h2><p class="muted">見た・聞いた・気づいた事実を短く保存し、あとでINBOXから振り分けます。</p></div>
 <div class="card"><div class="form-grid">
 <div class="field full"><label>何を見た・聞いた？ *</label><textarea id="qcText" autofocus placeholder="例：受変電設備について、担当者が1人しか詳しくないと聞いた"></textarea></div>
 <div class="field"><label>場所・相手</label><input id="qcWhere" placeholder="例：焼却棟／電気担当"></div>
 <div class="field"><label>分類</label><select id="qcCategory"><option>設備</option><option>資格</option><option>人材</option><option>操業</option><option>法令</option><option>契約</option><option>行政</option><option>原価</option><option>安全</option><option>その他</option></select></div>
 <div class="field"><label>種類</label><select id="qcType"><option value="OUR FACT">OUR FACT｜自社で確認した事実</option><option value="KNOWLEDGE">KNOWLEDGE｜学んだ一般知識</option><option value="ISSUE">ISSUE｜課題かもしれない</option></select></div>
 <div class="field"><label>重要度</label><select id="qcPriority"><option>普通</option><option>要確認</option><option>重要</option></select></div>
 </div><div style="margin-top:14px"><button class="btn" id="saveQuick">保存して終了</button></div></div>`;
 document.getElementById('saveQuick').onclick=()=>{
   const text=document.getElementById('qcText').value.trim(); if(!text){alert('内容を入力してください');return;}
   state.quickInbox=state.quickInbox||[];
   state.quickInbox.unshift({id:crypto.randomUUID(),date:new Date().toISOString(),text,where:document.getElementById('qcWhere').value.trim(),category:document.getElementById('qcCategory').value,type:document.getElementById('qcType').value,priority:document.getElementById('qcPriority').value,sorted:false,routes:[]});
   save(); alert('INBOXに保存しました'); go('home');
 };
}
function inbox(c){
 const items=(state.quickInbox||[]).filter(x=>!x.sorted);
 c.innerHTML=`<div class="section-head"><div><h2>未整理BOX</h2><div class="muted">現場では収集だけ。ここで週1回、必要な場所へ振り分けます。</div></div><span class="badge ${items.length?'warn':'ok'}">${items.length}件</span></div>
 ${items.map(x=>`<div class="card inbox-item" style="margin-bottom:12px">
   <div class="section-head"><div><span class="type-pill ${x.type==='KNOWLEDGE'?'knowledge':x.type==='OUR FACT'?'fact':'issue'}">${esc(x.type)}</span> <span class="badge">${esc(x.category)}</span> <span class="badge ${x.priority==='重要'?'danger':x.priority==='要確認'?'warn':''}">${esc(x.priority)}</span></div><span class="small muted">${esc((x.date||'').slice(0,10))}</span></div>
   <h3>${esc(x.text)}</h3><div class="small muted">${esc(x.where||'')}</div>
   <div class="route-box"><b>どこへ反映する？</b>
    <label><input type="checkbox" data-route="${x.id}" value="knowledge" ${x.type==='KNOWLEDGE'?'checked':''}> KNOWLEDGE</label>
    <label><input type="checkbox" data-route="${x.id}" value="facility" ${x.category==='設備'?'checked':''}> 設備MAP</label>
    <label><input type="checkbox" data-route="${x.id}" value="license" ${['資格','人材'].includes(x.category)?'checked':''}> 資格・人材MAP</label>
    <label><input type="checkbox" data-route="${x.id}" value="action" ${x.type==='ISSUE'?'checked':''}> ACTION</label>
    <label><input type="checkbox" data-route="${x.id}" value="bridge"> MANAGEMENT BRIDGE</label>
   </div>
   <button class="btn" data-sort="${x.id}">振り分けて整理済みにする</button>
 </div>`).join('')||`<div class="empty">未整理メモはありません。現場では「30秒メモ」に集中すればOKです。</div>`}`;
 document.querySelectorAll('[data-sort]').forEach(btn=>btn.onclick=()=>{
   const x=state.quickInbox.find(v=>v.id===btn.dataset.sort); if(!x)return;
   const routes=[...document.querySelectorAll(`[data-route="${x.id}"]:checked`)].map(e=>e.value);
   x.routes=routes; x.sorted=true;
   if(routes.includes('knowledge')){state.knowledgeLevels=state.knowledgeLevels||{}; const key=x.category+'｜'+x.text.slice(0,28); state.knowledgeLevels[key]=state.knowledgeLevels[key]||{title:key,level:1,note:x.text,source:'現場/研修メモ'};}
   if(routes.includes('facility')) state.facilities.push({id:crypto.randomUUID(),name:x.text.slice(0,32),role:x.text,impact:'要確認',backup:'要確認',license:'',owner:x.where||''});
   if(routes.includes('license')) state.licenses.push({id:crypto.randomUUID(),name:x.text.slice(0,32),legal:'要確認',count:'',successor:'要確認',outsourcing:'要確認',risk:x.priority==='重要'?'高':'中',memo:x.text});
   if(routes.includes('action')) state.actions.push({id:crypto.randomUUID(),title:x.text,status:'未対応',priority:x.priority==='重要'?'高':'中',owner:'',due:'',source:'INBOX'});
   if(routes.includes('bridge')){state.bridge=state.bridge||[];state.bridge.unshift({id:crypto.randomUUID(),date:new Date().toISOString().slice(0,10),title:x.text,fact:x.type==='OUR FACT'?x.text:'',why:'工場側で重要論点として抽出',priority:x.priority==='重要'?'高':'中',status:'未送付'});}
   save(); render('inbox');
 });
}
function bridge(c){
 state.bridge=state.bridge||[];
 c.innerHTML=`<div class="hero"><span class="badge blue">MANAGEMENT BRIDGE</span><h2>工場で発見した「経営側で考えるべき論点」だけを置く</h2><p class="muted">ここでは解決策を作り込みません。事実と重要性を整理し、必要なテーマだけExecutive Daily Developmentへ送ります。</p></div>
 <div class="section-head"><div><h2>論点一覧</h2></div><button class="btn" id="addBridge">論点を追加</button></div>
 <div class="table-wrap"><table><thead><tr><th>日付</th><th>論点</th><th>重要度</th><th>確認事実</th><th>なぜ経営論点か</th><th>状態</th></tr></thead><tbody>
 ${state.bridge.map(x=>`<tr><td>${esc(x.date)}</td><td><b>${esc(x.title)}</b></td><td><span class="badge ${x.priority==='高'?'danger':'warn'}">${esc(x.priority)}</span></td><td>${esc(x.fact||'')}</td><td>${esc(x.why||'')}</td><td><select data-bid="${x.id}"><option ${x.status==='未送付'?'selected':''}>未送付</option><option ${x.status==='検討中'?'selected':''}>検討中</option><option ${x.status==='送付済'?'selected':''}>送付済</option></select></td></tr>`).join('')}
 </tbody></table></div>
 <div class="callout" style="margin-top:16px"><b>棲み分け：</b> 工場研修＝事実・仕組み・現場課題の把握。経営者育成＝投資、人事、戦略、優先順位など「どう判断するか」。</div>`;
 document.getElementById('addBridge').onclick=()=>{const title=prompt('経営側で検討したい論点');if(!title)return;const fact=prompt('確認できている事実')||'';const why=prompt('なぜ経営側で考える必要があるか')||'';state.bridge.unshift({id:crypto.randomUUID(),date:new Date().toISOString().slice(0,10),title,fact,why,priority:'中',status:'未送付'});save();render('bridge')};
 document.querySelectorAll('[data-bid]').forEach(el=>el.onchange=()=>{const x=state.bridge.find(v=>v.id===el.dataset.bid);if(x){x.status=el.value;save();}});
}
function roadmap(c){
 const months=yearlyRoadmap.map((r)=>{
   const key=r[0], p=state.roadmapProgress[key]||{status:'未着手',progress:0,achievement:'',field:'',next:'',shared:false};
   return `<div class="card" style="margin-bottom:14px">
     <div class="section-head"><div><span class="badge ${p.status==='完了'?'ok':p.status==='進行中'?'warn':'blue'}">${esc(p.status)}</span><h3 style="margin-top:8px">${esc(r[0])}｜${esc(r[1])}</h3></div>
       <div style="min-width:180px"><div class="small muted">月次進捗 ${Number(p.progress)||0}%</div><div class="progress"><span style="width:${Math.max(0,Math.min(100,Number(p.progress)||0))}%"></span></div></div></div>
     <p><b>到達状態：</b>${esc(r[2])}</p><p class="muted"><b>月次成果物：</b>${esc(r[3])}</p>
     <div class="grid cols-2">
       <label>状態<select data-rm="${escAttr(key)}" data-rk="status"><option ${p.status==='未着手'?'selected':''}>未着手</option><option ${p.status==='進行中'?'selected':''}>進行中</option><option ${p.status==='完了'?'selected':''}>完了</option></select></label>
       <label>進捗（0〜100%）<input type="number" min="0" max="100" data-rm="${escAttr(key)}" data-rk="progress" value="${Number(p.progress)||0}"></label>
       <label>今月できるようになったこと<textarea data-rm="${escAttr(key)}" data-rk="achievement" placeholder="説明できる・質問できる・判断できる、で記録">${esc(p.achievement||'')}</textarea></label>
       <label>現場で確認したこと<textarea data-rm="${escAttr(key)}" data-rk="field" placeholder="誰に何を聞き、何を見たか">${esc(p.field||'')}</textarea></label>
       <label>次に確認・改善すること<textarea data-rm="${escAttr(key)}" data-rk="next" placeholder="翌月へ持ち越す論点">${esc(p.next||'')}</textarea></label>
       <label class="checkline"><input type="checkbox" data-rm="${escAttr(key)}" data-rk="shared" ${p.shared?'checked':''}> 経営陣へ月次共有済み</label>
     </div>
   </div>`;
 }).join('');
 const done=yearlyRoadmap.filter(r=>(state.roadmapProgress[r[0]]||{}).status==='完了').length;
 const avg=Math.round(yearlyRoadmap.reduce((s,r)=>s+(Number((state.roadmapProgress[r[0]]||{}).progress)||0),0)/12);
 const shared=yearlyRoadmap.filter(r=>(state.roadmapProgress[r[0]]||{}).shared).length;
 c.innerHTML=`<div class="hero"><span class="badge blue">ROLE YEAR 2｜INTEGRATED ROADMAP</span><h2>12か月ロードマップを、このサイトだけで運営</h2><p class="muted">Excelを開かず、月次テーマ・進捗・現場確認・成果・経営共有までここで完結します。</p></div>
 <div class="grid cols-3" style="margin-bottom:16px"><div class="card"><div class="small muted">完了月</div><div class="metric">${done}/12</div></div><div class="card"><div class="small muted">平均進捗</div><div class="metric">${avg}%</div></div><div class="card"><div class="small muted">経営共有済み</div><div class="metric">${shared}/12</div></div></div>
 <div class="callout" style="margin-bottom:16px"><b>月次運営：</b> 月初に重点テーマを確認 → 研修・現場ヒアリング → 月末に「できるようになったこと」を記録 → 経営陣へ共有 → 翌月ACTIONへつなげます。</div>
 ${months}`;
 document.querySelectorAll('[data-rm]').forEach(el=>{
   const handler=()=>{const m=el.dataset.rm;state.roadmapProgress[m]=state.roadmapProgress[m]||{status:'未着手',progress:0,achievement:'',field:'',next:'',shared:false};let v=el.type==='checkbox'?el.checked:el.value;if(el.dataset.rk==='progress')v=Math.max(0,Math.min(100,Number(v)||0));state.roadmapProgress[m][el.dataset.rk]=v;save();};
   el.onchange=handler; if(el.tagName==='TEXTAREA') el.onblur=handler;
 });
}
function growth(c){c.innerHTML=`<div class="section-head"><div><h2>自分が「できるようになったこと」</h2><div class="muted">学習時間ではなく、説明・質問・判断できる能力で成長を残します。</div></div><button class="btn" id="addGrowth">成長記録を追加</button></div>${state.growth.map(x=>`<div class="card" style="margin-bottom:12px"><span class="badge blue">${esc(x.date)}</span><h3>${esc(x.title)}</h3><p>${esc(x.evidence)}</p><div class="small muted">次の段階：${esc(x.next||'')}</div></div>`).join('')||'<div class="empty">まだ記録はありません。月末に「今月できるようになったこと」を1つ残します。</div>'}`;document.getElementById('addGrowth').onclick=()=>{const title=prompt('できるようになったこと');if(!title)return;const evidence=prompt('何をもって「できる」と言えるか（説明・成果物・実務例）')||'';const next=prompt('次にできるようになりたいこと')||'';state.growth.unshift({id:crypto.randomUUID(),date:new Date().toISOString().slice(0,10),title,evidence,next});save();render('growth')};}
function home(c){
 const next=allLessons().find(l=>!state.completed.includes(l.no))||allLessons()[23];
 const inboxCount=(state.quickInbox||[]).filter(x=>!x.sorted).length;
 const bridgeCount=(state.bridge||[]).filter(x=>x.status!=='送付済').length;
 const doneMonths=yearlyRoadmap.filter(r=>(state.roadmapProgress[r[0]]||{}).status==='完了').length;
 c.innerHTML=`
 <div class="hero">
   <span class="badge blue">FACTORY EXECUTIVE LEARNING OS｜v3.1</span>
   <h2>学ぶ・現場で拾う・整理する。入力はできるだけ一度だけ。</h2>
   <p class="muted">工場研修は「工場を理解する場所」。重要な経営論点だけMANAGEMENT BRIDGEへ送り、Executive Daily Development側で経営判断を考えます。</p>
 </div>
 <div class="quick-grid">
   <button class="quick-card primary" onclick="go('lesson','${next.no}')"><span>01</span><b>今日の研修をする</b><small>次回：${next.no}｜${esc(next.title)}</small></button>
   <button class="quick-card" onclick="go('quick')"><span>02</span><b>現場で気づいたこと</b><small>スマホで30秒メモ</small></button>
   <button class="quick-card" onclick="go('inbox')"><span>03</span><b>今日の振り返り</b><small>未整理 ${inboxCount}件を振り分け</small></button>
 </div>
 <div class="grid cols-4" style="margin-top:16px">
   <div class="card"><div class="small muted">実務研修</div><div class="metric">${state.completed.length}/24</div></div>
   <div class="card"><div class="small muted">ロードマップ</div><div class="metric">${doneMonths}/12</div></div>
   <div class="card"><div class="small muted">未整理メモ</div><div class="metric">${inboxCount}</div></div>
   <div class="card"><div class="small muted">経営への論点</div><div class="metric">${bridgeCount}</div></div>
 </div>
 <div class="grid cols-2" style="margin-top:16px">
   <div class="card"><h3>このサイトに残すもの</h3><p><span class="type-pill knowledge">KNOWLEDGE</span> 一般知識・法令・仕組み</p><p><span class="type-pill fact">OUR FACT</span> 自社・現場で確認した事実</p><p><span class="type-pill issue">ISSUE</span> 工場として確認・改善が必要なこと</p></div>
   <div class="card"><h3>経営者育成との境界</h3><p class="muted">工場サイトでは「何が起きているか・なぜ重要か」まで。投資、人事、戦略、優先順位などの経営判断は、重要テーマだけMANAGEMENT BRIDGEから経営者育成へ送ります。</p></div>
 </div>`;
}
function learning(c){c.innerHTML=`<div class="section-head"><div><h2>全24回 基礎課程</h2><div class="muted">JWセンター講習済みを前提に、実務と経営判断へ進みます。</div></div><div><strong>${state.completed.length}/24 完了</strong></div></div><div class="progress" style="margin-bottom:18px"><i style="width:${pct()}%"></i></div><div class="curriculum">${curriculum.map(s=>`<div class="card"><div class="stage-title">${s.stage}</div>${s.lessons.map(l=>`<div class="lesson" data-no="${l[0]}"><div class="lesson-no">${l[0]}</div><div><div class="lesson-title">${l[1]}</div><div class="small muted">${l[2]}</div></div><span class="badge ${state.completed.includes(l[0])?'ok':''}">${state.completed.includes(l[0])?'完了':state.lessonNotes[l[0]]?'進行中':'未実施'}</span></div>`).join('')}</div>`).join('')}</div>`;document.querySelectorAll('.lesson').forEach(x=>x.onclick=()=>go('lesson',x.dataset.no));}
function lesson(c,no){
 const l=lessonByNo(no); if(!l)return go('learning'); state.currentLesson=no; save(); const n=state.lessonNotes[no]||{};
 c.innerHTML=`<div class="hero"><div class="badge blue">${l.stage}</div><h2>${l.no}｜${l.title}</h2><p class="muted">今日のゴール：${l.goal}</p></div>
 <div class="card" style="margin-top:16px"><h3>研修後は、まずこの3つだけ</h3><div class="form-grid">
  <div class="field full"><label>① 今日わかったこと｜KNOWLEDGE</label><textarea id="understanding" placeholder="ChatGPTとの研修後、理解した内容を短く">${esc(n.understanding||n.fact||'')}</textarea></div>
  <div class="field"><label>② 自社ではどうか｜OUR FACT</label><textarea id="ourCompany" placeholder="自社で確認済みなら記録。未確認なら空欄でOK">${esc(n.ourCompany||'')}</textarea></div>
  <div class="field"><label>③ まだ分からない・現場で確認すること</label><textarea id="mission" placeholder="次に誰に何を確認するか">${esc(n.mission||n.question||'')}</textarea></div>
 </div>
 <details style="margin-top:14px"><summary><b>詳細記録を開く（必要な時だけ）</b></summary><div class="form-grid" style="margin-top:12px">
  <div class="field"><label>関連資格・選任</label><textarea id="qualification">${esc(n.qualification||'')}</textarea></div>
  <div class="field"><label>工場としての課題候補</label><textarea id="risk">${esc(n.risk||'')}</textarea></div>
  <div class="field"><label>根拠URL・資料名・確認日</label><textarea id="source">${esc(n.source||'')}</textarea></div>
  <div class="field"><label>自由メモ</label><textarea id="memo">${esc(n.memo||'')}</textarea></div>
 </div></details>
 <div class="bridge-choice"><label><input type="checkbox" id="bridgeCandidate" ${n.bridgeCandidate?'checked':''}> この内容は「経営側で検討すべき論点」の候補</label></div>
 <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px"><button class="btn" id="saveLesson">記録を保存</button><button class="btn secondary" id="completeLesson">${state.completed.includes(no)?'完了を取り消す':'この回を完了'}</button><button class="btn light" id="toInbox">現場確認をINBOXへ</button></div></div>`;
 function collect(){
   const o={understanding:document.getElementById('understanding').value,ourCompany:document.getElementById('ourCompany').value,mission:document.getElementById('mission').value,qualification:document.getElementById('qualification').value,risk:document.getElementById('risk').value,source:document.getElementById('source').value,memo:document.getElementById('memo').value,bridgeCandidate:document.getElementById('bridgeCandidate').checked};
   state.lessonNotes[no]=o; save(); return o;
 }
 document.getElementById('saveLesson').onclick=()=>{const o=collect(); if(o.bridgeCandidate && o.risk.trim()){state.bridge=state.bridge||[];state.bridge.unshift({id:crypto.randomUUID(),date:new Date().toISOString().slice(0,10),title:`研修${no}｜${l.title}`,fact:o.ourCompany,why:o.risk,priority:'中',status:'未送付'});save();alert('保存し、MANAGEMENT BRIDGEにも追加しました');}else alert('保存しました');};
 document.getElementById('completeLesson').onclick=()=>{collect();state.completed=state.completed.includes(no)?state.completed.filter(x=>x!==no):[...state.completed,no];save();render('lesson',no)};
 document.getElementById('toInbox').onclick=()=>{const o=collect();if(!o.mission.trim()){alert('現場で確認することを入力してください');return;}state.quickInbox=state.quickInbox||[];state.quickInbox.unshift({id:crypto.randomUUID(),date:new Date().toISOString(),text:o.mission,where:'研修から',category:'その他',type:'ISSUE',priority:'要確認',sorted:false,routes:[]});save();alert('INBOXに追加しました');};
}
function knowledge(c){
 state.knowledgeLevels=state.knowledgeLevels||{};
 const defaults=['廃棄物の区分','委託契約','マニフェスト/JWNET','感染性廃棄物','焼却処理','ボイラー・蒸気','受変電設備','排ガス・公害防止','重要資格・選任','自治体一般廃棄物','処理原価'];
 defaults.forEach(t=>{if(!state.knowledgeLevels[t])state.knowledgeLevels[t]={title:t,level:0,note:'',source:''};});
 const rows=Object.values(state.knowledgeLevels);
 c.innerHTML=`<div class="hero"><span class="badge blue">KNOWLEDGE MAP</span><h2>「知っている」ではなく、どこまで使えるかを見える化</h2><p class="muted">Lv0 知らない → Lv1 聞いたことがある → Lv2 説明できる → Lv3 自社に当てはめられる → Lv4 問題を発見できる → Lv5 経営判断につなげられる</p></div>
 <div class="table-wrap"><table><thead><tr><th>テーマ</th><th>理解度</th><th>メモ・根拠</th></tr></thead><tbody>
 ${rows.map((x,i)=>`<tr><td><b>${esc(x.title)}</b></td><td><select data-kl="${escAttr(x.title)}">${[0,1,2,3,4,5].map(v=>`<option value="${v}" ${Number(x.level)===v?'selected':''}>Lv.${v}｜${['知らない','聞いたことがある','説明できる','自社に当てはめられる','問題を発見できる','経営判断につなげられる'][v]}</option>`).join('')}</select></td><td><input data-kn="${escAttr(x.title)}" value="${escAttr(x.note||'')}" placeholder="学んだこと・確認したこと"></td></tr>`).join('')}
 </tbody></table></div>`;
 document.querySelectorAll('[data-kl]').forEach(el=>el.onchange=()=>{state.knowledgeLevels[el.dataset.kl].level=Number(el.value);save();});
 document.querySelectorAll('[data-kn]').forEach(el=>el.onchange=()=>{state.knowledgeLevels[el.dataset.kn].note=el.value;save();});
}
function facility(c){c.innerHTML=`<div class="section-head"><div><h2>設備・停止リスク</h2><div class="muted">「何の設備か」ではなく「止まると何が起きるか」で管理します。</div></div><button class="btn" id="addFacility">設備を追加</button></div><div class="table-wrap"><table><thead><tr><th>設備</th><th>役割</th><th>停止影響</th><th>予備・代替</th><th>関連資格</th><th>担当</th></tr></thead><tbody id="facilityBody">${state.facilities.map(f=>facilityRow(f)).join('')||'<tr><td colspan="6" class="empty">まだ設備がありません。「設備を追加」から新工場・既存工場の主要設備を登録してください。</td></tr>'}</tbody></table></div><div class="callout" style="margin-top:16px">最初に登録する候補：焼却炉、ボイラー、受変電設備、誘引送風機、排ガス処理、灰処理、排水処理、計量設備、非常用電源。</div>`;document.getElementById('addFacility').onclick=()=>{const name=prompt('設備名');if(!name)return;state.facilities.push({id:crypto.randomUUID(),name,role:'',impact:'要確認',backup:'',license:'',owner:''});save();render('facility')};}
function facilityRow(f){return `<tr><td><b>${esc(f.name)}</b></td><td contenteditable data-fid="${f.id}" data-k="role">${esc(f.role)}</td><td contenteditable data-fid="${f.id}" data-k="impact">${esc(f.impact)}</td><td contenteditable data-fid="${f.id}" data-k="backup">${esc(f.backup)}</td><td contenteditable data-fid="${f.id}" data-k="license">${esc(f.license)}</td><td contenteditable data-fid="${f.id}" data-k="owner">${esc(f.owner)}</td></tr>`}
document.addEventListener('blur',e=>{const t=e.target;if(t.dataset?.fid){const f=state.facilities.find(x=>x.id===t.dataset.fid);if(f){f[t.dataset.k]=t.textContent.trim();save()}}},true);
function license(c){c.innerHTML=`<div class="section-head"><div><h2>資格・人材リスクMAP</h2><div class="muted">法定要件と操業継続を分けて確認します。</div></div><button class="btn" id="addLicense">資格を追加</button></div><div class="table-wrap"><table><thead><tr><th>資格・役割</th><th>法的必要性</th><th>現有人数</th><th>後継</th><th>外部委託</th><th>リスク</th><th>メモ</th></tr></thead><tbody>${state.licenses.map(x=>`<tr><td><b>${esc(x.name)}</b></td><td>${esc(x.legal)}</td><td>${esc(x.count)}</td><td>${esc(x.successor)}</td><td>${esc(x.outsourcing)}</td><td class="${riskClass(x.risk)}">${x.risk}</td><td>${esc(x.memo)}</td></tr>`).join('')}</tbody></table></div><div class="card" style="margin-top:16px"><h3>経営者が確認する7点</h3><p class="muted">①法定選任か ②必要人数 ③現有人数 ④不在時に操業できるか ⑤外部委託できるか ⑥後継者はいるか ⑦取得に何年かかるか</p></div>`;document.getElementById('addLicense').onclick=()=>{const name=prompt('資格・役割名');if(!name)return;state.licenses.push({id:crypto.randomUUID(),name,legal:'要確認',count:'',successor:'',outsourcing:'要確認',risk:'中',memo:''});save();render('license')};}
function government(c){c.innerHTML=`<div class="hero"><span class="badge blue">GOVERNMENT</span><h2>自治体の廃棄物処理を「行政案件」ではなく「地域の処理インフラ」として理解する</h2><p class="muted">定修・故障・災害時に、どの根拠・契約・能力・手続で受入れるかを実案件で学びます。</p></div><div class="grid cols-3">${[['19','市町村の一般廃棄物処理','一般廃棄物処理計画、処理責任、委託・民間活用を確認'],['20','定修・故障時受入れ','実際の自治体案件で契約→搬入→処理→残さまで追う'],['21','災害廃棄物・広域処理','協定、災害時体制、仮置場、広域連携を確認']].map(x=>`<div class="card"><span class="badge">研修 ${x[0]}</span><h3>${x[1]}</h3><p class="muted">${x[2]}</p><button class="btn light" onclick="go('lesson','${x[0]}')">研修を開く</button></div>`).join('')}</div><div class="card" style="margin-top:16px"><h3>自治体受入れ確認シート</h3><div class="grid cols-2"><div><p>□ 対象自治体・排出主体</p><p>□ 廃棄物の種類・性状・量</p><p>□ 平時／定修／故障／災害の別</p><p>□ 契約・発注方式</p></div><div><p>□ 自社の業・施設許可との整合</p><p>□ 搬入・計量・保管・処理方法</p><p>□ 処理能力・残さ処理</p><p>□ 行政への確認・届出等</p></div></div></div>`;}
function management(c){const fa=state.facilities.length;const high=state.licenses.filter(x=>x.risk==='高').length;c.innerHTML=`<div class="section-head"><div><h2>経営統合ビュー</h2><div class="muted">学習を最終的に「経営判断」に変換します。</div></div></div><div class="grid cols-4"><div class="card"><div class="small muted">主要設備登録</div><div class="metric">${fa}</div></div><div class="card"><div class="small muted">高リスク資格</div><div class="metric">${high}</div></div><div class="card"><div class="small muted">未完了課題</div><div class="metric">${state.actions.filter(a=>a.status!=='完了').length}</div></div><div class="card"><div class="small muted">合意済み</div><div class="metric">${state.alignment.filter(a=>a.status==='合意').length}</div></div></div><div class="grid cols-2" style="margin-top:16px"><div class="card"><h3>今後ここへ載せるKPI</h3><p class="muted">処理量／許可能力／実稼働率／停止時間／定修日数／電力原単位／燃料原単位／薬剤原単位／残さ量／顧客別回収原価など。</p><div class="callout warning">Version 1では数値を無理に入れず、「正しい算定ルール」を決めてから追加する設計です。</div></div><div class="card"><h3>経営者の問い</h3><p>・何が止まると工場が止まるか？</p><p>・誰がいなくなると操業できないか？</p><p>・どの顧客・行政案件が利益と安定稼働に寄与するか？</p><p>・許可能力ではなく実際に何t余力があるか？</p><p>・災害・定修時に地域へ何を提供できるか？</p></div></div>`;}
function alignment(c){c.innerHTML=`<div class="section-head"><div><h2>経営者間の共通認識</h2><div class="muted">知識・課題を「自分だけが知っている状態」で終わらせません。</div></div><button class="btn" id="addAlign">論点を追加</button></div><div class="table-wrap"><table><thead><tr><th>論点</th><th>状態</th><th>合意内容・結論</th><th>担当</th></tr></thead><tbody>${state.alignment.map(x=>`<tr><td><b>${esc(x.topic)}</b></td><td><select data-aid="${x.id}" data-ak="status"><option ${x.status==='未確認'?'selected':''}>未確認</option><option ${x.status==='議論中'?'selected':''}>議論中</option><option ${x.status==='合意'?'selected':''}>合意</option></select></td><td><input data-aid="${x.id}" data-ak="decision" value="${escAttr(x.decision)}" placeholder="合意した内容"></td><td><input data-aid="${x.id}" data-ak="owner" value="${escAttr(x.owner)}" placeholder="担当"></td></tr>`).join('')}</tbody></table></div><div class="callout" style="margin-top:16px"><b>おすすめ運用：</b> 月1回、このページだけを工場の別の経営者と見ながら「未確認 → 議論中 → 合意」に進めます。合意事項はMEETINGにも自動反映されます。</div>`;document.getElementById('addAlign').onclick=()=>{const topic=prompt('経営者間で共通認識にしたい論点');if(!topic)return;state.alignment.push({id:crypto.randomUUID(),topic,status:'未確認',decision:'',owner:''});save();render('alignment')};bindAlignment();}
function bindAlignment(){document.querySelectorAll('[data-aid]').forEach(el=>el.onchange=()=>{const x=state.alignment.find(a=>a.id===el.dataset.aid);x[el.dataset.ak]=el.value;save()})}
function actions(c){c.innerHTML=`<div class="section-head"><div><h2>ACTION管理</h2><div class="muted">学習から生まれた確認・改善事項を放置しない。</div></div><button class="btn" id="addAction">ACTION追加</button></div><div class="table-wrap"><table><thead><tr><th>優先</th><th>ACTION</th><th>状態</th><th>担当</th><th>期限</th><th>発生元</th></tr></thead><tbody>${state.actions.map(a=>`<tr><td><span class="badge ${a.priority==='高'?'danger':a.priority==='中'?'warn':''}">${a.priority}</span></td><td><b>${esc(a.title)}</b></td><td><select data-act="${a.id}" data-k="status"><option ${a.status==='未対応'?'selected':''}>未対応</option><option ${a.status==='確認中'?'selected':''}>確認中</option><option ${a.status==='完了'?'selected':''}>完了</option></select></td><td><input data-act="${a.id}" data-k="owner" value="${escAttr(a.owner)}"></td><td><input type="date" data-act="${a.id}" data-k="due" value="${escAttr(a.due)}"></td><td>${esc(a.source||'')}</td></tr>`).join('')}</tbody></table></div>`;document.getElementById('addAction').onclick=()=>{const title=prompt('ACTION内容');if(!title)return;state.actions.push({id:crypto.randomUUID(),title,status:'未対応',priority:'中',owner:'',due:'',source:'手動'});save();render('actions')};document.querySelectorAll('[data-act]').forEach(el=>el.onchange=()=>{const a=state.actions.find(x=>x.id===el.dataset.act);a[el.dataset.k]=el.value;save()});}
function meeting(c){const open=state.actions.filter(a=>a.status!=='完了');const discuss=state.alignment.filter(a=>a.status!=='合意');const agreed=state.alignment.filter(a=>a.status==='合意');c.innerHTML=`<div class="hero"><span class="badge blue">EXECUTIVE MEETING</span><h2>工場経営 共有ミーティング</h2><p class="muted">この画面だけを見れば、学習の進捗・重要リスク・未合意論点・ACTIONを共有できます。</p><div class="hero-actions"><button class="btn" id="printBtn">印刷 / PDF保存</button></div></div><div class="grid cols-3"><div class="card"><div class="small muted">学習</div><div class="metric">${state.completed.length}/24</div></div><div class="card"><div class="small muted">未合意論点</div><div class="metric">${discuss.length}</div></div><div class="card"><div class="small muted">未完了ACTION</div><div class="metric">${open.length}</div></div></div><div class="card" style="margin-top:16px"><h3>1｜今回議論する論点</h3>${discuss.map(x=>`<div class="meeting-item"><span class="badge ${x.status==='議論中'?'warn':'blue'}">${x.status}</span><div><b>${esc(x.topic)}</b><div class="small muted">${x.decision?esc(x.decision):'結論未登録'}</div></div><span>${esc(x.owner||'')}</span></div>`).join('')||'<div class="empty">未合意論点なし</div>'}</div><div class="card" style="margin-top:16px"><h3>2｜対応中ACTION</h3>${open.map(a=>`<div class="meeting-item"><span class="badge ${a.priority==='高'?'danger':'warn'}">${a.priority}</span><div><b>${esc(a.title)}</b><div class="small muted">${a.source||''}</div></div><span>${esc(a.owner||'未設定')}</span></div>`).join('')||'<div class="empty">未完了ACTIONなし</div>'}</div><div class="card" style="margin-top:16px"><h3>3｜合意済み事項</h3>${agreed.map(x=>`<div class="meeting-item"><span class="badge ok">合意</span><div><b>${esc(x.topic)}</b><div class="small muted">${esc(x.decision||'')}</div></div><span>${esc(x.owner||'')}</span></div>`).join('')||'<div class="empty">まだ合意事項はありません</div>'}</div><div class="card" style="margin-top:16px"><h3>会議メモ</h3><textarea id="meetingNotes" style="width:100%;min-height:160px;border:1px solid var(--line);border-radius:10px;padding:10px">${esc(state.meetingNotes||'')}</textarea><div style="margin-top:10px"><button class="btn" id="saveMeeting">保存</button></div></div>`;document.getElementById('printBtn').onclick=()=>window.print();document.getElementById('saveMeeting').onclick=()=>{state.meetingNotes=document.getElementById('meetingNotes').value;save()};}
function esc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}function escAttr(v=''){return esc(v)}
document.getElementById('menuBtn').onclick=()=>document.getElementById('sidebar').classList.toggle('open');
document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`waste-management-executive-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)};
document.getElementById('importFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const obj=JSON.parse(r.result);if(confirm('現在のデータを読み込んだデータで置き換えますか？')){state={...freshState(),...obj};save();go('home')}}catch(err){alert('JSONファイルを読み込めませんでした')}};r.readAsText(f)};
renderNav();render('home');
