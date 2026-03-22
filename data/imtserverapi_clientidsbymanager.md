# ClientIdsByManager (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientIdsByManager | [](imtserverapi_clientidsbygroup.md "ClientIdsByGroup") [](imtserverapi_clientuseradd.md "ClientUserAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientIdsByManager
Get the list client identifiers available to the manager.
MTAPIRES IMTServerAPI::ClientIdsByManager( const UINT64 manager, // Manager UINT64*& ids, // Array of identifiers UINT& ids_total // Number of identifiers )  
---  
Parameters
manager
[in] The login of the manager whose clients you wish to obtain. A client record is available to the manager if one of the following conditions is met:
  * The client is created by this manager
  * The client is explicitly assigned to the manager ([IMTClient::AssignedManager](imtclient_assignedmanager.md "AssignedManager"))
  * The preferred trading group ([IMTClient::TradingGroup](imtclient_tradinggroup.md "TradingGroup")) set for the client is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd"))

  * Any of the [trading accounts bound to the client](imtserverapi_clientuseradd.md "ClientUserAdd") is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd") in which the account is located)

ids
[out] An array with client identifiers in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
ids_total
[out] The number of identifiers in the 'ids' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method allocates and fills an array of identifiers. A pointer to the passed block is placed to the 'ids' parameter. After use, the array placed in the 'ids' variable must be released using the [IMTServerAPI::Free](imtserverapi_free.md "Free") Server API method.