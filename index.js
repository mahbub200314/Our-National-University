let ul = document.querySelector(".ul");
 
ul.style.maxHeight = "0px"  ;


function togglemenu(){
    if(ul.style.maxHeight == "0px"){

        ul.style.maxHeight = "700px";
    }

    else{
        ul.style.maxHeight = "0px";
    }

    
}