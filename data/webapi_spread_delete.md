# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Spreads ](webapi_spread.md "Spreads")/ Delete | [](webapi_spread_add.md "Add") [](webapi_spread_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Spread
The request allows deleting spread configurations from the trading platform.
Request Format
GET /api/spread/delete?index=indices POST /api/spread/delete?index=indices  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/spread/delete?index=0 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be deleted, starting from 0. Multiple tickets can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit spread configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
