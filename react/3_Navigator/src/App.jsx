import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from './components/Header'

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item active" : "list-group-item";
  }

  const element = useRoutes(routes);
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* <NavLink className="list-group-item" to="/home"> 效果和下面的类似，通过函数的方法可以自定义 Navlink 高亮的 class， raect 默认为 active*/}
            <NavLink className={computedClassName} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
