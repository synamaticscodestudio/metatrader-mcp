# CopyCodePage (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTStr ](cmtstr.md "CMTStr")/ CopyCodePage | [](cmtstr_copy.md "Copy") [](cmtstr_compare.md "Compare") |
| --- | --- | --- |
| --- | --- |

CMTStr::CopyCodePage
Convert a string encoded in one of the ANSI code pages to a UTF-16 encoded string using the specified code page.
static void CMTStr::CopyCodePage( LPWSTR dst, // Resulting string UINT dstsize, // The size of the resulting string LPCSTR src, // Source string UINT codepage // Code page )  
---  
Parameters
dst
[out] The string, to which you copy data.
dstsize
[in] The size of the string buffer (in characters), in which data is copied.
src
[in] The string, from which you copy data.
codepage
[in] Code page. Possible values ​​for this parameter are described in MSDN:
  * The CodePage parameter of the [MultiByteToWideChar function](https://msdn.microsoft.com/en-us/library/windows/desktop/dd319072%28v=vs.85%29.aspx "MSDN, MultiByteToWideChar");
  * [The list of code page IDs](https://msdn.microsoft.com/en-us/library/windows/desktop/dd317756%28v=vs.85%29.aspx "MDSN, the list of code page identifiers");
