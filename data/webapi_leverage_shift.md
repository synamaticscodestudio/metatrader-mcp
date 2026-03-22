# Shift (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Shift | [](webapi_leverage_delete.md "Delete") [](webapi_leverage_total.md "Get total") |
| --- | --- | --- |
| --- | --- |

Shift Configuration
Change the position of a floating margin configuration in the list.
Request Format
GET /api/leverage/shift?index=index&shift=shift POST /api/leverage/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/leverage/shift?index0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be shifted, starting from 0. You can specify multiple values separated by commas.
  * shift — shift of the configuration relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the query returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit leverage configurations. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
