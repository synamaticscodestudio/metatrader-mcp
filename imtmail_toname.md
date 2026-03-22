# ToName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ ToName | [](imtmail_to.md "To") [](imtmail_torangesadd.md "ToRangesAdd") |
| --- | --- | --- |
| --- | --- |

IMTMail::ToName
Get the name of the email recipient.
C++
LPCWSTR IMTMail::ToName() const  
---  
.NET (Gateway/Manager API)
string CIMTMail.ToName()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the recipient. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTMail](imtmail.md "IMTMail") object.
To use the string after the object removal (call of the [IMTMail::Release](imtmail_release.md "Release") method of this object), a copy of it should be created.
IMTMail::ToName
Set the name of the email recipient.
C++
MTAPIRES IMTMail::ToName( LPCWSTR name // Recipient's name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.ToName( string name // Recipient's name )  
---  
Parameters
name
[in] The name of the email recipient.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the email recipient's name is not limited.