document.addEventListener("DOMContentLoaded", () => {
    
    let git = document.getElementsByClassName("github")[0];
    let menu = document.getElementsByClassName("menuHamburger")[0];
    let divMenu = document.querySelector(".menu");

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
    menu.addEventListener("click", () => {
        if(menu.classList.contains("angledroit")){
            menu.classList.remove("angledroit")
            menu.classList.add("transition")
            // menu.setAttribute("src", "./img/menu.png").setTimeout(1000);
            setTimeout(()=>{
                menuHamburger()
            }, 200)
            
        }else{
            menu.classList.add("angledroit")
            menu.classList.remove("transition")
            setTimeout(()=>{
                cross()
            },200)
        }
        if (divMenu.classList.contains("none")) {
            divMenu.classList.remove("none");
            divMenu.classList.remove("disparition")
          } else {
            divMenu.classList.add("disparition")
            setTimeout(()=>{
                divMenu.classList.add("none");
            },600)
          }
    })
    function menuHamburger(){
        menu.setAttribute("src", "./img/menu.png")
    }
    function cross() {
        menu.setAttribute("src", "./img/cross.png")
    }
})