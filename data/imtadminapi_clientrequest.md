# ClientRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientRequest | [](imtadminapi_clientdeletebatch.md "ClientDeleteBatch") [](imtadminapi_clientrequestbygroup.md "ClientRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientRequest
Get a client by identifier.
C++
MTAPIRES IMTAdminAPI::ClientRequest( const UINT64 client_id, // identifier IMTClient* client // client object )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientRequest( ulong client_id, // identifier CIMTClient client // client object )  
---  
Python
AdminAPI.ClientRequest( int client_id # identifier )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
client
[out] Client object. The 'client' object must be previously created using the [IMTAdminAPI::ClientCreate](imtadminapi_clientcreate.md "ClientCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a client with the specified ID, to the 'client' object.
The method cannot be called from event handlers (any IMT*Sink class methods).