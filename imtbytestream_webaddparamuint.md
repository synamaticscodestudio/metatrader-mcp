# WebAddParamUInt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebAddParamUInt | [](imtbytestream_webaddparamint.md "WebAddParamInt") [](imtbytestream_webaddparamint64.md "WebAddParamInt64") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebAddParamUInt
Adds a UInt to the stream object for transmission to a web client.
C++
MTAPIRES IMTByteStream::WebAddParamUInt( LPCWSTR name, // Name const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebAddParamUInt( string name, // Name uint value // Value )  
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