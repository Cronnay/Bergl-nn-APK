$(document).ready(function() {
  $("#apk-knapp").on("tap", function(e) {
    var alk = $("#alkohol").val() * 0.01;
    var volym = $("#volym").val();
    var kronor = $("#kronor").val();

    if($.trim(alk) == '' || $.trim(volym) == '' || $.trim(kronor) == ''){
      $("#resultat").text("Du får inte lämna något fält tom.");
    }
    else{
      var renalkohol = volym * alk;
      $("#resultat").text((renalkohol/kronor).toFixed(3) + " APK");
    }
  });
  $(".btn").mouseup(function(){
    $(this).blur();
  });
});

$(document).on("pagebeforehide","#page1",function(){ // When leaving page1
  $("#bs-example-navbar-collapse-1").collapse("toggle");
});
