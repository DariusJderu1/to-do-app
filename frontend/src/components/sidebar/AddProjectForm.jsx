import { FaArrowUpRightDots } from "react-icons/fa6";
import AddButton from "../ui/AddButton.jsx";
import CancelButton from "../ui/CancelButton.jsx";

function AddProjectForm({handleOpenForm, openForm}) {

    return (

        <div>
            <span><FaArrowUpRightDots /></span>

            <form>
                <input type="text" />

                <div>
                    <AddButton />
                    <CancelButton handleOpenForm={handleOpenForm} openForm={openForm} />
                </div>
            </form>
        </div>
    );
}

export default AddProjectForm;