# Open (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ Open | [](cmtfile.md "CMTFile") [](cmtfile_openread.md "OpenRead") |
| --- | --- | --- |
| --- | --- |

CMTFile::Open
Open a file.
bool CMTFile::Open( LPCWSTR lpFileName, // File name const DWORD dwAccess, // Access flags const DWORD dwShare, // Share mode const DWORD dwCreationFlags, // Types of actions const DWORD dwAttributes=FILE_ATTRIBUTE_NORMAL // Flags and attributes )  
---  
Parameters
lpFileName
[in] The name of the file to open.
dwAccess
[in] File access flags: GENERIC_READ (reading), GENERIC_WRITE (writing) or both flags (GENERIC_READ| GENERIC_WRITE).
A more detailed description is available in MSDN - the dwDesiredAccess parameter of the [CreateFile function](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363858%28v=vs.85%29.aspx "MSDN, CreateFile"). 
dwShare
[in] The sharing mode:
  * 0 \- prohibits opening of a file when other processes try to delete, read or write the file.
  * FILE_SHARE_DELETE \- allows further opening of the file to delete it.
  * FILE_SHARE_READ \- allows further opening of the file to read it.
  * FILE_SHARE_WRITE \- allows further opening of the file to write it.

A more detailed description is available in MSDN - the dwShareMode parameter of the [CreateFile function](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363858%28v=vs.85%29.aspx "MSDN, CreateFile"). 
dwCreationFlags
[in] Types of action in case the file exists or does not exist:
  * CREATE_ALWAYS \- always create a new file. If the file that you open exists and it is possible to change it, it will be re-created.
  * CREATE_NEW \- create a new file only if the file to open does not exist.
  * OPEN_ALWAYS \- always open the file. If the file does not exist, the function will create it at a specified location if possible.
  * OPEN_EXISTING \- open the file only if it exists.
  * TRUNCATE_EXISITING \- opens a file and truncates it to zero byte size, but only of the file exists.

A more detailed description is available in MSDN - the dwCreationDisposition parameter of the [CreateFile function](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363858%28v=vs.85%29.aspx "MSDN, CreateFile"). 
dwAttributes=FILE_ATTRIBUTE_NORMAL
[in] Flags and attributes of the file to open. Normally, files are opened with the attribute FILE_ATTRIBUTE_NORMAL, which means that the file has no special attributes.
The full list of flags and attributes, as well as additional information are available in MSDN - the dwFlagsAndAttributes parameter of the [CreateFile function](https://msdn.microsoft.com/en-us/library/windows/desktop/aa363858%28v=vs.85%29.aspx "MSDN, CreateFile"). 
Return Value
True if successful, otherwise false.