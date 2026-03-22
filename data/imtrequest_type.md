# Type (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Type | [](imtrequest_timeexpiration.md "TimeExpiration") [](imtrequest_typefill.md "TypeFill") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Type
Get the order type specified in a request.
C++
UINT IMTRequest::Type() const  
---  
.NET (Gateway/Manager API)
EnOrderType CIMTRequest.Type()  
---  
Return Value
A value of the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration. For balance operations ([IMTRequest::TA_DEALER_BALANCE](imtrequest_enum.htm#entradeactions)), the following values of the [IMTDeal:EnDealAction](imtdeal_enum.htm#endealaction) enumeration are used:
  * DEAL_BALANCE — balance operations
  * DEAL_CREDIT — credit operations
  * DEAL_CHARGE — additional charges
  * DEAL_CORRECTION — correction operations
  * DEAL_BONUS — bonuses
  * DEAL_COMMISSION — commissions

IMTRequest::Type
Set the order type in a request.
C++
MTAPIRES IMTRequest::Type( const UINT type // Order type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Type( EnOrderType type // Order type )  
---  
Parameters
type
[in] Order type. To pass the type, the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration is used. For balance operations ([IMTRequest::TA_DEALER_BALANCE](imtrequest_enum.htm#entradeactions)), the following values of the [IMTDeal:EnDealAction](imtdeal_enum.htm#endealaction) enumeration are used:
  * DEAL_BALANCE — balance operations
  * DEAL_CREDIT — credit operations
  * DEAL_CHARGE — additional charges
  * DEAL_CORRECTION — correction operations
  * DEAL_BONUS — bonuses
  * DEAL_COMMISSION — commissions

Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.