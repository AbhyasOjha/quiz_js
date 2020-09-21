window.onload = function () {
    show(0);
}




var questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "The brain of any computer system is ....",
        answer: "CPU",
        options: [
            "ALU",
            "Memory",
            "CPU",
            "Control Unit "
        ]
    },
    {
        id: 5,
        question: "The binary syetem uses power of ..",
        answer: "base 2",
        options: [
            "base 10",
            "base 8",
            "base 16",
            "base 2"
        ]
    },
    {
        id: 6,
        question: "What is the full form of SSD",
        answer: "Solid State Drive",
        options: [
            "Solid State Drive",
            "Simple State Drive",
            "Solid State Disk",
            "None of these"
        ]
    },
    {
        id: 7,
        question: "How many bits is equals to one byte",
        answer: "8 bits",
        options: [
            "16 bits",
            "8 bits",
            "1024 bits",
            "108 bits"
        ]
    }
];

let question_count = 0;
let points = 0;

function next() {

    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
        //sessionStorage.setItem("time", time);
        //clearInterval(mytime);
        location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

function show(count) {
    var question = document.getElementById("questions");
    //question.innerHTML = "<h1>" + questions[count].question + "</h2>";
    //another way of taking array elements
    question.innerHTML = `<h2>Q${question_count+1}.${questions[count].question}</h2>
    

         <ul class="options_group">
              <li class="option">${questions[count].options[0]}</li>
              <li class="option">${questions[count].options[1]}</li>
              <li class="option">${questions[count].options[2]}</li>
              <li class="option">${questions[count].options[3]}</li>

         </ul>
        `;
    toggleActive();

}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}




function startQuiz(e) {
    e.preventDefault();
   

    var  name = document.forms["welcome_form"]["name"].value;

    //store name
    sessionStorage.setItem("name", name);

    location.href = "questions.html";
   
}
