# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Get by Index | [](webapi_messenger_total.md "Get Total") [](webapi_messenger_get.md "Get by Name") |
| --- | --- | --- |
| --- | --- |

Get Messenger by Index
The request allows receiving a messenger configuration by an index in the list.
Request Format
GET /api/messenger/next?index=index POST /api/messenger/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/messenger/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "BulkSMS", "Sender" : "123456789", "ProviderType" : "0", "ProviderAddress" : "https:\/\/api.bulksms.com\/v1", "ProviderLogin" : "", "ProviderPassword" : "", "ProviderToken" : "xp23kPa", "ProviderSubid" : "broker", "ProviderCurrency" : "CRD", "ProviderCurrencyRate" : "0.030", "Flags" : "1", "Countries" : [], "Groups" : [] } }  
---  
Request Parameters
  * index — messenger configuration index starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent messenger is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the messenger configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_messenger_data_structure.md "Data Structure") section.
