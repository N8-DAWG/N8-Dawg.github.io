//function for taking user back to top of page using button
//will be on adventures page
function topPage() {

    window.scrollTo({top: 0, behavior: 'smooth'})
  }

//Home page logo scroll to content function:
function scrollToContent(e) {
    e.preventDefault();
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });
}

//To Top Button on home page brings to content instead of all the way up
function goToHomePageContent() {
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });
}

//Nav bar home page function to return user to home page contents and not logo
function goToHomeContent(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('content').scrollIntoView({
        behavior: 'smooth'
    });
}


//Nate Collins
//March 7th, 2023
//12:10 p.m.
//script.js