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

export {
    wordSlice
}