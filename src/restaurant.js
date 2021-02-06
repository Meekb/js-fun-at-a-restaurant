function createRestaurant(name) {
  newRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
  return newRestaurant;
}

function addMenuItem(newRestaurant, menuItem) {
  if (menuItem.type === 'breakfast' && newRestaurant.menus.breakfast.includes(menuItem) === false) {
    newRestaurant.menus.breakfast.push(menuItem);
    return newRestaurant;
  } else if (menuItem.type === 'lunch' && newRestaurant.menus.lunch.includes(menuItem) === false) {
    newRestaurant.menus.lunch.push(menuItem);
    return newRestaurant;
  } else if (menuItem.type === 'dinner' && newRestaurant.menus.dinner.includes(menuItem) === false) {
    return newRestaurant.menus.dinner.push(menuItem);
  } else {
    return newRestaurant;
  }
}

function removeMenuItem(newRestaurant, menuItem) {
  if (menuItem.type === 'breakfast') {
    newRestaurant.menus.breakfast.pop(menuItem);
    return `No one is eating our ${menuItem} - it has been removed from the breakfast menu!`;
  } else if (menuItem.type === 'dinner') {
    newRestaurant.menus.dinner.pop(menuItem);
    return `No one is eating our ${menuItem} - it has been removed from the dinner menu!`;
  }
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
