# WebReadParamName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamName | [](imtbytestream_webreadcommand.md "WebReadCommand") [](imtbytestream_webreadparamstr.md "WebReadParamStr") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamName
Reads the name of the next parameter of the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamName( MTAPISTR& name // Name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamName( out string name // Name )  
---  
Parameters
name
[out] The name of the parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. The return code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") means the end of the command parameters.
This method is used only in the MetaTrader 5 Server API.