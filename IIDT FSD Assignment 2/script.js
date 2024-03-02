const body = document.querySelector("body")
const colorName = document.querySelector("span")

fun = () =>{
    let color = generateJustOneColor()
    body.style.backgroundColor = color
    colorName.innerText = color
    colorName.style.color = color
}


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


function getCharacter(index) {
	return hexCharacters[index]
}

function generateJustOneColor(){
    
	let hexColorRep = "#"

    for (let position = 0; position < 6; position++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
    }
	
	return hexColorRep

}