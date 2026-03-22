# RateMargin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ RateMargin | [](imtposition_rateprofit.md "RateProfit") [](imtposition_expertid.md "ExpertID") |
| --- | --- | --- |
| --- | --- |

IMTPosition::RateMargin
Get the exchange rate of the margin currency of a position to the client's deposit currency.
C++
double IMTPosition::RateMargin() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.RateMargin()  
---  
Return Value
The exchange rate of the margin currency of a position to the client's deposit currency.
IMTPosition::RateMargin
Set the exchange rate of the margin currency of a position to the client's deposit currency.
C++
MTAPIRES IMTPosition::RateMargin( const double rate // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.RateMargin( double rate // Margin ratio )  
---  
Parameters
rate
[in] The exchange rate of the margin currency of a position to the client's deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.