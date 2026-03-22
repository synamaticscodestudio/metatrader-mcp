# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ Assign | [](imtmail_release.md "Release") [](imtmail_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTMail::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTMail::Assign( const IMTMail* mail // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.Assign( CIMTMail  mail // Source object )  
---  
Parameters
mail
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.