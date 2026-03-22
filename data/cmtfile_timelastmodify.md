# TimeLastModify (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ TimeLastModify | [](cmtfile_timelastaccess.md "TimeLastAccess") [](cmtfile_currpos.md "CurrPos") |
| --- | --- | --- |
| --- | --- |

CMTFile::TimeLastModify
Get the time of the last modification of the currently open file.
FILETIME CMTFile::TimeLastModify() const  
---  
Return Value
File modification time in the FILETIME format - a 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601. (UTC).
More details are available in [the appropriate section of MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724284%28v=vs.85%29.aspx "MSDN, FILETIME"). 