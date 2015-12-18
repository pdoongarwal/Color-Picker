$(document).ready(function(){
  	$(document).mousemove(function(e){
	    //$('#spnCursor').html("X Axis : " + event.pageX + " Y Axis : " + event.pageY);
	    var x = event.pageX/2;
	    var y = event.pageY/2;
	    var z = x + y;
	    var str = "rgb(" + x + ", " + y + ", " + z + ")"
	    console.log(str);
	    $("body").css("background-color", str);
	    $('#spnCursor').html(str);
	  });
});