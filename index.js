function myEach(collection, callback) {

    let iterator

    if(!Array.isArray(collection)) {
       iterator = Object.values(collection)
    } else {
        iterator = collection
    }

    let newCollection = []

    for(let i = 0; i < iterator.length; i++){

        newCollection.push(callback(iterator[i]))
    }
    
    return collection
}

function myMap(collection, callback) {
    let iterator

    if(!Array.isArray(collection)) {
       iterator = Object.values(collection)
    } else {
        iterator = collection
    }

    let newCollection = []

    for(let i = 0; i < iterator.length; i++){

        newCollection.push(callback(iterator[i]))
    }
    
    return newCollection
}

function myReduce(collection, callback, acc) {
    let newArr = isArray(collection);

    if(acc === undefined) {
        acc = newArr[0]
        for(let i = 1; i < newArr.length; i++) {
            acc = callback(acc, newArr[i], collection)
        }
    }else {
        for(let i = 0; i < newArr.length; i++) {
            acc = callback(acc, newArr[i], collection)
        }
    }

    return acc
}



function myFind(collection, predicate) {

    let newArr = isArray(collection);
    let found

    for(let i = 0; i < newArr.length; i++){
        if(predicate(newArr[i]) === true) {
            
            found = newArr[i]
            break
        }
    }
    return found
   
}

function myFilter(collection, predicate) {

    let newArr = isArray(collection);
    let filteredArr = []

    for(let i = 0; i < newArr.length; i++) {
        if(predicate(newArr[i]) === true){
            filteredArr.push(newArr[i])
        }
    }

    return filteredArr

}

function mySize(collection) {

    let newArr = isArray(collection);

    return newArr.length
    
}

function myFirst(array, n) {

    if(n === undefined){

        return array[0]
    } else {
        const newArr = [
            ...array.slice(0,n)
        ]
      return  newArr
    }
}
   
function myLast(array, n) {

    if(n === undefined){
        return array[array.length-1]
    } else {
        const newArr = [
            ...array.slice(-n)
        ]
      return  newArr
    }
   
}

function myKeys(object){

    let returnArr = []

    for(const key in object){
    
        returnArr.push(key)
    }

    return returnArr
   
}

function myValues(object){

    let retArr = []

    for(const value in object){
    
        retArr.push(object[value])
    }    

    return retArr
    
}

function isArray(col) {
    let newArr;

    if(Array.isArray(col)){
        newArr = col
    } else {
        newArr = Object.values(col)
    }

    return newArr
}