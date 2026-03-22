# Read (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ Read | [](imtbytestream_readreset.md "ReadReset") [](imtbytestream_readskip.md "ReadSkip") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::Read
Reads data from the stream object.
C++
MTAPIRES IMTByteStream::Read( void* buf, // Data const UINT len // Length )  
---  
.NET (Gateway/Manager API)
byte[] CIMTByteStream.Read( uint len, // Length out MTRetCode res // Response code )  
---  
Parameters
buf
[out] A pointer to the read data.
len
[in] The length of data that you want to read from the current pointer.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.