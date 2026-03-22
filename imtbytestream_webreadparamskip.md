# WebReadParamSkip (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamSkip | [](imtbytestream_webreadparamstr.md "WebReadParamStr") [](imtbytestream_webreadparamchar.md "WebReadParamChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamSkip
Skips parameter value. After calling this method, moves to the name of the next parameter.
C++
MTAPIRES IMTByteStream::WebReadParamSkip()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamSkip()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method only allows skipping parameter values, but not their names.
This method is used only in the MetaTrader 5 Server API.