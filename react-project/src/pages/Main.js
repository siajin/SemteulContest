import { useState, useContext, useEffect, Fragment } from "react";
import GlobalContext from "../context/GlobalContext";
import "../static/Main.css";
import Nav from "../components/Nav";
import Month from "../components/Month";
import SideTodo from "../components/SideTodo";
import PageModal from "../components/PageModal";
import Week from "../components/Week";
import DayView from "../components/DayView";
import PageView from "../components/PageView";
import Repository from "../components/Repository";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Main() {
  const { modalObj, showSchedule } = useContext(GlobalContext);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("month/" + dayjs().format("YYYY/MM"));
  }, []);

  return (
    <Fragment>
      {modalObj.type === "page" && <PageModal />}
      {modalObj.type === "pageView" && <PageView />}
      <div className="app">
        <Nav />
        <div className="main">
          <div className="cal">
            <Routes>
              <Route path="/month/:year/:month" element={<Month />} />
              <Route path="/week/:year/:month/:week" element={<Week />} />
              <Route
                path="/day/:year/:month/:week/:day"
                element={<DayView />}
              />
              <Route path="/repo" element={<Repository />} />
            </Routes>
          </div>
        </div>
        <SideTodo />
      </div>
    </Fragment>
  );
}

export default Main;
