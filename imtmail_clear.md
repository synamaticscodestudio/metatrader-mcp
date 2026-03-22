# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ Clear | [](imtmail_assign.md "Assign") [](imtmail_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTMail::Clear
Clear an object.
C++
MTAPIRES IMTMail::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.