//RAINBOW IS CLICKED IT STAYS CLICKED
//IMPLEMENT A FASTER WAY TO DRAW. EG MAINTAIN THE MOUSE DOWN??
//if prommpt not accepted the sketch background goes red

const container = document.getElementById("container")
const button = document.getElementById('send')
const black = document.getElementById('black')
const erase= document.getElementById('erase')
const rainbow = document.getElementById('rainbow')
const eraseOne = document.getElementById('eraseOne')
const warmEl = document.getElementById('warm')
const coldEl = document.getElementById('cold')

function defaultGrid(x){
    for (let i= 1; i<=x; i++){
        let item = document.createElement('div')
        item.id = "item" 
        container.append(item)

     for (let j= 1; j<=x; j++){
        let subItem = document.createElement('div')
        subItem.id = "subItem" 
        item.append(subItem)

        black.addEventListener('click', ()=>{
            subItem.addEventListener('click', ()=> {
                subItem.style.cssText=`
                    background-color: black;
                ` })
        })
        
   
        warmEl.addEventListener('click', ()=>{
            const randomR = Math.floor(Math.random()*256)
            const randomG = Math.floor(Math.random()*256)
            subItem.addEventListener('click', ()=> {subItem.style.cssText=`
                background-color: rgb(${randomR},${randomG},0);
            ` })
        })
        

        coldEl.addEventListener('click', ()=>{
            const randomG = Math.floor(Math.random()*256)
            const randomB = Math.floor(Math.random()*256)
            subItem.addEventListener('click', ()=> {subItem.style.cssText=`
                background-color: rgb(0,${randomG},${randomB});
            ` })    
        })
        

        rainbow.addEventListener('click', ()=>{
            const randomR = Math.floor(Math.random()*256)
            const randomG = Math.floor(Math.random()*256)
            const randomB = Math.floor(Math.random()*256)
                subItem.addEventListener('click', ()=> {subItem.style.cssText=`
                    background-color: rgb(${randomR},${randomG},${randomB});
                ` })      
        })
        
        erase.addEventListener('click', ()=>{
            subItem.style.cssText = `
                background-color: white;
                `
        })
       
        }
        
    }  
   
}

defaultGrid(16)

button.addEventListener('click', function(){
    container.innerHTML= " "
    let a = Number(prompt('choose'))
    if(a>= 100){
        container.innerHTML = `
        <div 
            style="
            display:flex;
            justify-content:center;
            align-items:center;
            width:450px;
            height:450px;
            color: red;
            font-weight:900;
            font-size:30px;
            font-family: Arial, Helvetica, sans-serif;
            "> 
                Nope :( TOO MANY PIXELS 
        </div>
        `
    }
    
    else if(a<100){
        defaultGrid(a)
    }
})



