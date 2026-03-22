# ClientAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientAdd | [](imtserverapi_clientunsubscribe.md "ClientUnsubscribe") [](imtserverapi_clientupdate.md "ClientUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientAdd
Add a client to the server database.
MTAPIRES IMTServerAPI::ClientAdd( IMTClient* client, // Client object const UINT64 author // Author )  
---  
Parameters
client
[in] [Client object](imtclient.md "IMTClient").
author
[in] The login of the manager account, on whose behalf the client is being added. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. This information is used to keep the history of client changes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A client can only be added to the database of the server, on which the plugin is running.
When creating a client, the server automatically assigns to this client a unique identifier [IMTClient::RecordID](imtclient_recordid.md "RecordID").
During addition, client records are checked for integrity. The [IMTClient::PersonName](imtclient_personname.md "PersonName") field must be filled in the record.