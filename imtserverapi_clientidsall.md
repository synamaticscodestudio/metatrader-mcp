# ClientIdsAll (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientIdsAll | [](imtserverapi_clientgethistory.md "ClientGetHistory") [](imtserverapi_clientidsbygroup.md "ClientIdsByGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientIdsAll
Get the list of identifiers of all clients in the server database.
MTAPIRES IMTServerAPI::ClientIdsAll( UINT64*& ids, // Array of identifiers UINT& ids_total // Number of identifiers )  
---  
Parameters
ids
[out] An array with identifiers of all clients in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
ids_total
[out] The number of identifiers in the 'ids' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method allocates and fills an array of identifiers. A pointer to the passed block is placed to the 'ids' parameter. After use, the array placed in the 'ids' variable must be released using the [IMTServerAPI::Free](imtserverapi_free.md "Free") Server API method.