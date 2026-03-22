# PriceOpen (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ PriceOpen | [](imtposition_timeupdatemsc.md "TimeUpdateMsc") [](imtposition_pricecurrent.md "PriceCurrent") |
| --- | --- | --- |
| --- | --- |

IMTPosition::PriceOpen
Gets the weighted average open price of a position.
C++
double IMTPosition::PriceOpen() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.PriceOpen()  
---  
Return Value
The weighted average open price of a position.
Note
The weighted average price is calculated by the following formula: (price of deal 1 * volume of deal 1 1 + ... + price of deal N * volume of deal N) / (volume of deal 1 + ... + volume of deal N).
IMTPosition::PriceOpen
Set the weighted average open price of a position.
C++
MTAPIRES IMTPosition::PriceOpen( const double price // Open price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.PriceOpen( double price // Open price )  
---  
Parameters
price
[in] The weighted average open price of a position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.