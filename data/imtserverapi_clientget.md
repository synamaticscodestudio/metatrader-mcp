# ClientGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientGet | [](imtserverapi_clientdelete.md "ClientDelete") [](imtserverapi_clientgethistory.md "ClientGetHistory") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientGet
Get a client by identifier.
MTAPIRES IMTServerAPI::ClientGet( const UINT64 client_id, // Identifier IMTClient* client // Client object )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
client
[out] Client object. The 'client' object must be previously created using the [IMTServerAPI::ClientCreate](imtserverapi_clientcreate.md "ClientCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of a client with the specified ID, to the 'client' object.