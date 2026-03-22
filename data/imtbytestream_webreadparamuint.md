# WebReadParamUInt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamUInt | [](imtbytestream_webreadparamint.md "WebReadParamInt") [](imtbytestream_webreadparamint64.md "WebReadParamInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamUInt
Reads the value of a UInt parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamUInt( UINT& value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamUInt( out uint value // Value )  
---  
Parameters
value
[out] The value of a parameter of type UInt. The method reads the received string and casts it to the appropriate type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only in the MetaTrader 5 Server API.