# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Delete | [](webapi_email_add.md "Add") [](webapi_email_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Mail Server
The request enables the deletion of mail server configurations from the trading platform.
Request Format
GET /api/email/delete?index=indices GET /api/email/delete?name=names POST /api/email/delete?index=indices POST /api/email/delete?name=names  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/email/delete?index=0 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be deleted, starting from 0. Multiple tickets can be specified as separated by commas.
  * name — the name of the configuration to be deleted. Multiple tickets can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * Only one of the parameters can be specified in the request: index or name.
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit mail server configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
