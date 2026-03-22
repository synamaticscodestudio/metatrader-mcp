# TimeExpiration (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ TimeExpiration | [](imtrequest_action.md "Action") [](imtrequest_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTRequest::TimeExpiration
Get the expiration time specified in a trade request.
C++
INT64 IMTRequest::TimeExpiration() const  
---  
.NET (Gateway/Manager API)
long CIMTRequest.TimeExpiration()  
---  
Return Value
Expiration date and time specified in a trade request, in seconds that have elapsed since 01.01.1970. The 0 value means that the order has no expiration.
IMTRequest::TimeExpiration
Set the expiration time in a trade request.
C++
MTAPIRES IMTRequest::TimeExpiration( const INT64 time // Expiration time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.TimeExpiration( long time // Expiration time )  
---  
Parameters
time
[in] Expiration date and time in a trade request in seconds elapsed since 01.01.1970. The 0 value means that there is no expiration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The specified expiration time is always rounded to a whole minute. The minimum expiration time is 1 minute.