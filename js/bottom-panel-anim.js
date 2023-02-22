function open_bottom_panel()
{
	let box = document.getElementById("bottom-box");

	if (box.classList.contains("closed"))
	{
		box.classList.remove("closed");
		box.classList.add("open");
	}
}

function close_bottom_panel()
{
	let box = document.getElementById("bottom-box");

	if (box.classList.contains("open"))
	{
		box.classList.remove("open");
		box.classList.add("closed");
	}
}