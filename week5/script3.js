function add(){
	
	let name = document.getElementById("name").value;
	if(name==""){
		document.getElementById("name").style.border = "5px solid red";
		return;
	}
		
	let surname = document.getElementById("surname").value;
	if(surname==""){
		document.getElementById("surname").style.border = "5px solid red";
		return;
	}
	let faculty = document.getElementById("faculty").value;
	if(faculty==-1){
		return;
	}
	
	let table = document.getElementsByTagName('table')[0];
	let newRow = table.insertRow(table.rows.length);
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	cell1.innerHTML = name;
	cell2.innerHTML = surname;
	cell3.innerHTML = "<strong>" + faculty + "</strong>";
}
document.getElementById("addStudent").addEventListener('click',add);