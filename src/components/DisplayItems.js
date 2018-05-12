import React from 'react';

const DiplayItems = (props) =>{
    if(props){
    return(
        (props.login)?(
        <div>
            <h2>Details:</h2>
            <h4>Login : {props.login}</h4>
            <h4>id : {props.id}</h4>
            <h4>Status : {props.status}</h4>
        </div>):null
    );
}
}

export default DiplayItems;