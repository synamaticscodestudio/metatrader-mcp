# Get Total (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Firewall ](webapi_firewall.md "Firewall")/ Get Total | [](webapi_firewall_shift.md "Shift") [](webapi_firewall_next.md "Get by Index") |
| --- | --- | --- |
| --- | --- |

Get the Total Number of Firewall Rules
The request allows receiving the number of firewall rules available in the platform.
Request Format
GET /api/firewall/total POST /api/firewall/total  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Total" : "number" } }  
---  
Example
//--- request to the server GET /fiewall_total //--- server response { "retcode" : "0 Done", "answer" : { "Total" : "11" } }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * total — number of firewall rules in the trading platform.
