# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Delete | [](webapi_leverage_add.md "Add") [](webapi_leverage_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Configuration
Delete a floating margin configuration with the specified name.
Request Format
GET /api/leverage/delete?name=name POST /api/leverage/delete?name=name  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/leverage/delete?name=Leverage //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * name — name of the configuration to be deleted.

Response Parameters
  * retcode — if successful, the command returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, the code of the encountered error is returned.

Note
  * This command works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and to edit leverage configurations. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
