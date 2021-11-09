const fontIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.


const boxTemplate = (icon) =>{
	
	const {name, prefix, family, color} = icon;

	const boxHtml =`

		<div class="box d-flex justify-content-center align-items-center flex-column mt-3 me-3">
			<div class="img">
			<i class="${family} ${prefix}${name} ${color}"></i>
			</div>
			<span class="description">${name}</span> 
		</div>
	`
	return boxHtml;

}

const createBox = (arrayToPrint) =>{
	// for(let icon of arrayToPrint){

	// 	document.getElementById('box-container').innerHTML += boxTemplate(icon);
	// }

	container.innerHTML = '';
	arrayToPrint.forEach( (icon) =>{

		container.innerHTML += boxTemplate(icon);
	})
}

//********RENDER PAGE
const container = document.getElementById('box-container');

let types = document.getElementById('types');
let arr = [...fontIcons];
createBox(arr)

types.addEventListener('change', function(){


	//creo un array per animali vegetali e user
	const animals = fontIcons.filter((icon) => icon.type === 'animal');
	const vegetables = fontIcons.filter((icon) => icon.type === 'vegetable');
	const users = fontIcons.filter((icon) => icon.type === 'user');
	
	if(types.value === '1'){
		arr = [...animals];
	}else if(types.value === '2'){
		arr = [...vegetables];
	}else if(types.value === '3'){
		arr = [...users];
	}else{
		arr = [...fontIcons];
	}

	createBox(arr)
})







