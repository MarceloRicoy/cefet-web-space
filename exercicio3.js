// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let buttonsText = document.querySelectorAll('#aliens p');
let clicked =false;
for (let p of buttonsText) {
    let button = p.querySelector('button');
    if (button) {
        button.addEventListener('click',function(){
        	p.classList.toggle('expandido');
        	if(!clicked)
        	{
     			button.innerHTML = '-';
     			clicked=true;
        	}
        	else
        	{
        		button.innerHTML = '+';
        		clicked =false;
        	}
        });
    }
}


