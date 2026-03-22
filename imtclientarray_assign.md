# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Assign | [](imtclientarray_release.md "Release") [](imtclientarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTClientArray::Assign( const IMTClientArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.Assign( CIMTClientArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.