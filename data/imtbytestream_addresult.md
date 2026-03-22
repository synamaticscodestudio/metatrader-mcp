# AddResult (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddResult | [](imtbytestream_adddouble.md "AddDouble") [](imtbytestream_addstr.md "AddStr") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddResult
Adds [MTAPIRES](reference_types.htm#mtapires) data to the stream object.
C++
MTAPIRES IMTByteStream::AddResult( const MTAPIRES data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddResult( MTRetCode data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.