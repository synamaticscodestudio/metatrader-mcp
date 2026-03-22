# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Get by Index | [](webapi_leverage_total.md "Get total") [](webapi_leverage_get.md "Get by Name") |
| --- | --- | --- |
| --- | --- |

Get Configuration by Index
Get one or more floating margin configurations by index in the list.
Request Format
GET /api/leverage/next?index=index&count=count POST /api/leverage/next?index=index&count=count  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/leverage/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Night rules", "Rules" : [ { "Name": "Forex symbols", "Description": "Night rules for Forex symbols", "RangeMode": "0", ... } }  
---  
Request Parameters
  * index — configuration index, starting from 0.
  * count — the number of configurations to which you wish to receive. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a non-existent symbol is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — configuration in JSON format. The full description of the passed symbol parameters is provided in the [Data structure](webapi_leverage_data_structure.md "Data Structure") section.
