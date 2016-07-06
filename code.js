var $embed = $("#embeds");
document.getElementById("result").readOnly = true;

function getHash() {
	var code = $("#input").val();
	$("#result").val( md5(code) );
}

function SaveHash() {
	var code = $("#input").val();
	$embed.append(code+" "+md5(code)+"<br>");
}