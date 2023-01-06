// function append<T>(array: T[], value: T): T[] {
//     return [...array, value]
// }

export function TranslateResults<TArgs extends any[], TReturn extends string | number | symbol, TTranslation>(func: (...args: TArgs) => TReturn, funcParams: TArgs, translation: Record<TReturn, TTranslation>, error: (s: string) => any): TTranslation{
    let result: TReturn = func(...funcParams)
    if(!translation[result]) error(`No translation for result: ${String(result)}`)
    
    return translation[result]
}

export function PatternSplitting(string: string, pattern: string[], type: string){
    if(type.toLowerCase() == 'words'){
        let split = string.split(' ')
        let result: Object = {}
        for(let i = 0; i < split.length; i++){
            result[pattern[i]] = split[i]
        }
        return result
    }
}