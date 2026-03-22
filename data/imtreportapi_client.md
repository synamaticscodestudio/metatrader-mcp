# Clients (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface")/ Clients | [](imtreportapi_fundget.md "FundGet") [](imtreportapi_clientcreate.md "ClientCreate") |
| --- | --- | --- |
| --- | --- |

Clients
MetaTrader 5 Report API provides functionality for receiving data from the client database stored on the trade server. Use the API to expand the standard functionality of the reporting system and to create tables and diagrams based on any data series from the client database.
A detailed description of operations with clients is provided in the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients).
  * The client database is maintained separately for each trading server in the cluster. The plugin can only manage those clients which belong to [the server, on which the plugin is running](serverapi_configure_plugin.md "Configuration of Plugins").
  * Data requesting methods are executed in accordance with the availability of clients for the specific [manager account, from which the data is requested](reportapi_request.md "Request for Reports").

  
---  
The following client operation functions are available:
| Features | Purpose |
| --- | --- |
| --- | --- |
| [ClientCreate](imtreportapi_clientcreate.md "ClientCreate") | Create a client object. |
| [ClientCreateArray](imtreportapi_clientcreatearray.md "ClientCreateArray") | Create an object of the client array. |
| [ClientGet](imtreportapi_clientget.md "ClientGet") | Get a client by identifier. |
| [ClientGetHistory](imtreportapi_clientgethistory.md "ClientGetHistory") | Get the history of client changes. |
| [ClientIdsAll](imtreportapi_clientidsall.md "ClientIdsAll") | Get the list of identifiers of all clients in the server database. |
| [ClientIdsByGroup](imtreportapi_clientidsbygroup.md "ClientIdsByGroup") | Get the list of identifiers of all clients in the server database filtered by the list of groups. |
| [ClientUserLogins](imtreportapi_clientuserlogins.md "ClientUserLogins") | Get the list of client's trading accounts. |