# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Spreads ](webapi_spread.md "Spreads")/ Get All | [](webapi_spread_next.md "Get by Index") [](webapi_email.md "Email") |
| --- | --- | --- |
| --- | --- |

Get All History Sync Configurations
Get all exiting spread configurations.
Request Format
GET /api/spread/get_all POST /api/spread/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/spread/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "ID" : "2", "Flags" : "0", "MarginInitial" : "0.00000000", "MarginMaintenance" : "0.00000000", ... }, { "ID" : "3", "Flags" : "0", "MarginInitial" : "0.00000000", "MarginMaintenance" : "0.00000000", ... } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of spread configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_spread_data_structure.md "Data Structure") section.
