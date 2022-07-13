const btn1 = document.querySelector("#btn1");
const text1 = document.querySelector(".show_text1");
btn1.addEventListener("click", function(){
	text1.classList.toggle("hide_text1");
	btn1.textContent == "Read More"
		? (btn1.textContent = "Read Less")
		: (btn1.textContent = "Read More");
});

const btn2 = document.querySelector("#btn2");
const text2 = document.querySelector(".show_text2");
btn2.addEventListener("click", function(){
	text2.classList.toggle("hide_text2");
	btn2.textContent == "Read More"
		? (btn2.textContent = "Read Less")
		: (btn2.textContent = "Read More");
});

//End of Day 8



