import { useContext } from "react";
import myModal from "./useModal";

export default function CreateModal() {

    const {modal, setModal} = useContext(myModal)
    console.log(modal)

    const handlerClose = () => {
        setModal(null)
      }

    if(!modal){return null}
    return (
        <div className="overlay" onClick={handlerClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h1>{modal.title}</h1>
                <div className="inform">
                    <p>{modal.detailsdescription}</p>
                    <p>{modal.data}</p>
                </div>
                <span onClick={handlerClose}>x</span>
            </div>
        </div>
    )
    
}


    