# Shift Server (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Shift Server | [](webapi_server_delete.md "Delete Server") [](webapi_server_total.md "Get Number of Servers") |
| --- | --- | --- |
| --- | --- |

Shift Server
The requests enables changing of a server configuration position in a list.
Request format
GET /api/server/shift?index=index&shift=shift POST /api/server/shift?index=index&shift=shift  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/server/shift?index=0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be shifted, starting from 0. Multiple IDs can be specified as separated by commas.
  * shift — shift of the configuration relative to its current position. A negative value means the shift towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit group configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
