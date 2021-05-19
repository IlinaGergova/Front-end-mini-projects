function translate1(){
    let text = document.getElementsByClassName("buttons")[0];
    if(text.textContent == "Translate"){
        text.innerText = "Hide";
        if(document.getElementById("bunkei").style.display == "none"){
            document.getElementById("bunkei").style.display = "block";
        }

    }
    else if(text.textContent == "Hide"){
        text.innerText = "Translate";
        if(document.getElementById("bunkei").style.display != "none"){
            document.getElementById("bunkei").style.display = "none";
        }
    }
}

function translate2(){
    let text = document.getElementsByClassName("buttons")[1];
    if(text.textContent == "Translate"){
        text.innerText = "Hide";
        if(document.getElementById("reibun").style.display == "none"){
            document.getElementById("reibun").style.display = "block";
        }

    }
    else if(text.textContent == "Hide"){
        text.innerText = "Translate";
        if(document.getElementById("reibun").style.display != "none"){
            document.getElementById("reibun").style.display = "none";
        }
    }
}

function translate3(){
    let text = document.getElementsByClassName("buttons")[2];
    if(text.textContent == "Translate"){
        text.innerText = "Hide";
        if(document.getElementById("kaiwa").style.display == "none"){
            document.getElementById("kaiwa").style.display = "block";
        }

    }
    else if(text.textContent == "Hide"){
        text.innerText = "Translate";
        if(document.getElementById("kaiwa").style.display != "none"){
            document.getElementById("kaiwa").style.display = "none";
        }
    }
}