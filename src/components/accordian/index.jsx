import { useState } from "react"
import data from "./data";
import "./style.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multipleSelected, setMultipleSelected] = useState([]);
    const [enableMultiSelection, setenableMultiSelection] = useState(false);

    function handleSingleSelection(itemId) {
        selected !== itemId ? setSelected(itemId) : setSelected([null]);
    }
    function handleMultipleSelection(itemId) {
        setMultipleSelected(prevSelected => {
            if (prevSelected.includes(itemId)) {
                return prevSelected.filter(item => item !== itemId);
            } else {
                return [...prevSelected, itemId];
            }
        });
    }
    return <div className="wrapper">
        <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>Multiple selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multipleSelected.includes(dataItem.id) ? <div className="content">{dataItem.answer}</div> : null :
                                selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null
                        }
                    </div>) : <div>No data found!</div>
            }
        </div>
    </div>
}