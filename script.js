
//:
let container= document.getElementById('container')
let button = document.getElementById('send')
let colorEl = document.getElementById('colorInput')
let erase= document.getElementById('erase')


//THIS IS THE DEFALT 16x16 grid
function createGrid(){

    for (let i= 1; i<= 16; i++){   // filas
        let row = document.createElement('div')
        row.id= "item"
        container.append(row)
        
        for (let j= 1; j<= 16; j++){
            let box = document.createElement('div')
            box.id= "box"
            row.append(box)
            //add background color
            box.addEventListener('mouseover', setBoxBackground)
            function setBoxBackground(){
                box.style.cssText = `background-color: ${colorEl.value};`
            }
            //erase the div by clicking on it
            box.addEventListener('click', eraseBoxBackground)
            function eraseBoxBackground(){
                box.style.cssText = `background-color: initial;`
            }
            erase.addEventListener('click', eraseFun)
            function eraseFun(){
                box.style.cssText = `background-color: initial;`
            }

         }
        
    }
   
}
createGrid()


//once the button is clicked  the is going to change according to 
//a (user input, both width and height), unless is bigger or equal to 100
button.addEventListener('click', function(){
    container.innerHTML= " "
    let a = Number(prompt('choose'))
    console.log(a)
    
    if(a>= 100){
        container.innerHTML = "Nope. Too many pixels."
    }
    
    else if(a<100){

        for (let i= 1; i<= a; i++){   // filas
            let row = document.createElement('div')
            row.id= "item"
            container.appendChild(row)
            
            for (let j= 1; j<= a; j++){
                let box = document.createElement('div')
                box.id= "box"
                row.append(box)
                box.addEventListener('mouseover', setBoxBackground)
            
            //add background color
            box.addEventListener('mouseover', setBoxBackground)
            function setBoxBackground(){
                box.style.cssText = `background-color: ${colorEl.value};`
            }
            //erase the div by clicking on it
            box.addEventListener('click', eraseBoxBackground)
            function eraseBoxBackground(){
                box.style.cssText = `background-color: initial;`
            }
            erase.addEventListener('click', eraseFun)
            function eraseFun(){
                box.style.cssText = `background-color: initial;`
            }
            }

        
        }
    }
})



