import React from 'react';
import { connect } from 'react-redux';
import CollegesCard from '../CollegesCard/CollegesCard';
import PropTypes from 'prop-types';

export const FavoritesPage = (props) => {
  const favoriteCards = props.favorites.map((college, index) => {
    return <CollegesCard
      key={index}
      college={college}
    />;
  });
  return (
    <div>
      <div className='favorite-cards'>{favoriteCards}</div>
    </div>
  );
};

export const mapStateToProps = (store) => {
  return {
    favorites: store.favorites
  };
};

export default connect(mapStateToProps, null)(FavoritesPage);

FavoritesPage.propTypes = {
  favorites: PropTypes.array
};
