function Navigation(){
    let nav = document.querySelector(".nav_linksClick");
    let menu = document.querySelector(".ham_burger");
    let nav_open = false;
    menu.addEventListener("click",() => {
        if (nav_open === false){
            // nav.style.display = "block";
            nav.style.left = "50%";
            nav.style.opacity = "1";
            nav.style.transition = "1s ease";
            nav_open = true;
        }
        else if (nav_open === true){
            // nav.style.display = "none";
            nav.style.left = "-50%";
            nav.style.opacity = "0";
            nav.style.transition = "0.6s ease";
            nav_open = false;
        }

    })
}
function SearchOpen(){
    let search_open = false;
    let search_btn = document.querySelector(".searchListBtn");
    let search_form = document.querySelector(".searchForm");
    search_btn.addEventListener("click", () => {
        if (search_open === false){
            search_form.style.display = "block";
            search_open = true;
        }
        else if(search_open === true){
            search_form.style.display = "none";
            search_open = false;


        }
    })
}
function main(){
    SearchOpen()
    Navigation()
}

main()
