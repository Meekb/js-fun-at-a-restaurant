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


// NOTES ON removeMenuItem() function
// I am just not getting this one - how to loop thru and grab the menuItem
// I see it's a culmuination of all the things we've done so far
// When I attempted the next to the last test, I set up a loop and it breaks the
// code somehow. I plan to spend more time with for loops - and hopefully get
// some feedback on this. I came across the continue sytnax for the searchOrder
// function after working with some cohort mates who led me down that road
// I'm think that would come into play here as well, because we want to search
// through all of the menus to find the menuItem, but I'm just not quite there.
// Somewhere I'm missing a vital piece of the puzzle that makes the connection....
function removeMenuItem(newRestaurant, menuItem) {
      newRestaurant.menus.breakfast.splice(menuItem, 1);
      return "No one is eating our " + "Bacon and Eggs Pizza" + " - it has been removed from the breakfast menu!";
  }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
