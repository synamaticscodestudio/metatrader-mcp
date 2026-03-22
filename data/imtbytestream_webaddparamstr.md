# WebAddParamStr (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebAddParamStr | [](imtbytestream_readstr.md "ReadStr") [](imtbytestream_webaddparamchar.md "WebAddParamChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebAddParamStr
Adds a String parameter to the stream object for transmission to a web client.
C++
MTAPIRES IMTByteStream::WebAddParamStr( LPCWSTR name, // Name LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebAddParamStr( string name, // Name string value // Value )  
---  
Parameters
name
[in] Parameter Name.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Special characters specified in the 'name' and 'value' parameters are automatically escaped when passed to a web client. For example, if the parameter name is specified as "My|Param", the web client will receive it as a "My\|Param".
This method is used only in the MetaTrader 5 Server API.