//UserInterface Logic
$(document).ready(function() {
  $("div#design").click(function() {
    $("div#content").toggle();
    $("div#design").toggle();
  });
  $("div#content").click(function() {
    $("div#content").toggle();
    $("div#design").toggle();
  });
  $("div#dev").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  });
  $("div#dev-content").click(function() {
    $("div#dev-content").toggle();
    $("div#dev").toggle();
  });
  $("div#product").click(function() {
    $("div#prod-content").toggle();
    $("div#product").toggle();
  });
  $("div#prod-content").click(function() {
    $("div#prod-content").toggle();
   $("div#product").toggle();
  });

  $("#col-1").hover(function() {
    $("#text1").fadeTo("slow",1);
    $("#photo1").fadeTo("slow",0.4);
    },function() {
      $("#text1").fadeTo("slow",0);
      $("#photo1").fadeTo("slow",1);
    });
  $("#col-2").hover(function() {
    $("#text2").fadeTo("slow",1);
    $("#photo2").fadeTo("slow",0.4);
    },function() {
      $("#text2").fadeTo("slow",0);
      $("#photo2").fadeTo("slow",1);
    });
  $("#col-3").hover(function() {
    $("#text3").fadeTo("slow",1);
    $("#photo3").fadeTo("slow",0.4);;
    },function() {
      $("#text3").fadeTo("slow",0);
      $("#photo3").fadeTo("slow",1);
    });
  $("#col-4").hover(function() {
    $("#text4").fadeTo("slow",1);
    $("#photo4").fadeTo("slow",0.4);
    },function() {
      $("#text4").fadeTo("slow",0);
      $("#photo4").fadeTo("slow",1);
    });
  $("#col-5").hover(function() {
    $("#text5").fadeTo("slow",1);
    $("#photo5").fadeTo("slow",0.4);
    },function() {
      $("#text5").fadeTo("slow",0);
      $("#photo5").fadeTo("slow",1);
    });
  $("#col-6").hover(function() {
    $("#text6").fadeTo("slow",1);
    $("#photo6").fadeTo("slow",0.4);
    },function() {
      $("#text6").fadeTo("slow",0);
      $("#photo6").fadeTo("slow",1);
    });
  $("#col-7").hover(function() {
    $("#text7").fadeTo("slow",1);
    $("#photo7").fadeTo("slow",0.4);
    },function() {
      $("#text7").fadeTo("slow",0);
      $("#photo7").fadeTo("slow",1);
    });
  $("#col-8").hover(function() {
    $("#text8").fadeTo("slow",1);
    $("#photo8").fadeTo("slow",0.4);
    },function() {
      $("#text8").fadeTo("slow",0);
      $("#photo8").fadeTo("slow",1);
    });
    //Business Logic
    $("form").submit(function() {
      var name= $("input#name").val();
      alert("We've received your message "+name+". Thank you for contacting us");
      event.preventDefault();
    });
});