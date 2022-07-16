const body = document.getElementsByTagName("body")
const container = document.getElementById("container")
//const containerItem = document.createElement('div')

const userButton = document.getElementById('user')








//THIS IS GOING TO BE FOR THE PROMPT
let a = 16

function createGrid(){
    for (let i= 1; i<=a; i++){
        for(let j=1; j<=a; j++){
            container.style.cssText = `
            grid-template-columns: repeat(${a},1fr); 
            grid-template-columns: repeat(${a},1fr);
            `
            container.innerHTML += `<div style="border: 1px solid black;" id="item"></div>`
        }
    }
}
createGrid()


