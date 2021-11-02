var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML= "100%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.95;
	console.log("New speed is "+ video.playbackRate );
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95;
	console.log("New speed is "+video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location "+ video.currentTime);

	if (video.currentTime < video.duration-15){
		video.currentTime+=15;
	}
	else{
		video.currentTime = 0;
		console.log("Going back to beginning")
		// video.play();
	}
	console.log("New location "+ video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	}else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});


document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%"
	console.log(video.volume);

});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});