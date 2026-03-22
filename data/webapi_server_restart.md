# Restart Server (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Restart Server | [](webapi_server_get.md "Get Server by Identifier") [](webapi_tls_certificate_add.md "Add Certificate") |
| --- | --- | --- |
| --- | --- |

Server Restart
This request restarts the server to which the Web client is connected. If a Web client is connected to the main trade server, this command will restart all the trading platform.
Request format
GET /api/server/restart POST /api/server/restart  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/server/restart //--- server response { "retcode" : "0 Done" }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
Restart servers only on weekends and holidays or at night when the trading activity is minimal. Restarting the server may take several seconds (up to a minute), during this time connection to the server is impossible.