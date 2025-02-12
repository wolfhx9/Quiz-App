document.addEventListener("DOMContentLoaded", () => {
    const questions = {
        en: [
            {
                question: "Which is the largest animal in the world?",
                answer: [
                    { text: "Shark", correct: false },
                    { text: "Blue Whale", correct: true },
                    { text: "Elephant", correct: false },
                    { text: "Giraffe", correct: false },
                ],
            },
            {
                question: "Which is the smallest country in the world?",
                answer: [
                    { text: "Vatican City", correct: true },
                    { text: "Bhutan", correct: false },
                    { text: "Nepal", correct: false },
                    { text: "Sri Lanka", correct: false },
                ],
            },
            {
                question: "Which is the largest desert in the world?",
                answer: [
                    { text: "Kalahari", correct: false },
                    { text: "Gobi", correct: false },
                    { text: "Sahara", correct: false },
                    { text: "Antarctica", correct: true },
                ],
            },
            {
                question: "Which is the smallest continent in the world?",
                answer: [
                    { text: "Asia", correct: false },
                    { text: "Australia", correct: true },
                    { text: "Arctic", correct: false },
                    { text: "Africa", correct: false },
                ],
            },
            {
                question: "What is the capital of Japan?",
                answer: [
                    { text: "Beijing", correct: false },
                    { text: "Seoul", correct: false },
                    { text: "Tokyo", correct: true },
                    { text: "Bangkok", correct: false },
                ],
            },
            // الأسئلة المضافة
            {
                question: "What is the capital of Australia?",
                answer: [
                    { text: "Sydney", correct: false },
                    { text: "Melbourne", correct: false },
                    { text: "Canberra", correct: true },
                    { text: "Brisbane", correct: false },
                ],
            },
            {
                question: "Who painted the Mona Lisa?",
                answer: [
                    { text: "Vincent van Gogh", correct: false },
                    { text: "Pablo Picasso", correct: false },
                    { text: "Leonardo da Vinci", correct: true },
                    { text: "Michelangelo", correct: false },
                ],
            },
            {
                question: "What is the chemical symbol for gold?",
                answer: [
                    { text: "Ag", correct: false },
                    { text: "Fe", correct: false },
                    { text: "Au", correct: true },
                    { text: "Cu", correct: false },
                ],
            },
            {
                question: "Which planet is known as the Red Planet?",
                answer: [
                    { text: "Venus", correct: false },
                    { text: "Mars", correct: true },
                    { text: "Jupiter", correct: false },
                    { text: "Saturn", correct: false },
                ],
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                answer: [
                    { text: "Charles Dickens", correct: false },
                    { text: "William Shakespeare", correct: true },
                    { text: "Jane Austen", correct: false },
                    { text: "Mark Twain", correct: false },
                ],
            },
        ],
        ar: [
            {
                question: "ما هو أكبر حيوان في العالم؟",
                answer: [
                    { text: "القرش", correct: false },
                    { text: "الحوت الأزرق", correct: true },
                    { text: "الفيل", correct: false },
                    { text: "الزرافة", correct: false },
                ],
            },
            {
                question: "ما هي أصغر دولة في العالم؟",
                answer: [
                    { text: "الفاتيكان", correct: true },
                    { text: "بوتان", correct: false },
                    { text: "نيبال", correct: false },
                    { text: "سريلانكا", correct: false },
                ],
            },
            {
                question: "ما هو أكبر صحراء في العالم؟",
                answer: [
                    { text: "كالاهاري", correct: false },
                    { text: "جوبي", correct: false },
                    { text: "الصحراء الكبرى", correct: false },
                    { text: "أنتاركتيكا", correct: true },
                ],
            },
            {
                question: "ما هو أصغر قارة في العالم؟",
                answer: [
                    { text: "آسيا", correct: false },
                    { text: "أستراليا", correct: true },
                    { text: "القطب الشمالي", correct: false },
                    { text: "أفريقيا", correct: false },
                ],
            },
            {
                question: "ما هي عاصمة اليابان؟",
                answer: [
                    { text: "بكين", correct: false },
                    { text: "سيول", correct: false },
                    { text: "طوكيو", correct: true },
                    { text: "بانكوك", correct: false },
                ],
            },
            // الأسئلة المضافة
            {
                question: "ما هي عاصمة أستراليا؟",
                answer: [
                    { text: "سيدني", correct: false },
                    { text: "ملبورن", correct: false },
                    { text: "كانبرا", correct: true },
                    { text: "بريزبان", correct: false },
                ],
            },
            {
                question: "من رسم لوحة الموناليزا؟",
                answer: [
                    { text: "فنسنت فان جوخ", correct: false },
                    { text: "بابلو بيكاسو", correct: false },
                    { text: "ليوناردو دافنشي", correct: true },
                    { text: "مايكل أنجلو", correct: false },
                ],
            },
            {
                question: "ما هو الرمز الكيميائي للذهب؟",
                answer: [
                    { text: "Ag", correct: false },
                    { text: "Fe", correct: false },
                    { text: "Au", correct: true },
                    { text: "Cu", correct: false },
                ],
            },
            {
                question: "أي كوكب يعرف بالكوكب الأحمر؟",
                answer: [
                    { text: "الزهرة", correct: false },
                    { text: "المريخ", correct: true },
                    { text: "المشتري", correct: false },
                    { text: "زحل", correct: false },
                ],
            },
            {
                question: "من كتب مسرحية 'روميو وجولييت'؟",
                answer: [
                    { text: "تشارلز ديكنز", correct: false },
                    { text: "ويليام شكسبير", correct: true },
                    { text: "جين أوستن", correct: false },
                    { text: "مارك توين", correct: false },
                ],
            },
        ],
    };

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const languageSelector = document.getElementById("lan");
    const titleElement = document.getElementById("title");

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedLang = languageSelector.value || "en"; // اجعل اللغة الافتراضية مطابقة للاختيار الحالي

    languageSelector.addEventListener("change", function () {
        selectedLang = this.value;
        document.body.dir = selectedLang === "ar" ? "rtl" : "ltr";

        // تحديث النص فقط دون حذف <span>
        titleElement.firstChild.nodeValue =
            selectedLang === "ar" ? "اختبار بسيط " : "Simple Quiz ";

        startQuiz();
    });

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = selectedLang === "en" ? "Next" : "التالي";
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[selectedLang][currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

        currentQuestion.answer.forEach((answer) => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);

            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach((button) => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

    function showScore() {
        resetState();
        questionElement.innerHTML =
            selectedLang === "en"
                ? `Your score is ${score} out of ${questions[selectedLang].length}!`
                : `نتيجتك هي ${score} من ${questions[selectedLang].length}!`;
        nextButton.innerHTML =
            selectedLang === "en" ? "Play Again" : "العب مجددًا";
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions[selectedLang].length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions[selectedLang].length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

    startQuiz();
});
