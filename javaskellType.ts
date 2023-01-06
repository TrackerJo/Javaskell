// function append<T>(array: T[], value: T): T[] {
//     return [...array, value]
// }

export function TranslateResults<TReturn extends string | number | symbol, TTranslation>(funcResult: TReturn, translation: Record<TReturn, TTranslation>, error: (s: string) => any): TTranslation{
    
    if(!translation[funcResult]) error(`No translation for result: ${String(funcResult)}`)
    
    return translation[funcResult]
}

export function PatternSplitting(string: string, pattern: string[], type: string){
    if(type.toLowerCase() == 'words'){
        let split = string.split(' ')
        let result: Record<any, any> = {}
        for(let i = 0; i < split.length; i++){
            result[pattern[i]] = split[i]
        }
        return result
    }
}