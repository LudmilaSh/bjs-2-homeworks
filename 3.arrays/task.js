function compareArrays(arr1, arr2) {
  return isEquals = arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
  
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, array) => acc + item /array.length, 0);
   
}