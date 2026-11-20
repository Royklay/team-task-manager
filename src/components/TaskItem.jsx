function taskItems({task, onDelete}){
    return(
        <>
        <div>
            <h3> {task.title}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <button onClick={()=> onDelete(task.id)}>Delete Task</button>
        </div>
        </>
    )
}
export default React.memo(taskItems)