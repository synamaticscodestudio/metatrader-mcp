# MailBodyRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Mail Database ](imtmanagerapi_mail.md "Mail Database Functions")/ MailBodyRequest | [](imtmanagerapi_mailsend.md "MailSend") [](imtmanagerapi_news.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MailBodyRequest
Get an email body.
C++
MTAPIRES IMTManagerAPI::MailBodyRequest( const UINT64 id, // email ID IMTMail* mail // an email object )  
---  
.NET
MTRetCode CIMTManagerAPI.MailBodyRequest( ulong id, // email ID CIMTMail mail // an email object )  
---  
You should use these inputs;
pos
[in] The ID of the email received by the manager. The [IMTMail::Id](imtmail_id.md "ID") value is used as the identifier.
mail
[out] An email object. The 'mail' object must be first created using the [IMTManagerAPI::MailCreate](imtmanagerapi_mailcreate.md "MailCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Further Note
To prevent from the slowdown of the API performance and from unnecessary traffic, the server sends large emails without bodies and attachments. If [IMTMail::BodySize](imtmail_body.md "Body") is equal to 0, request the email body using the IMTManagerAPI::MailBodyRequest method and pass to it the ID of the received email [IMTMail::Id](imtmail_id.md "ID").
Applications that use Manager API version below 1655, always receive a full email. IMTManagerAPI::MailBodyRequest is not supported in such applications.
The method completely fills the 'mail' object, i.e. the email body (including attachments), as well as the subject, the header, etc.
The method only works if the [IMTManagerAPI::PUMP_MODE_MAIL](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode has been specified during the connection.
The method cannot be called from event handlers (any IMT*Sink class methods).