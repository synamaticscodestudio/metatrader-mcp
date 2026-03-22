# Get Identifiers (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Identifiers | [](webapi_client_history_get.md "Get Change History") [](webapi_client_user_add.md "Bind Account") |
| --- | --- | --- |
| --- | --- |

Get the List of Client Identifiers
The request allows receiving the list of identifiers of all client available to the manager.
Request Format
GET /api/client/get_ids?group=groups POST /api/client/get_ids?group=groups  
---  
Response Format
{ "retcode" : "code description", "answer" : [ list of identifiers ] }  
---  
Example
//--- request to the server GET /api/client/get_ids //--- server response { "retcode" : "0 Done", "answer" : [ 1032, 1033, 1040, 1045 ] }  
---  
Request Parameters
  * group — an optional parameter for filtering results by the preferred group ([TradingGroup](webapi_client_data_structure.md "Data Structure")) specified for the client. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The following clients are returned when filter by groups is used:

  * Clients for whom TradingGroup is specified and this group corresponds to the request mask
  * Clients for whom TradingGroup is not specified, but there is at least one [bound account](webapi_client_user_add.md "Bind Account") from the requested group
  * Clients for whom TradingGroup is not specified and there are no bound accounts (to prevent the clients from being lost)

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of client identifiers.

Note
The request returns the list of client IDs available to the manager account, which is used for [connection](webapi_rest_authentication.md "Authentication"). A client record is available to the manager if one of the following conditions is met:
  * The client is created by this manager
  * The client is explicitly assigned to the manager ([AssignedManager](webapi_client_data_structure.md "Data Structure"))
  * The preferred trading group ([TradingGroup](webapi_client_data_structure.md "Data Structure")) set for the client is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd"))
  * Any of the [trading accounts bound to the client](webapi_client_user_add.md "Bind Account") is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd") in which the account is located)
