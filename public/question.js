
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What is the git command that downloads your repository from GitHub to your computer?", ["A. git push", "B. git commit","C. git fork", "D. git clone"], "D. git clone"),
    new Question("Which is command is used to save that cloned project in your computer specifying the location?", ["A. cd location-name", "B. DIR", "C. cd DIR", "D. All"], "A. cd location-name"),
    new Question("Which setups are required to build react-typescript quiz app?", ["A. node.js", "B. visual studio code", "C. git", "D. All of the above"], "D. All of the above"),
    new Question("Which is not a JavaScript Framework?", ["A. Python Script", "B. JQuery","C. Django", "D. NodeJS"], "C. Django"),
    new Question("which command is used to install typescript in visual studio code", ["A. npm install -g typescript", "B. npm install", "C. npm install typescript", "D. ALL"], "A. npm install -g typescript "),
    new Question("Which is command is used to start the react quiz app ?", ["A. nmp start", "B. nmm start","C. pmn start", "D. start"], "A. nmp start"),
    new Question("When opening the project in visual studio click _______.", ["A. File", "B. Edit","C. Selection", "D. View"], "A. File"),
    new Question("Which command is used to install react-scripts in visual studio code?", ["A. install react-scripts", "B. install react","C. nmp install", "D. npm install"], "A. install react-scripts"),
    new Question("You can add typescript support to your project using the ?", ["A. TypeScript SDK", "B. NuGet package","C. Typescript", "D. ALL"], "A. TypeScript SDK"),
    new Question("What does npm stands for?", ["A. Node Package Managers", "B. Nodes Package Manager","C. Node Packages Manager", "D. Note Package Manager"], "B. Node Package Manager"),

    new Question("Is npm an acronym for Node Package Manager?", ["A. true", "B. false"], "A. true"),
    new Question("What is npm in react js?", ["A. an online directory that contains the various already registered open-source packages", "B. short for node package manager","C. Selection", "D. View"], "A. an online directory that contains the various already registered open-source packages"),
    new Question("What does typeScript do?", ["A. It offers classes, modules, and interfaces to help you build robust components", "B. offers different languages","C. provide components", "D. manage components"], "A. It offers classes, modules, and interfaces to help you build robust components."),
    new Question("What does visual studio codes editor support?", ["A. React.js IntelliSense and code", "B. navigation out of the box","C. code", "D. programming"], "A. React.js IntelliSense and code"),
    new Question("Which command is used to create React application", ["A. npx create-react-app my-app", "B. npm create-react-app my-app","C. npx create ", "D. All"], "A. npx create-react-app my-app"),
    new Question("What is the localhost for React app", ["A. http://localhost:3000 ", "B. http://localhost:3005","C. http://localhost:3010", "D. http://localhost:3111"], "A. http://localhost:3000 "),
    new Question("Which language service allow VS code to provide type definition information in the editor ", ["A. TypeScript language service", "B. React-script language service","C. React-scripts language service", "D. scripts language"], "A. TypeScript language service"),
    new Question("Choose the correct way to import a file", ["A. import './index';", "B. import 'index.css';","C. import './index.css'>", "D. import './index.css';"], "D. import './index.css';"),
    new Question("What is Node.js", ["A.a platform for building fast and scalable server applications using JavaScript", "B. server applications using JavaScript","C. Node.js is a platform for building applications using JavaScript", "D. ALL"], "A. Node.js is a platform for building fast and scalable server applications using JavaScript"),
    new Question("Visual Studio Code has support for", ["A. JavaScript", "B. TypeScript languages","C. Node.js debugging", "D. ALL"], "D. ALL"),

    new Question("Which command start the test runner?", ["A. nmp test", "B. npm test","C. nmp", "D. ALL"], "B. npm test"),
    new Question(" What is React?", ["A. React is a front-end framework for creating a user interface (UI)", "B. TypeScript language","C. Node.js debugging", "D. ALL"], "A. React is a front-end framework for creating a user interface (UI)"),
    new Question("What is JSX?", ["A. a JavaScript syntax extension typically used with React to describe UI elements", "B. You must transpile JSX code to plain JavaScript before it can run in a browser","C. Node.js debugging", "D. NONE"], "A. a JavaScript syntax extension typically used with React to describe UI elements"),
    new Question("What is webpack?", ["A. Webpack bundles JavaScript files so they can run in a browser", "B. can also transform or package other resources and assets.","C. Webpack can specify a compiler, such as Babel or TypeScript", "D. ALL"], "D. ALL"),
    new Question("Which statement is true?", ["A. Visual Studio usually detects the installed Node.js runtime automatically", "B. Visual Studio often detects the installed Node.js runtime automatically","C. Visual Studio don't detects the installed Node.js runtime automatically", "D. ALL"], "A. Visual Studio usually detects the installed Node.js runtime automatically"),
    new Question("which of the following are npm packages?", ["A. react", "B. react-dom","C. webpack", "D. ALL"], "D. ALL"),
    new Question("Select new project fileS", ["A. app.tsx", "B. webpack-config.js","C. index.html", "D. ALL"], "D. ALL"),
    new Question("Select javascript file", ["A. app.tsx ", "B. webpack-config.js","C. index.html", "D. ALL"], "B. webpack-config.js"),
    new Question("Select TypeScript JSON Configuration File", ["A. app.tsx ", "B. webpack-config.js","C.index.html", "D. tsconfig.json"], "D. tsconfig.json"),
    new Question("Select html file", ["A. app.tsx", "B. webpack-config.js","C. index.html", "D. ALL"], "C. index.html"),

    new Question("Which command is used to check the installed version of node.js", ["A. nmp node", "B. node * ","C. node -- version", "D. ALL"], "C. node -- version"),
    new Question("Which command is used to check if npm is correctly installed?", ["A. npm -- version", "B. mpn -- version","C. node -- version", "D. none"], "A. node -- version"),
    new Question("Which file is used to style the quiz", ["A. javascript", "B. html","C. css", "D. ALL"], "C. css"),
    new Question("Which of the following is used when styling only one ____", ["A. class ", "B. id","C. .fe", "D. ALL"], "B. id"),
    new Question("Which of the following is used to style more than one _____", ["A. class", "B. id","C. .fe", "D. none"], "A. class"),
    new Question("what is the correct way of writing an id in css", ["A. #score", "B. .score","C. score", "D. none"], "C. #score"),
    new Question("What is the correct way of writing a class in css", ["A. #score", "B. .score","C. score", "D. none"], "B. .score"),
    new Question("What is the correct way to write a text color in external CSS ", ["A. color: #F08080;", "B. background-color: #ffffff","C. color=#f78999", "D. ALL"], "A. color: #F08080;"),
    new Question("What is used to set size of text in external css", ["A.  font-size: 30px;", "B. font-color:30px","C. font:30px", "D. none of the above"], "A. font-size:30px"),
    new Question("What is used to align the text in external css", ["A.text-align: center; ", "B. align: center","C. alignment: center", "D. ALL"], "A. text-align: center;"),

    new Question("Where can this keyword refer to in JS?", ["A. person", "B. object","C. event handler", "D. ALL"], "D. ALL"),
    new Question("this in an object method refers to?", ["A. object ", "B. person","C. event handler", "D. ALL"], "A. object"),
    new Question("this in an event refers to", ["A. object", "B. person","C. event handler", "D. element"], "D. element"),
    new Question("this in a function refers to?", ["A. global object", "B. object","C. event handler", "D. ALL"], "A. global object"),
    new Question("4 ways to declare variables in JS", ["A. var", "B. let","C. const", "D. ALL"], "D. ALL"),
    new Question("Which way to declare variable is used when the variable can change ", ["A. var", "B. let","C. const", "D. none of the above"], "B. let"),
    new Question("which function is used if we want to add new properties at a later stage which will be shared across all instances", ["A. property", "B. prototype","C. isCorrectAnswer", "D. ALL"], "B. prototype"),
    new Question("Select html file", ["A. app.tsx", "B. webpack-config.js","C. index.html", "D. ALL"], "C. index.html"),
    //new Question("Select html file", ["A. app.tsx", "B. webpack-config.js","C. index.html", "D. ALL"], "C. index.html"),
    //new Question("Select html file", ["A. app.tsx", "B. webpack-config.js","C. index.html", "D. ALL"], "C. index.html"),


];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();