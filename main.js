var x;
var y;
var z=0;
var str;
var code;

var extra = function(clicked_id) {
	id = "#" + clicked_id;
	$(document).mousemove(function(e){
		X_ratio = ($(window).width()-50)/255;
		Y_ratio = ($(window).height()-50)/255;
		x = Math.round(event.pageX/X_ratio);
		y = Math.round(event.pageY/Y_ratio);

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
	 	if(code === 13) {
	 		$(document).off("mousemove");
	 		$(document).off("keydown");
	 	}
	 		
	  	update();
	});

	var update = function() {
		str = "rgb(" + x + ", " + y + ", " + z + ")";
	    $(id).css("background-color", str);
	    $('#spnCursor').html(str);
	}
}

$(document).dblclick(function(){
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == "49") {
        document.getElementById("fontChange").style.fontFamily= "monospace";
    }
    if(event.keyCode == "50") {
        document.getElementById("fontChange").style.fontFamily= "arial";
    }
    if(event.keyCode == "51") {
        document.getElementById("fontChange").style.fontFamily= "courier";
    }
    if(event.keyCode == "52") {
        document.getElementById("fontChange").style.fontFamily= "cursive";
    }
    if(event.keyCode == "53") {
        document.getElementById("fontChange").style.fontFamily= "fantasy";
    }
    if(event.keyCode == "54") {
        document.getElementById("fontChange").style.fontFamily= "serif";
    }
    if(event.keyCode == "55") {
        document.getElementById("fontChange").style.fontFamily= "sans-serif";
    }
    if(event.keyCode == "56") {
        document.getElementById("fontChange").style.fontFamily= "times";
    }
    if(event.keyCode == "57") {
        document.getElementById("fontChange").style.fontFamily= "tahoma";
    }
});

