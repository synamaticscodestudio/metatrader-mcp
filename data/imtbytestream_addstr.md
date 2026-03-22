# AddStr (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddStr | [](imtbytestream_addresult.md "AddResult") [](imtbytestream_readreset.md "ReadReset") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddStr
Adds String data to the stream object.
C++
MTAPIRES IMTByteStream::AddStr( LPCWSTR buf // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddStr( string  buf // Data )  
---  
Parameters
buf
[in] The data that you want to add.The end of line character (\0) is added automatically after the data string.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The end of line character (\0) is added automatically after the data string passed in the buf parameter.