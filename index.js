const groupArrayElements = (arrayElements, chunkSize) => {
    try {
        if (chunkSize < 1) {
            throw "ChunkSize should be a positive integer"
        }
        const finalArray = [];
        let chunkArray = [];

        for (let i = 0; i < arrayElements.length; i++) {
            if (chunkArray.length < chunkSize) {
                chunkArray.push(arrayElements[i]);
            } else {
                finalArray.push(chunkArray);
                chunkArray = [arrayElements[i]];
            }
            if (i == arrayElements.length - 1 && chunkArray.length > 0) {
                finalArray.push(chunkArray);
            }
        }
        return finalArray;
    } catch (err) {
        console.log(err);
        return [];
    }
}

console.log(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 3))
