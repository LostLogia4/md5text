var $embed1 = $("#embed1");
var $embed2 = $("#embed2");
document.getElementById("result").readOnly = true;

function getHash() {
	var salt = $("#salt").val();
	var code = $("#input").val();
	$("#result").val( md5(salt+code) );
}

function SaveHash() {
	var prelink = $("#prelink").val();
	var postlink = $("#postlink").val();
	var salt = $("#salt").val();
	var code = $("#input").val();
	$embed1.append(salt+code+"<br>");
	$embed2.append(prelink+md5(salt+code)+postlink+"<br>");
}

$("#clearButton").click(function() {
	$(".output").text('');
	$("#result").val('');
});