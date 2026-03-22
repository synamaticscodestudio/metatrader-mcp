# Delete Certificate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Delete Certificate | [](webapi_tls_certificate_add.md "Add Certificate") [](webapi_tls_certificate_shift.md "Shift Certificate") |
| --- | --- | --- |
| --- | --- |

Delete Certificate
The request allows deleting SSL certificates from access servers.
Request Format
GET /tls_server_delete?index=indices POST /tls_server_delete?index=indices  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/tls_certificate/delete?index=0 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * index — position of certificate to be deleted, starting from 0. Multiple indices can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Disclaimer
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit network configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
  * Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.
