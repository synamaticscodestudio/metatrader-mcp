# RateMargin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ RateMargin | [](imtdeal_rateprofit.md "RateProfit") [](imtdeal_expertid.md "ExpertID") |
| --- | --- | --- |
| --- | --- |

IMTDeal::RateMargin
Gets the exchange rate of the margin currency of a deal to the client's deposit currency.
C++
double IMTDeal::RateMargin() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.RateMargin()  
---  
Python
MTDeal.RateMargin  
---  
Return Value
The exchange rate of the margin currency of a deal to the client's deposit currency.
IMTDeal::RateMargin
Sets the exchange rate of the margin currency of a deal to the client's deposit currency.
C++
MTAPIRES IMTDeal::RateMargin( const double rate // Margin ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.RateMargin( double rate // Margin ratio )  
---  
Python
MTDeal.RateMargin  
---  
Parameters
rate
[in] The exchange rate of the margin currency of a deal to the client's deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.