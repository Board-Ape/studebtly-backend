import React, {Component} from 'react';
import './CollegesCard.css';
import PropTypes from 'prop-types';

const CollegesCard = ({ colleges }) => {
  const { name, id, tuition_in_state, tuition_out_of_state, city, state, zip, url } = colleges;
  return (
    <div className='all-cards-container' id={id}>
      <div className='all-cards'>
        <h1 className='school school-name'>{name}</h1>
        <h3 className='school location school-state'>
          <img className='placeholder-icon' src={require('./placeholder.png')}/> {city}, {state}. {zip}
        </h3>
        <h2 className='school school-in-state-tuition'>Tuition In-State: ${tuition_in_state}</h2>
        <h2 className='school school-out-of-state-tuition'>Tuition Out-Of-State: ${tuition_out_of_state}</h2>
        <div className='school url'>
          <a className='location school-url' href={url} target='_blank'>Visit Their Website</a>
        </div>
      </div>
    </div>
  );
};

CollegesCard.propTypes = {
  bottle: PropTypes.object
};

export default CollegesCard;
