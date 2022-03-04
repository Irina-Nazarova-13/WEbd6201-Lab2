class User {
    constructor(fname, lname, username, email, password){
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
/*
WEBD6201 - Lab 2
Matthew Ware - 100472787
Irina Nazarova - 10078306
Date Completed - February 27, 2022
*/
// CODE FOR LAB 2
// Variable to hold all of the current error messages
var errorString = "";

// Insert Name into Nav Bar
function insertName(){
    $("<li>" + document.getElementById("username").value + "</li>").insertBefore(".contact");
}

// Verify that the first name is at least 2 characters long
// Adds a message to the error string
function checkFName(){
    if (document.getElementById("firstname").value.length < 2){
        errorString += "First Name must be at least two characters.  ";
    }
}

// Verify that the last name is at least 2 characters long
// Adds a message to the error string
function checkLName(){
    if (document.getElementById("lastname").value.length < 2){
        errorString += "Last Name must be at least two characters.  ";
    }
}

// Verify that the email is at least 8 characters long
// Adds a message to the error string
function checkEmail(){
    if (document.getElementById("email").value.length < 8){
        errorString += "Email must be at least 8 characters.  ";
    }
}

// Check that the passwords match and that it is at least 6 characters long
// Add error messages for each error that applies
function checkPasswords(){
    if (document.getElementById("password").value.length < 6){
        errorString += "Passwords must be at least 6 characters.  "
    }
    if (document.getElementById("password").value != document.getElementById("confirmpassword").value){
        errorString += "Passwords must match.  ";
    }
}

// Create a div called ErrorMessage that provides an area for errors
// Then make the ErrorMessage hidden on loading
function loadRegister(){
    $("<div id='ErrorMessage'><p></p></div>").insertAfter("#registerForm");
    $("#ErrorMessage").css("visibility", "hidden");
}

// Function that provides form validation
function register(){
    // Make the error message area visible and reset errorString to empty
    $("#ErrorMessage").css("visibility", "visible");
    errorString = "";
 
    // Run each form validating function
    checkFName();
    checkLName();
    checkEmail();
    checkPasswords();

    // Display the error messages
    $("#ErrorMessage p").text(errorString);
    
    // If the error string is empty, hide the ErrorMessage area
    if (errorString.length == 0){
        $("#ErrorMessage").css("visibility", "hidden");

        // Create an instance of the User class from the form variables
        let aUser = new User($("#firstname").val(),$("#lastname").val(),"",$("#email").val(),$("#password").val());

        // Display the values found in the User instance to the console
        console.log("Name: " + aUser.fname + " " + aUser.lname);
        console.log("Username: " + aUser.username);
        console.log("Email: " + aUser.email);
        console.log("Password: " + aUser.password);

        // Reset the form
        $("#registerForm")[0].reset();
    }
}

// CODE FROM LAB 1
// Variables used to contain strings of text
var welcomeMsg = "You have arrived at the WEBD 6201 Lab 2 Website for Matthew Ware and Irina Nazarova, Weclome to our website.  We have included links to our projects, services, about us, and a way to contact us.  Enjoy!";
var aboutMatt = "I am Matthew Ware, a Durham College student in the Computer Programmer Analyst three year diploma.  I have a BA in Philosophy, a BSc in Psychology with a minor in Physics, a BA in Adult Education and Digital Technology, and hope to achieve another BSc in Computer Science.";
var aboutIrina = "I am Irina Nazarova, a Durham College student in Computer Programming two year diploma<br><br><br>";
var projectsMatt = "The top three projects by Matt include a <b>website to sort notes</b>, a <b>site to take notes for my next book</b>, and my <b>database program</b>.";
var projectsIrina = "The top three projects by Irina include <b>Tic Tac Toe game</b>, <b>message encryption ui program</b>, and <b>small database python project</b>";
var servicesMsg = "The top 3 services offered by: <ul><li><b>Matt</b> <ul> <li> programming</li> <li>web development</li><li>databases</li></ul><li><b>Irina</b><ul><li>UI programming</li><li>Tutoring</li><li>Software development</li></li></ul>";
var addedLink = "<a style='padding: 0px 20px' class='humanresources' href='humanResources.html'>Human Resources</a>";

// Submits the form after the delay function is called
function postForm(){
    document.getElementById("aForm").submit();
}

// Prints the user info and pauses for 3 seconds before linking to home
function setDelay(){
    console.log("Name: " + document.forms["aForm"]["name"].value);
    console.log("Number: " + document.forms["aForm"]["number"].value);
    console.log("Email: " + document.forms["aForm"]["email"].value);
    console.log("Comments: " + document.forms["aForm"]["comments"].value);
    setTimeout("postForm()", 3000);
}

// Inject text into the About Us page
function loadAbout(){
    document.getElementById("aboutMatt").innerHTML = aboutMatt;
    document.getElementById("aboutIrina").innerHTML = aboutIrina;
}

// Inject text into the Home page
function loadHome(){
    document.getElementById("homepage").innerHTML = welcomeMsg;
}

// Inject text into the Projects page
function loadProjects(){
    document.getElementById("projectsMatt").innerHTML = projectsMatt;
    document.getElementById("projectsIrina").innerHTML = projectsIrina;
}

// Inject text into the Services page
function loadServices(){
    document.getElementById("services").innerHTML = servicesMsg;
}

// Change the name of the Products link to Projects
function navOnLoad(){
    const productName = document.getElementsByClassName("products");
    productName[0].innerHTML = "Projects";
 }

 // Add a link to the Human Resources in the nav bar
 function fixNav(){
    const list = document.getElementsByClassName("contact");
    list[0].insertAdjacentHTML("afterbegin", addedLink);
 }
