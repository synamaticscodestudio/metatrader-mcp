# Write (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ Write | [](cmtfile_read.md "Read") [](cmtfile_seek.md "Seek") |
| --- | --- | --- |
| --- | --- |

CMTFile::Write
Write to the currently open file.
DWORD CMTFile::Write( const void *buffer, // Data buffer const DWORD length // Data length )  
---  
Parameters
*buffer
[in] A pointer to the buffer, from which you want to write to the file.
length
[in] The amount of data that you want to write.
Return Value
Amount of data written in bytes.