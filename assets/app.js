/* DataVerge landing page: language (EN / 中文 / ID), the moving hero, the request form, one reveal.
   Every part checks that its element exists; the page reads complete with scripting off. */
(function () {
  var T = {
    'skip': ['Skip to content', 'Langsung ke konten', '跳到主要内容'],
    'logo.aria': ['DataVerge, back to top', 'DataVerge, kembali ke atas', 'DataVerge，返回顶部'],
    'nav.aria': ['Sections', 'Bagian halaman', '页面导航'],
    'lang.aria': ['Choose language', 'Pilih bahasa', '选择语言'],
    'idx.problem': ['Problem', 'Masalah', '问题'], 'idx.how': ['How it works', 'Cara kerja', '工作流程'], 'idx.env': ['Environments', 'Lingkungan', '采集环境'], 'idx.delivery': ['Delivery', 'Pengiriman', '交付'], 'idx.faq': ['FAQ', 'FAQ', '常见问题'],
    'cta.sample': ['Request sample data', 'Minta sampel data', '申请样本数据'],
    'cta.contact': ['Contact', 'Kontak', '联系我们'],
    'hero.h1': ['Physical AI data from real work', 'Data Physical AI dari pekerjaan nyata', '来自真实作业的物理 AI 数据'],
    'hero.lead': ['First-person video of trained recorders doing real tasks across five environments, reviewed before delivery.', 'Video sudut pandang orang pertama dari perekam terlatih yang mengerjakan tugas nyata di lima lingkungan, diperiksa sebelum dikirim.', '受训采集员在五类环境中执行真实任务的第一人称视频，交付前经过审核。'],
    'hero.pause': ['Pause motion', 'Jeda gerakan', '暂停动画'], 'hero.play': ['Play motion', 'Putar gerakan', '播放动画'],
    'hero.standin': ['Stand-in photograph', 'Foto ilustrasi', '示意图片'],
    'clients.label': ['Example clients, for illustration', 'Contoh klien, sebagai ilustrasi', '示例客户（仅作示意）'],
    'fig.label': ['Illustrative figures', 'Angka ilustrasi', '示意数据'],
    'fig.spec': ['Illustrative spec', 'Spesifikasi ilustrasi', '示意规格'],
    'env.lab': ['Laboratory', 'Laboratorium', '实验室'], 'env.garden': ['Garden', 'Kebun', '园艺'], 'env.auto': ['Automotive', 'Otomotif', '汽车'], 'env.mfg': ['Manufacturing', 'Manufaktur', '制造业'], 'env.home': ['Household', 'Rumah tangga', '家居'],
    'env.lab.t': ['Sample handling, pipetting, bench cleanup', 'Penanganan sampel, pipetting, membersihkan meja kerja', '样本处理、移液、台面清理'],
    'env.garden.t': ['Watering, pruning, potting plants', 'Menyiram, memangkas, memindahkan tanaman ke pot', '浇水、修剪、上盆'],
    'env.auto.t': ['Tool handling, part inspection, wheel work', 'Penggunaan alat, inspeksi komponen, pekerjaan roda', '工具操作、零件检查、轮胎作业'],
    'env.mfg.t': ['Assembly, sewing, packing', 'Perakitan, menjahit, pengemasan', '装配、缝纫、包装'],
    'env.home.t': ['Folding laundry, packing a suitcase, sweeping, kitchen prep', 'Melipat pakaian, mengemas koper, menyapu, menyiapkan masakan', '叠衣服、收拾行李箱、扫地、厨房备餐'],
    'env.permonth': ['per month', 'per bulan', '每月'],
    'alt.lab': ['Gloved hands handling a sample tube inside a clear lab hood', 'Tangan bersarung memegang tabung sampel di dalam lemari lab transparan', '戴手套的手在透明实验罩内处理样本管'],
    'alt.garden': ['Aerial view of floating vegetable beds with a gardener at work', 'Foto udara bedengan sayur terapung dengan petani yang sedang bekerja', '漂浮菜畦的航拍，一位园丁正在劳作'],
    'alt.auto': ['Hands working on a red moped in a repair workshop', 'Tangan memperbaiki motor merah di bengkel', '维修车间里正在修理红色摩托车的双手'],
    'alt.mfg': ['Hands guiding fabric under a sewing machine needle', 'Tangan menuntun kain di bawah jarum mesin jahit', '双手引导布料穿过缝纫机针下'],
    'alt.home': ['Hands rolling dough with a wooden pin on a floured board', 'Tangan menggiling adonan dengan rolling pin di atas papan bertepung', '双手用擀面杖在撒了面粉的案板上擀面'],
    'prob.note': ['Why most robot data falls short', 'Mengapa data robot sering kurang', '为什么多数机器人数据不够用'],
    'prob.s1': ['Most robot data comes from', 'Sebagian besar data robot berasal dari', '多数机器人数据来自'], 'prob.s2': ['one site', 'satu lokasi', '单一场地'], 'prob.s3': [', follows a script and ships', ', mengikuti skenario, dan dikirim', '，照着脚本录制，并且'], 'prob.s4': ['unchecked', 'tanpa diperiksa', '未经审核'], 'prob.s5': ['. Models trained on it stall in the next room.', '. Model yang dilatih dengannya tersendat di ruangan berikutnya.', '就交付。用它训练的模型，换个房间就会失灵。'],
    'prob.1.t': ['Narrow environments', 'Lingkungan yang sempit', '环境单一'], 'prob.1.p': ['Data from one site teaches one site.', 'Data dari satu lokasi hanya mengajarkan satu lokasi.', '单一场地的数据只适用于该场地。'],
    'prob.2.t': ['Staged motion', 'Gerakan yang dibuat-buat', '动作经过摆拍'], 'prob.2.p': ['Scripted demos miss the pauses and corrections of real work.', 'Demo berskenario melewatkan jeda dan koreksi dalam pekerjaan nyata.', '照本宣科的演示缺少真实作业中的停顿与修正。'],
    'prob.3.t': ['Unchecked volume', 'Volume tanpa pengecekan', '数量多但未审核'], 'prob.3.p': ['Unreviewed hours become weeks of cleaning for your team.', 'Jam rekaman yang belum diperiksa berubah jadi berminggu-minggu pembersihan untuk tim Anda.', '未经审核的时长，会变成您团队数周的清洗工作。'],
    'del.pill': ['What we deliver', 'Yang kami berikan', '我们提供什么'], 'del.note': ['Built around your project', 'Disusun mengikuti proyek Anda', '围绕您的项目定制'],
    'del.s1': ['Real work recorded first-person across', 'Pekerjaan nyata direkam dari sudut pandang orang pertama di', '在'], 'del.s2': ['many environments', 'banyak lingkungan', '多种环境'], 'del.s3': [',', ',', '中以第一人称录制真实作业，'], 'del.s4': ['reviewed hour by hour', 'diperiksa jam demi jam', '逐小时审核'], 'del.s5': ['and delivered to your spec.', 'dan dikirim sesuai spesifikasi Anda.', '，并按您的规格交付。'],
    'del.1.t': ['Many environments, one vendor', 'Banyak lingkungan, satu vendor', '多种环境，一个供应商'], 'del.1.p': ['Labs, gardens, workshops, production lines and homes in one project.', 'Laboratorium, kebun, bengkel, lini produksi, dan rumah dalam satu proyek.', '实验室、园艺、车间、产线和家庭，纳入同一个项目。'],
    'del.2.t': ['Real work, first-person', 'Pekerjaan nyata, sudut pandang pertama', '真实作业，第一人称'], 'del.2.p': ['Trained recorders wear head-mounted cameras while doing the actual task.', 'Perekam terlatih memakai kamera di kepala saat mengerjakan tugas yang sebenarnya.', '受训采集员佩戴头戴式摄像头完成真实任务。'],
    'del.3.t': ['Every recording reviewed', 'Setiap rekaman diperiksa', '每段录制都经审核'], 'del.3.p': ['Logged per recorder, task, device and shift, then checked by a supervisor.', 'Dicatat per perekam, task, device, dan shift, lalu diperiksa supervisor.', '按采集员、任务、设备和班次登记，再由主管审核。'],
    'con.site': ['Bandung site', 'Lokasi Bandung', '万隆采集点'], 'con.label': ['Video hours this month', 'Jam video bulan ini', '本月视频时长'], 'con.target': ['Target 6,000 h', 'Target 6.000 jam', '目标 6,000 小时'],
    'con.meter': ['4,820 of 6,000 target hours, 80 percent', '4.820 dari target 6.000 jam, 80 persen', '目标 6,000 小时，已完成 4,820 小时，80%'],
    'con.reviewed': ['reports reviewed', 'laporan diperiksa', '份报告已审核'], 'con.flagged': ['flagged', 'ditandai', '条被标记'], 'con.cap': ['DCOTrack, our collection console', 'DCOTrack, konsol pengumpulan data kami', 'DCOTrack 采集后台'],
    'how.h2': ['From brief to dataset in four steps', 'Dari brief ke dataset dalam empat langkah', '四步从需求到数据集'],
    'how.1.t': ['Scope.', 'Ruang lingkup.', '确定需求。'], 'how.1.p': ['You define tasks, environments, hours and format.', 'Anda menentukan task, lingkungan, jumlah jam, dan format.', '由您确定任务、环境、时长和格式。'],
    'how.2.t': ['Capture.', 'Perekaman.', '采集。'], 'how.2.p': ['Recorders work in shifts with head-mounted cameras.', 'Perekam bekerja per shift dengan kamera di kepala.', '采集员按班次佩戴头戴式摄像头作业。'],
    'how.3.t': ['Review.', 'Pemeriksaan.', '审核。'], 'how.3.p': ['Supervisors log each recording in DCOTrack. Overlong durations are flagged.', 'Supervisor mencatat setiap rekaman di DCOTrack. Durasi yang terlalu panjang ditandai.', '主管在 DCOTrack 中登记每段录制，超时的记录会被标记。'],
    'how.4.t': ['Deliver.', 'Pengiriman.', '交付。'], 'how.4.p': ['Approved footage is packaged to your spec within 10 working days.', 'Footage yang lolos dikemas sesuai spesifikasi Anda dalam 10 hari kerja.', '审核通过的素材在 10 个工作日内按您的规格打包交付。'],
    'where.note': ['Jakarta, Bandung and Surabaya', 'Jakarta, Bandung, dan Surabaya', '雅加达、万隆和泗水'],
    'where.h2': ['Where we capture', 'Tempat kami merekam', '采集地点与环境'],
    'where.foot': ['Photographs are stand-ins for each environment, not DataVerge footage.', 'Foto hanya mewakili tiap lingkungan, bukan footage DataVerge.', '图片仅示意各环境，并非 DataVerge 素材。'],
    'where.ask': ['Ask about another environment', 'Tanyakan lingkungan lain', '咨询其他环境'],
    'scale.h2': ['Capacity', 'Kapasitas', '产能'],
    'scale.1': ['of video per month', 'video per bulan', '每月视频时长'], 'scale.2': ['trained recorders', 'perekam terlatih', '受训采集员'], 'scale.3': ['collection sites in 3 cities', 'lokasi pengumpulan di 3 kota', '个采集点，分布于 3 座城市'], 'scale.4': ['to start a new task', 'untuk memulai task baru', '即可启动新任务'],
    'rights.pill': ['Consent and rights', 'Consent dan hak', '知情同意与权利'], 'rights.note': ['Set in every licence agreement', 'Tercantum di setiap perjanjian lisensi', '写入每份授权协议'],
    'rights.s1': ['Every hour comes with', 'Setiap jam rekaman disertai', '每一小时素材都附带'], 'rights.s2': ['recorder consent', 'persetujuan perekam', '采集员同意书'], 'rights.s3': ['and a', 'dan', '和'], 'rights.s4': ['clear commercial licence', 'lisensi komersial yang jelas', '清晰的商业授权'], 'rights.s5': ['.', '.', '。'],
    'rights.1': ['Written consent from every recorder and site', 'Persetujuan tertulis dari setiap perekam dan lokasi', '每位采集员和每个场地均签署书面同意'],
    'rights.2': ['No personal identifiers in filenames or metadata', 'Tidak ada identitas pribadi di nama file atau metadata', '文件名和元数据中不含个人身份信息'],
    'rights.3': ['Exclusive or non-exclusive commercial licence', 'Lisensi komersial eksklusif atau non-eksklusif', '独家或非独家商业授权'],
    'rights.4': ['Personal data handled under Indonesia’s PDP Law (UU 27/2022)', 'Data pribadi dikelola sesuai UU PDP Indonesia (UU 27/2022)', '个人数据依照印度尼西亚《个人数据保护法》（2022 年第 27 号）处理'],
    'dlv.h2': ['A format your pipeline reads', 'Format yang dibaca pipeline Anda', '便于数据管线读取的格式'],
    'dlv.aria': ['Example delivery folder', 'Contoh folder pengiriman', '交付文件夹示例'],
    'dlv.r1': ['Camera', 'Kamera', '摄像头'], 'dlv.r1v': ['Head-mounted, first-person', 'Di kepala, sudut pandang pertama', '头戴式，第一人称'],
    'dlv.r2': ['Resolution', 'Resolusi', '分辨率'], 'dlv.r3': ['Field of view', 'Sudut pandang', '视场角'],
    'dlv.r4': ['File', 'File', '文件'], 'dlv.r4v': ['MP4 (H.265), one per recording', 'MP4 (H.265), satu per rekaman', 'MP4（H.265），每段录制一个文件'],
    'dlv.r5': ['Index', 'Indeks', '索引'], 'dlv.r5v': ['CSV per batch', 'CSV per batch', '每批一个 CSV'],
    'dlv.r6': ['Handover', 'Serah terima', '交付方式'], 'dlv.r6v': ['Private cloud bucket or your S3', 'Bucket cloud privat atau S3 Anda', '私有云存储桶或您的 S3'],
    'faq.note': ['Answers in one place', 'Jawaban di satu tempat', '常见问题汇总'],
    'faq.h2': ['Questions buyers ask', 'Pertanyaan dari buyer', '买家常见问题'],
    'faq.q1': ['Which environments can you record in?', 'Di lingkungan apa saja Anda bisa merekam?', '可以在哪些环境中录制？'],
    'faq.a1': ['Laboratories, gardens, automotive workshops, manufacturing floors and homes across 9 sites in Jakarta, Bandung and Surabaya. Ask about any other setting.', 'Laboratorium, kebun, bengkel otomotif, lantai produksi, dan rumah di 9 lokasi di Jakarta, Bandung, dan Surabaya. Tanyakan lingkungan lain.', '实验室、园艺、汽车维修车间、生产车间和家庭，分布于雅加达、万隆和泗水的 9 个采集点。如需其他场景，请告诉我们。'],
    'faq.q2': ['What camera setup do you use?', 'Kamera apa yang Anda pakai?', '使用什么摄像设备？'],
    'faq.a2': ['Head-mounted cameras recording 2704 × 1520 at 30 fps with a 156° field of view.', 'Kamera di kepala yang merekam 2704 × 1520 pada 30 fps dengan sudut pandang 156°.', '头戴式摄像头，以 30 fps 录制 2704 × 1520 画面，视场角 156°。'],
    'faq.q3': ['How is quality checked?', 'Bagaimana kualitas diperiksa?', '如何检查质量？'],
    'faq.a3': ['Every recording is logged in DCOTrack with recorder, task, device and duration. Supervisors review each report, and recordings longer than a shift are flagged before delivery.', 'Setiap rekaman dicatat di DCOTrack beserta perekam, task, device, dan durasinya. Supervisor memeriksa setiap laporan, dan rekaman yang melebihi durasi shift ditandai sebelum dikirim.', '每段录制都在 DCOTrack 中登记采集员、任务、设备和时长。主管审核每份报告，超出班次时长的录制会在交付前被标记。'],
    'faq.q4': ['Can the data be exclusive to us?', 'Apakah data bisa eksklusif untuk kami?', '数据可以独家授权给我们吗？'],
    'faq.a4': ['Yes. Choose an exclusive licence, or a non-exclusive one at a lower price.', 'Bisa. Pilih lisensi eksklusif, atau non-eksklusif dengan harga lebih rendah.', '可以。您可以选择独家授权，或价格更低的非独家授权。'],
    'faq.q5': ['Do you provide labels or annotations?', 'Apakah Anda menyediakan label atau anotasi?', '是否提供标签或标注？'],
    'faq.a5': ['The base delivery is raw footage with an index. Task labels and temporal segments are available as an add-on.', 'Pengiriman dasar berupa footage mentah beserta indeks. Label task dan segmen waktu tersedia sebagai tambahan.', '基础交付为原始素材及索引，任务标签和时间分段可作为附加服务提供。'],
    'faq.q6': ['How do we get started?', 'Bagaimana cara memulainya?', '如何开始合作？'],
    'faq.a6': ['Send a sample request below. We reply within 2 working days with sample footage and a call to scope your project.', 'Kirim permintaan sampel di bawah. Kami membalas dalam 2 hari kerja dengan sampel footage dan panggilan untuk membahas proyek Anda.', '请在下方提交样本申请。我们会在 2 个工作日内回复，提供样本素材并安排通话确定项目范围。'],
    'start.pill': ['Sample request', 'Permintaan sampel', '样本申请'],
    'start.h2': ['Start with a sample', 'Mulai dengan sampel', '从样本开始'],
    'start.lead': ['Review real footage before you scope a project. We reply within 2 working days.', 'Lihat footage asli sebelum menentukan proyek. Kami membalas dalam 2 hari kerja.', '在确定项目之前先查看真实素材。我们会在 2 个工作日内回复。'],
    'f.name': ['Full name', 'Nama lengkap', '姓名'], 'f.email': ['Work email', 'Email kerja', '工作邮箱'], 'f.company': ['Company', 'Perusahaan', '公司'],
    'f.use': ['What will you use it for?', 'Untuk apa data ini?', '数据用途'], 'f.use.0': ['Choose one', 'Pilih salah satu', '请选择'], 'f.use.1': ['Robot manipulation', 'Manipulasi robot', '机器人操作'], 'f.use.2': ['Humanoid or embodied AI', 'Humanoid atau embodied AI', '人形机器人或具身智能'], 'f.use.3': ['Autonomous machines', 'Mesin otonom', '自主设备'], 'f.use.4': ['Research', 'Riset', '科研'], 'f.other': ['Other', 'Lainnya', '其他'],
    'f.env': ['Environment', 'Lingkungan', '环境'], 'f.opt': ['(optional)', '(opsional)', '（选填）'], 'f.env.0': ['Not sure yet', 'Belum tahu', '暂不确定'],
    'f.details': ['Details', 'Detail', '补充说明'],
    'f.send': ['Send request', 'Kirim permintaan', '提交请求'],
    'f.privacy': ['Used only to reply to this request.', 'Hanya dipakai untuk membalas permintaan ini.', '仅用于回复此请求。'],
    'e.required': ['Fill this in to continue.', 'Isi kolom ini untuk melanjutkan.', '请填写此项。'],
    'e.email': ['That address looks incomplete. Write it as name@company.com.', 'Alamat itu belum lengkap. Tulis seperti nama@perusahaan.com.', '邮箱地址似乎不完整，请按 name@company.com 的格式填写。'],
    's.notsent': ['Nothing was sent: this form is not connected yet.', 'Tidak ada yang terkirim: formulir ini belum tersambung.', '未发送任何内容：此表单尚未连接。'],
    's.failed': ['That did not go through. Try again in a minute.', 'Permintaan gagal terkirim. Coba lagi sebentar lagi.', '提交未成功，请稍后再试。'],
    's.sent': ['Thanks. We will reply to {email}.', 'Terima kasih. Kami akan membalas ke {email}.', '谢谢，我们会回复至 {email}。'],
    'foot.line': ['Physical AI training data from real-world environments.', 'Data latih Physical AI dari lingkungan nyata.', '来自真实环境的物理 AI 训练数据。'],
    'foot.office': ['Jakarta, Indonesia', 'Jakarta, Indonesia', '印度尼西亚雅加达'],
    'foot.note': ['Prototype. Figures, client names and specs marked illustrative will be replaced before launch.', 'Prototipe. Angka, nama klien, dan spesifikasi bertanda ilustrasi akan diganti sebelum peluncuran.', '原型页面。标注为示意的数据、客户名称和规格将在上线前替换。'],
    'foot.credits': ['Photographs (stand-ins) via Wikimedia Commons:', 'Foto (ilustrasi) dari Wikimedia Commons:', '图片（示意）来自 Wikimedia Commons：'],
    'meta.title': ['DataVerge · Physical AI training data from real work', 'DataVerge · Data latih Physical AI dari pekerjaan nyata', 'DataVerge · 来自真实作业的物理 AI 训练数据'],
    'meta.desc': ['First-person video of real tasks in laboratories, gardens, workshops, factories and homes, reviewed before delivery.', 'Video sudut pandang orang pertama dari tugas nyata di laboratorium, kebun, bengkel, pabrik, dan rumah, diperiksa sebelum dikirim.', '实验室、园艺、车间、工厂和家庭中的真实任务第一人称视频，交付前经过审核。']
  };
  var IDX = { en: 0, id: 1, zh: 2 }, HTMLLANG = { en: 'en', id: 'id', zh: 'zh-Hans' }, cur = 'en', hooks = [];
  function t(k) { var r = T[k]; return r ? r[IDX[cur]] : k; }

  function applyLang(l) {
    cur = Object.prototype.hasOwnProperty.call(IDX, l) ? l : 'en';
    document.documentElement.lang = HTMLLANG[cur];
    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('[data-i18n]').forEach(function (e) { e.textContent = t(e.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (e) { e.setAttribute('aria-label', t(e.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (e) { e.setAttribute('alt', t(e.getAttribute('data-i18n-alt'))); });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === cur)); });
    hooks.forEach(function (f) { f(); });
    try { localStorage.setItem('dataverge-lang', cur); } catch (e) {}
  }
  function initialLang() {
    try { var s = localStorage.getItem('dataverge-lang'); if (s && Object.prototype.hasOwnProperty.call(IDX, s)) return s; } catch (e) {}
    var ls = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < ls.length; i++) { var c = (ls[i] || '').toLowerCase().slice(0, 2); if (c === 'zh' || c === 'id') return c; if (c === 'en') return 'en'; }
    return 'en';
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); }); });

  /* Hero: the five environment photographs cross-fade with a slow drift.
     It pauses on hover and keyboard focus, has a visible pause control, and starts paused under reduced motion. */
  var hero = document.querySelector('.hero'), slides = [].slice.call(document.querySelectorAll('.hero__slide'));
  var envLabel = document.getElementById('hero-env'), motion = document.getElementById('motion');
  if (hero && slides.length && motion) {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var i = 0, timer = null, userPaused = reduce, held = false;
    var label = function () { envLabel.setAttribute('data-i18n', 'env.' + slides[i].getAttribute('data-env')); envLabel.textContent = t('env.' + slides[i].getAttribute('data-env')); };
    var show = function (n) {
      slides[i].classList.remove('is-on');
      i = (n + slides.length) % slides.length;
      var s = slides[i]; s.style.animation = 'none'; void s.offsetWidth; s.style.animation = '';
      s.classList.add('is-on'); label();
    };
    var running = function () { return !userPaused && !held; };
    var sync = function () {
      clearInterval(timer);
      hero.classList.toggle('is-playing', running());
      hero.classList.toggle('is-paused', !running());
      if (running()) timer = setInterval(function () { show(i + 1); }, 5000);
      motion.setAttribute('aria-pressed', String(userPaused));
      motion.querySelector('span').textContent = t(userPaused ? 'hero.play' : 'hero.pause');
      motion.querySelector('span').setAttribute('data-i18n', userPaused ? 'hero.play' : 'hero.pause');
    };
    motion.addEventListener('click', function () { userPaused = !userPaused; sync(); });
    hero.addEventListener('mouseenter', function () { held = true; sync(); });
    hero.addEventListener('mouseleave', function () { held = false; sync(); });
    hero.addEventListener('focusin', function (e) { if (e.target !== motion) { held = true; sync(); } });
    hero.addEventListener('focusout', function () { held = false; sync(); });
    document.addEventListener('visibilitychange', function () { held = document.hidden; sync(); });
    hooks.push(function () { label(); sync(); });
    label(); sync();
  }

  /* Links that ask about an environment pre-fill the form's environment field. */
  var envField = document.getElementById('f-env');
  document.querySelectorAll('a[data-env]').forEach(function (a) {
    a.addEventListener('click', function () { if (envField) envField.value = a.getAttribute('data-env'); });
  });

  /* The request form posts nowhere until data-endpoint is set; it never prints a success it did not earn. */
  var form = document.querySelector('form[data-endpoint]');
  if (form) {
    var status = form.querySelector('.form__status'), fields = [].slice.call(form.querySelectorAll('[required]')), errs = {}, statusKey = '', sentTo = '';
    var check = function (f) { if (!f.value.trim()) return 'e.required'; if (f.type === 'email' && !f.checkValidity()) return 'e.email'; return ''; };
    var setErr = function (f, k) {
      errs[f.name] = k; var el = document.getElementById('err-' + f.name);
      if (k) f.setAttribute('aria-invalid', 'true'); else f.removeAttribute('aria-invalid');
      if (el) el.textContent = k ? t(k) : '';
    };
    var setStatus = function (k, email) { statusKey = k; sentTo = email || ''; status.textContent = k ? t(k).replace('{email}', sentTo) : ''; };
    fields.forEach(function (f) { ['input', 'change'].forEach(function (ev) { f.addEventListener(ev, function () { if (errs[f.name]) setErr(f, check(f)); }); }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault(); setStatus('');
      var first = null;
      fields.forEach(function (f) { var k = check(f); setErr(f, k); if (k && !first) first = f; });
      if (first) { first.focus(); return; }
      var endpoint = form.getAttribute('data-endpoint');
      if (!endpoint) { setStatus('s.notsent'); return; }
      var btn = form.querySelector('button[type="submit"]'); btn.setAttribute('aria-busy', 'true'); btn.disabled = true;
      fetch(endpoint, { method: 'POST', body: new FormData(form) })
        .then(function (r) { setStatus(r.ok ? 's.sent' : 's.failed', form.elements.email.value.trim()); })
        .catch(function () { setStatus('s.failed'); })
        .then(function () { btn.removeAttribute('aria-busy'); btn.disabled = false; });
    });
    hooks.push(function () {
      Object.keys(errs).forEach(function (n) { var el = document.getElementById('err-' + n); if (el) el.textContent = errs[n] ? t(errs[n]) : ''; });
      if (statusKey) status.textContent = t(statusKey).replace('{email}', sentTo);
    });
  }

  /* One reveal: section bodies settle in once. Visible without script and under reduced motion. */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-in'); });
  }

  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
  applyLang(initialLang());
})();
