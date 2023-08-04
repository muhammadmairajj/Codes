// Remove Duplicate Element from Array
let duplicateValue = [1, 1, 2, 3, 4, 5, 2, 6, 6];

const uniqueNumbers = duplicateValue.filter((element, index, array) => {
    return array.indexOf(element) == index;
})

console.log('Duplicate Element Remove from Array >>> ', uniqueNumbers);