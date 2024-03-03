import myModal from "./useModal";
import { useContext } from "react";

function CreateEvent({title, data, desc, detailsdescription}) {
    const {modal, setModal} = useContext(myModal)

    const handlerOpen = () => {
        setModal({title, data, detailsdescription})
      }

    return(
        <div className="event" onClick={handlerOpen}>
            <div className="event_title">{title}</div>
            <div className="event_desc">{desc}</div>
            <div className="event_data">{data}</div>
        </div>
    )
}

export default CreateEvent