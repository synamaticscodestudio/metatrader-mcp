# ToRangesAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ ToRangesAdd | [](imtmail_toname.md "ToName") [](imtmail_torangesdelete.md "ToRangesDelete") |
| --- | --- | --- |
| --- | --- |

IMTMail::ToRangesAdd
Add a range of logins of email recipients.
C++
MTAPIRES IMTMail::ToRangesAdd( MTMailRange& range // A pointer to the structure of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.ToRangesAdd( ref MTMailRange range // A structure of the range )  
---  
Parameters
range
[in] A reference to the [MTMailRange](mtmailrange.md "MTMailRange"), structure that describes the range of recipients. The structure must be pre-filled. The structure must be pre-filled.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.