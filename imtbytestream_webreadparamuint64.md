# WebReadParamUInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamUInt64 | [](imtbytestream_webreadparamint64.md "WebReadParamInt64") [](imtbytestream_webreadparamdouble.md "WebReadParamDouble") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamUInt64
Reads the value of a UInt64 parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamUInt64( UINT64& value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamUInt64( out ulong value // Value )  
---  
Parameters
value
[out] The value of a parameter of type UInt64. The method reads the received string and casts it to the appropriate type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only in the MetaTrader 5 Server API.