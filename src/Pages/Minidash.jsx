import React, { useState, useEffect } from 'react';

const Minidash = () => {
  const [user, setUser] = useState({ name: '' });
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [pendingList, setPendingList] = useState([]);
  const [overdueToDo, setOverdueToDo] = useState([]);
  const [overdueInProgress, setOverdueInProgress] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const u = localStorage.getItem('user');
    if (u) setUser(JSON.parse(u));
  }, []);

  useEffect(() => {
    fetch('completed').then(r => r.json()).then(d => setCompletedTasks(d.count));
    fetch('pending').then(r => r.json()).then(d => { setPendingTasks(d.count); setPendingList(d.tasks); });
    fetch('overdue').then(r => r.json()).then(d => {
      setOverdueToDo(d.todo);
      setOverdueInProgress(d.inProgress);
    });
    fetch('notifications').then(r => r.json()).then(setNotifications);
  }, []);

  const handleCreateTask = () => {
    // task ko logic yetaa
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">WELCOME, {user.name.toUpperCase()}!</h2>
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card shadow-sm p-3 rounded">
            <div className="fw-semibold">Completed Tasks</div>
            <div className="fs-3">{completedTasks}</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 rounded">
            <div className="fw-semibold d-flex justify-content-between align-items-center">
              <span>Pending Tasks</span>
              <button className="btn btn-sm btn-success" onClick={handleCreateTask}>
                + Create Task
              </button>
            </div>
            <div className="fs-3">{pendingTasks}</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 rounded">
            <div className="fw-semibold">Overdue Tasks</div>
            <div className="fs-3">{overdueToDo.length + overdueInProgress.length}</div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded">
            <h5>Tasks Overview</h5>
            <ul className="list-group">
              {pendingList.slice(0,1).map((t,i) => (
                <li key={i} className="list-group-item d-flex align-items-center">
                  <div className="me-auto">{t.title}</div>
                  <img src={t.assigneeAvatar} alt={t.assigneeName} className="rounded-circle" style={{width: '30px', height: '30px'}}/>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded">
            <h5>Overdue</h5>
            <div className="mb-2">
              <strong>To Do</strong>
              <ul className="list-group">
                {overdueToDo.map((t,i) => <li key={i} className="list-group-item">{t.title}</li>)}
              </ul>
            </div>
            <div>
              <strong>In Progress</strong>
              <ul className="list-group">
                {overdueInProgress.map((t,i) => <li key={i} className="list-group-item">{t.title}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3 rounded" style={{ height: '100%' }}>
            <h5>Notifications</h5>
            <ul className="list-group">
              {notifications.map((n,i) => (
                <li key={i} className="list-group-item">{n.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minidash;
