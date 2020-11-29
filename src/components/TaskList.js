import React, { Component } from 'react';

import Task from './Task';

class TaskList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let tasks = this.props.tasks;
        let rendered_tasks;
        if(this.props.completed){
            rendered_tasks = tasks.map(task => {
                if(task.isCompleted){
                    return <Task
                        name={task.desc}
                        isCompleted={task.isCompleted}
                        completeFunction={this.props.completeFunction}
                        removeFunction={this.props.removeFunction}>
                        </Task>
                }
            });
        }else{
            rendered_tasks = tasks.map(task => {
                if(!task.isCompleted){
                    return <Task
                    name={task.desc}
                    isCompleted={task.isCompleted}
                    completeFunction={this.props.completeFunction}
                    removeFunction={this.props.removeFunction}>
                    </Task>
                }
            })
        }
        return (
            <div>
                {rendered_tasks}
            </div>
        )
    }
}

export default TaskList;