import React from 'react';

const NewForm = (props) =>{
    return(
        <form onSubmit={props.apirequest}>
            <br/>
            <input type="text" placeholder="User Name" name="user"/><br/><br/>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default NewForm;