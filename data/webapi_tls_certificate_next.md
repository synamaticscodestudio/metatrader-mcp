# Get Certificate by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Get Certificate by Index | [](webapi_tls_certificate_total.md "Get Total Certificates") [](webapi_time.md "Time") |
| --- | --- | --- |
| --- | --- |

Get Certificate Description by Index
The request allows obtaining details of a certificate installed for access servers, by index.
Request Format
GET /api/tls_certificate/next?index=index POST /api/tls_certificate/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/tls_certificate/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : {  Timestamp: '131946323420236133', Name: '*.broker.com', Thumbprint: '151de69e0c138a1h9a96f3596a61db3d789e85f6' } }  
---  
Request Parameters
  * index — certificate index starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent group is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — certificate description in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_server_data_format.htm#certificate) section.

Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.