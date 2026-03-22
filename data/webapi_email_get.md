# Get by Name (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Get by Name | [](webapi_email_next.md "Get by Index") [](webapi_email_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Mail Server by Name
The request allows receiving mail server configuration by name.
Request Format
GET /api/email/get?name=name POST /api/email/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/email/get?name=ABC%20Broker //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "ABC Broker", "SenderMail" : "support@abcbroker.com", "SenderName" : "ABC Broker", "Server" : "smtp.abcbroker.com:25", "Login" : "support@abcbroker.com", "Password" : "password123", "Flags" : "2", "Stats" : { "TotalSend" : "20", "TotalFailed" : "1", "CurrentQueue" : "0", "TimeMin" : "1", "TimeMax" : "3", "TimeAvg" : "2" } } }  
---  
Request Parameters
  * name — mail server configuration name.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the mail server configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_email_data_structure.md "Data Structure") section.
