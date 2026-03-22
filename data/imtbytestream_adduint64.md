# AddUInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddUInt64 | [](imtbytestream_addint64.md "AddInt64") [](imtbytestream_addfloat.md "AddFloat") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddUInt64
Adds UInt64 data to the stream object.
C++
MTAPIRES IMTByteStream::AddUInt64( const UINT64 data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddUInt64( ulong data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.