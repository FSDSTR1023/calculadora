const result = document.querySelector('.result')
const operations = document.querySelector('.operations')
const buttons = [...document.querySelectorAll(".button")]
let lastButton = ''


result.value = '0'
buttons.map(btn=>{
    btn.addEventListener("click",()=>handleClick(btn.dataset.value))
})


function handleClick(value){
    if(lastButton==="=") operations.value = result.value
    if(value==="="){
        result.value = eval(operations.value)
    }else if(value==="C"){
        result.value = '0'
        operations.value = ''
    }else{
        operations.value+=value
    }
    lastButton = value
}