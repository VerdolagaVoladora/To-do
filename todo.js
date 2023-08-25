const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('lista-tareas')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

//Variable Global para las tareas como objetos
let tareas = {}

//Agregamos Eventos
document.addEventListener('DOMContentLoaded0', () => {
    if (localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'))
    }
    pintartareas()
})

const pintartareas = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
    if(Object.values(tareas).length === 0){
        listaTareas.innerHTML =`
        <div class="alert alert-dark">
            No task pending
        </div>
        `
        return
    }
    listaTareas.innerHTML = ''

    Object.values(tareas).forEach((tarea) => {
        const clone = template.cloneNode(true)
        clone.querySelector('p').textContent = tarea.text 
        if(tarea.estado){
            clone.querySelecetorAll('.fas')[0].classlist.replace('fa-circle-check','fa-circle-minus')
            clone.querySelector('.alert').classlist.replace('alert-warning', 'alert-primary')
            clone.querySelector('p').style.textDecoration = 'line-through'
        }
        clone.querySelecetorAll('.fas')[0].dataset.id = tarea.id
        clone.querySelecetorAll('.fas')[1].dataset.id = tarea.id
        fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}