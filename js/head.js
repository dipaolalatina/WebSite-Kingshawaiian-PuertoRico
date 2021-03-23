var headjs = (function(){
    
    var scrollFunction,logo,link;
    /*top = document.getElementById("topnav");*/
    logo = document.getElementById("logo-top-nav");
    link = document.getElementsByClassName("link");
    
    
      
    
    
    var x = window.matchMedia("(max-width: 700px)")
    

    scrollFunction = function () {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        logo.style.width = "146px";
        if (x.matches) { // If media query matches
          logo.style.width = "90px";
        }
        
      } else {
        logo.style.width = "200px";
        if (x.matches) { // If media query matches
          logo.style.width = "100px";
        }
      }
    };
    
    
    return{
        navScroll : function(){
          scrollFunction();  
        }
    };
})();

