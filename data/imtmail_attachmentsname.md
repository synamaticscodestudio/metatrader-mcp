# AttachmentsName (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ AttachmentsName | [](imtmail_attachmentssize.md "AttachmentsSize") [](imtmailsink.md "IMTMailSink") |
| --- | --- | --- |
| --- | --- |

IMTMail::AttachmentsName
Get the name of an attachment by its position.
C++
LPCWSTR IMTMail::AttachmentsName( const UINT pos // File position ) const  
---  
.NET (Gateway/Manager API)
string CIMTMail.AttachmentsName( uint pos // File position )  
---  
Parameters
pos
[in] The position of an attached file in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with the file name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTMail](imtmail.md "IMTMail") object.
To use the string after the object removal (call of the [IMTMail::Release](imtmail_release.md "Release") method of this object), a copy of it should be created.
The length of the name of the attached file is unlimited.