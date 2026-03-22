# Subject (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ Subject | [](imtmail_parent.md "Parent") [](imtmail_from.md "From") |
| --- | --- | --- |
| --- | --- |

IMTMail::Subject
Get the subject of an email.
C++
LPCWSTR IMTMail::Subject() const  
---  
.NET (Gateway/Manager API)
string CIMTMail.Subject()  
---  
Return Value
If successful, it returns a pointer to a string with the email subject. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTMail](imtmail.md "IMTMail") object.
To use the string after the object removal (call of the [IMTMail::Release](imtmail_release.md "Release") method of this object), a copy of it should be created.
IMTMail::Subject
Sets the email subject.
C++
MTAPIRES IMTMail::Subject( LPCWSTR subject // Email subject )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.Subject( string subject // Email subject )  
---  
Parameters
subject
[in] Subject of an email.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the email subject is not limited.