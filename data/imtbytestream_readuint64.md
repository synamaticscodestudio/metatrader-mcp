# ReadUInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadUInt64 | [](imtbytestream_readint64.md "ReadInt64") [](imtbytestream_readfloat.md "ReadFloat") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadUInt64
Reads UInt64 data from the stream object.
C++
MTAPIRES IMTByteStream::ReadUInt64( UINT64& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadUInt64( out ulong data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.