# WebReadParamUChar (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ WebReadParamUChar | [](imtbytestream_webreadparamchar.md "WebReadParamChar") [](imtbytestream_webreadparamshort.md "WebReadParamShort") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::WebReadParamUChar
Reads the value of a UChar parameter from the command sent by a web client.
C++
MTAPIRES IMTByteStream::WebReadParamUChar( UCHAR& data // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.WebReadParamUChar( out byte data // Value )  
---  
Parameters
data
[out] The value of a parameter of type UChar. The method reads the received string and casts it to the appropriate type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is used only in the MetaTrader 5 Server API.