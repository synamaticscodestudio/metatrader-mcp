# AddDouble (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddDouble | [](imtbytestream_addfloat.md "AddFloat") [](imtbytestream_addresult.md "AddResult") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddDouble
Adds Double data to the stream object.
C++
MTAPIRES IMTByteStream::AddDouble( const double data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddDouble( double data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.