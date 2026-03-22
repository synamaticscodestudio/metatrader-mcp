# WebAddParamUInt64 (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebAddParamUInt64 | [](imtbytestream_webaddparamint64.md "WebAddParamInt64") [](imtbytestream_webaddparamdouble.md "WebAddParamDouble") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebAddParamUInt64
Adds a UInt64 parameter to the stream object for transmission to a web client.
C++
MTAPIRES IMTByteStream::WebAddParamUInt64( LPCWSTR name, // Name const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebAddParamUInt64( string name, // Name ulong value // Value )  
---  
Parameters
name
[in] The name of the parameter.
value
[in] The value of the parameter. When passed to a web client, the value is converted to a string because the Web API is a text protocol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Special characters specified in the 'name' and 'value' parameters are automatically escaped when passed to a web client. For example, if the parameter name is specified as "My|Param", the web client will receive it as a "My\|Param".
This method is used only in the MetaTrader 5 Server API.