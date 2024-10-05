import {allQuestions} from "./index.js"
 export class Quiz {
    constructor(category, difficulty, nums) {
        this.cateName = category
        this.difficulty = difficulty
        this.quesNums = nums
        this.score = 0
    }

    getAPI() {
        return `https://opentdb.com/api.php?amount=${this.quesNums}&category=
        ${this.cateName}&difficulty=${this.difficulty}`
    }
    async getQuestions() {
        let res = await fetch(this.getAPI())
        let final = await res.json()
        return final.results
    }

    displayScore() {
        let cartona = `
                  <h2 class="mb-0"> ${this.score == allQuestions.length ? `Congratulations 🤩🥳
                     your score is ${this.score} of ${allQuestions.length}` : `Opss your score is ${this.score}
                      of ${allQuestions.length} `}
          </h2>
          <button id="tryBtn" class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
        
        
        `
        document.getElementById("finish").innerHTML = cartona
        document.getElementById("finish").classList.replace("d-none", "d-block")
        document.getElementById("myData").classList.replace("d-block", "d-none")
        document.querySelector("#tryBtn").addEventListener("click", () => {
            window.location.reload()
        })

    }

}

