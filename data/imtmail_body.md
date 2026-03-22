# Body (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ Body | [](imtmail_time.md "Time") [](imtmail_bodysize.md "BodySize") |
| --- | --- | --- |
| --- | --- |

IMTMail::Body
Get the message body.
C++
LPCVOID IMTMail::Body() const  
---  
.NET (Gateway/Manager API)
byte[] CIMTMail.Body()  
---  
Return Value
If successful, it returns a pointer to the string with the message body. Otherwise, it returns NULL.
Note
The returned pointer is valid until the object is deleted by calling [IMTMail::Release](imtmail_release.md "Release") or another object control method ([IMTMail::Clear](imtmail_clear.md "Clear")).
IMTMail::Body
Create the message body.
C++
MTAPIRES IMTMail::Body( LPCVOID body, // A pointer to the email body const UINT body_size // The size of the email body )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.Body( byte[] body // A pointer to the email body )  
---  
Parameters
body
[in] A pointer to the email body.
body_size
[in] The size of the email body in bytes. The maximum size is 10 MB.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Data in the email must be presented in UTF-16 Little Endian encoding. Use of other encodings is not allowed.