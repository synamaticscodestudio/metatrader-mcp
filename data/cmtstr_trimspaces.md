# TrimSpaces (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ TrimSpaces | [](cmtstr_trim.md "Trim") [](cmtstr_replace.md "Replace") |
| --- | --- | --- |
| --- | --- |

CMTStr::TrimSpaces
Remove all space characters from the beginning and end of the string.
void CMTStr::TrimSpaces()  
---  
Note
The method does not remove spaces in the middle of the string. For example, the string " AB C " is converted to "AB C".
The method removes only space characters. Other characters, such as a tab, are not removed.
CMTStr::TrimSpaces
Remove all space characters from the beginning and end of the specified string.
static void CMTStr::TrimSpaces( LPWSTR str // String )  
---  
Parameters
str
[in] The string, from which you want to remove space characters.
Note
The method does not remove spaces in the middle of the string. For example, the string " AB C " is converted to "AB C".
The method removes only space characters. Other characters, such as a tab, are not removed.