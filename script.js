document.addEventListener("DOMContentLoaded", () => {
    
    let git = document.getElementsByClassName("github")[0];

    git.addEventListener("mouseenter", function() {
        git.setAttribute("src", "./img/GithubOver.svg")
        git.addEventListener("mouseout", function() {
            git.setAttribute("src", "./img/github.svg")
        })
    })

    let twitter = document.getElementsByClassName("twitter")[0];
    twitter.addEventListener("mouseover", function() {
        twitter.setAttribute("src", "./img/TwitterOver.svg")
        twitter.addEventListener("mouseout", function() {
            twitter.setAttribute("src", "./img/twitter.svg")
        })
    })

    let linkedin = document.getElementsByClassName("linkedin")[0];
    linkedin.addEventListener("mouseenter", function() {
        linkedin.setAttribute("src", "./img/LinkedinOver.svg")
        linkedin.addEventListener("mouseout", function() {
            linkedin.setAttribute("src", "./img/linkedin.svg")
        })
    })
})