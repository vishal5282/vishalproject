import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import "./App.css";

const Login = (props) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {

        setLine(true);
    };

    return (
        <div className="add_style">
            <span onClick={cutIt}>
                <DeleteIcon className="deleteIcon"/>
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>

                {props.text}
                </li>
         </div>
       );
};
export default Login;