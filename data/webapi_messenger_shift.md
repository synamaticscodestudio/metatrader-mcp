# Shift (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Shift | [](webapi_messenger_delete.md "Delete") [](webapi_messenger_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Shift Messenger
The requests allows changing the position of a messenger configuration in the list.
Request Format
GET /api/messenger/shift?index=index&shift=shift POST /api/messenger/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/messenger/shift?index=0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be shifted, starting from 0. Multiple tickets can be specified as separated by commas.
  * shift — shift of a rule relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit messenger configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
