# ReadInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadInt64 | [](imtbytestream_readuint.md "ReadUInt") [](imtbytestream_readuint64.md "ReadUInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadInt64
Reads Int64 data from the stream object.
C++
MTAPIRES IMTByteStream::ReadInt64( INT64& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadInt64( out long data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.