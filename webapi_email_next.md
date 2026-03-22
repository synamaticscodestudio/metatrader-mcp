# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Get by Index | [](webapi_email_total.md "Get Total") [](webapi_email_get.md "Get by Name") |
| --- | --- | --- |
| --- | --- |

Get Mail Server by Index
Get the configuration of one or more mail servers by index in the list.
Request Format
GET /api/email/next?index=index&count=number POST /api/email/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/email/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "ABC Broker", "SenderMail" : "support@abcbroker.com", "SenderName" : "ABC Broker", "Server" : "smtp.abcbroker.com:25", "Login" : "support@abcbroker.com", "Password" : "password123", "Flags" : "2", "Stats" : { "TotalSend" : "20", "TotalFailed" : "1", "CurrentQueue" : "0", "TimeMin" : "1", "TimeMax" : "3", "TimeAvg" : "2" } } }  
---  
Request Parameters
  * index — mail server configuration index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent configuration is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the mail server configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_email_data_structure.md "Data Structure") section.
