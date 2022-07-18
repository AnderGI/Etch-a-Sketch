let body = document.getElementsByTagName("body")
let container = document.getElementById("container")


const userButton = document.getElementById('user')





//THIS IS GOING TO BE FOR THE PROMPT
let a = 50

function createGrid(){
    for (let i= 1; i<=a; i++){
        let item = document.createElement('div')
        item.id = "item" 
        container.append(item)
     for (let j= 1; j<=a; j++){
        let subItem = document.createElement('div')
        subItem.id = "subItem" 
        item.append(subItem)
        subItem.addEventListener('mouseover', changeBackground)
        function changeBackground(){
            subItem.style.cssText=`
            background-color: yellow;
            `
        }
    }
}
}
createGrid()


