# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ Add | [](imtbytestream_readlen.md "ReadLen") [](imtbytestream_addchar.md "AddChar") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::Add
Adds data to the stream object.
C++
MTAPIRES IMTByteStream::Add( const void *buf, // Data const UINT len // Data size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.Add( byte[] buf // Data )  
---  
Parameters
*buf
[in] A pointer to the data that you want to add.
len
[in] The length of the data to add in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.