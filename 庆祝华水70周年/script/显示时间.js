function showtime() {
		var now = new Date();
		time.innerText = "时间："+now.toLocaleDateString		()+now.toLocaleTimeString();
}
window.setInterval("showtime()", 1000);