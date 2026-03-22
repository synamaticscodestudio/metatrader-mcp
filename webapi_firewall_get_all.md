# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Firewall ](webapi_firewall.md "Firewall")/ Get All | [](webapi_firewall_next.md "Get by Index") [](webapi_holiday.md "Holidays") |
| --- | --- | --- |
| --- | --- |

Get All Firewall Rules
Get all existing firewall rules.
Request Format
GET /api/firewall/get_all POST /api/firewall/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/firewall/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "IPFrom" : "192.168.0.1", "IPTo" : "192.168.0.255", "Action" : "2", "Comment" : "Local network" }, { "IPFrom" : "192.168.10.1", "IPTo" : "192.168.10.255", "Action" : "2", "Comment" : "Local network" } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of firewall rules in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_firewall_data_structure.md "Data Structure") section.
