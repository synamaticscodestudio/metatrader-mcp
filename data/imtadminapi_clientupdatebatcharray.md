# ClientUpdateBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientUpdateBatchArray | [](imtadminapi_clientupdatebatch.md "ClientUpdateBatch") [](imtadminapi_clientdelete.md "ClientDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientUpdateBatchArray
Update a batch of clients in the server database.
C++
MTAPIRES IMTAdminAPI::ClientUpdateBatchArray( IMTClient** clients, // array of clients const UINT clients_total, // number of clients in the array MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientUpdateBatchArray( CIMTClient[] clients, // array of clients MTRetCode[] retcodes // array of results )  
---  
Parameters
clients
[in] A pointer to the array of [clients](imtclient.md "IMTClient").
clients_total
[in] The number of clients in the 'clients' array.
results
[out] An array with the results of updating of clients. The size of the 'results' array must not be less than that of 'clients'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified clients have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the clients have been updated. Analyze the 'results' array for more details of the execution results. The result of update of each client from the 'clients' array is added to 'results'. The index of a result corresponds to the index of a client in the source array.
Note
A client can only be updated from the applications connected to the trade server, on which the client has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields in the 'client' object must be filled, not only the ones that need to be changed. It is recommended that you first receive a client object from the server, change the required fields in it, and then send the changed object back to the server.
During update, a client record is checked for integrity. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.