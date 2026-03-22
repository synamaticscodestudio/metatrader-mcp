# ClientDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientDelete | [](imtserverapi_clientupdate.md "ClientUpdate") [](imtserverapi_clientget.md "ClientGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientDelete
Delete a client from the server database.
MTAPIRES IMTServerAPI::ClientDelete( const UINT64 client_id, // Identifier const UINT64 author // Author )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
author
[in] The login of the manager account, on whose behalf the client is being deleted. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A client can only be deleted from the plugins running on the same trade server where the client was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.