const btnAdd = document.getElementById("btnAdd");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
const bodyTable = document.getElementById("body-table");
const todoList = [
    {id: 1, descripcion:'lavar loza',isDone: false },
    {id: 2, descripcion:'Estudiar',isDone: false },
    {id: 3, descripcion:'Jugar',isDone: false }
];

const loadTaskList = (listTask) =>{
    const listaTemporal = [];
    for (lista of listTask) {
        const listBody = ` <tr>                    
        <td> ${lista.id} </td>
        <td> ${lista.descripcion} </td>
        <td><input type="checkbox" class"check" id= "${lista.id}" onclick="completeTask(${lista.id})"  /> </td>
        <td><input type="checkbox" id= "${lista.id}" onclick="deleteTask(${lista.id})" /> </td>
        <td><input type="button" value="X" id="${lista.id}" />  </td>
        </tr>`;
        listaTemporal.push(listBody);
    }
    bodyTable.innerHTML = listaTemporal;
    total.innerHTML = `Total: ${todoList.length}`;        
};

loadTaskList(todoList);

btnAdd.addEventListener("Click", () => {
    const inputTask = document.getElementById("task").value;
    const idTask = todoList.length + 1;
    todoList.push({id: idTask , descripcion: inputTask, isDone: false});
    loadTaskList(todoList)
});

const completeTask = (id) => {
    todoList[id - 1] = { ...todoList[id - 1], isDone: true };
    const taskCompleteCount = todoList.filter((list) => list.isDone == true);
    realizadas.innerHTML = `Realizadas: ${taskCompleteCount.length}`;
};

//const completeTask=(id)=>{
//    const check = document.querySelectorAll(".check");
//    let conteo = 0;

//    check.forEach(function (item) {
//        item.addEventListener("click", function() {
//            if (item.checked){
//                conte++;
//            } else {
//                conteo--;
//            }
//           realizadas.innerHTML = conteo;
//       });
//        });
//    };
    
const deleteTask=(id)=>{
    todoList.splice(id - 1, 1)
    loadTaskList(todoList)
};