import React, { Component } from 'react';
import styles from '../css/Task.module.css';

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {FaCheck} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';

class Task extends Component{
    constructor(props){
        super(props);
        this.state={
            desc: this.props.name,
            isCompleted: this.props.isCompleted
        }
    }
    static getDerivedStateFromProps(props, state){
        if(props.name != state.desc){
            return {
                desc: props.name,
                isCompleted: props.isCompleted
            }
        }
        return null;
    }
    render(){
        let button;
        let completeFunction = this.props.completeFunction;
        let removeFunction = this.props.removeFunction;

        if(!this.state.isCompleted){
            button = <Button variant="primary" className={styles.taskButton} onClick={e => completeFunction(this)}><FaCheck className={styles.taskIcon}/></Button>;
        }else{
            button = <Button variant="primary" className={styles.taskButton} onClick={e => removeFunction(this)}><FaTrash className={styles.taskIcon}/></Button>;
        }
        return (
            <Row className={styles.taskRow}>
                <Col xs lg="8" className="bg-white rounded border border-light">
                    <div className={styles.taskContents}>
                        <p>{this.props.name}</p>
                    </div>
                </Col>
                <Col xs lg="2" className={styles.buttonColumn.concat(" float-right")}>
                    {button}
                </Col>
            </Row>
        )
    }
}

export default Task;