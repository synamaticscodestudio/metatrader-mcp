# FromName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ FromName | [](imtmail_from.md "From") [](imtmail_to.md "To") |
| --- | --- | --- |
| --- | --- |

IMTMail::FromName
Get the name of the email sender.
C++
LPCWSTR IMTMail::FromName() const  
---  
.NET (Gateway/Manager API)
string CIMTMail.FromName()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the sender. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTMail](imtmail.md "IMTMail") object.
To use the string after the object removal (call of the [IMTMail::Release](imtmail_release.md "Release") method of this object), a copy of it should be created.
IMTMail::FromName
Set the name of the email sender.
C++
MTAPIRES IMTMail::FromName( LPCWSTR name // Sender's name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.FromName( string name // Sender's name )  
---  
Parameters
name
[in] The name of the email sender.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the email sender's name is unlimited.