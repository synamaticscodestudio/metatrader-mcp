# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ Assign | [](imtbytestream_release.md "Release") [](imtbytestream_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTByteStream::Assign( const IMTByteStream* stream // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.Assign( CIMTByteStream stream // Source object )  
---  
Parameters
stream
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.