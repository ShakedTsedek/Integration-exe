"use strict";

const greg = document.querySelector(".Greg_date");
const btn = document.querySelector(".butten");
const Hebrew_date = document.querySelector(".Hebrew_date");


const convert = async (year, month, day)=> {
	try {
		const res = await fetch (
			`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`	// changed the part: 'date=2011-06-02&g2h=1&strict=1'
			// and added instad a three serch parameters: year, month, day
		);
		const response = await res.json();
		console.log(response.hebrew);
		Hebrew_date.textContent = response.hebrew;
	} catch (error) {
		console.log(error);
	}
};


btn.addEventListener("click", function() {
	const [year, month, day] = greg.value.split("-");
	console.log(year, month, day);
	convert(year, month, day);
});