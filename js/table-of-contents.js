window.addEventListener("load", (event) => {
  let headings = document.getElementsByTagName("h3");
  let toc = document.getElementById("table-of-contents");
  for (var i = 0; i < headings.length; i++) {
  	headings[i].id = i;

  	let a = document.createElement('a');
  	a.href = '#' + i;
  	a.innerHTML = headings[i].innerHTML.split('<')[0];
  	toc.append(a);
  }


});