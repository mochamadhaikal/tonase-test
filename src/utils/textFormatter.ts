interface WordSliceProps {
    word: string
    totalWord: number
}

function wordSlice({ word, totalWord }: WordSliceProps) {
    const words = word.split(' ')

    let finalWord = words.splice(0, totalWord).join(' ')

    if(totalWord < words.length) {
        finalWord+= '...'
    }

    return finalWord
}

function isJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export {
    wordSlice,
    isJsonString,
    getRandomArbitrary
}