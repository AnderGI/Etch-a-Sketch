//RAINBOW IS CLICKED IT STAYS CLICKED
//IMPLEMENT A FASTER WAY TO DRAW. EG MAINTAIN THE MOUSE DOWN??
//if prommpt not accepted the sketch background goes red

let container = document.getElementById("container")
let button = document.getElementById('send')
let colorEl = document.getElementById('colorInput')
let erase= document.getElementById('erase')
let rainbow = document.getElementById('rainbow')


function defaultGrid(x){
    for (let i= 1; i<=x; i++){
        let item = document.createElement('div')
        item.id = "item" 
        container.append(item)
     for (let j= 1; j<=x; j++){
        let subItem = document.createElement('div')
        subItem.id = "subItem" 
        item.append(subItem)
        subItem.addEventListener('click', changeBackground)
        function changeBackground(){
            subItem.style.cssText=`
            background-color: ${colorEl.value};
              `
        }
        erase.addEventListener('click', eraseFun)
        function eraseFun(){
            subItem.style.cssText = `
            background-color: white;
            `
        }
       rainbow.addEventListener('click', function rainbowColor(){
            const randomR = Math.floor(Math.random()*256)
            const randomG = Math.floor(Math.random()*256)
            const randomB = Math.floor(Math.random()*256)
            subItem.addEventListener('mouseover', function rainbowSet(){
                subItem.removeEventListener('mouseover', rainbowSet)
                subItem.style.cssText = `
                background-color: rgb(${randomR},${randomG}, ${randomB});
                `    
            })
        })
        
    }  
   
}
}
defaultGrid(16)









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
        defaultGrid(a)
    }
})



