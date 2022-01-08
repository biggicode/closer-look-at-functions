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
    console.log(this.answers)
  },
}

poll.registerNewAnswer()
