# Send Email (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Email ](webapi_email.md "Email")/ Send Email | [](webapi_email_get_all.md "Get All") [](webapi_messenger.md "Messengers") |
| --- | --- | --- |
| --- | --- |

Send Email
The request allows sending emails to clients.
Request Format
GET /api/email/send?account=configuration&to=email&name=recipient&subject=subject&body=text  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/email/send?account=MailServer&to=john.smith@mail.net&name=John&subject=WebAPI&body=hello //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * account — the name of the mail server configuration, via which the email will be sent. The "[Name](webapi_email_data_structure.md "Data Structure")" field is used for the name.
  * to — recipient's email address.
  * name — recipient's name.
  * subject — email subject.
  * body — email body.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * All method parameters are required.
  * To be able to send emails, the platform must have pre-configured mail services.
