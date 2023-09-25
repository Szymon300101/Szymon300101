function open_about_box()
{
	let box = document.getElementById("about-div");

	if (box.classList.contains("hidden"))
	{
		box.classList.remove("hidden");
	}
}

function close_about_box()
{
	let box = document.getElementById("about-div");

	if (!box.classList.contains("hidden"))
	{
		box.classList.add("hidden");
	}
}