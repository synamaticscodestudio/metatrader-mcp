# To (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ To | [](imtmail_fromname.md "FromName") [](imtmail_toname.md "ToName") |
| --- | --- | --- |
| --- | --- |

IMTMail::To
Get the login of the email recipient.
C++
UINT64 IMTMail::To() const  
---  
.NET (Gateway/Manager API)
ulong CIMTMail.To()  
---  
Return Value
The login of the email recipient.
IMTMail::To
Set the login of the email recipient.
C++
MTAPIRES IMTMail::To( const UINT64 id // Recipient's login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.To( ulong id // Recipient's login )  
---  
Parameters
id
[in] The login of the email recipient.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.