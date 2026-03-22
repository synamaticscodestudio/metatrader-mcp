# Delete Server (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Delete Server | [](webapi_server_add.md "Add Server") [](webapi_server_shift.md "Shift Server") |
| --- | --- | --- |
| --- | --- |

Removing the Server
The request enables the deletion of platform server configurations.
Request format
GET /api/server/delete?id=identifiers GET /api/server/delete?index=indexes POST /api/server/delete?id=identifiers POST /api/server/delete?index=indexes  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/server/delete?id=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * id — the identifier of the server to be deleted. Multiple IDs can be specified as separated by commas.
  * index — position of configuration to be deleted, starting from 0. Multiple IDs can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * Only one of the parameters can be specified in a request, i.e. id or index. Indication of two lists simultaneously is not allowed.
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit group configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
