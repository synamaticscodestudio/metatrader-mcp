# ReadSkip (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadSkip | [](imtbytestream_read.md "Read") [](imtbytestream_readchar.md "ReadChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadSkip
Moves the read pointer by the specified number of bytes.
C++
MTAPIRES IMTByteStream::ReadSkip( const UINT len // Shift of the pointer )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadSkip( uint len // Shift of the pointer )  
---  
Parameters
len
[in] The number of bytes by which you want to move the read pointer.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.