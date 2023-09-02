const display=document.getElementById("display");;
const buttons=document.getElementById("buttons");

buttons.addEventListener("click",(event)=>{
    let target=event.target;
    if (target.innerHTML==="c"){
        display.value="";
    }
    else if (target.classList.contains("number")){
       display.value+=target.innerHTML; 
    } else if(target.classList.contains("operator")){
        let lastchar=display.value[display.value.length-1];
        // if(lastchar==="+" || lastchar==="-"|| lastchar==="*"||lastchar==="/")
        if (["+","-","*","/"].includes(lastchar)){
            display.value=display.value.slice(0,-1)+target.innerHTML;
        }
        else{
            display.value+=target.innerHTML;
        }
    }
    else if (target.innerHTML==="="){
        if (display.value.length!==0){
            // display.value=eval(display.value);
//  handling excepssion 
           try {
            display.value=eval(display.value);
           } catch (error) {
            display.value=error
          }
        }
        else{
            display.value="";
        }
    }
});