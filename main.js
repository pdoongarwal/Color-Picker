var x;
var y;
var z=0;
var str;
var code;
var ctrlkey = -1;
var size = 16;

var extra = function(clicked_id) {
	id = "#" + clicked_id;
<<<<<<< HEAD
	console.log(1);
=======
>>>>>>> 5546c46047a1cda6471654900cc36856cba71c5d
	$(document).keydown(function(event){
	 	if(event.keyCode == "66"){
	 		bgcolor(clicked_id);
	 	}
	 	if(event.keyCode == "70"){
	 		bgFont(clicked_id);
	 	}
	 	
	 	if(event.keyCode == "49") {
                document.getElementById(clicked_id).style.fontFamily= "monospace";
        }
        if(event.keyCode == "50") {
                document.getElementById(clicked_id).style.fontFamily= "arial";
        }
        if(event.keyCode == "51") {
                document.getElementById(clicked_id).style.fontFamily= "courier";
        }
        if(event.keyCode == "52") {
                document.getElementById(clicked_id).style.fontFamily= "cursive";
        }
        if(event.keyCode == "53") {
                document.getElementById(clicked_id).style.fontFamily= "fantasy";
        }
        if(event.keyCode == "54") {
                document.getElementById(clicked_id).style.fontFamily= "serif";
        }
        if(event.keyCode == "55") {
                document.getElementById(clicked_id).style.fontFamily= "sans-serif";
        }
        if(event.keyCode == "56") {
                document.getElementById(clicked_id).style.fontFamily= "times";
        }
        if(event.keyCode == "57") {
                document.getElementById(clicked_id).style.fontFamily= "tahoma";
        }

        if(event.keyCode == "109"){
        		size = size - 1;
        		 document.getElementById(clicked_id).style.fontSize=size.toString();
	 	}
	 	if(event.keyCode == "107") {
        		size = size + 1;
        		 document.getElementById(clicked_id).style.fontSize=size.toString();
	 	}

	  	
	});
}

var bgcolor = function(id) {
	color(id);
}

var color = function(id) {
	$(document).mousemove(function(event) {

<<<<<<< HEAD
}
var color = function(id){
	console.log(3);
	$(document).mousemove(function(event)
	{
=======
>>>>>>> 5546c46047a1cda6471654900cc36856cba71c5d
		X_ratio = ($(window).width()-50)/255;
		Y_ratio = ($(window).height()-50)/255;
		x = Math.round(event.pageX/X_ratio);
		y = Math.round(event.pageY/Y_ratio);

		changeBg(id);
	});

<<<<<<< HEAD
	$(document).keydown(function(event) 
	{
=======
	$(document).keydown(function(event) {
>>>>>>> 5546c46047a1cda6471654900cc36856cba71c5d
	  	code = event.keyCode || event.which;
	 	if(code === 38 && z<251) { //Enter keycode
	   		z=z+5;
	 	}
	 	if(code === 39 && z<255) { //Enter keycode
	   		z++
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
	 	changeBg(id);
	});
	
	var changeBg = function(id) {
		str = "rgb(" + x + ", " + y + ", " + z + ")"
		 document.getElementById(id).style.backgroundColor=str;
		$('#spnCursor').html(str);
	}
}
var bgFont = function(id){
<<<<<<< HEAD
		$(document).mousemove(function(event)
	{
=======
	
	$(document).mousemove(function(e) {
	
>>>>>>> 5546c46047a1cda6471654900cc36856cba71c5d
		X_ratio = ($(window).width()-50)/255;
		Y_ratio = ($(window).height()-50)/255;
		x = Math.round(event.pageX/X_ratio);
		y = Math.round(event.pageY/Y_ratio);

		changeFc(id);
	});

<<<<<<< HEAD
	$(document).keydown(function(event) 
	{
=======
	
	$(document).keydown(function() {
>>>>>>> 5546c46047a1cda6471654900cc36856cba71c5d
	  	code = event.keyCode || event.which;
	 	if(code === 38 && z<251) { //Enter keycode
	   		z=z+5;
	 	}
	 	if(code === 39 && z<255) { //Enter keycode
	   		z++
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
	 	changeFc(id);
	});
	
	var changeFc = function(id) {
		str = "rgb(" + x + ", " + y + ", " + z + ")"
		 document.getElementById(id).style.color=str;
		$('#spnCursor').html(str);
	}
}



















