# ClientDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientDeleteBatch | [](imtadminapi_clientdelete.md "ClientDelete") [](imtadminapi_clientrequest.md "ClientRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientDeleteBatch
Delete a batch of clients from the server database.
C++
MTAPIRES IMTAdminAPI::ClientDeleteBatch( const UINT64* client_ids, // array of clients const UINT client_ids_total, // number of clients MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientDeleteBatch( ulong[] client_ids, // array of clients MTRetCode[] results // array of results )  
---  
Python
AdminAPI.ClientDeleteBatch( list[int] client_ids # array of clients )  
---  
Parameters
client_ids
[in] An array with client identifiers in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
client_ids_total
[in] The number of identifiers in the 'client_ids' array.
results
[out] An array with the client deletion results. The size of the 'results' array must not be less than that of 'clients'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified clients have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the clients have been deleted. Analyze the 'results' array for more details of the execution results. The result of deletion of each client from the 'clients' array is added to 'results'. The index of a result corresponds to the index of a client in the source array.
Note
A client can only be deleted from the applications connected to the trade server, on which the client has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Bulk deletion is executed faster than deletion of the same number of clients in a cycle one by one, using [IMTAdminAPI::ClientDelete](imtadminapi_clientdelete.md "ClientDelete").