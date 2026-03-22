# Get (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Common ](webapi_common.md "Common")/ Get | [](webapi_common_data_structure.md "Data Structure") [](webapi_common_set.md "Set") |
| --- | --- | --- |
| --- | --- |

Getting Common Configuration
The command allows requesting the common settings of the trading platform.
Request format
GET /api/common/get POST /api/common/get  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/common/get //--- server response { "retcode" : "0 Done", "answer ": { "Name" : "Demo", "Owner" : "Broker", "OwnerID" : "Broker", "OwnerHost" : "broker.com", "OwnerEmail" : "", "Product" : "MetaTrader 5", "ExpirationLicense" : "1577750400", "ExpirationSupport" : "1577750400", "LimitTradeServers" : "5", "LimitWebServers" : "5", ... } }  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — platform common configuration in JSON format. The description of the passed parameters is given in the ["Data structure"](webapi_common_data_structure.md "Data Structure") section.
