# TimeLastAccess (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ TimeLastAccess | [](cmtfile_timecreate.md "TimeCreate") [](cmtfile_timelastmodify.md "TimeLastModify") |
| --- | --- | --- |
| --- | --- |

CMTFile::TimeLastAccess
Get the time of the last access to the currently open file.
FILETIME CMTFile::TimeLastAccess() const  
---  
Return Value
The time of the last access in the FILETIME format - a 64-bit value representing the number of 100-nanosecond intervals since January 1, 1601. (UTC).
More details are available in [the appropriate section of MSDN](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724284%28v=vs.85%29.aspx "MSDN, FILETIME"). 