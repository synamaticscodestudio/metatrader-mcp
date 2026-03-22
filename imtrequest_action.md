# Action (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Action | [](imtrequest_digitsset.md "DigitsSet") [](imtrequest_timeexpiration.md "TimeExpiration") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Action
Get the type of action to which the trade request belongs.
C++
UINT IMTRequest::Action() const  
---  
.NET (Gateway/Manager API)
EnTradeActions CIMTRequest.Action()  
---  
Return Value
A value of the [IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration.
IMTRequest::Action
Set the type of action to which the trade request belongs.
C++
MTAPIRES IMTRequest::Action( const UINT  action // Action type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Action( EnTradeActions action // Action type )  
---  
Parameters
action
[in] The type of action. The [IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration is used to pass the type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.