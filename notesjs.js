let n_name=document.getElementById('note_name')
let note=document.getElementById('note_content')
let add=document.getElementById('add')
let main_area=document.getElementById('active_area')


let i=0
add.addEventListener('click',()=>{
addnote(i)

i++

})
function addnote(i){
let add_new_note=document.createElement('div')
add_new_note.classList.add("note_style")
add_new_note.innerHTML=`<div class="heading" id='heading${i}'></div><div id='date_div${i}'></div><div class="content" id='content${i}'></div><button class="remove" id='remove_n${i}'>remove</button>`
main_area.appendChild(add_new_note)

 let note_n=document.getElementById(`heading${i}`)
let content=document.getElementById(`content${i}`)
content.innerHTML=note.value
note_n.innerHTML=n_name.value
let x=document.getElementById(`remove_n${i}`)
x.addEventListener('click',()=>{
    main_area.removeChild(add_new_note)
}
)}
