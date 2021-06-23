// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


const calcular = document.querySelector('#calcular');

calcular.addEventListener('click',Calcular);		


function Calcular(){
	const constante = document.querySelector('#constante');
	const massa1 = document.querySelector('#massa1');
	const massa2 = document.querySelector('#massa2');
	const distancia = document.querySelector('#distancia');

	const resultado = document.querySelector('#resultado');

	const finalValue = (constante.value * massa1.value * massa2.value)/(Math.pow(distancia.value, 2));
	resultado.value = finalValue;
}