# ClientRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientRequestByGroup | [](imtmanagerapi_clientrequest.md "ClientRequest") [](imtmanagerapi_clientrequesthistory.md "ClientRequestHistory") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientRequestByGroup
Get clients by groups.
C++
MTAPIRES IMTManagerAPI::ClientRequestByGroup( LPCWSTR groups, // groups IMTClientArray* clients // object of clients array )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientRequestByGroup( string groups, // groups CIMTClientArray clients // object of clients array )  
---  
Python
ManagerAPI.ClientRequestByGroup( str groups # groups )  
---  
Parameters
groups
[in] The preferred group ([TradingGroup](webapi_client_data_structure.md "Data Structure")) specified for the client. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The following clients are returned when filter by groups is used:
  * Clients for whom TradingGroup is specified and this group corresponds to the request mask
  * Clients for whom TradingGroup is not specified, but there is at least one [bound account](webapi_client_user_add.md "Bind Account") from the requested group
  * Clients for whom TradingGroup is not specified and there are no bound accounts (to prevent the clients from being lost)

clients
[out] An object of an array of clients. The 'clients' object must be previously created using the [IMTManagerAPI::ClientCreateArray](imtmanagerapi_clientcreatearray.md "ClientCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).