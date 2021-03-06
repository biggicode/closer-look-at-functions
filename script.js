"use strict"

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\nWrite option number`
      )
    )

    userInput < this.answers.length &&
      typeof userInput === "number" &&
      this.answers[userInput]++
    this.displayResults("array")
    this.displayResults("stringulet")
  },

  displayResults(type) {
    type === "array"
      ? console.log(this.answers)
      : console.log(`Poll result are ${this.answers.join(", ")}`)
  },
}

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll))

poll.displayResults.call({ answers: [5, 2, 3] }, "array")
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
