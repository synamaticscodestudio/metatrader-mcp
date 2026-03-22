# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Mail ](webapi_mail.md "Mail")/ Data Structure | [](webapi_mail.md "Mail") [](webapi_mail_send.md "Send Email") |
| --- | --- | --- |
| --- | --- |

Data Structure
Emails are passed in the JSON format in response to the [/api/mail/get](webapi_mail_get.md "Get Mail Without Body") and [/api/mail/get_body](webapi_mail_body_request.md "Get Mail With Body") requests.
Email
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| ID | Integer | Email identifier. |
| Time | Integer | The time of email sending in seconds elapsed since 01.01.1970. |
| From | Integer | The login of the email sender. |
| FromName | String | The name of the email sender. |
| To | Integer | The login of the email recipient. |
| ToName | String | The name of the email recipient. |
| AttachmentSize | Integer | The size of the email attachments in bytes. |
| Subject | String | Get and set the subject of an email. |
| Body | String | Email body in the Base64 format. |

Attachment
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| Path | Integer | The path at which the attachment is located on the local disk. |
| Content | Integer | Attachment contents in the Base64 format. |