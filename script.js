let introEl = document.getElementById("intro")

let Akeel = {
    name: "Akeel",
    isGraduated: true, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["HTML", "CSS", "JS"]
}

let John = {
    name: "John",
    isGraduated: false, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["Python", "intro-to-web-dev", "calculus"]
}

let player = { 
    choice: null 
};

function playRock() {
    player.choice = "Rock"
    playGame()
}


function playGame() {

}



John.name = ""



    let Nick = {
    name: "Nick",
    isGraduated: false, 
    Gpa: 4.0,
    program: "Computer Programming",
    courses: ["Python", "intro-to-web-dev"]
}


let students = [Akeel, John, Nick ]

   
function objects() {
   
    // introEl.textContent = 
    // `Name: ${students.Akeel.name}

    // GPA: ${students.Akeel.Gpa}
    // `

    for(let i = 0; i < students.length; i++) {
        console.log(students[i].name)

        if(students[i].isGraduated === true) {
            console.log(`Congrats ${students[i].name}, You have Graduated!! `)
        } else {
            console.log(`Hang on`)
        }
        for(let j = 0; j < students[i].courses.length; j++) {
            console.log(` ${students[i].courses[i]}`)
        }
    }
}


function returnFunc() {
   
    function getFastestTime(player1Time, player2Time) {
        if(player1Time < player2Time) {
            return player1Time
        } else if(player2Time < player1Time) {
            return player2Time
        } else {
            return player1Time
        }
    }

    let fastestTime = getFastestTime(102, 106)

    console.log(fastestTime)

    function greeting(name) {
        console.log(`Hello ${name}`)
    }
    greeting("Akeel")
    greeting("John")

}


function eventListenerExample() {

    let studentInfoBtn = document.getElementById("student-info-btn")
    
    studentInfoBtn.addEventListener("click", function() {
        objects()
        console.log("Button Clicked")
    })

}



function randomNumberFunction() {
    // Random number between 0 and 1
    let randomNumber = Math.random()
    // console.log(randomNumber)

        // Random number between 0 and 6

    let randomNumber6 = Math.random() * 6
    // console.log(randomNumber6)

    1-6 
    let wholeNumber = Math.floor(4.23232323423534536456)

    // console.log(wholeNumber)

    let number= Math.floor(Math.random()* 3)

    console.log(number)

}

randomNumberFunction()


// && || operator

// innerHTML

// LocalStorage


// Thursday 
// Hosting 
// PDF in Portfolio Website
