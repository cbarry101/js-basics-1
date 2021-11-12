/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'a software used for tracking changes in files.' //version control!
e
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'gitHub is a repository hosting website. It uses git and and helps programmers collaborate and helps manage track and control changes. '

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = new Object();
init.description = 'Initalizes a new repository. Creates your own repository'
init.code = 'git init'


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = new Object();
clone.description = 'Creates a copy/clone of an exisiting repository'
clone.code = 'git clone <url>'

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = new Object();
status.description = 'Displays the status or state of the working directory. Shows you changes you have done and files not being tracked.'
status.code = 'git status'

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = new Object();
add.description = 'Adds the files to the git index, a staging area for them to be committed'
add.code = 'git add . OR git add {fileName}' // add . will add everything

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = new Object();
commit.description = 'Saves changes to the local repository. Creates a new revision with a log'
commit.code = 'git commit -m "{message}"'

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = new Object();
push.description = 'Pushes your changes to the remote repository'
push.code = 'git push'

// I need more understanding here. I dont exactly understand when to use git push origin main or the URL of the remote repo from github
