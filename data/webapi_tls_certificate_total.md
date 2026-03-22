# Get Total Certificates (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Get Total Certificates | [](webapi_tls_certificate_shift.md "Shift Certificate") [](webapi_tls_certificate_next.md "Get Certificate by Index") |
| --- | --- | --- |
| --- | --- |

Get Total Certificates
The request allows receiving the number of certificates installed for access servers.
Request Format
GET /api/tls_certificate/total POST /api/tls_certificate/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "total" : "number" } }  
---  
Example
//--- request to the server GET /api/tls_certificate/total //--- server response { "retcode" : "0 Done", "answer" : { "total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — the number of certificates installed for access servers.

Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.