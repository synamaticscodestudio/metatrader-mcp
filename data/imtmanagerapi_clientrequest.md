# ClientRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientRequest | [](imtmanagerapi_clientdeletebatch.md "ClientDeleteBatch") [](imtmanagerapi_clientrequestbygroup.md "ClientRequestByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientRequest
Get a client by identifier.
C++
MTAPIRES IMTManagerAPI::ClientRequest( const UINT64 client_id, // identifier IMTClient* client // client object )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientRequest( ulong client_id, // identifier CIMTClient client // client object )  
---  
Python
ManagerAPI.ClientRequest( int client_id # identifier )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
client
[out] Client object. The 'client' object must be previously created using the [IMTManagerAPI::ClientCreate](imtmanagerapi_clientcreate.md "ClientCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a client with the specified ID, to the 'client' object.
The method cannot be called from event handlers (any IMT*Sink class methods).