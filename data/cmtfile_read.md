# Read (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ Read | [](cmtfile_currpos.md "CurrPos") [](cmtfile_write.md "Write") |
| --- | --- | --- |
| --- | --- |

CMTFile::Read
Reading from a currently open file.
DWORD CMTFile::Read( void *buffer, // Buffer for data const DWORD length // Data length )  
---  
Parameters
*buffer
[in] A pointer to the buffer, in which the read data will be placed.
length
[in] The amount of data that you want to read. Data are read from the current position.
Return Value
Amount of data read in bytes.