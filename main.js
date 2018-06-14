var x;
var y;
var z=0;
var str;
var code;
var ctrlkey = -1;
var size = 16;
var extra = function(clicked_id) {
	console.log('hell');
	id = "#" + clicked_id;
	$(document).keydown(function(event){
	 	if(event.keyCode === 66){
	 		returnCode = bgcolor(clicked_id);
	 		if (returnCode===0) {
	 			console.log(typeof(event.keyCode));
	 			return 0;
	 		}
	 		
	 	}
	 	if(event.keyCode === 70){
	 		returnCode = fontStyle(clicked_id);
	 		if (returnCode===0) {
	 			console.log(typeof(event.keyCode));
	 			return 0;
	 		}
	 	}
	 	if(event.keyCode === 27){
	 		console.log(event.keyCode);
	 		return 0;
	 	}
	 	if(event.keyCode === 49) {
                document.getElementById(clicked_id).style.fontFamily= "monospace";
        }
        if(event.keyCode === 50) {
                document.getElementById(clicked_id).style.fontFamily= "arial";
        }
        if(event.keyCode === 51) {
                document.getElementById(clicked_id).style.fontFamily= "courier";
        }
        if(event.keyCode === 52) {
                document.getElementById(clicked_id).style.fontFamily= "cursive";
        }
        if(event.keyCode === 53) {
                document.getElementById(clicked_id).style.fontFamily= "fantasy";
        }
        if(event.keyCode === 54) {
                document.getElementById(clicked_id).style.fontFamily= "serif";
        }
        if(event.keyCode === 55) {
                document.getElementById(clicked_id).style.fontFamily= "sans-serif";
        }
        if(event.keyCode === 56) {
                document.getElementById(clicked_id).style.fontFamily= "times";
        }
        if(event.keyCode === 57) {
                document.getElementById(clicked_id).style.fontFamily= "tahoma";
        }

        if(event.keyCode === 109){
        		size = size - 1;
        		str_size = size + "px"
        		$( id ).css({
			      "fontSize": str_size
			    });
	 	}
	 	if(event.keyCode === 107) {
        		size = size + 1;
        		str_size = size + "px"
        		$( id ).css({
			      "fontSize": str_size
			    });
	 	}

	  	
	});
}
var bgcolor = function(id){
	$(document).mousemove(function(event)
	{
		X_ratio = ($(window).width()-50)/255;
		Y_ratio = ($(window).height()-50)/255;
		x = Math.round(event.pageX/X_ratio);
		y = Math.round(event.pageY/Y_ratio);

		if(event.keyCode === 27){
	 		console.log(event.keyCode);
	 		return 0;
	 	}

		changeBg(id);
	});

	$(document).keydown(function(event) 
	{
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
	var changeBg = function(id){
		str = "rgb(" + x + ", " + y + ", " + z + ")"
		document.getElementById(id).style.backgroundColor=str;
		$('#spnCursor').html(str);
	}
}

var fontStyle = function(id){
		$(document).mousemove(function(event)
	{
		X_ratio = ($(window).width()-50)/255;
		Y_ratio = ($(window).height()-50)/255;
		x = Math.round(event.pageX/X_ratio);
		y = Math.round(event.pageY/Y_ratio);

		if(event.keyCode === 27){
	 		console.log(event.keyCode);
	 		return 0;
	 	}

		changeFc(id);
	});

	$(document).keydown(function(event) 
	{
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
	 	changeFc(id);
	});
	var changeFc = function(id){
		str = "rgb(" + x + ", " + y + ", " + z + ")"
		 document.getElementById(id).style.color=str;
		$('#spnCursor').html(str);
	}
}