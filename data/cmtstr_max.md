# Max (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ Max | [](cmtstr_len.md "Len") [](cmtstr_str.md "Str") |
| --- | --- | --- |
| --- | --- |

CMTStr::Max
Get the maximum number of characters that can be placed in the string object.
UINT CMTStr::Max() const  
---  
Return Value
The maximum number of characters, taking into account the end of line character.
Note
The maximum number of characters (the buffer) is determined by the type of the string object.