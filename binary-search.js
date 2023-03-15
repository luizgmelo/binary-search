list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

secondList = [0, 1, 40, 44, 53, 62, 80, 92, 99, 123, 124]

thirdList = ['Ana', 'Carlos', 'Dora', 'Guilherme', 'Ingrid', 
'Joelma', 'Joelson', 'Kaio', 'Leonardo', 'Lucas', 'Marcos', 
'Orlando', 'Richard', 'Vitoria', 'Willamy']

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
    return `${target} don't exists`
}
    
console.log(binarySearch(list, 123))
console.log(binarySearch(secondList, 80))
console.log(binarySearch(thirdList, "Leonardo"))