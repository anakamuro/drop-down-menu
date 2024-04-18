import React, {useState} from 'react'
import data from "./data.json";
import "./Dropdown.css"

function Dropdown() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
     <button className="drop-btn"
       onClick={() => setIsOpen((isOpen) => !isOpen)}>
        Dropdown
        {!isOpen ? (
            <i class="fa-solid fa-sort-down"></i>
        ) : (
            <i class="fa-solid fa-sort-up"></i>
        )}
       </button>

       {isOpen && (
          <div className="items">
             {data.map((item, i) => (
                <div className="item">
                    <h3>{item.city}</h3>
                    <h3>{item.emoticon}</h3>
                </div>
             ))}
          </div>
       )}
        </div>
  )
}

export default Dropdown