var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
	 console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").innerHTML=video.volume*100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow video down");
	video.playbackRate *=.95;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *=1.05;
	console.log(video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	var slider = this.value;
	video.volume = slider/100;
	document.querySelector("#volume").innerHTML =video.volume*100 + "%"
	
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
	}
 });


 document.querySelector("#mute").addEventListener("click", function() {
	    if (video.muted != true) {
			console.log("Sound is muted");
	        video.muted = true;
	        document.querySelector("#mute").innerHTML = "Unmute";
	        
	    }
	
	    else{
	        console.log("Unmute");
			video.muted = false;
	        document.querySelector("#mute").innerHTML = "Mute";
	        document.querySelector("#volume").innerHTML =video.volume;
	
	    }
	
	 });
	
