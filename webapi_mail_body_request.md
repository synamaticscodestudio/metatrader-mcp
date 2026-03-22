# Get Mail With Body (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Mail ](webapi_mail.md "Mail")/ Get Mail With Body | [](webapi_mail_get.md "Get Mail Without Body") [](webapi_news.md "News") |
| --- | --- | --- |
| --- | --- |

Get the full email description
The request allows receiving the full email description, including its body and attachments.
Request Format
GET /api/mail/get_body?id=mail_identifiers  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { news description }, { news description }, ... ] }  
---  
Example
//--- request to the server POST /api/mail/get_body?id=496341,496342 //--- server response { "retcode" : "0 Done", "answer": [ { "Info": { "ID": 110659832381441, "Time": 110659832381441, "From": 1000, "FromName": "ABC Broker", "To": 1001, "ToName": "John Smith", "AttachmentSize": 0, "Subject": "New account registration" }, "Body": "48AGgAdAB...jAGMAbwB1HIA", "Attachments": [] }, { "Info": { "ID": 110664127348741, "Time": 110659832381441, "From": 1000, "FromName": "ABC Broker", "To": 1001, "ToName": "John Smith", "AttachmentSize": 136609, "Subject": "Welcome to ABC Broker" }, "Body": "PABoAHQAA...vAGMAcwBzACIA", "Attachments": [ { "Path": "E:\welcome.png", "Content": "DQo9PT09PT0...IwLUZlYi0wNiAxODoxMjox" }, { "Path": "E:\services.txt", "Content": "I2luY2x1Z...FtZXNwYWNl" } ] } ] }  
---  
Request Parameters
  * id — one or more email identifiers separated by commas. Required parameter. To receive identifiers, please use the [/api/mail/get](webapi_mail_get.md "Get Mail Without Body") request.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of emails in JSON format. The complete description of the passed data is given in the ["Data structure"](webapi_mail_data_structure.md "Data Structure") section.
