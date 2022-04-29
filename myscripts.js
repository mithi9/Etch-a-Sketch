var slider = document.getElementById("sizeSlider");
var output = document.getElementById("demo");
let a=document.querySelector(":root");
const container = document.querySelector('.container');
const randomColor = document.querySelector('.random');
let manualColor = document.getElementById('colorpicker');
let pickedColor ='black';
console.log(manualColor);



let gridSize=(slider.value)*(slider.value);

for( let i=1;i<=gridSize;i++){

    let gridElement = document.createElement('div');
    gridElement.classList.add(`${i}`);
    //gridElement.textContent=`${i}`;
    container.appendChild(gridElement);

}


let hover = container.querySelectorAll('div');

hover.forEach((mousehover)=>{

    mousehover.addEventListener('mouseover',()=>{

        if(randomState==1){

            let r1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let r2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let r3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        
            mousehover.style.setProperty("background-color",`rgb(${r1},${r2},${r3})`);
        }

        else{
            mousehover.style.setProperty("background-color",`${pickedColor}`);
        }

    })


})


slider.addEventListener("input",()=>{

    a.style.setProperty("--colNum",`${slider.value}`);
    a.style.setProperty("--rowNum",`${slider.value}`);

    for(let i=1;i<=gridSize;i++){

        container.removeChild(container.lastChild);

    }

    gridSize= slider.value*slider.value;
    console.log(slider.value)
    console.log(gridSize);

    for( let i=1;i<=gridSize;i++){

        let gridElement = document.createElement('div');
        gridElement.classList.add(`${i}`);
        //gridElement.textContent=`${i}`;
        container.appendChild(gridElement);
    
    }
    

    hover = container.querySelectorAll('div');
    console.log(hover);

    hover.forEach((mousehover)=>{

        mousehover.addEventListener('mouseover',()=>{

            if(randomState==1){

                let r1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                let r2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
                let r3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            
                mousehover.style.setProperty("background-color",`rgb(${r1},${r2},${r3})`);
            }
            else{
                
                mousehover.style.setProperty("background-color",`${pickedColor}`);
            }
    
    
            console.log(mousehover);
        })
    
    
    })
    
   
});


slider.oninput = function() {
    console.log(this)
    
    output.innerHTML = `${this.value} x ${this.value}`;
    
}


const clear = document.querySelector('.clear')

clear.addEventListener('click',()=>{

    console.log(hover)

    hover.forEach((grid)=>{
        console.log(grid);

        grid.style.setProperty('background-color','white');

    })
    
    

});


let randomState=0

randomColor.addEventListener('click',()=>{

    if (randomState==0){

        randomState=1;
        randomColor.classList.add("buttonclick")
    }
    else{
        randomState=0;
        randomColor.classList.remove("buttonclick")
    }

})


manualColor.addEventListener('input',()=>{

    a.style.setProperty("--randomColor",`${manualColor.value}`);
    pickedColor= a.style.getPropertyValue('--randomColor');
    randomState=0;
    randomColor.classList.remove("buttonclick")
    

})






