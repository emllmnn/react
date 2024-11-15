import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './form.css';

export default function Form({handleChange, handleSubmit, novaTarefa}){
  return(
    <form onSubmit={handleSubmit} action='#' className='form'>
            <input
            id='input'
            className='concert-one-regular'
            onChange={handleChange}
            type='text'
            value={novaTarefa}
            />
            <button type='submit' id='button'>
              <FaPlus />
            </button>
          </form>
  );
}


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
