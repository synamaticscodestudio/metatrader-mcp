# Len (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ Len | [](cmtstr_empty.md "Empty") [](cmtstr_max.md "Max") |
| --- | --- | --- |
| --- | --- |

CMTStr::Len
Get the length of a string without the end of line character.
UINT CMTStr::Len() const  
---  
Return Value
The length of the string in characters.
CMTStr::Len
Get the length of the specified string without the end of line character.
static UINT CMTStr::Len( LPCWSTR str // String )  
---  
Parameters
str
[in] A pointer to the string, the length of which you want to get.
Return Value
The length of the string in characters.