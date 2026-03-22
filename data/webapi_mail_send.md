# Send Email (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Mail ](webapi_mail.md "Mail")/ Send Mail | [](webapi_mail_data_structure.md "Data Structure") [](webapi_mail_get.md "Get Mail Without Body") |
| --- | --- | --- |
| --- | --- |

Sending an Email
This request is used for sending emails via the internal mailing system of the trading platform.
Request format
POST /api/mail/send?to=login&subject=subject&from_name=name { email text }  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/mail/send?to=764636&subject=Welcome&from_name=John%20Smith \<html\>\<body\>Welcome to MetaTrader 5\<\/body\>\<\/html\> //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * to — the login of the email recipient. You may use the mask "*" as well as specify login ranges in this parameter. Example:

  * to=* — the email will be sent to all clients
  * to=demo*,preliminary — the email will be sent to all clients from groups "demo" and "preliminary".
  * to=100-250,5000-7500 — the email will be sent to all clients from groups "demo" and "preliminary".
  * subject — email subject.
  * from_name — the name of the email sender. Optional parameter.

The email body is passed as an additional body of the request command in the Unicode format. You may use HTML to format emails. The body length must be no more than 8192 characters (16 KB).
Emails are sent only to the accounts which are available to the manager account used for Web API [connection](webapi_rest_authentication.htm#client_start) the to the trade server. Available client groups are defined by the "Groups" parameter in the [manager account settings](webapi_preparing.htm#manager_configuration).  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
