import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faList, faTrash);

function App() {
  // State pour l'entrée de tache
  const [taskIn, setTaskIn] = useState("");

  // State pour le tableau des tâches
  const [tasks, setTasks] = useState([]);

  // fonction déclenchée lorsque l'on clique sue le bouton "Add task"
  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskIn) {
      const newTask = [...tasks];
      // Modifie la copie
      newTask.push({
        textInput: taskIn,
        realized: false,
      });
      // Mette à jour le state avec la copie
      setTasks(newTask);
      // RAZ input
      setTaskIn("");
    }
  };

  // fonction sur clic checkBox
  const handleClickCheckBox = (index) => {
    let tasksCopy = [...tasks];
    if (tasksCopy[index].realized) {
      tasksCopy[index].realized = false;
    } else {
      tasksCopy[index].realized = true;
    }
    setTasks(tasksCopy);
  };

  // fonction sur clic icon trash
  const handleClickTrash = (index) => {
    let tasksCopy = [...tasks];
    // delete tasksCopy[index];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };

  return (
    <>
      <header>
        <FontAwesomeIcon
          icon="list"
          style={{ color: "#5C48D3", marginRight: 20, marginLeft: 20 }}
        />
        <span>Todo List</span>
      </header>

      <div className="container">
        {/*Boucle sur les taches*/}
        {tasks.map((task, index) => {
          // console.log("test", checkBoxes[index]);
          return (
            <div className="task">
              <input
                type="checkbox"
                placeholder="New task"
                checked={task.realized ? true : false}
                onChange={() => handleClickCheckBox(index)}
              />
              <span className={task.realized && "through"}>
                {task.textInput}
              </span>
              <FontAwesomeIcon
                icon="trash"
                style={{ color: "#5C48D3" }}
                onClick={() => handleClickTrash(index)}
              />
            </div>
          );
        })}

        <div>
          <input
            type="text"
            className="inputTask"
            placeholder="New task"
            value={taskIn}
            onChange={(event) => {
              setTaskIn(event.target.value);
            }}
          />
          <button onClick={(event) => handleAddTask(event)}>Add task</button>
        </div>
      </div>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur </span> by
          <span> gioVanni</span>
        </p>
      </footer>
    </>
  );
}

export default App;
