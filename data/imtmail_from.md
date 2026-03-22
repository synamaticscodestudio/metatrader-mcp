# From (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ From | [](imtmail_subject.md "Subject") [](imtmail_fromname.md "FromName") |
| --- | --- | --- |
| --- | --- |

IMTMail::From
Get the login of the email sender.
C++
UINT64 IMTMail::From() const  
---  
.NET (Gateway/Manager API)
ulong CIMTMail.From()  
---  
Return Value
The login of the email sender.
IMTMail::From
Set the login of the email sender.
C++
MTAPIRES IMTMail::From( const UINT64 id // Sender's login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.From( ulong id // Sender's login )  
---  
Parameters
id
[in] The login of the email sender.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.