let value=document.getElementById('value')
let enteries=document.getElementById('entries')

let count=0

function increaseCount(){
    count=count+1
    value.textContent=count;
}
function saveCount(){
    enteries.textContent += count + " - "
    count=0
    value.textContent='0'
}