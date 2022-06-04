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

const addItemsToDB = async function () {
  const task = getInputValues();
  const dbRes = await axios.post("/task/addTask", task);
  getItemsFromDB();
};

addTaskBtn.addEventListener("click", addItemsToDB);

const renderItems = function (tasks) {
  taskContainer.innerHTML = "";
  tasks.forEach((task) => {
    const { name, description, _id } = task;

    const newContainer = `
        <div class="item" id = "${_id}">
         <h2>name:${name} </h2>
        <h3>description: ${description}</h3>
        </div>
        `;
    taskContainer.innerHTML += newContainer;
  });
};

const getItemsFromDB = async function () {
  const tasks = await $.get("/task/getTasks");
  renderItems(tasks);
};
getTaskBtn.addEventListener("click", getItemsFromDB);
