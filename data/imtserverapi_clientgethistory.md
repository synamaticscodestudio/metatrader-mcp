# ClientGetHistory (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientGetHistory | [](imtserverapi_clientget.md "ClientGet") [](imtserverapi_clientidsall.md "ClientIdsAll") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientGetHistory
Get the history of client changes.
MTAPIRES IMTServerAPI::ClientGetHistory( const UINT64 client_id, // Identifier const UINT64 author, // Author const INT64 from, // Period start const UINT64 to, // Period end IMTClientArray* history // Clients array object )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
author
[in] The login of the manager account by whom the client was changed. The login is equal to the [IMTConManager::Login](imtconmanager_login.md "Login") value. 
from
[in] The beginning of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
history
[out] An object of an array of clients. The 'history' object must be previously created using the [IMTServerAPI::ClientCreateArray](imtserverapi_clientcreatearray.md "ClientCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns an array of client descriptions: all the client states after changes by the specified author in the specified time period.