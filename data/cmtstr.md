# CMTStr (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ CMTStr | [](cmtarraybase_searchright.md "SearchRight") [](cmtstr_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

CMTStr
This class contains additional functions for working with strings. In fact, it is a wrapping of the Unicode string.
To use the methods of the CMTStr class for working with a string, assign it one of the predefined types:
| Type | Size |
| --- | --- |
| --- | --- |
| CMTStr16 | 16 characters. |
| CMTStr32 | 32 characters. |
| CMTStr64 | 64 characters. |
| CMTStr128 | 128 characters. |
| CMTStr256 | 256 characters. |
| CMTStrPath | 260 characters. |
| CMTStr512 | 512 characters. |
| CMTStr1024 | 1024 characters. |
| CMTStr2048 | 2048 characters. |
| CMTStr4096 | 4096 characters. |

If you need to declare a string with the size differing from the predefined ones, use the TMTStrStatic<xxx> method, where xxx is the size of a string in characters. For example:
TMTStrStatic<20> str;  
---  
The following methods are available in the CMTStr class:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Clear](cmtstr_clear.md "Clear") | Clear the line. After the execution of this method, the string is empty. |
| [Empty](cmtstr_empty.md "Empty") | Check whether the string is empty. |
| [Len](cmtstr_len.md "Len") | Get the length of a string without the end of line character. |
| [Max](cmtstr_max.md "Max") | Get the maximum number of characters that can be placed in the string object. |
| [Str](cmtstr_str.md "Str") | Get a constant pointer to a string. |
| [Buffer](cmtstr_buffer.md "Buffer") | Get a non-constant pointer to a string. |
| [Refresh](cmtstr_refresh.md "Refresh") | Update a cached string size after modification. |
| [Assign](cmtstr_assign.md "Assign") | Assign a string to an object object. |
| [Format](cmtstr_format.md "Format") | Fill in the string object in accordance with the format string. |
| [ToLower](cmtstr_tolower.md "ToLower") | Covert characters to lowercase. |
| [ToUpper](cmtstr_toupper.md "ToUpper") | Covert characters to uppercase. |
| [Trim](cmtstr_trim.md "Trim") | Truncate a strung to the specified number of characters. |
| [TrimSpaces](cmtstr_trimspaces.md "TrimSpaces") | Remove all space characters from the beginning and end of the string. |
| [Replace](cmtstr_replace.md "Replace") | Replace the specified substring in the string object with another substring. |
| [ReplaceChar](cmtstr_replacechar.md "ReplaceChar") | Replace the specified character in the string object with another character. |
| [Delete](cmtstr_delete.md "Delete") | Remove a substring from a string. |
| [FormatStr](cmtstr_formatstr.md "FormatStr") | Fill in the specified string in accordance with the format string. |
| [Terminate](cmtstr_terminate.md "Terminate") | Null the last element (insert end of line character) of the specified string. |
| [Append](cmtstr_append.md "Append") | Add a string/character at the end of a string. |
| [Insert](cmtstr_insert.md "Insert") | Add a substring/character in a string. |
| [Copy](cmtstr_copy.md "Copy") | Copy strings. |
| [CopyCodePage](cmtstr_copycodepage.md "CopyCodePage") | Convert a string encoded in one of the ANSI code pages to a UTF-16 encoded string using the specified code page. |
| [Compare](cmtstr_compare.md "Compare") | Compare strings. |
| [CompareNoCase](cmtstr_comparenocase.md "CompareNoCase") | Case insensitive comparison of strings. |
| [CheckGroupMask](cmtstr_checkgroupmask.md "CheckGroupMask") | Check the correspondence of a string to the specified mask. |
| [Find](cmtstr_find.md "Find") | Find a substring in a string. |
| [FindNoCase](cmtstr_findnocase.md "FindNoCase") | Case insensitive search of a substring in a string. |
| [FindR](cmtstr_findr.md "FindR") | Search for a substring from the end of the string. |
| [FindChar](cmtstr_findchar.md "FindChar") | Find a character. |
| [FindRChar](cmtstr_findrchar.md "FindRChar") | Search for a character from the end of the string. |