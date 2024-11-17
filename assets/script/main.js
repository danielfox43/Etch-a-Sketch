
const generateButton = document.querySelector("#generateButton")
const body = document.querySelector("#screenspace")
function GenerateGrid(y,x){
    body.innerHTML =''
    for (let i = 0; i < y; i++) {
    const div = document.createElement("div");
    div.className = "row";
    div.style.flex = 1;
    div.style.display = "flex";
    body.append(div);
   
    for (let c = 0; c < x; c++) {
        const divChild = document.createElement("div");
        div.append(divChild);
        divChild.style.opacity = 0.1
        divChild.style.flex = 1;
    }
    div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${GetRandomValue()}, ${GetRandomValue()}, ${GetRandomValue()})`;
        let opacity = parseFloat(e.target.style.opacity) 
        if(opacity < 1) {
            e.target.style.opacity = opacity + 0.1

            
        }
        
        })
}}
generateButton.addEventListener("click", () => {
    let x = prompt("Enter the dimensions of the grid in the x")
    let y = prompt("Enter the dimensions of the grid in the y")
    if(x > 100 && y > 100) {
        y = 100;
        x = 100;
        alert("Too big size set to 100 by 100")
    }else if(x > 100) {
        x = 100;
        alert("Too big x size set to 100")
    }else if(y > 100) {
        y = 100;
        alert("Too big y size set to 100")
    }
    GenerateGrid(y,x)
})
function GetRandomValue() {
return  Math.floor(Math.random() * 255) + 1;
}