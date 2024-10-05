import  {Quiz} from "./quiz.js"
import { Question } from "./question.js"

let categoryMenu = document.getElementById("categoryMenu")
let difficultyOptions = document.getElementById("difficultyOptions")
let questionsNumber = document.getElementById("questionsNumber")
export let allQuestions
export let quiz

document.getElementById("startQuiz").addEventListener("click", async () => {
    let categName = categoryMenu.value
    let diff = difficultyOptions.value
    let nums = questionsNumber.value
    quiz = new Quiz(categName, diff, nums)
    allQuestions = await quiz.getQuestions()

    let question = new Question(0)
    question.display()
    document.getElementById("quizOptions").classList.replace("d-block", "d-none")
    document.getElementById("myData").classList.replace("d-none", "d-block")

})




