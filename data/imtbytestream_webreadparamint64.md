# WebReadParamInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamInt64 | [](imtbytestream_webreadparamuint.md "WebReadParamUInt") [](imtbytestream_webreadparamuint64.md "WebReadParamUInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamInt64
Reads the value of an Int64 parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamInt64( INT64& value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamInt64( out long value // Value )  
---  
Parameters
value
[out] The value of a parameter of type Int64. The method reads the received string and casts it to the appropriate type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only in the MetaTrader 5 Server API.