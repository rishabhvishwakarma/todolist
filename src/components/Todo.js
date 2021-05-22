import React,{useState} from 'react';
import "../App.css";
import {FaTrashAlt} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";


const Todo = () => {

    const[inputData,setInputData] = useState('');

    const[items,setItems] = useState([]);

    const addItems = () => {
        if(!inputData) {

        }else{
            setItems([...items,inputData]);
        }
    }

    const deleteItem=(id) =>{
        const updateItems = items.filter((elem, ind) =>{
            return ind !== id;
        });
        setItems(updateItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    return(
        <>
            <div className="main-div">
                <div className="child-div">
                   <header>
                        <h1>Todo List</h1>
                    </header> 
                    <p>Enter your text here</p>
                 <div className="addItems">
                     <input type='text' placeholder="Add your task..." 
                     value={inputData} 
                     onChange={(e) => setInputData(e.target.value)} 
                     />
                     < FaPlus className="Add" title="Add Task" onClick={addItems}/>
                </div>
                    <div className="showItems">
                        {
                            items.map((elem,ind) => {
                                return(
                                    <div className ="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    <FaTrashAlt className="trash" title="Remove Task" onClick={() => deleteItem(ind)}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="REMOVE" onClick={removeAll}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo