# Set (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Common ](webapi_common.md "Common")/ Set | [](webapi_common_get.md "Get") [](webapi_network.md "Network") |
| --- | --- | --- |
| --- | --- |

Update Common Configuration
The request allows updating general platform settings.
Request format
POST /api/common/set Common configuration in JSON format  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/common/set { "Name" : "Demo", "LiveUpdateMode" : "1", "AccountUrl" : "Broker", "AccountDepositUrl" : "broker.com", "AccountWithdrawalUrl" : "", "AccountAuto" : "0", ... } //--- server response { "retcode" : "0 Done", "answer ": { "Name" : "Demo", "Owner" : "Broker", "OwnerID" : "Broker", "OwnerHost" : "broker.com", "OwnerEmail" : "", "Product" : "MetaTrader 5", "ExpirationLicense" : "1577750400", "ExpirationSupport" : "1577750400", "LimitTradeServers" : "5", "LimitWebServers" : "5", ... } }  
---  
Request Parameters
The request has no parameters. Common configuration description is passed in JSON format as an additional body. Only the following parameters can be changed:
  * Name
  * LiveUpdateMode
  * AccountUrl
  * AccountDepositUrl
  * AccountWithdrawalUrl
  * AccountAuto
  * AccountGroup

The complete description of server parameters is available under the ["Data structure"](webapi_server_data_format.md "Data Structure") section.
The JSON description of the configuration passed during the update is the same as the description returned by the server.
Response Parameters
  * retcode — if successful, the [response code](retcodes_successful.md "Successful completion") 0 is returned. Otherwise, an error code is returned.
  * answer — common platform configuration after the update, in JSON format. Description of passed parameters is provided under the ["Data structure"](webapi_common_data_structure.md "Data Structure") section.
