What is Regex?
Short for regular expressions, Regex allows you to check a string of characters for matches. Regex can be written in any coding language - JavaScript, Python, Go etc., - but the purpose is the same - to check patterns for matches.

Pros

- Allows checks on series of characters for "matches"

Cons

- Very boring, not foolproof, not easy - you can get things wrong and validate incorrectly

Tutorials: Net Ninja [https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD]
GH Code[https://github.com/iamshaunjp/regex-playlist]
Tools - RegEx101 [https://regex101.com/]

Patterns: Tutorials 1-5
`/ /` start and finishes the statement
`/` exact match - only the first occurance is matched
`/g` global - matches all instances
`/i` case insensitive
`/[]` match - character sets
`[^]` match characters but exclude characters from match
`\` or - match one or the other eg: `pyre|tyre` match pyre or tyre
eg: `[^$] - exclude the $ symbol or
`[a-l]`  match in the range from a-l / works with numbers as well
eg:`[a-z]`include all the letters of the alphabet
Make the match case insensitve - the range includes a-z lower case and A-Z upper case`[a-zA-Z]`match range case insensitive
Works with numbers as well`[0-9`] good for phone numbers
Match the number at least once not exactly useful
`[0-9]+` must be only numbers and at least 1 must be added to match what you need to do is specify the number of times the match must work
eg: `[0-9]{11}` must be numbers 11 times - so there must be 11 numbers in the range
Match an 11 letter word
eg: `[a-z]{11}`
Good for passwords
`[a-z]{5,8}` must be alphabets between 5 and 8 characters long
if you write `[a-z]{5-8}` this does not work in the same way
If you want to specify minimum number of characters
`[0-9]{5,}` must be at least 5 characters long

Common Meta Characters: Tutorial 6
Whole list [https://www.w3schools.com/jsref/jsref...]

A meta character has special meanings - they are a short form for a longer match action. The backslash allows the match to escape the normal behaviour of the match and allow it to match a new pre-defined pattern.

eg:
`-\d` escapes the normal character of d becomes a meta-character with some special power
this is the same as `[0-9]` or must be digits only
`-\s` white space (tabs, spaces between words)
`-\t` is only white space for tabs
`-\w` words which includes alphabets, numbers and underscores! eg:(a-z, A-Z, 0-9 and \_'s)

Combine these metas
eg: `\d\s\w` combines all the above patterns

Combine metas with simple matches
eg:`\d{3}\s\w{5}` minimum of 3 digits, spaces allowed, minimum 5 letter word that has the word meta characters - you will get 2 matches with the 3rd failing - this is good for example DLVA car letter plates if you want to specify a specific pattern for licence plates

```
999 53we_
420 ____t
bnd    9abvf0_
```

Special Characters as seen above - tutorial 7, 8 & 9
`+` one or more quantifier
`\` escapes the next character
`[]` match anything inside the sequence
`[^]` exclude
`?` zero or one quantifier which makes previous character optional
eg: `/hello?` the o is optional `/he?llo?` here the e and the o are optional
`.` any character except for a new line so any character even gobbledegook will be matched
eg: `car.` car@ is the new car - will match so long as it is not a new line
`*` zero or more quantifier (optional but as many times)
eg: `a[a-z]*` a must appear then after that all alphabets can appear any number of times
note `abc\*` escapes the special character so this will match `abc*`

Combining special characters for precision
`^[a-z]{5}$` must be ONLY 5 characters long
`[a-z]{5}$` must have 5 characters at the end
`(p|t)yre` match pyre or tyre - a different way from the simple way first demo'ed

eg: To be more specific say we want to match very basic breakfast items
`(bread|butter|jam)` note there should be no spaces between the characters for this to work
in the example below you will get 3 matches as it will not match milk

```
bread butter
milk butter
jam butter
bread jam
```

`(bread|butter|jam) milk` note there is a space after the parenthesis now you get 3 matches but bread and jam do not match as it is any of the 3 alternatives first followed by milk that match

```
butter milk
bread milk
jam milk
bread jam
```

`(bread|butter|jam)? milk` oddly you will get 4 matches from the example below as we are saying the words in parenthesis is optional - so long as milk is in the match it will show a match even if you put in a word that is not in these options - this is one of the dangers of regex - you must know what you are limiting/ de-limiting when you validate with regex

```
butter milk
bread milk
jam milk
rubbish milk
```
