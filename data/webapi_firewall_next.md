# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Firewall ](webapi_firewall.md "Firewall")/ Get by Index | [](webapi_firewall_total.md "Get Total") [](webapi_firewall_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Firewall Rule by Index
Get one or more firewall rules by index in the list.
Request Format
GET /api/firewall/next?index=index&count=number POST /api/firewall/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/firewall/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "IPFrom" : "192.168.0.1", "IPTo" : "192.168.0.255", "Action" : "2", "Comment" : "Local network" } }  
---  
Request Parameters
  * index — the firewall rule index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent rule is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — the description of the firewall rule in the JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_firewall_data_structure.md "Data Structure") section.
