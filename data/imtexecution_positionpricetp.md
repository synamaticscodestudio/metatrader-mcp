# PositionPriceTP (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ PositionPriceTP | [](imtexecution_positionpricesl.md "PositionPriceSL") [](imtexecution_eossessionstart.md "EOSSessionStart") |
| --- | --- | --- |
| --- | --- |

IMTExecution::PositionPriceTP
Gets the Take Profit level specified for a position in an external trading system.
C++
double IMTExecution::PositionPriceTP() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.PositionPriceTP()  
---  
Return Value
The Take Profit level specified for a position in an external trading system.
IMTExecution::PositionPriceTP
Sets the Take Profit level specified for an order in an external trading system.
C++
MTAPIRES IMTExecution::PositionPriceTP( const double price // Take Profit level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.PositionPriceTP( double price // Take Profit level )  
---  
Parameters
price
[in] The Take Profit level specified for a position in an external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.