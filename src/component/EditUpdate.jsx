// import { Link, useNavigate } from 'react-router-dom'
import '../Style/EditUpdate.css'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/slice'
import { editClose, setUpdateDelete } from '../redux/Toggle.SLice'

const EditUpdate = (editTask) => {
    // console.log(editTask)
    const [utask, setUtask] = useState(editTask.task)

    const handleResetButton = () => {
        setUtask(editTask.task)
    }

    // console.log(editTask.task)

    // const toggle = useSelector(state => state.toggle)

    const handleChange = (e) => {
        setUtask({ ...utask, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
         e.preventDefault()
         dispatch(updateUser(utask))
         dispatch(editClose())
         dispatch(setUpdateDelete(null))
    }
    const handleClickCross=()=>{
         dispatch(editClose())
         dispatch(setUpdateDelete(null))
    }

    return (
        <div className='editUpdateOuterCOntainer' >
            <div className='innerContainer_editUpdate' >
                <div className='header-addtask'>
                    <h1>Edit Task</h1>
                    <button onClick={handleClickCross} className='ccross-header' ><FiX /></button>
                </div>
                <div className='form-data-header' >
                    <form className='form-addtask' onSubmit={handleSubmit} >
                        <div className='div-addtask-title' >
                            <label className='title-name' >Title:</label>
                            <input value={utask.title} onChange={handleChange} className='title-input' type="text" name="title" />
                        </div>
                        <div className='description-div' >
                            <label className='description-name' >Description:</label>
                            <textarea value={utask.description} onChange={handleChange} className='description-text-area' name="description" />
                        </div>

                        <div className='div-select status' >
                            <label className='status-name' >Status:</label>
                            <select value={utask.status} onChange={handleChange} name="status" >
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
                            <input value={utask.assignee} onChange={handleChange} type="text" name="assignee" />
                        </div>
                        <div>
                            <label>Priority:</label>
                            <select value={utask.priority} onChange={handleChange} name="priority" >
                                <option value="">Select Priority</option>
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </div>
                        <div className='submitRest' >
                            <button type="submit">Submit</button>
                            <button onClick={handleResetButton} type="button">Reset</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUpdate


