const questions = [
  {
    category: "НАРЫҚ НЕГІЗДЕРІ",
    question: "Нарықтық экономиканың негізінде қандай қағида жатыр?",
    answers: ["Барлық ресурстарды орталықтандырылған бөлу", "Сатушылар мен сатып алушылар арасындағы еркін әрекеттесу", "Міндетті мемлекеттік баға белгілеу"],
    correct: 1
  },
  {
    category: "ЖЕКЕ МЕНШІК",
    question: "Нарықтық жүйедегі жеке меншік құқығы нені білдіреді?",
    answers: ["Барлық кәсіпорындар мемлекет меншігінде", "Әрбір ресурс тек қауымдастыққа тиесілі", "Адамдар мен ұйымдар ресурстарды иеленіп, басқара алады"],
    correct: 2
  },
  {
    category: "СҰРАНЫС ЖӘНЕ ҰСЫНЫС",
    question: "Тауардың бағасы төмендеп, басқа жағдайлар өзгермесе, оған сұраныс көлемі әдетте қалай өзгереді?",
    answers: ["Әдетте артады", "Міндетті түрде жойылады", "Әрқашан өзгеріссіз қалады"],
    correct: 0
  },
  {
    category: "СҰРАНЫС ЖӘНЕ ҰСЫНЫС",
    question: "Тауар ұсынысы дегеніміз не?",
    answers: ["Тұтынушылардың тауарды сатып алуға деген ұмтылысы", "Сатушылар әртүрлі бағамен сатуға дайын тауардың саны", "Клиенттердің белгілі бір кезеңдегі жиынтық табысы"],
    correct: 1
  },
  {
    category: "БАҒА ЖӘНЕ НАРЫҚ",
    question: "Нарықтық экономикада баға қандай маңызды рөл атқарады?",
    answers: ["Тұтынушы таңдауын ауыстырады", "Әрбір өндіруші үшін бірдей пайдаға кепілдік береді", "Тауардың сұранысы, ұсынысы және салыстырмалы сиректігі туралы ақпаратты жеткізеді"],
    correct: 2
  },
  {
    category: "БӘСЕКЕ",
    question: "Бәсекелестік әдетте өндірушілерге қалай әсер етеді?",
    answers: ["Өнімдерді жақсартуға және ресурстарды тиімдірек пайдалануға ынталандырады", "Сізді тұтынушыларды есепке алудан босатады", "Әрқашан өнімді жоғары бағамен сатуға мүмкіндік береді"],
    correct: 0
  },
  {
    category: "ТҰТЫНУШЫЛАР",
    question: "Тұтынушы егемендігі дегеніміз не?",
    answers: ["Мемлекеттің әрбір сатып алуды анықтау құқығы", "Сатып алушылардың таңдауының қандай тауарлар өндірілетініне әсері", "Әртүрлі өндірушілердің өнімдерін таңдауға тыйым салу"],
    correct: 1
  },
  {
    category: "КӘСІПКЕРЛІК",
    question: "Нарықтық экономикадағы кәсіпкердің рөлі қандай?",
    answers: ["Бүкіл ел бойынша біркелкі баға белгілеңіз", "Бюджетті мемлекеттік органдар арасында бөлу", "Шешім қабылдау және ықтимал пайда алу үшін тәуекелдерді қабылдау арқылы ресурстарды ұйымдастырыңыз"],
    correct: 2
  },
  {
    category: "ПАЙДА ЖӘНЕ ТӘУЕКЕЛ",
    question: "Кәсіпорынның пайдасы дегеніміз не?",
    answers: ["Табыс пен шығындар арасындағы айырмашылық", "Кәсіпорынның барлық сатып алуларының жалпы құны", "Сатып алушылардың төлеген салық сомасы"],
    correct: 0
  },
  {
    category: "ЭКОНОМИКАЛЫҚ ЖҮЙЕЛЕР",
    question: "Нарықтық экономика командалық экономикадан ең алдымен несімен ерекшеленеді?",
    answers: ["Оған ешқандай ережелер мен заңдар жетіспейді", "Өндіріс пен айырбас туралы шешімдердің көпшілігін нарық қатысушылары қабылдайды", "Онда мемлекет әр дүкеннің ассортиментін белгілейді"],
    correct: 1
  },
  {
    category: "РЕСУРСТАР",
    question: "Неліктен ресурстардың тапшылығы экономика үшін маңызды?",
    answers: ["Бұл енді тауар өндірудің қажеті жоқ дегенді білдіреді", "Ол барлық қажеттілікті бірден қанағаттандыруға мүмкіндік береді", "Бұл ресурстарды қалай пайдаланып, қандай қажеттіліктерді қанағаттандыру керектігін таңдауға мәжбүр етеді."],
    correct: 2
  },
  {
    category: "НАРЫҚТЫҚ ТЕПЕ-ТЕҢДІК",
    question: "Нарықтық тепе-теңдік дегеніміз не?",
    answers: ["Сұраныс көлемі ұсыныс көлеміне тең болатын жағдай", "Барлық тауардың бағасы бірдей болатын жағдай", "Нарықта сатушы болмайтын жағдай"],
    correct: 0
  },
  {
    category: "МЕМЛЕКЕТ ЖӘНЕ НАРЫҚ",
    question: "Қазіргі нарықтық экономикадағы мемлекеттің рөлі қандай?",
    answers: ["Ол әрбір жеке кәсіпорынның меншігінде", "Ол әрбір өнімнің шығарылымы мен бағасын белгілейді", "Ол ережелерді белгілейді, құқықтарды қорғайды және нарықтағы кемшіліктерді түзете алады"],
    correct: 2
  },
  {
    category: "ҚОҒАМДЫҚ ИГІЛІКТЕР",
    question: "Қай мысал қоғамдық игілікті жақсы сипаттайды?",
    answers: ["Дүкеннен бөтелке су", "Ұлттық қорғаныс", "Концерт билеті"],
    correct: 1
  },
  {
    category: "СЫРТҚЫ ӘСЕРЛЕР",
    question: "Теріс сыртқы әсер дегеніміз не?",
    answers: ["Мәміле бағасында толық көрсетілмеген шығындар немесе үшінші тұлғаларға келтірілген залал", "Сатушылар санын көбейткеннен кейін бағаның төмендеуі", "Таңдалған өнімге сатып алушының шығындары"],
    correct: 0
  },
  {
    category: "МОНОПОЛИЯ",
    question: "Монополияға тән белгі қандай?",
    answers: ["Бірдей өнімдері бар көптеген шағын сатушылар", "Бір өндірушінің болмауы", "Бір сатушы үстем жағдайға ие және шектеулі бәсекеге тап болады"],
    correct: 2
  },
  {
    category: "МАМАНДАНДЫРУ",
    question: "Мамандану өнімділікті қалай арттыра алады?",
    answers: ["Әрбір қызметкерді барлық тапсырмаларды өз бетінше орындауға мәжбүрлейді", "Жеке тапсырмаларға назар аударуға және дағдыларды дамытуға көмектеседі", "Жұмыс нәтижелерін бөлісу қажеттілігін жояды"],
    correct: 1
  },
  {
    category: "АЙЫРБАС ЖӘНЕ АҚША",
    question: "Ақша бартерге тән қандай қиындықты шешуге көмектеседі?",
    answers: ["Сіздің өніміңізді қалайтын және сізге қажет нәрсені ұсынатын қатысушыны табу қажеттілігі", "Тауар өндіру қажеттілігі", "Әртүрлі өнімдердің сапасын салыстыру қажеттілігі"],
    correct: 0
  },
  {
    category: "НАРЫҚ СИГНАЛДАРЫ",
    question: "Ұсынысы өзгермеген тауарға сұраныс тұрақты өссе, бұл нені білдіруі мүмкін?",
    answers: ["Сатып алушылар енді бұл өнімге қызығушылық танытпайды", "Өндірушілер әрқашан өндірісті жабуы керек", "Бұрынғы баға деңгейінде тапшылық туындауы мүмкін, баға көтерілуі мүмкін"],
    correct: 2
  },
  {
    category: "ТАҢДАУ ЕРКІНДІГІ",
    question: "Нарықтық жүйедегі экономикалық еркіндік нені білдіреді?",
    answers: ["Ешқандай заңсыз шешім қабылдау мүмкіндігі", "Жалпы ережелер шеңберінде кәсіпті, тауарды немесе бизнесті таңдау мүмкіндігі", "Әрбір нарық қатысушысы үшін кепілдендірілген пайда"],
    correct: 1
  }
];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const questionTitle = document.querySelector("#question-title");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#next-button");
const currentQuestion = document.querySelector("#current-question");
const questionNumber = document.querySelector("#question-number");
const questionCategory = document.querySelector("#question-category");
const progressTrack = document.querySelector(".progress-track");
const progressFill = document.querySelector("#progress-fill");
const scoreCount = document.querySelector("#score-count");
const scorePercent = document.querySelector("#score-percent");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");
const answerLetters = ["А", "Б", "В"];

let questionIndex = 0;
let correctAnswers = 0;
let hasAnswered = false;

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.hidden = screen !== screenToShow;
  });
}

function formatNumber(number) {
  return String(number).padStart(2, "0");
}

function startQuiz() {
  questionIndex = 0;
  correctAnswers = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[questionIndex];
  hasAnswered = false;
  currentQuestion.textContent = formatNumber(questionIndex + 1);
  questionNumber.textContent = formatNumber(questionIndex + 1);
  questionCategory.textContent = question.category;
  questionTitle.textContent = question.question;
  answerList.replaceChildren();
  feedback.hidden = true;
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = questionIndex === questions.length - 1
    ? 'Нәтижесін біліңіз <span class="button-arrow" aria-hidden="true">→</span>'
    : 'Келесі сұрақ <span class="button-arrow" aria-hidden="true">→</span>';
  progressFill.style.width = `${(questionIndex / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(questionIndex));

  question.answers.forEach((answer, answerIndex) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "answer-option";
    option.dataset.answerIndex = String(answerIndex);
    option.innerHTML = `<span class="answer-letter" aria-hidden="true">${answerLetters[answerIndex]}</span><span class="answer-text"></span>`;
    option.querySelector(".answer-text").textContent = answer;
    option.addEventListener("click", () => selectAnswer(answerIndex));
    answerList.append(option);
  });
  questionTitle.focus({ preventScroll: true });
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const question = questions[questionIndex];
  const isCorrect = selectedIndex === question.correct;
  if (isCorrect) correctAnswers += 1;

  answerList.querySelectorAll(".answer-option").forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) option.classList.add("is-correct");
    if (index === selectedIndex && !isCorrect) option.classList.add("is-wrong");
  });

  feedback.textContent = isCorrect
    ? "Дұрыс! Сіз тамаша істеп жатырсыз."
    : `Онша емес. Дұрыс жауап: ${question.answers[question.correct]}`;
  feedback.classList.add(isCorrect ? "correct" : "incorrect");
  feedback.hidden = false;
  nextButton.disabled = false;
  nextButton.focus();
}

function showResults() {
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  scoreCount.innerHTML = `${correctAnswers} <small>/ ${questions.length}</small>`;
  scorePercent.textContent = `${percentage}%`;
  progressFill.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(questions.length));

  if (percentage >= 80) {
    resultTitle.textContent = "Тамаша жұмыс!";
    resultMessage.textContent = "Сіз нарықтық экономиканың қағидаларын жақсы меңгергенсіз. Осы қарқыныңыздан таймаңыз!";
  } else if (percentage >= 50) {
    resultTitle.textContent = "Жақсы нәтиже!";
    resultMessage.textContent = "Сізде жақсы негіз бар. Тағы жаттығып, нәтижеңізді жақсартыңыз.";
  } else {
    resultTitle.textContent = "Бұл бастамасы ғана!";
    resultMessage.textContent = "Енді сіз қай тақырыптарды қайталауға тұрарлық екенін білесіз. Викторинаны қайталап көріңіз!";
  }
  showScreen(resultScreen);
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  if (!hasAnswered) return;
  if (questionIndex === questions.length - 1) {
    showResults();
    return;
  }
  questionIndex += 1;
  renderQuestion();
});

document.querySelector("#total-questions").textContent = String(questions.length);
