# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientArray ](imtclientarray.md "IMTClientArray")/ Delete | [](imtclientarray_addcopy.md "AddCopy") [](imtclientarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTClientArray::Delete
Delete a client object by its position.
C++
MTAPIRES IMTClientArray::Delete( const UINT pos // Client position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClientArray.Delete( uint pos // Client position )  
---  
Parameters
pos
[in] Position of a client in the array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by calling the [IMTClient::Release](imtclient_release.md "Release") method.