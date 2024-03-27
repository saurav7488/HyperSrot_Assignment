import { useState } from 'react';
import '../Style/AddTask.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slice';
import { Link, useNavigate } from 'react-router-dom';
import { FiX } from "react-icons/fi";

const AddTask = () => {
  function generateUniqueId() {
    const timestamp = new Date().getTime()
    const randomNum = Math.random() * 1000
    return `${timestamp}-${randomNum}`
  }
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    assignee: '',
    priority: '',
    id:generateUniqueId()
  });

  //  console.log(formData)

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(formData))
    navigate('/')
  };

  return (
    <div className="modelBackground">
      <div className="modealCOntainer">
        <div className='header-addtask'>
          <h1>Create A Task</h1>
          <Link to={'/'} className='ccross-header' ><FiX /></Link>
        </div>
          <div className='form-data-header' >
          <form onSubmit={handleSubmit} className='form-addtask' >
            <div className='div-addtask-title' >
              <label className='title-name' >Title:</label>
              <input className='title-input' type="text" name="title" value={formData.title} onChange={handleFormData} />
            </div>
            <div className='description-div' >
              <label className='description-name' >Description:</label>
              <textarea className='description-text-area' name="description" value={formData.description} onChange={handleFormData} />
            </div>
            
            <div className='div-select status' >
              <label className='status-name' >Status:</label>
              <select name="status" value={formData.status} onChange={handleFormData}>
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deployed">Deployed</option>
                <option value="Deferred">Deferred</option>
              </select>
            </div>
            <div>
              <label>Assignee:</label>
              <input type="text" name="assignee" value={formData.assignee} onChange={handleFormData} />
            </div>
            <div>
              <label>Priority:</label>
              <select name="priority" value={formData.priority} onChange={handleFormData}>
                <option value="">Select Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
              </select>
            </div>
            <button type="submit">Add Task</button>
          </form>
          </div>
        </div>
    </div>
  );
};

export default AddTask;
