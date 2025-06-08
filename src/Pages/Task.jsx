import React, { useState } from 'react';

const Task = () => {
  const [tasks, setTasks] = useState([
    { name: 'Design homepage layout', dueDate: '2025-06-05', status: 'Complete' },
    { name: 'Fix login issue', dueDate: '2025-06-05', status: 'Overdue' },
    { name: 'Write blog post draft', dueDate: '2025-06-05', status: 'Pending' }
  ]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Complete':
        return <span className="badge bg-dark">Complete</span>;
      case 'Overdue':
        return <span className="badge bg-danger">Overdue</span>;
      case 'Pending':
        return <span className="badge bg-primary">Pending</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const handleAddTask = () => {
    if (newTask && newDate) {
      const today = new Date().toISOString().split('T')[0];
      let status = 'Pending';
      if (newDate < today) status = 'Overdue';

      setTasks([...tasks, { name: newTask, dueDate: newDate, status }]);
      setNewTask('');
      setNewDate('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-dark fw-bold mb-4">TASK LIST</h3>

      <div className="row mb-3">
        <div className="col-md-5">
          <input type="text" placeholder="Enter task" className="form-control" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        </div>
        <div className="col-md-3">
          <input type="date" className="form-control" value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
        </div>
        <div className="col-md-2">
          <button className="btn btn-success w-100" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>

      <table className="table table-bordered rounded shadow-sm bg-white">
        <thead className="table-light">
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th style={{ width: '80px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted">No tasks available</td>
            </tr>
          ) : (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</td>
                <td>{getStatusBadge(task.status)}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteTask(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Task;


























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Task = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [dueDate, setDueDate] = useState('');

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('');
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const handleAddTask = async () => {
//     if (!newTask || !dueDate) return alert('Please fill both fields');

//     try {
//       await axios.post('', {
//         title: newTask,
//         dueDate,
//         status: 'Pending'
//       });
//       setNewTask('');
//       setDueDate('');
//       fetchTasks();
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const getStatusBadge = (status) => {
//     switch (status.toLowerCase()) {
//       case 'complete':
//         return 'bg-success';
//       case 'overdue':
//         return 'bg-danger';
//       default:
//         return 'bg-primary';
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h3 className="fw-bold text-success mb-4">TASK LIST</h3>

//       <div className="mb-4 d-flex gap-2">
//         <input
//           type="text"
//           placeholder="Task name"
//           className="form-control"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//         />
//         <input
//           type="date"
//           className="form-control"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//         />
//         <button className="btn btn-success" onClick={handleAddTask}>
//           Add Task
//         </button>
//       </div>

//       <table className="table table-bordered text-center shadow-sm">
//         <thead className="table-light">
//           <tr>
//             <th>Task</th>
//             <th>Due Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.length > 0 ? (
//             tasks.map((task, index) => (
//               <tr key={index}>
//                 <td>{task.title}</td>
//                 <td>{task.dueDate}</td>
//                 <td>
//                   <span className={`badge ${getStatusBadge(task.status)} px-3 py-2`}>
//                     {task.status}
//                   </span>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-muted">
//                 No tasks available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Task;
