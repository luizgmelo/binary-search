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

