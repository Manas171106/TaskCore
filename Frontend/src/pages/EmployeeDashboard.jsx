import React from "react";
import Headers from "../components/Headers";
import "../styles/employeepage.css";

const EmployeeDashboard = () => {
  return (
    <div className="employee">
      <Headers />
      <div className="employee-hero">
        <div className="taskstatus">
          <div className="tasks new">
            <em>
              <h3>new</h3>
              <h3>2</h3>
            </em>
          </div>
          <div className="tasks completed">
            <em>
              <h3>Completed</h3>
              <h3>2</h3>
            </em>
          </div>
          <div className="tasks failed">
            <em>
              <h3>Failed</h3>
              <h3>0</h3>
            </em>
          </div>
          <div className="tasks all">
            <em>
              <h3>All Tasks</h3>
              <h3>4</h3>
            </em>
          </div>
        </div>

        <div className="task-slider">
          <div className="task new">
            <div className="top">
              <h3>High</h3>
            </div>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
            <div className="bottom">
              <button>
                ✔
              </button>
              <button>❌</button>
              <h3>20 jun,2025</h3>
            </div>
          </div>
          <div className="task new">
            <div className="top">
              <h3>High</h3>
            </div>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
            <div className="bottom">
              <button>
                ✔
              </button>
              <button>❌</button>
              <h3>20 jun,2025</h3>
            </div>
          </div>
          <div className="task new">
            <div className="top">
              <h3>High</h3>
            </div>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, consequatur!</p>
            <div className="bottom">
              <button>
                ✔
              </button>
              <button>❌</button>
              <h3>20 jun,2025</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
