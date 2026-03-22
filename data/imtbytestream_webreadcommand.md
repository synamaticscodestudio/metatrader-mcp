# WebReadCommand (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadCommand | [](imtbytestream_webaddparamfinalize.md "WebAddParamFinalize") [](imtbytestream_webreadparamname.md "WebReadParamName") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadCommand
Reads the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadCommand( MTAPISTR& cmd // Command )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadCommand( out string cmd // Command )  
---  
Parameters
cmd
[out] A command sent by the web client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
This method is used only in the MetaTrader 5 Server API.