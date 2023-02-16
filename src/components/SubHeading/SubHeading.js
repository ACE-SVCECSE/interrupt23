import React from "react";
import './SubHeading.css';

function SubHeading ({title}) {
    return<>
        <div style={{ marginBottom: '1rem'}}>
            <h1 className="app__header">{title}</h1>
        </div>
    </>
}

export default SubHeading;