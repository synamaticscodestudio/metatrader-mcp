# ToUpper (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ ToUpper | [](cmtstr_tolower.md "ToLower") [](cmtstr_trim.md "Trim") |
| --- | --- | --- |
| --- | --- |

CMTStr::ToUpper
Convert all characters in a string object to uppercase.
void CMTStr::ToUpper()  
---  
CMTStr::ToUpper
Convert all characters in the specified string to lower case.
static void CMTStr::ToUpper( LPWSTR str, // String UINT size // Buffer size )  
---  
Parameters
str
[in][out] A pointer to the Unicode string.
size
[in] Buffer size (in characters), in which the Unicode string is located.
CMTStr::ToUpper
Convert all characters in the specified string to uppercase.
static void CMTStr::ToUpper( wchar_t (&str)[size] // String )  
---  
Parameters
(&str)[size]
[in][out] The string, in which you want to convert all characters to uppercase (a pointer to the str buffer of the size size).
Note
To use this method, the compiler must know the size of the string buffer.