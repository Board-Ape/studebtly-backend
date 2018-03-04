const favorites = (store = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITE':
    return [...store, action.favorites.college];
  case 'DELETE_FAVORITE':
    return [...store.filter(fav => {
      console.log('Inside reducer fav', fav);
      console.log('Inside reducer action', action.favorites.college);
      fav.name !==
      action.favorites.college.name;
    })
    ];
  default:
    return store;
  }
};

export default favorites;
