import {allQuestions,quiz} from "./index.js"
export class Question {
    constructor(index) {


        this.index = index
        this.question = allQuestions[index].question
        this.correct_answer = allQuestions[index].correct_answer
        this.incorrect_answers = allQuestions[index].incorrect_answers
        this.category = allQuestions[index].category
        this.allAnswers = this.getAllAnswers()
        console.log(this.correct_answer);
        this.clickedFlag = false

    }
    getAllAnswers() {
        let allAnswers = [...this.incorrect_answers, this.correct_answer]
        allAnswers.sort()
        return allAnswers
    }
    display() {
        let cartona = `
                  <div class="w-100 d-flex justify-content-between">
            <span class=" h5 btn-category ">${this.category}</span>
            <span class=" h5 btn-questions "> ${this.index + 1} of ${allQuestions.length}</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">

          ${this.allAnswers.map((ele) => {
            return `<li>${ele}</li>`

        }).join(" ")}
           

          </ul>

          <h2 class="text-capitalize text-center score-color w-100 fw-bold "><i class="bi bi-emoji-laughing"></i> Score
            :${quiz.score} </h2>
        
        
        
        `
        document.getElementById("myData").innerHTML = cartona
        let allLi = document.querySelectorAll("#myData ul li")

        allLi.forEach((ele) => {
            ele.addEventListener("click", () => {
                this.checkClicked(ele)
            })



        })
    }
    checkClicked(li) {
        if (!this.clickedFlag) {
            this.clickedFlag = true
            if (this.correct_answer == li.innerHTML) {
                li.classList.add("correct")
                quiz.score++
            }
            else {
                li.classList.add("wrong")
            }
            this.nextQuestion()
        }

    }

    nextQuestion() {
        this.index++
        if (this.index < allQuestions.length) {
            setTimeout(() => {
                let question = new Question(this.index)
                question.display()
            }, 2000)
        } else {
            setTimeout(() => {
                quiz.displayScore()
            }, 2000)
        }
    }
}