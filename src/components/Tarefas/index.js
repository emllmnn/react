import React from 'react';
import { FaCalendarCheck, FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './tarefas.css';

export default function Tarefas({tarefas, handleDelete, handleEdit, handleDone}){
  return(
    <ul className='tarefas'>
    {
      tarefas.map((tarefa, index)=> (
        <li key={tarefa} className='concert-one-regular'>
          {tarefa}
          <div>
            <FaEdit
            onClick={(e) => handleEdit(e, index)}
            className='edit'/>
            <FaWindowClose
            onClick={(e) => handleDelete(e, index)}
            className='delete'/>
            <FaCalendarCheck
            onClick={(e) => handleDone(e, index)}
            className='done' />
          </div>
        </li>
      ))
    }
  </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
}
