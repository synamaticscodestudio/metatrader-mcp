# ReadUChar (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadUChar | [](imtbytestream_readchar.md "ReadChar") [](imtbytestream_readshort.md "ReadShort") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadUChar
Reads UChar data from the stream object.
C++
MTAPIRES IMTByteStream::ReadUChar( UCHAR& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadUChar( out byte data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.