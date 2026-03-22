# Format (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ Format | [](cmtstr_assign.md "Assign") [](cmtstr_tolower.md "ToLower") |
| --- | --- | --- |
| --- | --- |

CMTStr::Format
Fill in the string object in accordance with the format string.
int CMTStr::Format( LPCWSTR fmt, // Format string ... // Additional parameters )  
---  
Parameters
fmt
[in] Format string (pattern). For example, to get the string 100 / 300, specify: Format("%d / % d",100,300);
More information about formatting is available in the [MSDN](https://msdn.microsoft.com/en-us/library/56e442dc.aspx "MSDN, formatting"). 
...
[in] The number of additional parameters is not limited and depends on the format string.
Return Value
The length of the formed string in characters.