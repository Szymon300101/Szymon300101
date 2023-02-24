window.addEventListener("load", (event) => {
  let imgs = document.getElementsByTagName('img');

  for (var i = 0; i < imgs.length; i++) {
	var wrapper = document.createElement('div');
	wrapper.classList.add("img-wrapper");
  	wrapper.addEventListener("click", (event) => {
	  zoom(event.currentTarget);
	});
	wrap(imgs[i],wrapper);
  }
});

function zoom(wrapper){
	if(wrapper.classList.contains("zoomed")){
		wrapper.classList.remove("zoomed");
		document.getElementById("zoom-bg").classList.add("hidden");
	}else{
		wrapper.classList.add("zoomed");
		document.getElementById("zoom-bg").classList.remove("hidden");
	}
}

function unzoom(){
	let zoomed_nodes = document.getElementsByClassName("zoomed");

	if(zoomed_nodes.length > 0){
		zoomed_nodes[0].classList.remove("zoomed");
		document.getElementById("zoom-bg").classList.add("hidden");
	}
}

function wrap(element, wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}