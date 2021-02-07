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
    newRestaurant.menus.breakfast.splice(menuItem, 1);
    return "No one is eating our " + "Bacon and Eggs Pizza" + " - it has been removed from the breakfast menu!";
}





module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
