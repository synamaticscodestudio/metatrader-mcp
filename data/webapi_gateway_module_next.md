# Get Module by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Get Module by Index | [](webapi_gateway_module_total.md "Get Total Modules") [](webapi_gateway_module_get.md "Get Module by Name") |
| --- | --- | --- |
| --- | --- |

Get Gateway Module by Index
The request allows receiving a gateway module description by an index in the list.
Request Format
GET /api/gateway/module/next?index=index POST /api/gateway/module/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/gateway/module/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "MetaTrader 5 Gateway", "Module" : "MetaTrader5Gateway64.exe", "Gateway" : "MT5GWTMT5", "Server" : "access.metatrader5.com:443", "Login" : "1000", "Password" : "password", "Copyright" : "Copyright 2000-2024, MetaQuotes Ltd.", "Description" : "This gateway allows connecting to a remote MetaTrader 5 Platform ", "Version" : "2374", "Flags" : "32", "Fields" : "15", "VersionApi" : "2361", "BuildDate" : "27 Mar 2020", "BuildApiDate" : "08 Mar 2020", "Params" : [ { "Type" : "0", "Name" : "Max Price Deviation", "Value" : "50" } ] } }  
---  
Request Parameters
  * index — gateway module index starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent module is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the gateway module in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_gateway_data_structure.htm#module) section.
