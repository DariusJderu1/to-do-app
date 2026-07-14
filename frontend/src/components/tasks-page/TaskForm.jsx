import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";

function TaskForm({mode, openForm, handleOpenForm}) {

    return (

        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
            </div>

            <div>
                <label htmlFor="description" id="description">Description(optional):</label>
                <textarea id="description"></textarea>
            </div>

            <div>
                <label htmlFor="date">Date(optional):</label>
                <input type="date" id="date"/>
            </div>

            <div>
                <AddButton text={mode === "add" ? "Add" : "Save"}/>
                <CancelButton openForm={openForm} handleOpenForm={handleOpenForm}/>
            </div>
        </form>
    );
}

export default TaskForm;