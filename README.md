<h2 align="center"><u>Javaskell</u></h2>

<h4 align="center"> For those who love haskell and javascript </h4>

<p align="center">
<br>
    <img src="https://img.shields.io/badge/Open%20Source-Yes-orange?style=flat-square">
    <img src="https://img.shields.io/badge/Made%20In-USA-green?style=flat-square">
    <img src="https://img.shields.io/badge/Written%20In-Typescript and Javascript-blue?style=flat-square">
</p>

### [+] Description
Implements useful features from haskell to javascript and typescript

### [+] Features
**Pattern Matching**

Implements a simple form of haskell pattern matching into javascript.\
Pattern Matching in this is called Translate Results, where you will input the function results and a translation key and the function will return the translated result. 
<br />
`TranslateResults(funcResult, translation, error)`\
Input:
<br />
    Result of function,
<br />
    Translations ex. `{1: "Win", 2: "Lose"}`,
<br />
    Error callback
<br />
Output:
<br />
    Translated result
          <br />
**Pattern Splitting**

Split a string based on a pattern

`PatternSplitting(string, pattern, type)`\
Input:
<br />
    String to split,
<br />
    Pattern ex. `["name", "age"]`,
<br />
    Splitting Type, only words is currently available
<br />
Output:
<br />
    Split Object ex. `{name: "TrackerJo", age: 100}`\
Split Type: Words\
Each word in the string to split is assigned a key based on the pattern\
Example:
```
 let stringToSplit = "TrackerJo 100"
 let pattern = ["name","age]
 let type = "words"
 let result = PatternSplitting(stringToSplit, pattern, type) //Result would be {name: "TrackerJo", age: 100}
