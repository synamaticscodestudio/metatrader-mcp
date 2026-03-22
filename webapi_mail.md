# Mail (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)")/ Mail | [](webapi_attachment_attach.md "Bind/Unbind Attachment") [](webapi_mail_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Mail
The MetaTrader 5 Web API allows receiving and sending emails via the platform's internal mail system. The following requests are provided:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/mail/send](webapi_mail_send.md "Send Email") | Send mail. |
| [/api/mail/get](webapi_mail_get.md "Get Mail Without Body") | Get a brief email description without a body and attachments. |
| [/api/mail/get_body](webapi_mail_body_request.md "Get Mail With Body") | Get the full email description with its body and attachments. |