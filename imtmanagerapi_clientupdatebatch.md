# ClientUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientUpdateBatch | [](imtmanagerapi_clientupdate.md "ClientUpdate") [](imtmanagerapi_clientupdatebatcharray.md "ClientUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientUpdateBatch
Update a batch of clients in the server database.
C++
MTAPIRES IMTManagerAPI::ClientUpdateBatch( IMTClientArray* clients, // array of clients MTAPIRES* results // array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientUpdateBatch( CIMTClientArray clients, // array of clients MTRetCode[] retcodes // array of results )  
---  
Python
ManagerAPI.ClientUpdateBatch( list[MTClient]  clients # array of clients )  
---  
Parameters
clients
[in] A pointer to the object of the [IMTClientArray](imtclientarray.md "IMTClientArray") array of clients.
results
[out] An array with the results of adding of clients. The size of the 'results' array must not be less than that of 'clients'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified clients have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the clients have been updated. Analyze the 'results' array for more details of the execution results. The result of update of each client from the 'clients' array is added to 'results'. The index of a result corresponds to the index of a client in the source array.
Note
A client can only be updated from the applications connected to the trade server, on which the client has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields in the 'client' object must be filled, not only the ones that need to be changed. It is recommended that you first receive a client object from the server, change the required fields in it, and then send the changed object back to the server.
During update, a client record is checked for integrity. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.