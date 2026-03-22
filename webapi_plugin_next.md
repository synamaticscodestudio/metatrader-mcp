# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Get by Index | [](webapi_plugin_total.md "Get Total") [](webapi_plugin_get.md "Get by Name") |
| --- | --- | --- |
| --- | --- |

Get Plugin by Index
Get the configuration of one or more plugins by index in the list.
Request Format
GET /api/plugin/next?index=index&count=number POST /api/plugin/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/plugin/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Trade Transaction Report", "Server" : "5", "Module" : "Trades.Transaction.Reports64.dll", "Enable" : "1", "Flags" : "0", "Params" : [ { "Type" : "6", "Name" : "Groups", "Value" : "*" } ] } }  
---  
Request Parameters
  * index — plugin configuration index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent plugin is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the plugin configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_plugin_data_structure.md "Data Structure") section.
