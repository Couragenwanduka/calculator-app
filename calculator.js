window.addEventListener("DOMContentLoaded",()=>{
    const input = document.getElementsByClassName("inputField")[0];
    const number = document.querySelectorAll(".number");
    const ptag=document.getElementById("ptag");
    number.forEach(button => {
        button.addEventListener("click",(event)=>{
            input.value += button.textContent;
            if(button.innerHTML=="AC"){
                input.value = "";
                
            }
            else if(button.innerHTML==="DEL"){
                input.value = input.value.substring(0,input.value.length -4);
                
             }
             else if(button.innerHTML==="+"){
                input.value = input.value.substring(0, input.value.length-1);
                    input.value += "+";
                
             }
             else if(button.innerHTML==="-"){
                input.value = input.value.substring(0, input.value.length-1);
                input.value += "-";
             }
             else if(button.innerHTML==="*"){
                input.value = input.value.substring(0, input.value.length-1);
                input.value += "*";
             }
             else if(button.innerHTML==="/"){
                input.value = input.value.substring(0, input.value.length-1);
                input.value += "/";
             }
             else if(button.innerHTML==="="){
                input.value = input.value.substring(0, input.value.length-1);
                ptag.innerHTML=eval(input.value);
                input.value = ""
                
             }
        })
    });
})