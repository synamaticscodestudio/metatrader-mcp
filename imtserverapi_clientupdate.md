# ClientUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientUpdate | [](imtserverapi_clientadd.md "ClientAdd") [](imtserverapi_clientdelete.md "ClientDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientUpdate
Update a client in the server database.
MTAPIRES IMTServerAPI::ClientUpdate( IMTClient* client, // Client object const UINT64 author // Author )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
author
[in] The login of the manager account, on whose behalf the client is being updated. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A client can only be updated from the plugins running on the same trade server where the client was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields in the 'client' object must be filled, not only the ones that need to be changed. It is recommended that you first receive a client object from the server, change the required fields in it, and then send the changed object back to the server.
During update, a client record is checked for integrity. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.