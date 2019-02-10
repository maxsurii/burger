import React from 'react';
import styles from './Person.css';
import PropTypes from 'prop-types'


const person = ( props ) => {



    return (
        <div  className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

person.PropTypes={
    click:PropTypes.func,
    age:PropTypes.number,
    changed:PropTypes.func,
    name:PropTypes.string

}

export default person