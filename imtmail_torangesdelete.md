# ToRangesDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Mail Database ](reference_mail.md "Mail Database") / [ IMTMail ](imtmail.md "IMTMail")/ ToRangesDelete | [](imtmail_torangesadd.md "ToRangesAdd") [](imtmail_torangesclear.md "ToRangesClear") |
| --- | --- | --- |
| --- | --- |

IMTMail::ToRangesDelete
Delete a range of logins of email recipients by the index.
C++
MTAPIRES IMTMail::ToRangesDelete( const UINT pos // Position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTMail.ToRangesDelete( uint pos // Position of the range )  
---  
Parameters
pos
[in] Position of the range of logins, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.