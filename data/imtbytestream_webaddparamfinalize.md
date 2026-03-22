# WebAddParamFinalize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebAddParamFinalize | [](imtbytestream_webaddparamdouble.md "WebAddParamDouble") [](imtbytestream_webreadcommand.md "WebReadCommand") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebAddParamFinalize
Completes the formation of parameters of the command sent in response to a web client.
C++
MTAPIRES IMTByteStream::WebAddParamFinalize()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebAddParamFinalize()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method adds a newline character \r\n to the stream object. This symbol indicates the end of the main body of the response (command and parameters).
This method is used only in the MetaTrader 5 Server API.