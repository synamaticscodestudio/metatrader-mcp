# OpenRead (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ OpenRead | [](cmtfile_open.md "Open") [](cmtfile_openwrite.md "OpenWrite") |
| --- | --- | --- |
| --- | --- |

CMTFile::OpenRead
Open the specified file for reading.
bool CMTFile::OpenRead( LPCWSTR lpFileName // File name )  
---  
Parameters
lpFileName
[in] The name of the file to open.
Return Value
True if successful, otherwise false.
Note
This method is similar to [CMTFile::Open](cmtfile_open.md "Open"), but it already contains all the parameters needed to open a file for reading:
Open(lpFileName,GENERIC_READ,FILE_SHARE_READ|FILE_SHARE_WRITE,OPEN_EXISTING);
Specify only the name of the file to open.