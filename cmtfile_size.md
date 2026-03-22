# Size (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ Size | [](cmtfile_isopen.md "IsOpen") [](cmtfile_timecreate.md "TimeCreate") |
| --- | --- | --- |
| --- | --- |

CMTFile::Size
Get the size of the currently open file.
UINT64 CMTFile::Size() const  
---  
Return Value
File size, in bytes.
CMTFile::Size
Get the size of the specified file.
static UINT64 CMTFile::Size( LPCWSTR path // Path to the file )  
---  
Parameters
path
[in] The path to the file, the size of which you want to get.
Return Value
File size, in bytes.