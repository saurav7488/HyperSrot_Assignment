import { FiX } from "react-icons/fi"
import '../Style/DeleteRemove.css'
import { useDispatch, useSelector } from "react-redux"
import { deleteClose, setUpdateDelete } from "../redux/Toggle.SLice"
import { deleteUser } from "../redux/slice"
const DeleteRemove = () => {
  // console.log(id)  
  const dispatch = useDispatch()
  const toggle = useSelector(state => state.toggle)
  const ID = toggle.updateDelete
  const [state] = useSelector(state => state.users.tasks) 
  // console.log(state.title)
  const handleCrossDelete=()=>{
      dispatch(deleteClose())
      dispatch(setUpdateDelete(null))
  }
  const handleYesButton=()=>{
      dispatch(deleteUser({ID}))
      dispatch(deleteClose())
      dispatch(setUpdateDelete(null))
  }
  return (
    <div className="modelBackgroundEDIT">
         <div className="modealCOntainerEDIT">
                <div className="DeleteTaskContainer" >
                     <h1 className="headerDeleteTask" >DELETE TASK</h1> 
                     <button onClick={handleCrossDelete} className='ccross-header' ><FiX /></button>
                </div>

                <div className="outerCOntainerDeleteRemove" >
                <div className="paraheaders" >
                      <p className="paramain" >Do You Wish to Delete Task</p>
                </div>

                <div className="taskDeleteREmove" >
                       <h1 className="deleteRemoveTask" >{state.title}</h1> 

                       <button onClick={handleYesButton} className="DeleteREmoveYes" >Yes</button> 
                       <button onClick={handleCrossDelete} className="DeleteRemoveNi" >No</button>
                </div>
                </div>
         </div>
    </div>
  )
}

export default DeleteRemove
