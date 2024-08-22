function solution(str: string): string[] {
    const splitString = str.split("")

    
    if (splitString.length % 2 != 0){
        splitString.push("_")
    }
        
    
    const finalString = []

    for (let i = 0; i < splitString.length; i++) {
        if (i % 2 != 0){
            finalString.push(splitString[i-1] + splitString[i])
        } else {
            continue
        }
    }

    return finalString
}

console.log(solution("abcde"))