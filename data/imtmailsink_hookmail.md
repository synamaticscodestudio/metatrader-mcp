# HookMail (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMailSink ](imtmailsink.md "IMTMailSink")/ HookMail | [](imtmailsink_onmail.md "OnMail") [](reference_news.md "News Database") |
| --- | --- | --- |
| --- | --- |

IMTMailSink::HookMail
A hook of the event of email receiving.
C++
virtual MTAPIRES IMTMailSink::HookMail( IMTMail* mail // Mail object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTMailSink.HookMail( CIMTMail mail // Mail object )  
---  
Parameters
mail
[in][out] An object of the email.
Return Value
In case there are no handlers if this event, [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") is returned.
Note
The hook is called consistently in accordance with the order of plugins in the list until the first plugin that has returned a response code other than [MT_RET_OK_NONE](retcodes_successful.md "Successful completion").
This method is used only in the MetaTrader 5 Server API.