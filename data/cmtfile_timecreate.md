# TimeCreate (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ TimeCreate | [](cmtfile_size.md "Size") [](cmtfile_timelastaccess.md "TimeLastAccess") |
| --- | --- | --- |
| --- | --- |

CMTFile::TimeCreate
Get the creation time of the currently open file.
FILETIME CMTFile::TimeCreate() const  
---  
Return Value
File creation time in the FILETIME format - a 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601. (UTC).
More details are available in [the appropriate section of MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724284%28v=vs.85%29.aspx "MSDN, FILETIME"). 