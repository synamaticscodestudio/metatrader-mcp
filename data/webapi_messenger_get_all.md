# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Messengers ](webapi_messenger.md "Messengers")/ Get All | [](webapi_messenger_get.md "Get by Name") [](webapi_messenger_send.md "Send Message") |
| --- | --- | --- |
| --- | --- |

Get All Messengers
Get all existing messenger configurations.
Request Format
GET /api/messenger/get_all POST /api/messenger/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/messenger/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "BulkSMS", "Sender" : "123456789", "ProviderType" : "0", "ProviderAddress" : "https:\/\/api.bulksms.com\/v1", "ProviderLogin" : "", "ProviderPassword" : "", "ProviderToken" : "xp23kPa", "ProviderSubid" : "broker", "ProviderCurrency" : "CRD", "ProviderCurrencyRate" : "0.030", "Flags" : "1", "Countries" : [], "Groups" : [] }, { "Name" : "Vonage", "Sender" : "Broker", "ProviderType" : "5", "ProviderAddress" : "https:\/\/vonage.com\/v1", "ProviderLogin" : "", "ProviderPassword" : "", "ProviderToken" : "iuo93l", "ProviderSubid" : "broker", "ProviderCurrency" : "USD", "ProviderCurrencyRate" : "0.030", "Flags" : "1", "Countries" : [], "Groups" : [] }, ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of messenger configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_messenger_data_structure.md "Data Structure") section.
