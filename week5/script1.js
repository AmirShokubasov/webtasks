//function clickMe(){
	/*const s1Field = document.querySelector("#s1");
	const s2Field = document.querySelector("#s2");
	const s3Field = document.querySelector("#s3");
	let sum = parseInt(s1Field.value)+parseInt(s2Field.value);
	s3Field.value = sum;*/
	//document.querySelector("img").src="http://www.ayzdorov.ru/images/Travi/ananas.jpg";
	//document.querySelector('#aaa').innerHTML = "<strong>Hello</strong> World";
	//document.querySelector('#aaa').textContent = "<strong>Hello</strong> World";
	//let newCity = document.createElement("option");
	//newCity.textContent = "Kaskelen";
	//document.querySelector("#cities").appendChild(newCity);
//}
//document.querySelector("#button").addEventListener('click',clickMe);
function findD(){
	const s1Field = document.querySelector("#s1");
	const s2Field = document.querySelector("#s2");
	const s3Field = document.querySelector("#s3");
	const s4Field = document.querySelector("#s4");
	const s5Field = document.querySelector("#s5");
	const s6Field = document.querySelector("#s6");
	const s7Field = document.querySelector("#s7");
	const s8Field = document.querySelector("#s8");
	const s9Field = document.querySelector("#s9");
	const s10Field = document.querySelector("#s10");
	
	let d = (parseInt(s1Field.value)*parseInt(s5Field.value)*parseInt(s9Field.value))+(parseInt(s2Field.value)*parseInt(s6Field.value)*parseInt(s7Field.value))+(parseInt(s4Field.value)*parseInt(s8Field.value)*parseInt(s3Field.value))-(parseInt(s3Field.value)*parseInt(s5Field.value)*parseInt(s7Field.value))-(parseInt(s2Field.value)*parseInt(s4Field.value)*parseInt(s9Field.value))-(parseInt(s8Field.value)*parseInt(s6Field.value)*parseInt(s1Field.value));

	s10Field.value=d;
}
document.querySelector("#button").addEventListener('click',findD);