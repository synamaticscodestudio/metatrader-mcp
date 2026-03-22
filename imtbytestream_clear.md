# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Byte Stream ](reference_bytestream.md "Byte Stream") / [ IMTByteStream ](imtbytestream.md "IMTByteStream")/ Clear | [](imtbytestream_assign.md "Assign") [](imtbytestream_len.md "Len") |
| --- | --- | --- |
| --- | --- |

IMTByteStream::Clear
Clear an object.
C++
MTAPIRES IMTByteStream::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTByteStream.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.