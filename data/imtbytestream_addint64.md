# AddInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddInt64 | [](imtbytestream_adduint.md "AddUInt") [](imtbytestream_adduint64.md "AddUInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddInt64
Adds Int64 data to the stream object.
C++
MTAPIRES IMTByteStream::AddInt64( const INT64 data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddInt64( long data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.