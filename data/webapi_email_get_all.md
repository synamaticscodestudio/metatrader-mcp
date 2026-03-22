# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Get All | [](webapi_email_get.md "Get by Name") [](webapi_email_send.md "Send Email") |
| --- | --- | --- |
| --- | --- |

Get All Mail Servers
Get all existing mail server configurations.
Request Format
GET /api/email/get_all POST /api/email/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/email/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : [ { "Name" : "ABC Broker", "SenderMail" : "support@abcbroker.com", "SenderName" : "ABC Broker", "Server" : "smtp.abcbroker.com:25", "Login" : "support@abcbroker.com", "Password" : "password123", ... }, { "Name" : "ABC Broker Sales", "SenderMail" : "sales@abcbroker.com", "SenderName" : "ABC Broker - Sales", "Server" : "smtp.abcbroker.com:25", "Login" : "sales@abcbroker.com", "Password" : "password123", ... }, ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of mail server configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_email_data_structure.md "Data Structure") section.
