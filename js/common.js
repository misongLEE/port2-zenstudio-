$(document).ready(function(){
    // 메뉴에 마우스를 올리면 //
    $(".dep1").hover(function(){
      $(".dep2 li").stop().slideDown("slow");
      $("#header_wrap").css('backgroundColor','rgba(255,255,255,0.7)');

     // 메뉴에 마우스를 떼면 //
    }, function(){ 
      $(".dep2 li").stop().slideUp("slow");
      $("#header_wrap").css('backgroundColor','rgba(0,0,0,0)');
    });
  });