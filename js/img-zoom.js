window.addEventListener("load", (event) => {
  let imgs = document.getElementsByTagName('img');

  for (var i = 0; i < imgs.length; i++) {
  	imgs[i].addEventListener("click", (event) => {
	  zoom(event.target);
	});
  }
});

function zoom(img){

	img.classList.add("zoomed");
	document.getElementById("zoom-bg").classList.remove("hidden");
}

function unzoom(){
	let zoomed_imgs = document.getElementsByClassName("zoomed");

	if(zoomed_imgs.length > 0){
		zoomed_imgs[0].classList.remove("zoomed");
		document.getElementById("zoom-bg").classList.add("hidden");
	}
}