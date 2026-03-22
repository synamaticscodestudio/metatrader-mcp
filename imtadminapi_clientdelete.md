# ClientDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientDelete | [](imtadminapi_clientupdatebatcharray.md "ClientUpdateBatchArray") [](imtadminapi_clientdeletebatch.md "ClientDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientDelete
Delete a client from the server database.
C++
MTAPIRES IMTAdminAPI::ClientDelete( const UINT64 client_id // identifier )  
---  
.NET
MTRetCode IMTAdminAPI.ClientDelete( ulong client_id // identifier )  
---  
Python
AdminAPI.ClientDelete( int client_id # identifier )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A client can only be deleted from the applications connected to the trade server, on which the client has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.