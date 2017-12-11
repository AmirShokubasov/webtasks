function imageC(image,image2){
	document.getElementById('0').src=image;
	document.getElementById('2').src=image2;


	document.getElementById('1').innerHTML="<a>Однажды в Америке</a>" +"</br>" + "<a>Драма/Криминальный жанр</a>" + "</br>" + "<a>1984</a>" + "</br>" + "<a>Гангстерский фильм Серджо Леоне, вышедший на экраны в 1984 году и частично основанный на автобиографическом произведении Гарри Грэя. История дружбы и предательства нескольких гангстеров и бутлегеров, встретившихся в начале двадцатого века в еврейском квартале Нью-Йорка и разбогатевших во времена сухого закона в США, показана через прихотливое сплетение воспоминаний, сновидений и опиумных грёз главного героя.</a>";

}
var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel=0;
var carouseInterval = setInterval(nextCarousel,5000);
function nextCarousel(){
	carousels[currentCarousel].className='carousel';
	currentCarousel=(currentCarousel+1)%carousels.length;
	carousels[currentCarousel].className='carousel demonstration';
}
function process(responses){
			
			
				 var card = document.createElement('div');
				 card.setAttribute("class","seri");
				 card.style.display='block';
				 console.log(responses[2]);
				 card.innerHTML=(responses[2].img);
			
				 
			
		}
	function onSuccess(response){
			return response.json().then(process);
		}
		
	
		
		function onFail(response){
			console.log(response);
			
		}
	function fire(event){
			
			fetch("serials.json").then(onSuccess,onFail);
			document.getElementById('ser').style.display = 'none';
			
		}

document.querySelector("#load").addEventListener("click",fire);