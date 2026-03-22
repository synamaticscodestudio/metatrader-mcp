# AddShort (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ AddShort | [](imtbytestream_adduchar.md "AddUChar") [](imtbytestream_addushort.md "AddUShort") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::AddShort
Adds Short data to the stream object.
C++
MTAPIRES IMTByteStream::AddShort( const short data // Data )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.AddShort( short data // Data )  
---  
Parameters
data
[in] The data that you want to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.