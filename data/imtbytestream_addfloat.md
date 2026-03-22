# AddFloat (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddFloat | [](imtbytestream_adduint64.md "AddUInt64") [](imtbytestream_adddouble.md "AddDouble") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddFloat
Adds Float data to the stream object.
C++
MTAPIRES IMTByteStream::AddFloat( const float data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddFloat( float data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.