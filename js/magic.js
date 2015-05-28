function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

window.onload = function() {

	if (getParameterByName('answer') == "correct")
	{
		document.getElementById("mrt").src = "images/mr-t_correct.png";
	}
	else if (getParameterByName('answer') == "wrong")
	{
		document.getElementById("mrt").src = "images/mr-t_wrong.jpg";
	}
	else
	{
		document.getElementById("mrt").src = "images/mr-t.png";
	}

}