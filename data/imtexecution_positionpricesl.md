# PositionPriceSL (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ PositionPriceSL | [](imtexecution_positionbyexternalid.md "PositionByExternalID") [](imtexecution_positionpricetp.md "PositionPriceTP") |
| --- | --- | --- |
| --- | --- |

IMTExecution::PositionPriceSL
Gets the Stop Loss level specified for a position in an external trading system.
C++
double IMTExecution::PositionPriceSL() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.PositionPriceSL()  
---  
Return Value
The Stop Loss level specified for an order in an external trading system.
IMTExecution::PositionPriceSL
Sets the Stop Loss level specified for a position in an external trading system.
C++
MTAPIRES IMTExecution::PositionPriceSL( const double price // Stop Loss level )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.PositionPriceSL( double price // Stop Loss level )  
---  
Parameters
price
[in] The Stop Loss level specified for a position in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.