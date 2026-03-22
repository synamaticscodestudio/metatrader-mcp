# ReadResult (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadResult | [](imtbytestream_readdouble.md "ReadDouble") [](imtbytestream_readstr.md "ReadStr") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadResult
Reads [MTAPIRES](reference_types.htm#mtapires) data from the stream object.
C++
MTAPIRES IMTByteStream::ReadResult( MTAPIRES& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadResult( out MTRetCode data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.