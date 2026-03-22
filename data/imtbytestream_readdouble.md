# ReadDouble (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ ReadDouble | [](imtbytestream_readfloat.md "ReadFloat") [](imtbytestream_readresult.md "ReadResult") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::ReadDouble
Reads Double data from the stream object.
C++
MTAPIRES IMTByteStream::ReadDouble( double& data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.ReadDouble( out double data // Data )  
---  
Parameters
data
[out] Reference to the read data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.