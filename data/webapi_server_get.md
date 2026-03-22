# Get Server by Identifier (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Get Server by Identifier | [](webapi_server_next.md "Get Server by Index") [](webapi_server_restart.md "Restart Server") |
| --- | --- | --- |
| --- | --- |

Get Server by Identifier
The request allows receiving server configurations by a list of IDs or indexes in a list.
Request format
GET /api/server/get?index=indexes GET /api/server/get?id=identifiers POST /api/server/get?index=indexes POST /api/server/get?id=identifiers  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/server/get?id=1 //--- server response { "retcode" : "0 Done", "answer" : {  "Type" : "0", "Name" : "Trade Main", "Address" : "10.14.33.98:441", "Login" : "1", "Adapter" : "Microsoft Hyper-V Network Adapter", "ServiceTime" : "227", "Adapters" : ["Microsoft Hyper-V Network Adapter"], "Addresses" : ["625973325"], "Binds" : [ { "Address" : "10.14.33.98:441" } ], "Points" : [ { "Address" : "10.14.33.98:441" } ], "TradeServer" : { "DemoMode" : "1", "DemoPeriod" : "999", ... }  
---  
Request Parameters
  * id — the identifier of the server to be received. Multiple IDs can be specified as separated by commas.
  * index — server configuration index starting with 0. Multiple IDs can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent group is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — server configuration in the JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_server_data_format.md "Data Structure") section.

Note
Only one of the parameters can be specified in a request, i.e. id or index. Indication of two lists simultaneously is not allowed.