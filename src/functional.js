import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CreateTask() {
  let result;
  result = prompt("Введите задачу на сегодня: ");
  localStorage.setItem(localStorage.length, result);
  ShowTask();
}

function DeleteTask(id) {
  localStorage.removeItem(id);
  let keys = Object.keys(localStorage);
  for (let index = Number(id); index < keys.length; index++) {
    localStorage.setItem(index, localStorage.getItem(index + 1));
  }
  localStorage.removeItem(keys.length);
  ShowTask();
}

function EditTask(id) {
  let result;
  result = prompt("Редактирование...", [localStorage.getItem(id)]);
  localStorage.setItem(id, result);
  ShowTask();
}

function ShowTask() {
  let arr2 = new Array();
  let _element_;
  let keys = Object.keys(localStorage);
  if (keys.length === 0) {
    ClearDisp();
    ReactDOM.render(
      <div>
        <h4 className="Heading">Все задачи выполнены. Вы молодец!</h4>
        <h5 className="Heading">Хотите добавить задачу? Жмите Сreate task!</h5>
      </div>,
      document.getElementById("list")
    );
  } else {
    arr2.push(<h5 className="Heading">Cписок задач:</h5>);
    for (let index = 0; index < keys.length; index++) {
      arr2.push(
        <div className="delDiv">
          {index + 1}) {localStorage.getItem(index)}.
          <button className="editBut" onClick={() => EditTask(index)}>
            edit
          </button>
          <button className="delBut" onClick={() => DeleteTask(index)}>
            delete
          </button>
        </div>
      );
    }
    _element_ = <div>{arr2}</div>;
    ReactDOM.render(_element_, document.getElementById("list"));
  }
}

function ClearDisp() {
  ReactDOM.render(<div></div>, document.getElementById("list"));
}

function ClearlocalStorage() {
  localStorage.clear();
  ClearDisp();
}

function MainMenu() {
  ShowTask();
  return (
    <ul className="mainMenu">
      <li>
        <button onClick={() => CreateTask()}>Create task</button>
      </li>
      <li>
        <button onClick={() => ClearDisp()}>Clear display</button>
      </li>
      <li>
        <button onClick={() => ShowTask()}>Show task list</button>
      </li>
      <li>
        <button onClick={() => ClearlocalStorage()}>Clear storage</button>
      </li>
    </ul>
  );
}

export default MainMenu;
