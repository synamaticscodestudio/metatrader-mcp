# Terminate (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ Terminate | [](cmtstr_formatstr.md "FormatStr") [](cmtstr_append.md "Append") |
| --- | --- | --- |
| --- | --- |

CMTStr::Terminate
Null the last element (insert end of line character) of the specified string.
static void CMTStr::Terminate( wchar_t (&str)[strsize] // String )  
---  
Parameters
(&str)[strsize]
[in][out] The string (array of strings), in which you want to null the last character.