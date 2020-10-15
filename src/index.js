import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

function CreateTask() {
  let result;
  result = prompt("Введите задачу на сегодня: ");
  localStorage.setItem(localStorage.length, result);
  ShowTask();
}

function DeleteTask(id) {
  localStorage.removeItem(id);
  //localStorage.setItem(id, null);
  ShowTask();
}

function ShowTask2() {
  let arr2 = new Array();
  let _element_;

  let keys = Object.keys(localStorage);

  for (let key in keys) {
    arr2.push(
      <div className="delDiv">
        --> {localStorage.getItem(key)}.
        <button className="delBut" onClick={() => DeleteTask(key)}>
          delete
        </button>
      </div>
    );
  }
  /*for (let index = 0; index < localStorage.length; index++) {
   
  }*/
  _element_ = <div>{arr2}</div>;
  ReactDOM.render(_element_, document.getElementById("list"));
}

function ShowTask() {
  let arr2 = new Array();
  let _element_;
  for (let index = 0; index < localStorage.length; index++) {
    if (localStorage.getItem(index + 1) != "null") {
      arr2.push(
        <div className="delDiv">
          --> {localStorage.getItem(index + 1)}.
          <button className="delBut" onClick={() => DeleteTask(index + 1)}>
            delete
          </button>
        </div>
      );
    }
  }
  _element_ = <div>{arr2}</div>;
  ReactDOM.render(_element_, document.getElementById("list"));
}

function ClearDisp() {
  ReactDOM.render(<div></div>, document.getElementById("list"));
}

function ClearlocalStorage() {
  localStorage.clear();
  ShowTask();
}

const mainMenu = (
  <ul className="mainMenu">
    <li>
      <button onClick={() => CreateTask()}>Create task</button>
    </li>
    <li>
      <button onClick={() => ShowTask()}>Show task</button>
    </li>
    <li>
      <button onClick={() => ClearDisp()}>Clear display</button>
    </li>
    <li>
      <button onClick={() => ClearlocalStorage()}>Clear storage</button>
    </li>
    <li>
      <button onClick={() => ShowTask2()}>ShowTask2</button>
    </li>
  </ul>
);

ReactDOM.render(mainMenu, document.getElementById("menu"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
