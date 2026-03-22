# RateProfit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ RateProfit | [](imtposition_storage.md "Storage") [](imtposition_ratemargin.md "RateMargin") |
| --- | --- | --- |
| --- | --- |

IMTPosition::RateProfit
Get the exchange rate of the profit currency of a position to the deposit currency of a client group.
C++
double IMTPosition::RateProfit() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.RateProfit()  
---  
Return Value
The exchange rate of the profit currency of a position to the deposit currency of a client group.
IMTPosition::RateProfit
Set the exchange rate of the profit currency of a position to the deposit currency of a client group.
C++
MTAPIRES IMTPosition::RateProfit( const double rate // Profit ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.RateProfit( double  rate // Profit ratio )  
---  
Parameters
rate
[in] The exchange rate of the profit currency of a position to the deposit currency of a client group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.