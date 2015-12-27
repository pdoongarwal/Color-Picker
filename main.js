var x;
var y;
var z=0;
var str;
var code;
$(document).ready(function(){
  	$(document).mousemove(function(e){
	    //$('#spnCursor').html("X Axis : " + event.pageX + " Y Axis : " + event.pageY);
	    x = event.pageX/4;
	    y = event.pageY/2;
	    update();
	});

  	$(document).keydown(function() {
  		code = event.keyCode || event.which;
 		if(code === 38 && z<251) { //Enter keycode
   			z=z+5;
 		}
 		if(code === 39 && z<255) { //Enter keycode
   			z++;
 		}
 		if(code === 40 && z>4) { //Enter keycode
   			z=z-5;
 		}
 		if(code === 37 && z>0) { //Enter keycode
   			z--;
 		}
  		update();
	});

	var update = function() {
		str = "rgb(" + x + ", " + y + ", " + z + ")"
	    $("body").css("background-color", str);
	    $('#spnCursor').html(str);
	}
});