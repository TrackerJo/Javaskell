export function TranslateResults(func,funcParams, translation, error){
    let result = func(...funcParams)
    if(!translation[result]) error("No translation for result: " + result)
    
    return translation[result]
}

export function PatternSplitting(string, pattern, type){
    if(type.toLowerCase() == 'words'){
        let split = string.split(' ')
        let result = {}
        for(let i = 0; i < split.length; i++){
            result[pattern[i]] = split[i]
        }
        return result
    }
}