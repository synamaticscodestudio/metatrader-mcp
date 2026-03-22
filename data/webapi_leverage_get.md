# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Get by Name | [](webapi_leverage_next.md "Get by Index") [](webapi_firewall.md "Firewall") |
| --- | --- | --- |
| --- | --- |

Gets configuration by name
Get one or more floating margin configurations by name.
Request Format
GET /api/leverage/get?name=name POST /api/leverage/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/leverage/get?name=Leverage //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Leverage", "Rules" : [ { "Name": "Forex symbols", "Description": "Night rules for Forex symbols", "RangeMode": "0", ... } }  
---  
Request Parameters
  * name — name of the configuration to be received.

Response Parameters
  * retcode — if successful, the command returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a non-existent symbol is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — configuration in JSON format. The full description of the passed symbol parameters is provided in the [Data structure](webapi_leverage_data_structure.md "Data Structure") section.
