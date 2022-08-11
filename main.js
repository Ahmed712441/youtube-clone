var nav_bar = document.querySelector('.nav-bar');

var display_view = "flex";

elements = document.getElementsByClassName('nav-element');


function toggle_display(){
    
       
    if(display_view=="flex"){
        display_view = "none";
        nav_bar.style.minWidth = "0px";
        nav_bar.style.width = "100px";
        
        
    }else{
        display_view ="flex";
        nav_bar.style.width = "15%";
        nav_bar.style.minWidth = "200px";
    }


    for(i=0; i<5; i++) {
        /* top right bottom left */
        var span = elements[i].querySelector('span')
        var icon = elements[i].querySelector('i')
        if(display_view ==  "none"){
            icon.style.padding  = "0px";
            span.style.fontSize = '10px';
            elements[i].style.flexDirection = "column";   
        }else {
            icon.style.padding = "0px 20px 0px 0px";
            span.style.fontSize = '16px';
            elements[i].style.flexDirection = "row";
        }
        
    }

    for(i=5; i<elements.length; i++) {
        
        elements[i].style.display = display_view;   
    }
}



document.querySelector('#menu').addEventListener('click', toggle_display);
nav_bar.addEventListener('mouseover', function(){
    if(display_view ==  "flex"){
        nav_bar.style.overflowY = "scroll"; 
    }
     
})
nav_bar.addEventListener('mouseout', function(){
    nav_bar.style.overflowY = "hidden";  
})