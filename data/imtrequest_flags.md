# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Flags | [](imtrequest_typetime.md "TypeTime") [](imtrequest_volume.md "Volume") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Flags
Get additional flags of a trade request.
C++
UINT IMTRequest::Flags() const  
---  
.NET (Gateway/Manager API)
EnTradeActionFlags CIMTRequest.Flags()  
---  
Return Value
A value of the [IMTRequest::EnTradeActionFlags](imtrequest_enum.htm#entradeactionflags) enumeration.
IMTRequest::Flags
Set additional flags of a trade request.
C++
MTAPIRES IMTRequest::Flags( const UINT flags // Additional flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Flags( EnTradeActionFlags flags // Additional flags )  
---  
Parameters
flags
[in] The [IMTRequest::EnTradeActionFlags](imtrequest_enum.htm#entradeactionflags) enumeration is used for passing additional flags.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.