# ReadFloat (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadFloat | [](imtbytestream_readuint64.md "ReadUInt64") [](imtbytestream_readdouble.md "ReadDouble") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadFloat
Reads Float data from the stream object.
C++
MTAPIRES IMTByteStream::ReadFloat( float& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadFloat( out float data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.