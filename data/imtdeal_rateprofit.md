# RateProfit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ RateProfit | [](imtdeal_fee.md "Fee") [](imtdeal_ratemargin.md "RateMargin") |
| --- | --- | --- |
| --- | --- |

IMTDeal::RateProfit
Gets the exchange rate of the profit currency of a deal to the deposit currency of a client group.
C++
double IMTDeal::RateProfit() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.RateProfit()  
---  
Python
MTDeal.RateProfit  
---  
Return Value
The exchange rate of the profit currency of a deal to the deposit currency of a client group.
IMTDeal::RateProfit
Sets the exchange rate of the profit currency of a deal to the deposit currency of a client group.
C++
MTAPIRES IMTDeal::RateProfit( const double rate // Profit ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.RateProfit( double rate // Profit ratio )  
---  
Python
MTDeal.RateProfit  
---  
Parameters
rate
[in] The exchange rate of the profit currency of a deal to the deposit currency of a client group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.