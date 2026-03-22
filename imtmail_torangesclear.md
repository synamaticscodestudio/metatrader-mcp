# ToRangesClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ ToRangesClear | [](imtmail_torangesdelete.md "ToRangesDelete") [](imtmail_torangestotal.md "ToRangesTotal") |
| --- | --- | --- |
| --- | --- |

IMTMail::ToRangesClear
Clear the ranges of logins of email recipients.
C++
MTAPIRES IMTMail::ToRangesClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.ToRangesClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method clears all ranges of logins of email recipients.