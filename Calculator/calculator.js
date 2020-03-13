function getHistory(){
    return document.getElementById("history-value").innerText;
}
//alert(getHistory());

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
//printHistory("9*9+8");

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNum(num);
    }
    
}
//printOutput("123123");

function getFormattedNum(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
//printOutput("123123");

function reverseNumFormat(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumFormat(getOutput()));
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //alert("The operator is clicked "+this.id);

        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }

        else if(this.id=="backspace"){
            var output=reverseNumFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }

        else {
            var output=getOutput();
            var history=getHistory();

            if(output==""&&history!=""){
               if(isNaN(history[history.length-1])){
                   history=history.substr(0,history.length-1);
               } 
            }

            if(output!="" || history!=""){
                //condition?true:false;
                output= output==""?output:reverseNumFormat(output); 
                history=history+output;

                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }

                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }

        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        //alert("The number is clicked "+this.id);
        var output=reverseNumFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
}
