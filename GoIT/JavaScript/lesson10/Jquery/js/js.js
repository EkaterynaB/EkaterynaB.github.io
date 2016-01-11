 $(function() {

         $('.dropdown').hover(
             function(){
                 $(this).children('.sub-menu').slideToggle("slow");;
             }
         );

         $(".sub-menu").mouseenter(function() {
                 $(this).animate({
                 backgroundColor:"#550909",
         }, "slow" );
         });

         $(".sub-menu").mouseleave(function() {
                 $(this).animate({
                 backgroundColor:"#e04b4b",
         }, "slow" );
         });


 });