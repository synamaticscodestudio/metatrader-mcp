# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Get by Name | [](webapi_messenger_next.md "Get by Index") [](webapi_messenger_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Messenger by Name
The request allows receiving manager configuration by login.
Request Format
GET /api/messenger/get?name=name POST /api/messenger/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/messenger/get?name=BulkSMS //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "BulkSMS", "Sender" : "123456789", "ProviderType" : "0", "ProviderAddress" : "https:\/\/api.bulksms.com\/v1", "ProviderLogin" : "", "ProviderPassword" : "", "ProviderToken" : "xp23kPa", "ProviderSubid" : "broker", "ProviderCurrency" : "CRD", "ProviderCurrencyRate" : "0.030", "Flags" : "1", "Countries" : [], "Groups" : [] } }  
---  
Request Parameters
  * name — messenger configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the messenger configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_messenger_data_structure.md "Data Structure") section.
