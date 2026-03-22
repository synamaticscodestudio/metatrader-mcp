# Get Mail Without Body (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Mail ](webapi_mail.md "Mail")/ Get Mail Without Body | [](webapi_mail_send.md "Send Email") [](webapi_mail_body_request.md "Get Mail With Body") |
| --- | --- | --- |
| --- | --- |

Get the brief email description
The request allows receiving a brief email description, without its body and attachments.
Request Format
GET /api/mail/get?id=mail_identifiers&total=number_of_mails  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { mail description }, { mail description }, ... ] }  
---  
Example
//--- request to the server POST /api/mail/get?total=2 //--- server response { "retcode" : "0 Done", "answer": [ { "ID": "110659832381441", "Time": "110659832381441", "From": "0", "FromName": "ABC Broker", "To": "1001", "ToName": "John Smith", "AttachmentSize": "0", "Subject": "New account registration" }, { "ID": "110659832381442", "Time": "110659832381451", "From": "0", "FromName": "ABC Broker", "To": "1001", "ToName": "John Smith", "AttachmentSize": "0", "Subject": "Welcome to ABC Broker" } ] }  
---  
Request Parameters
  * id — one or more email identifiers separated by commas. An optional parameter. If the identifier is not specified, all available emails are returned, starting from the first one. Otherwise, the request will return all emails with identifiers following the specified one.
  * total — the number of emails which the WebAPI client is ready to receive. If no limit is set, the maximum possible number of emails is returned. If there are too many email, so that they cannot be passed in one message (internal limit is reached), the request will return as many emails as it is possible, with the response code [14](retcodes_common.md "Common errors").

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of emails in JSON format. The complete description of the passed data is given in the ["Data structure"](webapi_mail_data_structure.md "Data Structure") section.
