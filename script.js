const quizData = [
    {
        question: "1. Alergolog",
        a: "léčí pacienty s alergiemi.",
        b: "peče dorty a zákusky.",
        
        correct: "a",
    },
    {
      question: "2. Architekt",
      a: "píše knížky pro zvířata.",
      b: "navrhuje jak budou vypadat nové domy.",
      
      correct: "b",
  },
  {
    question: "3. Barman",
    a: "připravuje koktejly a míchané nápoje.",
    b: "trénuje psy a kočky.",
    
    correct: "a",
},
{
  question: "4. Chirurg",
  a: "provádí operace v nemocnici.",
  b: "pěstuje květy k prodeji.",
  
  correct: "a",
},{
  question: "5. Policista",
  a: "dohlíží na dodržování zákonů.",
  b: "maluje stěny pokojů.",
  
  correct: "a",
},
{
question: "6. Pediatr ",
a: "natáčí filmy o zvířatech.",
b: "je lékař pro děti.",

correct: "b",
},{
  question: "7. Řidič",
  a: "prodává houby na trhu.",
  b: "se živí řízením dopravních prostředků.",
  
  correct: "b",
},
{
question: "8. Režisér",
a: "řídí natáčení filmů.",
b: "pracuje na recepci hotelů.",

correct: "a",
},{
  question: "9. Tanečník",
  a: "dohlíží na děti ve školce.",
  b: "se živí tancem na tanečních vystoupeních.",
  
  correct: "b",
},
{
question: "10. Zlatník",
a: "navrhuje a vyrábí šperky.",
b: "šije šaty pro celebrity.",

correct: "a",
},{
  question: "11. Automechanik",
  a: "dělá opravy na autách.",
  b: "pracuje v cirkuse u zvířat.",
  
  correct: "a",
},
{
question: "12. Celník",
a: "kontroluje zboží převáženo přes hranice.",
b: "vyrábí a prodává parfémy.",

correct: "a",
},{
  question: "13. Diabetolog",
  a: "se věnuje nechtovému dizajnu.",
  b: "se stará o pacienty s cukrovkou.",
  
  correct: "b",
},
{
question: "14. Učitel",
a: "učí děti ve škole.",
b: "kreslí ilustrace do knížek.",

correct: "a",
},{
  question: "15. Řezník",
  a: "zpracovává a prodává výrobky z masa.",
  b: "peče vánoční cukroví pro slony.",
  
  correct: "a",
},
{
question: "16. Matematik",
a: "řeší složité matematické problémy.",
b: "píše dopisy mravencům.",

correct: "a",
},{
  question: "17. Aranžér",
  a: "odšťavuje ovoce a prodává ovocné šťávy.",
  b: "organizuje a zdobí prostory dekoracemi k upoutání pozornosti zákazníka.",
  
  correct: "b",
},
{
question: "18. Laborant",
a: "trénuje sportovce na soutěže.",
b: "pracuje s chemikáliemi v laboratoři.",

correct: "b",
},{
  question: "19. Kadeřnice",
  a: "stříhá vlasy a dělá účesy.",
  b: "pečuje o seniory v domově důchodců.",
  
  correct: "a",
},
{
question: "20. Klempíř ",
a: "zhotovuje a opravuje výrobky z plechu.",
b: "sadí ovocné stromy.",

correct: "a",
},
{
  question: "21. Zpěvák",
  a: "zpívá písničky na koncertech.",
  b: "opravuje pokazené elektrické přístroje.",
  
  correct: "a",
},
{
question: "22. Statistik",
a: "provádí turisty v pralese.",
b: "používá matematické modely k vyhodnocování informací.",

correct: "b",
},
{
question: "23. Otorinolaryngolog",
a: "je doktor, který léčí nemoci nosu, uší a krku.",
b: "píše články do novin a časopisů.",

correct: "a",
},
{
question: "24. Soudce",
a: "rozhoduje právní spory.",
b: "kontroluje jízdenky ve vlaku.",

correct: "a",
},{
question: "25. Editor",
a: "zodpovídá za obsah a formu článků v médiích.",
b: "řídí letadlo.",

correct: "a",
},
{
question: "26. Radiolog",
a: "slouží mše v kostele.",
b: "vyhodnocuje rentgeny a ultrazvuky pacientů.",

correct: "b",
},{
question: "27. Tlumočník",
a: "dělá překlady z jedné řeči do druhé.",
b: "natáčí videa na Youtube.",

correct: "a",
},
{
question: "28. Archeolog",
a: "zkoumá vykopávky a nálezy z minulosti.",
b: "pracuje v bance u pokladny.",

correct: "a",
},{
question: "29. Detektiv",
a: "je specialista na výživu.",
b: "pátrá po stopách zločinců.",

correct: "b",
},
{
question: "30. Recepční",
a: "pracuje v hoteli na recepci.",
b: "vymýšlí a navrhuje reklamy. ",

correct: "a",
}
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })