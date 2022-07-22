
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
    gameOverHTML += "<h2 id='score'> You score: " + quiz.score + "/" + quiz.questions.length+ "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What is the git command that downloads your repository from GitHub to your computer?", 
                   ["A. git push", 
                    "B. git commit",
                    "C. git fork", 
                    "D. git clone"],
                    "D. git clone"),
    new Question("Which is command used to sets the author name and email address respectively to be used with your commits?",
                   ["A. git config -global user.name “[name]”", 
                    "B. git config name", 
                    "C. git configure name", 
                    "D. git config [name]"], 
                    "A. git config –global user.name “[name]” "),
    new Question("Which command adds a change in the working directory to the staging area ?", 
                 ["A. git add .", 
                 "B.  git push",
                 "C.  git pull", 
                 "D. All of the above"], 
                 "A.  git add ."),
    new Question("which of the command initials , commit its snapshot and all of the files you committed?", 
                  ["A. git add .",
                   "B. git commit",
                   "C. git commit -m 'initial' ", 
                   "D. ls"], 
                   "C. git commit -m 'initial'"),
    new Question("which command is used to upload local repository content to a remote repository",
                 ["A. git push", 
                 "B. git commit push", 
                 "C. git push folder", 
                 "D. none"], 
                 "A. git push"),
    new Question("What is the function of 'git push' command ?",
                 ["A. to upload local repository content to a remote repository.", 
                  "B. to upload local repository.",
                  "C. to upload remote repository.", 
                  "D. to remove local repository content to a remote repository."], 
                  "A. to upload local repository content to a remote repository."),
    new Question("What is the function of git config --global user.email'[email address]'?", 
                  ["A. sets the author name and email address respectively to be used with your commits", 
                   "B. reset the author name and email address respectively to be used with your commits",
                   "C. command sets the author name and email", 
                   "D. all"], 
                   "A. command sets the author name and email address respectively to be used with your commits"),
    new Question("Which command is used to start a new repository?",
                 ["A. git init [repository]", 
                  "B. git init [repository name]",
                  "C. git init",
                  "D. git push"], 
                  "B. git init [repository name]"),
    new Question("Wich command is used to obtain a repository from an existing URL?",
                 ["A. git clone",
                  "B. git clone [url]",
                  "C. git [url]", 
                  "D. none"], 
                  "B. git clone [url]"),
    new Question("What does git add [file] do?", 
                 ["A. adds a file to the staging area", 
                  "B. chanes a file to the staging area",
                  "C. moves a file to the staging area", 
                  "D. remove a file to the staging area"], 
                  "B. adds a file to the staging area"),

    new Question("What is the function of git add * command?", 
                  ["A. adds more to the staging area",
                   "B. adds one to the staging area",
                   "C. adds one or more to the staging area",
                   "D. adds only one to the staging area"], 
                   "C. adds one or more to the staging area"),
    new Question("The command that records or snapshots the file permanently in the version history is______",
                 ["A. git commit -m “[ Type in the commit message]”",
                  "B. git commit -m “[repository]”",
                  "C. git commit “[ Type in the commit message]”",
                  "D. all of the above"],
                  "A. git commit -m “[ Type in the commit message]”"),
    new Question("What is the function of git commit -a?",
                 ["A. commits any files you’ve added with the git add command and also commits any files you’ve changed since then.",
                  "B. commits any files you’ve added with the git add command.",
                  "C. commits any files you’ve changed since then.",
                  "D. all of the above"],
                  "A. commits any files you’ve added with the git add command and also commits any files you’ve changed since then."),
    new Question("What is the fuction of git diff?", 
                 ["A. This command shows the file differences which are not yet staged.",
                  "B. This command shows the file differences which are yet staged.",
                  "C. This command display the file differences which are not yet staged.", 
                  "D. This command edit the file differences which are not yet staged."],
                  "A. This command shows the file differences which are not yet staged."),
    new Question("What does git diff –staged do?",
                  ["A. shows the differences between the files in the staging area and the latest version present",
                   "B. shows the differences between the files in the staging area",
                   "C. shows the latest version present",
                   "D. All"],
                   "A. shows the differences between the files in the staging area and the latest version present"),
    new Question("What does git diff [first branch] [second branch] do?", 
                  ["A. shows the differences between the two branches mentioned ",
                   "B. shows the differences between the one branch mentioned",
                   "C. shows the similarity between the two branches mentioned",
                   "D. none of the above"], 
                   "A. shows the differences between the two branches mentioned"),
    new Question("What is the function of git reset [file] command?",
                 ["A. unstages the file, but it preserves the file contents",
                  "B. stages the file, but it preserves the file contents",
                  "C. changes the file and preserves the file contents",
                  "D. all of the above"],
                  "A. unstages the file, but it preserves the file contents"),
    new Question("What is the function of git reset [commit] command?",
                  ["A. undoes all the commits after the specified commit and preserves the changes locally.",
                   "B. do all the commits after the specified commit and preserves the changes locally.",
                   "C. preserves the changes locally.",
                   "D. save all changes made"],
                   "D. undoes all the commits after the specified commit and preserves the changes locally."),
    new Question("What is the function of git reset –hard [commit] command?",
                 ["A. discards all history and goes back to the specified",
                  "B. saves all history and goes back to the specified",
                  "C. edit all history and goes back to the specified", 
                  "D. ALL"], 
                  "A. discards all history and goes back to the specified"),
    new Question("what does git status command do?", 
                 ["A. display all the files that have to be committed",
                  "B. changes all the files that have to be committed",
                  "C. cancel all the files that have to be committed",
                  "D. lists all the files that have to be committed"],
                  "D. lists all the files that have to be committed"),

    new Question("What is the function of git rm [file] command?",
                  ["A. update the file from your working directory and stages the deletion.",
                   "B. deletes the file from your working directory and stages the deletion.",
                   "C. cancel the file from your working directory and stages the deletion.",
                   "D. ALL"],
                   "B. deletes the file from your working directory and stages the deletion."),
    new Question(" What is the function of git log command?",
                  ["A. is used to list the version history for the current branch",
                   "B. is used to change the version history for the current branch",
                   "C. is used to update the history for the current branch",
                   "D. none of the above"],
                   "A. is used to list the version history for the current branch"),
    new Question("What is the function of git log –follow[file] command?",
                 ["A.  lists version history for a file, including the renaming of files also.",
                  "B.  delete version history for a file, including the renaming of files also.",
                  "C.  update version history for a file, including the renaming of files also.",
                  "D.  all"],
                  "A.  lists version history for a file, including the renaming of files also."),
    new Question("What is the function of git show [commit] command?", 
                  ["A. Webpack bundles JavaScript files so they can run in a browser",
                   "B. shows the metadata",
                   "C. shows the content changes of the specified commit.",
                   "D. delete the metadata"],
                   "D. shows the metadata and content changes of the specified commit."),
    new Question("What is the function of git tag [commitID] command?",
                 ["A. used to give tags to the specified commit.",
                  "B. used to update tags to the specified commit.",
                  "C. used to delete tags to the specified commit.",
                  "D. ALL"],
                  "A. used to give tags to the specified commit."),
    new Question("what is the function of git branch?",
                  ["A. delete all the local branches in the current repository",
                   "B. react-dom",
                   "C. update all the local branches",
                   "D. lists all the local branches in the current repository"],
                   "D. lists all the local branches in the current repository"),
    new Question("what is the function of git branch [branch name] command?",
                  ["A. update branch.",
                   "B. delete a new branch.",
                   "C. select a new branch.",
                   "D. creates a new branch."],
                   "D. creates a new branch."),
    new Question("What is the function of git branch -d [branch name] command",
                  ["A.  deletes the feature branch",
                   "B. MOVES the branch",
                   "C. UPDATE the feature branch",
                   "D. ALL"], 
                   "A. deletes the feature branch"),
    new Question("What is the function of git checkout [branch name] command?",
                  ["A.  used to compare from one branch",
                   "B.  used to update one branch",
                   "C.  used to delete one branch from another",
                   "D.  used to switch from one branch to another"], 
                   "D.  used to switch from one branch to another"),
    new Question("What is the function of git checkout -b [branch name] command?",
                 ["A. deletes a new branch",
                  "B. creates a new branch",
                  "C. creates a new branch and also switches to it",
                  "D. ALL"],
                  "C. creates a new branch and also switches to it"),

    new Question("What is the function of git merge [branch name] command?",
                  ["A. compares the specified branch’s history",
                   "B. merges the specified branch’s history",
                   "C. merges the specified branch’s history into the current branch",
                   "D. ALL"],
                   "C. merges the specified branch’s history into the current branch"),
    new Question("What is the function of git remote add [variable name] [Remote Server Link] command?",
                  ["A. used to connect your local repository to the remote server",
                   "B. used to disconnect your local repository to the remote server",
                   "C. used to connect your local repository ",
                   "D. none"],
                   "A. used to connect your local repository to the remote server"),
    new Question("What is the function of git push [variable name] master command?",
                  ["A. changes of master branch to your remote repository",
                   "B. sends the committed changes of master branch",
                   "C. sends the committed changes of master branch to your remote repository",
                   "D. ALL"],
                   "C. sends the committed changes of master branch to your remote repository"),
    new Question("What is the function of git push [variable name] [branch] command?",
                  ["A. delete commits to your remote repository",
                   "B. sends the branch commits to your remote repository",
                   "C. sends the branch ", 
                   "D. ALL"], 
                   "B. sends the branch commits to your remote repository"),
    new Question("What is the function of git push –all [variable name] command?",
                  ["A. pushes all branches to your remote repository.",
                   "B. pushes all branches.",
                   "C. delete all branches to your remote repository.", 
                   "D. none"], 
                   "A. pushes all branches to your remote repository."),
    new Question("what is the function of git push [variable name] :[branch name] command?",
                   ["A.  update a branch on your remote repository",
                    "B.  deletes a branch",
                    "C.  deletes a branch on your remote repository",
                    "D.  none"], 
                    "C.  deletes a branch on your remote repository"),
    new Question("What is the function of git pull [Repository Link] command?",
                  ["A. merges changes to your working directory", 
                   "B. fetches and merges changes on the remote server to your working directory",
                   "C. fetches changes to your working directory", 
                   "D. none"], 
                   "B. fetches and merges changes on the remote server to your working directory"),
    new Question("What is the function of git stash save command?",
                   ["A. temporarily stores all the modified tracked files",
                    "B. permanently stores all the modified tracked files",
                    "C. stores all the modified tracked files", 
                    "D. ALL"], 
                    "A. temporarily stores all the modified tracked files"),
    new Question("What is the function of git stash pop command?",
                  ["A. restores the most recently stashed files",
                   "B. restores the most recently files",
                   "C. restores the stashed files", 
                   "D. none of the above"], 
                   "A. restores the most recently stashed files"),
    new Question("What is the function of git stash list command?",
                  ["A. lists all stashed changesets.",
                   "B. update all stashed changesets.",
                   "C. delete all stashed changesets.", 
                   "D. ALL"], 
                   "A. lists all stashed changesets."),

    new Question("What is the function of git stash drop command?",
                  ["A.  changes the most recently stashed changeset",
                   "B.  update the most recently stashed changeset",
                   "C. all ", 
                   "D.  discards the most recently stashed changeset"], 
                   "D.  discards the most recently stashed changeset"),
    new Question("what is the function of git pull origin <branch-name>?",
                   ["A. pulling files from a different branch", 
                    "B. switching files from a different branch",
                    "C. moving files from a different branch", 
                    "D. ALL"], 
                    "A. pulling files from a different branch"),
    new Question("what is the function of git rebase master command?",
                  ["A. delete all our work from current branch to the master",
                   "B. change all our work from current branch to the master",
                   "C. move some of our work from current branch to the master", 
                   "D. move all our work from current branch to the master"], 
                   "D. move all our work from current branch to the master"),
    new Question("Select the command that discards the most recently stashed changeset",
                  ["A. git stash drop ",
                   "B. git drop ",
                   "C. git stack drop ", 
                   "D. ALL"], 
                   "A. git stash drop "),
    new Question("Select the command that lists all stashed changesets",
                  ["A. git stash drop",
                   "B. git push",
                   "C. git pull", 
                   "D. git stash list"], 
                   "D. git stash list"),
    new Question("Choose the command that restores the most recently stashed files",
                ["A. git stash list", 
                  "B. git stash pop",
                  "C. git stash drop", 
                  "D. none of the above"], 
                  "B. git stash pop"),
    new Question("Select the command that temporarily stores all the modified tracked files", 
                  ["A. git stash list", 
                   "B. git stash save",
                   "C. git stash pop", 
                   "D. git stash pop"], 
                   "B. git stash save"),
    new Question("Select the command that fetches and merges changes on the remote server to your working directory.", 
                 ["A. git stash list", 
                 "B. git stash pop",
                 "C. git pull [Repository Link]", 
                 "D. git stash save"], 
                 "C. git pull [Repository Link]"),
    new Question("Select the command that deletes a branch on your remote repository",
                 ["A. git pull [Repository Link]", 
                  "B. git stash save", 
                  "C. git stash pop", 
                  "D. git push [variable name] :[branch name]"], 
                  "D. git push [variable name] :[branch name]"),
    new Question("Select the command that sends the committed changes of master branch to your remote repository", 
                ["A. git push [variable name] master", 
                 "B. git pull [Repository Link]", 
                 "C. git stash pop", 
                 "D. git push [variable name] :[branch name]"], 
                 "A. git push [variable name] master"),

];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

