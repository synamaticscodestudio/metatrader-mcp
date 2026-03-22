# ClientIdsByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientIdsByGroup | [](imtserverapi_clientidsall.md "ClientIdsAll") [](imtserverapi_clientidsbymanager.md "ClientIdsByManager") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientIdsByGroup
Get the list of identifiers of all clients in the server database filtered by the list of groups.
MTAPIRES IMTServerAPI::ClientIdsByGroup( const LPCWSTR groups, // List of groups UINT64*& ids, // Array of identifiers UINT& ids_total // Number of identifiers )  
---  
Parameters
group
[in] Groups with which the requested clients are connected. Clients are selected according to the following rules:
  * If the client's [IMTClient::TradingGroup](imtclient_tradinggroup.md "TradingGroup") parameter value is in the list of specified groups.
  * If any of the client accounts ([IMTServerAPI::ClientUserLogins](imtserverapi_clientuserlogins.md "ClientUserLogins")) belongs to one of the specified groups.

In 'group', you can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
ids
[out] An array with client identifiers in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
ids_total
[out] The number of identifiers in the 'ids' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method allocates and fills an array of identifiers. A pointer to the passed block is placed to the 'ids' parameter. After use, the array placed in the 'ids' variable must be released using the [IMTServerAPI::Free](imtserverapi_free.md "Free") Server API method.