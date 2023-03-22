function searchLow(list, length) {
    let lowIndex = 0
    let low = list[lowIndex]

    for (let i = 0; i < length; i++) {
        if (list[i] < low) {
            lowIndex = i
            low = list[lowIndex]
        }
    }
    return lowIndex
}

function selectionSort(list) {
    const newList = []; 
    const listLength = list.length

    for (let j = 0; j < listLength; j++) {
        let index = searchLow(list, listLength)
        let lowElement = list.splice(index, 1)[0]
        newList.push(lowElement)  
    }
    return newList
}  

function binarySearch(list, target) {
    let left = 0
    let right = list.length - 1

    while (left <= right) {
        let middlePosition = Math.floor((left + right) / 2)
        let middleElement = list[middlePosition]

        if (middleElement == target) {
            return middlePosition
        }
        
        if (middleElement < target) {
            left = middlePosition + 1
        } else if (middleElement > target) {
            right = middlePosition - 1
        }
    }
    return -1 
}

