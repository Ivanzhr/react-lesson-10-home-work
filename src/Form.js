import { useDispatch } from 'react-redux'; 
import { useRef } from 'react';

export default function CreateForm() {

    const despatch = useDispatch()

    const inputN = useRef(null)
    const inputD = useRef(null)
    const inputDet = useRef(null)
    const inputData = useRef(null)
    const inputT = useRef(null)

    function handlerClick(e) {
        e.preventDefault();

        if(inputN.current.value && inputD.current.value && inputData.current.value && inputT.current.value !== '') {
            const title = inputN.current.value ;
            const desc = inputD.current.value;
            const details = inputDet.current.value;
            const data = inputData.current.value;
            const type = inputT.current.value;

            despatch({type: "ADD", payload: {title, desc, details, data, type}});
        }
        console.log(inputT.current.value)
    }

    return (
        <div className="form">
            <form action="">
                <input className='name' type="text" placeholder='Назва' ref={inputN}/>
                <input className='desc' type="text" placeholder='Опис' ref={inputD}/>
                <input className='details' type="text" placeholder='Детальний опис' ref={inputDet}/>
                <input className='data' type="text" placeholder='Дата' ref={inputData}/>
                <select id="eventType" ref={inputT}>
                    <option value="concert">Концерт</option>
                    <option value="film">Фільм</option>
                    <option value="news">Захід</option>
                    <option value="theatre">Вистава</option>
                </select>
                <button onClick={handlerClick}>Add</button>
            </form>
         </div>
    )
}