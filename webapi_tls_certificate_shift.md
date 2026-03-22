# Shift Certificate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Shift Certificate | [](webapi_tls_certificate_delete.md "Delete Certificate") [](webapi_tls_certificate_total.md "Get Total Certificates") |
| --- | --- | --- |
| --- | --- |

Shift Certificate
The requests allows changing certificate position in a list.
Request Format
GET /api/tls_certificate/shift?index=index&shift=shift POST /api/tls_certificate/shift?index=index&shift=shift  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/tls_certificate/shift?index=0&shift=2 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of configuration to be deleted, starting from 0. Multiple indices can be specified as separated by commas.
  * shift — shift of the configuration relative to its current position. A negative value means shifting towards the top of the list, a positive value means shifting towards its end.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit network configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
  * Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.
