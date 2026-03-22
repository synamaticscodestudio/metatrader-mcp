# ClientIdsByGroup (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientIdsByGroup | [](imtreportapi_clientidsall.md "ClientIdsAll") [](imtreportapi_clientuserlogins.md "ClientUserLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientIdsByGroup
Get the list of identifiers of all clients in the server database filtered by the list of groups.
MTAPIRES IMTReportAPI::ClientIdsByGroup( const LPCWSTR groups, // List of groups UINT64*& ids, // Array of identifiers UINT& ids_total // Number of identifiers )  
---  
Parameters
group
[in] Groups with which the requested clients are connected. Clients are selected according to the following rules:
  * If the client's [IMTClient::TradingGroup](imtclient_tradinggroup.md "TradingGroup") parameter value is in the list of specified groups.
  * If any of the client accounts ([IMTReportAPI::ClientUserLogins](imtreportapi_clientuserlogins.md "ClientUserLogins")) belongs to one of the specified groups.

In 'group', you can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
ids
[out] An array with client identifiers in the server database ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
ids_total
[out] The number of identifiers in the 'ids' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method allocates and fills an array of identifiers. A pointer to the passed block is placed to the 'ids' parameter. After use, the array placed in the 'ids' variable must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") Server API method.
The method takes into account whether the clients are available to the specific [manager account, from which the report is requested](reportapi_request.md "Request for Reports").