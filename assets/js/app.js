(() => {
  'use strict';

  /* =========================================================
     I18N
  ========================================================= */
  const dict = {
    en: {
      navAssessment: 'Diagnosis', navInterview: 'Interview', navStories: 'Stories', navCta: 'Tell Your Story →',
      eyebrow: 'The Business Failure Project',
      heroTitle: 'Nobody talks<br>about the <span class="accent">failure.</span>',
      heroCopy: "We collect the stories entrepreneurs usually hide. The bad decisions. The money lost. The people who left. The businesses that didn't make it.",
      heroBtn1: 'Diagnose My Business →', heroBtn2: 'Submit My Story', heroBtn2b: 'Tell Your Story →',
      stat1: 'Failure before success', stat2: 'Anonymous stories accepted', stat3: 'Perfect entrepreneurs',
      asmNumLabel: 'BUSINESS AUTOPSY', asmTitle: 'How badly<br>are you hurt?',
      asmDesc: 'Three uncomfortable questions. No consultants. No motivational bullshit. Just an honest snapshot of where your business is today.',
      continueBtn: 'Continue →', resultLabel: 'YOUR BUSINESS AUTOPSY', restartBtn: 'Run Again',
      intNumLabel: 'INTERVIEW', intTitle: 'Interview Question Set',
      intDesc: 'The backbone for turning a failure story into a deep, useful interview.',
      storiesNumLabel: 'THE ARCHIVE', storiesTitle: 'Real stories.<br>No bullshit.',
      storiesDesc: "Every failed company leaves something behind. A lesson. A scar. A decision someone else doesn't have to repeat.",
      submitNumLabel: 'YOUR STORY', submitTitle: 'Tell us<br>what went<br>wrong.',
      submitP1: 'Your failure may be exactly what another founder needs to hear before making the same mistake.',
      submitP2: 'No polished LinkedIn story. No fake success ending. Just what actually happened.',
      s1: 'THE BET / VÁN CƯỢC', s2: 'THE MISTAKE / SAI LẦM', s3: 'THE DAMAGE / HẬU QUẢ',
      fBusiness: 'Business / Industry',
      q1: 'What was the original idea?', h1: 'What did you believe customers would buy, and why?',
      q2: 'Your biggest assumption?', q3: 'Biggest wrong decision',
      choose: '— SELECT —',
      m1: 'Wrong product', m2: 'Wrong market', m3: 'Wrong people / team', m4: 'Wrong financial decision / cash flow',
      m5: 'Wrong timing', m6: 'Failed to stop / scaled too early', m7: 'Other',
      q4: 'When did you know it was going down?',
      q5: 'What did it really cost?', phMoney: 'Money', phTime: 'Time',
      q6: 'Message to a founder repeating your path',
      anon: 'Keep my story completely anonymous. Do not publish my name or identifying information.',
      back: '← Back', next: 'Next →', submitStory: 'Submit Story →',
      success: '✓ Story received. Thank you for being honest.',
      followLabel: 'FOLLOW THE PROJECT', socialTitle: 'Failure is not<br>the end of the story.',
      socialDesc: 'Follow the project as we document real entrepreneurs, real failures and the lessons hidden inside them.',
      footerNote: 'Built around the stories nobody posts.',
      localTag: 'Your story / Local draft', statusSubmitted: 'Status: Submitted to archive',
    },
    vi: {
      navAssessment: 'Chẩn đoán', navInterview: 'Phỏng vấn', navStories: 'Câu chuyện', navCta: 'Gửi câu chuyện →',
      eyebrow: 'Dự án Thất Bại Kinh Doanh',
      heroTitle: 'Không ai kể<br>về sự <span class="accent">thất bại.</span>',
      heroCopy: 'Chúng tôi thu thập những câu chuyện mà founder thường giấu đi. Quyết định sai. Tiền đã mất. Người đã rời đi. Những doanh nghiệp không trụ được.',
      heroBtn1: 'Chẩn đoán doanh nghiệp →', heroBtn2: 'Gửi câu chuyện của tôi', heroBtn2b: 'Gửi câu chuyện →',
      stat1: 'Thất bại trước thành công', stat2: 'Câu chuyện ẩn danh được chấp nhận', stat3: 'Founder hoàn hảo',
      asmNumLabel: 'MỔ XẺ DOANH NGHIỆP', asmTitle: 'Bạn đang<br>tổn thương đến mức nào?',
      asmDesc: 'Ba câu hỏi khó chịu. Không tư vấn viên. Không lời động viên sáo rỗng. Chỉ là một bức tranh thật về doanh nghiệp của bạn hôm nay.',
      continueBtn: 'Tiếp tục →', resultLabel: 'KẾT QUẢ MỔ XẺ DOANH NGHIỆP', restartBtn: 'Làm lại',
      intNumLabel: 'PHỎNG VẤN', intTitle: 'Bộ câu hỏi phỏng vấn',
      intDesc: 'Đây là xương sống để biến một câu chuyện thất bại thành một cuộc phỏng vấn có chiều sâu.',
      storiesNumLabel: 'LƯU TRỮ', storiesTitle: 'Câu chuyện thật.<br>Không tô vẽ.',
      storiesDesc: 'Mỗi doanh nghiệp thất bại đều để lại điều gì đó. Một bài học. Một vết sẹo. Một quyết định người khác không cần lặp lại.',
      submitNumLabel: 'CÂU CHUYỆN CỦA BẠN', submitTitle: 'Hãy kể<br>điều gì<br>đã sai.',
      submitP1: 'Thất bại của bạn có thể chính là điều một founder khác cần nghe trước khi mắc cùng sai lầm.',
      submitP2: 'Không cần câu chuyện đẹp trên LinkedIn. Không cái kết thành công giả. Chỉ cần điều đã thực sự xảy ra.',
      s1: 'THE BET / VÁN CƯỢC', s2: 'THE MISTAKE / SAI LẦM', s3: 'THE DAMAGE / HẬU QUẢ',
      fBusiness: 'Lĩnh vực kinh doanh',
      q1: 'Ý tưởng khởi đầu là gì?', h1: 'Bạn nghĩ khách hàng sẽ mua thứ gì, và vì sao?',
      q2: 'Giả định lớn nhất của bạn?', q3: 'Lựa chọn sai lầm lớn nhất',
      choose: '— CHỌN MỘT —',
      m1: 'Sai sản phẩm', m2: 'Sai thị trường', m3: 'Sai người / đội ngũ', m4: 'Sai quyết định tài chính / dòng tiền',
      m5: 'Sai thời điểm', m6: 'Không dừng đúng lúc / mở rộng quá sớm', m7: 'Khác',
      q4: 'Khoảnh khắc bạn biết mọi thứ sắp vỡ?',
      q5: 'Cái giá thực sự là gì?', phMoney: 'Tiền', phTime: 'Thời gian',
      q6: 'Lời nhắn cho một founder đang đi đúng con đường cũ của bạn',
      anon: 'Tôi muốn giữ câu chuyện hoàn toàn ẩn danh. Không đăng tên hoặc thông tin nhận diện.',
      back: '← Quay lại', next: 'Tiếp →', submitStory: 'Gửi câu chuyện →',
      success: '✓ Đã ghi nhận câu chuyện. Cảm ơn bạn đã nói thật.',
      followLabel: 'THEO DÕI DỰ ÁN', socialTitle: 'Thất bại không phải<br>là kết thúc câu chuyện.',
      socialDesc: 'Theo dõi dự án khi chúng tôi ghi lại những founder thật, thất bại thật và bài học ẩn trong đó.',
      footerNote: 'Xây dựng quanh những câu chuyện không ai đăng.',
      localTag: 'Câu chuyện của bạn / Bản nháp', statusSubmitted: 'Trạng thái: Đã gửi vào lưu trữ',
    }
  };

  let lang = localStorage.getItem('failureRawLang') || 'vi';
  const langBtn = document.getElementById('langBtn');

  function translate() {
    const t = dict[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });
    langBtn.textContent = lang === 'vi' ? 'VI / EN' : 'EN / VI';
    document.documentElement.lang = lang;
    if (result.classList.contains('active')) {
      showResult();
    } else {
      renderQuestion();
    }
    renderStories();
  }

  langBtn.addEventListener('click', () => {
    lang = lang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('failureRawLang', lang);
    translate();
  });

  /* =========================================================
     ASSESSMENT QUIZ
  ========================================================= */
  const questions = [
    {
      vi: 'Vấn đề lớn nhất trong doanh nghiệp của bạn hiện nay là gì?',
      en: 'What is the biggest problem in your business right now?',
      answers: [
        { vi: 'Không rõ vì sao doanh số đang giảm.', en: "I don't know why sales are falling.", score: 4 },
        { vi: 'Có doanh số nhưng không có lợi nhuận thật.', en: 'Sales exist, but there is no real profit.', score: 3 },
        { vi: 'Dòng tiền đang trở nên nguy hiểm.', en: 'Cash flow is becoming dangerous.', score: 5 },
        { vi: 'Doanh nghiệp thực sự đang khỏe mạnh.', en: 'The business is actually healthy.', score: 1 },
      ]
    },
    {
      vi: 'Nếu bạn ngừng làm việc trong 30 ngày, điều gì sẽ xảy ra?',
      en: 'If you stopped working for 30 days, what would happen?',
      answers: [
        { vi: 'Mọi thứ có lẽ sẽ dừng lại.', en: 'Everything would probably stop.', score: 5 },
        { vi: 'Doanh số sẽ giảm đáng kể.', en: 'Sales would drop significantly.', score: 4 },
        { vi: 'Đội ngũ có thể duy trì mọi thứ.', en: 'The team could keep things moving.', score: 2 },
        { vi: 'Doanh nghiệp vẫn vận hành bình thường.', en: 'The business would run normally.', score: 1 },
      ]
    },
    {
      vi: 'Nhìn lại, bạn tin điều gì đã gây ra thiệt hại lớn nhất?',
      en: 'Looking back, what do you believe caused the biggest damage?',
      answers: [
        { vi: 'Tôi xây dựng trước khi kiểm chứng.', en: 'I built before validating.', score: 5 },
        { vi: 'Tôi hết tiền.', en: 'I ran out of money.', score: 5 },
        { vi: 'Tôi tin sai người.', en: 'I trusted the wrong people.', score: 4 },
        { vi: 'Tôi mở rộng khi doanh nghiệp chưa sẵn sàng.', en: 'I scaled before the business was ready.', score: 4 },
      ]
    }
  ];

  let currentStep = 0;
  let answers = [];
  let selectedAnswer = null;

  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const nextBtn = document.getElementById('nextBtn');
  const progressBar = document.getElementById('progressBar');
  const stepLabel = document.getElementById('stepLabel');
  const stepIndicator = document.getElementById('stepIndicator');
  const questionArea = document.getElementById('questionArea');
  const result = document.getElementById('result');
  const resultScore = document.getElementById('resultScore');
  const resultTitle = document.getElementById('resultTitle');
  const resultText = document.getElementById('resultText');
  const restartBtn = document.getElementById('restartBtn');

  function renderQuestion() {
    if (result.classList.contains('active')) return;
    const q = questions[currentStep];
    nextBtn.disabled = selectedAnswer === null;
    questionEl.textContent = q[lang];
    stepLabel.textContent = `Step ${String(currentStep + 1).padStart(2, '0')} / 03`;
    stepIndicator.textContent = lang === 'vi' ? `Câu hỏi ${currentStep + 1} / 3` : `Question ${currentStep + 1} of 3`;
    progressBar.style.width = `${((currentStep + 1) / 3) * 100}%`;
    answersEl.innerHTML = '';

    q.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.className = 'answer';
      if (answers[currentStep] === answer.score) button.classList.add('selected');
      button.innerHTML = `<span>${answer[lang]}</span><span>→</span>`;
      button.addEventListener('click', () => {
        document.querySelectorAll('.answer').forEach(el => el.classList.remove('selected'));
        button.classList.add('selected');
        selectedAnswer = answer.score;
        nextBtn.disabled = false;
      });
      answersEl.appendChild(button);
    });
  }

  nextBtn.addEventListener('click', () => {
    if (selectedAnswer === null) return;
    answers[currentStep] = selectedAnswer;
    if (currentStep < questions.length - 1) {
      currentStep++;
      selectedAnswer = answers[currentStep] ?? null;
      renderQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    const total = answers.reduce((sum, v) => sum + v, 0);
    const max = questions.length * 5;
    const percentage = Math.round((total / max) * 100);

    questionArea.style.display = 'none';
    result.classList.add('active');
    resultScore.textContent = `${percentage}%`;

    const copy = {
      low: {
        vi: ['Bạn bị bầm dập, nhưng chưa gãy.', 'Doanh nghiệp của bạn có vấn đề, nhưng thiệt hại có vẻ vẫn kiểm soát được. Việc cần làm tiếp theo không phải là hoảng loạn hay mở rộng. Hãy tìm ra nút thắt thực sự đang kìm hãm doanh nghiệp.'],
        en: ["You're bruised, not broken.", 'Your business has problems, but the damage appears manageable. The next move is not to panic or scale. Find the one constraint that is actually holding the business back.']
      },
      mid: {
        vi: ['Bạn đang ở vùng nguy hiểm.', 'Có những vấn đề mang tính cấu trúc bên dưới bề mặt. Cố gắng hơn có thể không giải quyết được chúng. Bạn cần xác định điều gì đang hỏng trước khi đổ thêm tiền, người hoặc thời gian vào doanh nghiệp.']
        ,en: ["You're in the danger zone.", 'There are structural problems underneath the surface. More effort may not solve them. You need to identify what is broken before putting more money, people or time into the business.']
      },
      high: {
        vi: ['Doanh nghiệp đang chảy máu.', 'Đây không phải vấn đề động lực. Đây là vấn đề sống còn. Đừng thêm sự phức tạp. Bảo vệ dòng tiền, xác định nguyên nhân gốc rễ của thất bại và quyết định điều gì xứng đáng tồn tại.'],
        en: ['The business is bleeding.', 'This is not a motivation problem. It is a survival problem. Stop adding complexity. Protect cash, identify the root failure and decide what deserves to survive.']
      }
    };

    let bucket = 'low';
    if (percentage > 70) bucket = 'high';
    else if (percentage > 40) bucket = 'mid';

    resultTitle.textContent = copy[bucket][lang][0];
    resultText.textContent = copy[bucket][lang][1];
  }

  restartBtn.addEventListener('click', () => {
    currentStep = 0;
    answers = [];
    selectedAnswer = null;
    result.classList.remove('active');
    questionArea.style.display = 'block';
    renderQuestion();
    document.getElementById('assessment').scrollIntoView({ behavior: 'smooth' });
  });

  /* =========================================================
     SUBMIT STORY — 3-STEP WIZARD
  ========================================================= */
  const form = document.getElementById('storyForm');
  const formSteps = [...document.querySelectorAll('.steps-bar .step')];
  const formContents = [...document.querySelectorAll('.stepcontent')];
  const prevBtn = document.getElementById('prevBtn');
  const nextFormBtn = document.getElementById('nextFormBtn');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');
  let formStep = 1;

  function renderForm() {
    formSteps.forEach((s, i) => s.classList.toggle('active', i + 1 === formStep));
    formContents.forEach((c, i) => c.classList.toggle('active', i + 1 === formStep));
    prevBtn.style.visibility = formStep === 1 ? 'hidden' : 'visible';
    nextFormBtn.style.display = formStep === 3 ? 'none' : 'inline-flex';
    submitBtn.style.display = formStep === 3 ? 'inline-flex' : 'none';
  }

  function validateFormStep() {
    const fields = formContents[formStep - 1].querySelectorAll('input,textarea,select');
    for (const f of fields) {
      if (!f.checkValidity()) { f.reportValidity(); return false; }
    }
    return true;
  }

  nextFormBtn.addEventListener('click', () => {
    if (validateFormStep() && formStep < 3) { formStep++; renderForm(); }
  });
  prevBtn.addEventListener('click', () => {
    if (formStep > 1) { formStep--; renderForm(); }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateFormStep()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    data.anonymous = form.anonymous.checked;

    let savedToBackend = false;
    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      savedToBackend = res.ok;
    } catch {
      savedToBackend = false;
    }

    if (!savedToBackend) {
      // Offline / local dev fallback: keep a demo copy in this browser only.
      data.submittedAt = new Date().toISOString();
      const existing = JSON.parse(localStorage.getItem('failureRawStories') || '[]');
      existing.push(data);
      localStorage.setItem('failureRawStories', JSON.stringify(existing));
    }

    successMessage.classList.add('show');
    form.reset();
    form.anonymous.checked = true;
    formStep = 1;
    renderForm();
    renderStories();
    setTimeout(() => successMessage.classList.remove('show'), 6000);
  });

  /* =========================================================
     STORIES ARCHIVE
  ========================================================= */
  const seedStories = [
    { tag: { vi: 'Bán lẻ / Ẩn danh', en: 'Retail / Anonymous' },
      title: { vi: '"Chúng tôi có doanh thu. Chỉ là không có một doanh nghiệp."', en: '"We had revenue. We just didn\'t have a business."' },
      meta: { vi: 'Mất: $180,000 · Đội ngũ: 7 · Trạng thái: Đã đóng cửa', en: 'Lost: $180,000 · Team: 7 · Status: Closed' } },
    { tag: { vi: 'SaaS / Founder', en: 'SaaS / Founder' },
      title: { vi: '"Tôi mất 14 tháng xây dựng thứ chẳng ai cần."', en: '"I spent 14 months building something nobody wanted."' },
      meta: { vi: 'Mất: 14 tháng · Đội ngũ: 3 · Trạng thái: Đã pivot', en: 'Lost: 14 months · Team: 3 · Status: Pivoted' } },
    { tag: { vi: 'F&B / Ẩn danh', en: 'F&B / Anonymous' },
      title: { vi: '"Nhà hàng lúc nào cũng đông. Tài khoản ngân hàng thì không."', en: '"The restaurant was busy. The bank account wasn\'t."' },
      meta: { vi: 'Mất: $95,000 · Đội ngũ: 12 · Trạng thái: Đã đóng cửa', en: 'Lost: $95,000 · Team: 12 · Status: Closed' } },
    { tag: { vi: 'Thương mại điện tử / Founder', en: 'E-Commerce / Founder' },
      title: { vi: '"Tôi nghĩ thêm traffic sẽ giải quyết mọi thứ."', en: '"I thought more traffic would fix everything."' },
      meta: { vi: 'Mất: $60,000 · Đội ngũ: 4 · Trạng thái: Làm lại từ đầu', en: 'Lost: $60,000 · Team: 4 · Status: Restarted' } },
  ];

  const storyGrid = document.getElementById('storyGrid');

  async function renderStories() {
    const renderId = ++renderStories._id;
    storyGrid.innerHTML = '';
    seedStories.forEach(s => storyGrid.appendChild(makeStoryCard(s.tag[lang], s.title[lang], s.meta[lang], false)));

    // Published stories from the real backend (curated/moderated by the site owner).
    try {
      const res = await fetch('/api/stories');
      if (res.ok) {
        const { stories } = await res.json();
        if (renderId !== renderStories._id) return; // a newer render started meanwhile
        stories.forEach(s => {
          const tag = s.business || (lang === 'vi' ? 'Ẩn danh' : 'Anonymous');
          const title = `"${(s.message || '').slice(0, 140)}"`;
          const metaBits = [];
          if (s.money) metaBits.push(`${lang === 'vi' ? 'Mất' : 'Lost'}: ${s.money}`);
          if (s.time) metaBits.push(`${lang === 'vi' ? 'Thời gian' : 'Time'}: ${s.time}`);
          storyGrid.appendChild(makeStoryCard(tag, title, metaBits.join(' · '), false));
        });
        return;
      }
    } catch {
      // No backend reachable (e.g. static local preview) — fall through to the local demo copy below.
    }

    const local = JSON.parse(localStorage.getItem('failureRawStories') || '[]');
    local.slice().reverse().forEach(s => {
      const tag = s.business || (lang === 'vi' ? 'Ẩn danh' : 'Anonymous');
      const title = `"${(s.message || s.idea || '').slice(0, 140)}"`;
      const metaBits = [];
      if (s.money) metaBits.push(`${lang === 'vi' ? 'Mất' : 'Lost'}: ${s.money}`);
      if (s.time) metaBits.push(`${lang === 'vi' ? 'Thời gian' : 'Time'}: ${s.time}`);
      metaBits.push(dict[lang].statusSubmitted);
      storyGrid.appendChild(makeStoryCard(`${dict[lang].localTag} · ${tag}`, title, metaBits.join(' · '), true));
    });
  }
  renderStories._id = 0;

  function makeStoryCard(tag, title, meta, isLocal) {
    const el = document.createElement('article');
    el.className = 'story-card' + (isLocal ? ' local' : '');
    el.innerHTML = `
      <div>
        <div class="story-tag">${escapeHtml(tag)}</div>
        <div class="story-title">${escapeHtml(title)}</div>
      </div>
      <div class="story-meta">${escapeHtml(meta)}</div>
    `;
    return el;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* =========================================================
     INIT
  ========================================================= */
  renderForm();
  translate();
})();
