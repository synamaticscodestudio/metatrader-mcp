# TypeTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ TypeTime | [](imtrequest_typefill.md "TypeFill") [](imtrequest_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTRequest::TypeTime
Get the type of order expiration specified in a request.
C++
UINT IMTRequest::TypeTime() const  
---  
.NET (Gateway/Manager API)
EnOrderTime CIMTRequest.TypeTime()  
---  
Return Value
A value of the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration.
IMTRequest::TypeTime
Set the order expiration type in a request.
C++
MTAPIRES IMTRequest::TypeTime( const UINT type // Expiration type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.TypeTime( EnOrderTime type // Expiration type )  
---  
Parameters
type
[in] Order expiration type. To pass the type, the [IMTOrder::EnOrderTime](imtorder_enum.htm#enordertime) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.