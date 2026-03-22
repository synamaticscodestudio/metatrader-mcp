# Seek (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ Seek | [](cmtfile_write.md "Write") [](cmtfile_changesize.md "ChangeSize") |
| --- | --- | --- |
| --- | --- |

CMTFile::Seek
Move the pointer of the current position in a file.
UINT64 CMTFile::Seek( const INT64 distance, // Distance const DWORD method // Method of moving )  
---  
Parameters
distance
[in] When using the FILE_BEGIN or FILE_END methods - the new position of the pointer from the file beginning or end, respectively.
When using the FILE_CURRENT method, shift from the current position. A negative value means the shift to the beginning of the file, a positive value - to its end.
method
[in] The method of moving the pointer of the current position in a file:
  * FILE_BEGIN \- the zero position (file beginning) is used as the initial point.
  * FILE_CURRENT \- the current position is used as the initial point.
  * FILE_END \- the file end is used as the initial point.

A more detailed description is available in MSDN - the dwMoveMethod parameter of the [SetFilePointer function](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365541%28v=VS.85%29.aspx "MSDN, SetFilePointer"). 
Return Value
If successful, returns a new position. In case of an error returns [INVALID_POSITION](cmtfile.htm#constants).