function Done(event){
	const b = event.currentTarget.parentNode.childNodes[1]
	b.style.textDecoration = "line-through";
	btn.removeEventListener('click',Done)
}
const buttons = document.querySelectorAll('button');
for(const button of buttons){
	button.addEventListener('click',Done);
}