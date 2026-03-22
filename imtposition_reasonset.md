# ReasonSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ReasonSet | [](imtposition_reason.md "Reason") [](imtposition_pricegateway.md "PriceGateway") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ReasonSet
Set the reason for opening a position.
C++
MTAPIRES IMTPosition::ReasonSet( const UINT reason // reason )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ReasonSet( uint reason // reason )  
---  
Parameters
reason
[in] Reason for opening a position. The [IMTPosition::EnPositionReason](imtposition_enum.htm#enpositionreason) enumeration is used to pass it.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Do not change a reason for opening a position without a serious cause to keep the data integrity intact.