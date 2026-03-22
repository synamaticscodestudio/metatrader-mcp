# OpenWrite (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ OpenWrite | [](cmtfile_openread.md "OpenRead") [](cmtfile_close.md "Close") |
| --- | --- | --- |
| --- | --- |

CMTFile::OpenWrite
Open the specified file for writing.
bool CMTFile::OpenWrite( LPCWSTR lpFileName // File name )  
---  
Parameters
lpFileName
[in] The name of the file to open.
Return Value
True if successful, otherwise false.
Note
This method is similar to [CMTFile::Open](cmtfile_open.md "Open"), but it already contains all the parameters needed to open a file for writing:
Open(lpFileName,GENERIC_WRITE,FILE_SHARE_READ|FILE_SHARE_WRITE,CREATE_ALWAYS);
Specify only the name of the file to open.