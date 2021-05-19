const buttons = document.getElementsByClassName("grammar"); 
const sections = document.querySelectorAll(".popUpWindow");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        sections[i].setAttribute("id","pop");
        
        let closeBtn = sections[i].querySelector("#close");
        closeBtn.addEventListener("click", function() {
            sections[i].setAttribute("id","closed"); 
        });
        
    });
}   
