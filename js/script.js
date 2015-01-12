$(document).ready(function(){
   $(".main-content ul.products li").each(function(i, el){
       $(this).click(function(){
          
         $("#item"+(i+1)).dialog({
             width: 550,
             height: 580
         }) ;
       })
   }) 
   $("#tabs ").tabs(); 
});

