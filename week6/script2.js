let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let cn = document.querySelector("#countries");
let ct = document.querySelector("#cities");

for(let i = 0; i < countries.length; i++) {
			let a = document.createElement("option");
			a.innerHTML = countries[i];
			cn.add(a);
		}


function addcity() {
	while (ct.hasChildNodes()) {
    	ct.removeChild(ct.lastChild);
	}

	let strana = cn.value;

	let cities = cities_by_country[strana];
	for(let i = 0; i < cities.length; i++) {
		let n = document.createElement("option");
		n.innerHTML = cities[i];
		ct.add(n);
	}
}

cn.addEventListener("click", addcity);
