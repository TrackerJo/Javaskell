export function TranslateResults(funcResult, translation, error){

    
    if(!translation[funcResult]) error(`No translation for result: ${String(funcResult)}`)
    
    return translation[funcResult]
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