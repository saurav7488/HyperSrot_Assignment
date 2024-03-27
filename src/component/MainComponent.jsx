import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import '../Style/MainComponent.css'
import { VscEllipsis } from "react-icons/vsc";
import { useEffect, useState } from "react";
import EditUpdate from "./EditUpdate";
import { deleteOpen, editOpen, setUpdateDelete } from "../redux/Toggle.SLice";
import DeleteRemove from "./DeleteRemove";
import { searchUser } from "../redux/slice";

const MainComponent = () => {
    const tasks = useSelector(state => state.users.tasks)
    const toggle = useSelector(state => state.toggle)

    // console.log(toggle.isEditOpen)
    const dispatch = useDispatch()

    const pendingTasks = tasks.filter(task => task.status === 'Pending');
    const inProgressTasks = tasks.filter(task => task.status === 'In Progress');
    const completedTasks = tasks.filter(task => task.status === 'Completed');
    const deployedTasks = tasks.filter(task => task.status === 'Deployed');
    const deferredTasks = tasks.filter(task => task.status === 'Deferred');

    // const [updateDelete, setUpdateDelete] = useState(null)
    // const [edit,setEdit] = useState(false)
    const [editTask,setEditTask] = useState()
    const [searchData,setSearchData] = useState("")
    const [priority,setPriority] = useState("")


    const handleCLickeditDelete = (id) => {
        // setUpdateDelete(id === updateDelete ? null : id)
         dispatch(setUpdateDelete(id))
    }


    const handleEditUpdate=(task)=>{
        //   console.log(task)
          setEditTask(task)
        //   setEdit(true)
        dispatch(editOpen())

    }

    const handleDeleteRemove=()=>{
         dispatch(deleteOpen())      
    }
    
    useEffect(()=>{
          dispatch(searchUser(searchData))
    },[searchData,dispatch])

    console.log(priority)

    return (
        <div className="main-container">
            <div className="link_component" >
             <div className="FilterByOuterCOntainer" >
                  <div className="FilterByClassnemeheader" ><h1 className="FIlterBYHeader" >Filter BY:</h1> 
                  <input className="INputeHeader" onChange={(e)=>setSearchData(e.target.value)} type="text" placeholder="Assignee Name" /></div>
                  
                  <div className="Seletcdivcontainer" >
                       <h1 className="sortbyCouternc" >Sort By:</h1>
                       <select className="selectByCOntainer"  onChange={(e)=>setPriority(e.target.value)}>
                            <option value="">Priority</option>
                             <option value="P0">P0</option>
                             <option value="P1">P1</option>
                             <option value="P2">P2</option>
                       </select>
                  </div>
             
             </div>
            <Link to={'/add'} className="add-task-link" >Add New Task</Link>
            </div>

            <div className="status_component" >
                <div className="div-maintask" >
                    <h1 className="section-title">Pending</h1>
                    <ul className="task-list">
                        {  pendingTasks.filter((ele)=>{
                              if(searchData.length===0) {
                                 return ele
                              }
                              else{
                                   return ele.assignee.toLowerCase().includes(searchData.toLowerCase())
                              }
                        }).filter((ele)=>{
                              if(priority === "P0"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P1"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P2"){
                                   return ele.priority === priority
                              }
                              else{
                                 return ele
                              }
                        })
                        .map(task => (
                            <>
                                <li className="task-item" key={task.id}>
                                    <div className="div-header-pending" >
                                        <h1 className="pending-task-title" >{task.title}</h1>
                                        <h3 className="pending-task-priority" >{task.priority}</h3>
                                    </div>

                                    <div className="pending-description" >
                                        <p className="pending-para-description" >{task.description}</p>
                                    </div>

                                    <div className="pending-assignee" >
                                        <h3 className="assignee-header" >@{task.assignee}</h3>
                                        <button onClick={() => handleCLickeditDelete(task.id)} className="btn-check" ><VscEllipsis/></button>

                                        {
                                            toggle.updateDelete === task.id && (
                                                <div className="updateDelete-container" >
                                                    <div onClick={()=>handleEditUpdate(task)} >
                                                        Edit
                                                    </div>
                                                    <div onClick={()=>handleDeleteRemove()} >
                                                        Delete
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className="pending-button" >
                                        <button className="pending-btn-pending" >Pending</button>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>

                {/* Render section for In Progress tasks */}
                <div className="div-maintask">
                    <h1 className="section-title InProgress ">In Progress</h1>
                    <ul className="task-list">
                        {inProgressTasks.filter((ele)=>{
                              if(searchData.length===0) {
                                 return ele
                              }
                              else{
                                   return ele.assignee.toLowerCase().includes(searchData.toLowerCase())
                              }
                        }).filter((ele)=>{
                              if(priority === "P0"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P1"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P2"){
                                   return ele.priority === priority
                              }
                              else{
                                 return ele
                              }
                        }).map(task => (
                            <>
                            <li className="task-item" key={task.id}>
                                    <div className="div-header-pending" >
                                        <h1 className="pending-task-title" >{task.title}</h1>
                                        <h3 className="pending-task-priority" >{task.priority}</h3>
                                    </div>

                                    <div className="pending-description" >
                                        <p className="pending-para-description" >{task.description}</p>
                                    </div>

                                    <div className="pending-assignee" >
                                        <h3 className="assignee-header" >@{task.assignee}</h3>
                                        <button onClick={() => handleCLickeditDelete(task.id)} className="btn-check" ><VscEllipsis/></button>

                                        {
                                            toggle.updateDelete === task.id && (
                                                <div className="updateDelete-container" >
                                                    <div onClick={()=>handleEditUpdate(task)} >
                                                        Edit
                                                    </div>
                                                    <div onClick={()=>handleDeleteRemove()} >
                                                        Delete
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className="pending-button" >
                                        <button className="pending-btn-pending" >In Progress</button>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>

                {/* Render section for Completed tasks */}
                <div className="div-maintask">
                    <h1 className="section-title Completed">Completed</h1>
                    <ul className="task-list">
                        {completedTasks.filter((ele)=>{
                              if(searchData.length===0) {
                                 return ele
                              }
                              else{
                                   return ele.assignee.toLowerCase().includes(searchData.toLowerCase())
                              }
                        }).filter((ele)=>{
                              if(priority === "P0"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P1"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P2"){
                                   return ele.priority === priority
                              }
                              else{
                                 return ele
                              }
                        }).map(task => (
                             <><li className="task-item" key={task.id}>
                                    <div className="div-header-pending" >
                                        <h1 className="pending-task-title" >{task.title}</h1>
                                        <h3 className="pending-task-priority" >{task.priority}</h3>
                                    </div>

                                    <div className="pending-description" >
                                        <p className="pending-para-description" >{task.description}</p>
                                    </div>

                                    <div className="pending-assignee" >
                                        <h3 className="assignee-header" >@{task.assignee}</h3>
                                        <button onClick={() => handleCLickeditDelete(task.id)} className="btn-check" ><VscEllipsis/></button>

                                        {
                                            toggle.updateDelete === task.id && (
                                                <div className="updateDelete-container" >
                                                    <div onClick={()=>handleEditUpdate(task)} >
                                                        Edit
                                                    </div>
                                                    <div onClick={()=>handleDeleteRemove()} >
                                                        Delete
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className="pending-button" >
                                        <button className="pending-btn-pending" >Completed</button>
                                    </div>
                                </li></>
                        ))}
                    </ul>
                </div>

                {/* Render section for Deployed tasks */}
                <div className="div-maintask">
                    <h1 className="section-title Deployed">Deployed</h1>
                    <ul className="task-list">
                        {deployedTasks.filter((ele)=>{
                              if(searchData.length===0) {
                                 return ele
                              }
                              else{
                                   return ele.assignee.toLowerCase().includes(searchData.toLowerCase())
                              }
                        }).filter((ele)=>{
                              if(priority === "P0"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P1"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P2"){
                                   return ele.priority === priority
                              }
                              else{
                                 return ele
                              }
                        }).map(task => (
                            <><li className="task-item" key={task.id}>
                                    <div className="div-header-pending" >
                                        <h1 className="pending-task-title" >{task.title}</h1>
                                        <h3 className="pending-task-priority" >{task.priority}</h3>
                                    </div>

                                    <div className="pending-description" >
                                        <p className="pending-para-description" >{task.description}</p>
                                    </div>

                                    <div className="pending-assignee" >
                                        <h3 className="assignee-header" >@{task.assignee}</h3>
                                        <button onClick={() => handleCLickeditDelete(task.id)} className="btn-check" ><VscEllipsis/></button>

                                        {
                                            toggle.updateDelete === task.id && (
                                                <div className="updateDelete-container" >
                                                    <div onClick={()=>handleEditUpdate(task)} >
                                                        Edit
                                                    </div>
                                                    <div onClick={()=>handleDeleteRemove()} >
                                                        Delete
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className="pending-button" >
                                        <button className="pending-btn-pending" >Deployed</button>
                                    </div>
                                </li></>
                        ))}
                    </ul>
                </div>

                {/* Render section for Deferred tasks */}
                <div className="div-maintask">
                    <h1 className="section-title Deferred">Deferred</h1>
                    <ul className="task-list">
                        {deferredTasks.filter((ele)=>{
                              if(searchData.length===0) {
                                 return ele
                              }
                              else{
                                   return ele.assignee.toLowerCase().includes(searchData.toLowerCase())
                              }
                        }).filter((ele)=>{
                              if(priority === "P0"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P1"){
                                   return ele.priority === priority
                              }
                              else if(priority === "P2"){
                                   return ele.priority === priority
                              }
                              else{
                                 return ele
                              }
                        }).map(task => (
                            <><li className="task-item" key={task.id}>
                                    <div className="div-header-pending" >
                                        <h1 className="pending-task-title" >{task.title}</h1>
                                        <h3 className="pending-task-priority" >{task.priority}</h3>
                                    </div>

                                    <div className="pending-description" >
                                        <p className="pending-para-description" >{task.description}</p>
                                    </div>

                                    <div className="pending-assignee" >
                                        <h3 className="assignee-header" >@{task.assignee}</h3>
                                        <button onClick={() => handleCLickeditDelete(task.id)} className="btn-check" ><VscEllipsis/></button>

                                        {
                                            toggle.updateDelete === task.id && (
                                                <div className="updateDelete-container" >
                                                    <div onClick={()=>handleEditUpdate(task)} >
                                                        Edit
                                                    </div>
                                                    <div onClick={()=>handleDeleteRemove()} >
                                                        Delete
                                                    </div>
                                                </div>
                                            )
                                        }

                                    </div>

                                    <div className="pending-button" >
                                        <button className="pending-btn-pending" >Deferred</button>
                                    </div>
                                </li></>
                        ))}
                    </ul>
                </div>
            </div>
            {
                 toggle.isEditOpen && editTask && <EditUpdate task={editTask} />
            }
            {
                toggle.DeleteData && <DeleteRemove id={toggle.updateDelete} />
            }
        </div>
    )
}

export default MainComponent
