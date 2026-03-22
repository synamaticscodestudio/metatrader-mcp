# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Data Feeds ](webapi_feeder.md "Data Feeds")/ Delete | [](webapi_feeder_add.md "Add") [](webapi_feeder_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Data Feed
The request allows deleting data feed configurations from the trading platform.
Request Format
GET /api/feeder/delete?index=indices GET /api/feeder/delete?name=names POST /api/feeder/delete?index=indices POST /api/feeder/delete?name=names  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/feeder/delete?index=0 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be deleted, starting from 0. Multiple indices can be specified as separated by commas.
  * name — the name of the configuration to be deleted. Multiple names can be specified as separated by commas. The "feeder" parameter can be specified instead of "name", as it works the same way.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * Only one of the parameters can be specified in the request: index or name.
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit data feed configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
