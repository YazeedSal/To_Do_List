const getTaskBtn = document.getElementsByClassName("getTasksBtn")[0];
const nameInput = document.getElementById("nameInput");
const descriptionInput = document.getElementById("descriptionInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");

const getInputValues = function () {
  const name = nameInput.value;
  const description = descriptionInput.value;
  return { name, description };
};

const addTasksToDB = async function () {
  const task = getInputValues();
  const dbRes = await axios.post("/task/addTask", task);
  getTasksFromDB();
};

addTaskBtn.addEventListener("click", addTasksToDB);

const renderTasks = function (tasks) {
  taskContainer.innerHTML = "";
  let taskNum = 0;
  tasks.forEach((task) => {
    taskNum += 1;
    const { name, description, _id } = task;

    const newContainer = `
        <div class="item" id = "${_id}">
        <h3>Task Number : ${taskNum}</h3>
         <h2>name:${name} </h2>
        <h3>description: ${description}</h3>
        <button id = "deleteBtn" onclick="i()"><i class="material-icons">delete</i></button>
        </div>
        `;
    taskContainer.innerHTML += newContainer;
  });
};

const i = function () {
  console.log('this is working');
}
// taskContainer.addEventListener("click", function (e) {
//   console.log(e);
//   let target = e.target;
//    console.log(target);
//  target += ""
//   if (!target.match('i')) {
//     console.log("okay");
//     deleteItems(target)
//   } else {
//   console.log("not okay");
//   }
// });

// const deleteItems = async function (yazeed) {
//   console.log(yazeed);
//   //const _id = yazeed.id
//   //const task = await axios.delete("task/deleteTask", _id);
//   getItemsFromDB();
//  // console.log(`good ? ${_id} ${task.data}`);
// };

const getTasksFromDB = async function () {
  nameInput.value =""
  descriptionInput.value = ""
  const tasks = await $.get("/task/getTasks");
  renderTasks(tasks);
};
getTaskBtn.addEventListener("click", getTasksFromDB);
