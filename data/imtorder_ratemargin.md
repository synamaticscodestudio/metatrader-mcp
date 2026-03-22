# RateMargin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ RateMargin | [](imtorder_apidatanext.md "APIDataNext") [](imtorder_modificationflags.md "ModificationFlags") |
| --- | --- | --- |
| --- | --- |

IMTOrder::RateMargin
Get the the conversion rate of the [symbol margin currency](imtconsymbol_currencymargin.md "CurrencyMargin") to the [client's deposit currenc](imtcongroup_currency.md "Currency"), which is used for calculating the margin for an order.
C++
double IMTOrder::RateMargin() const  
---  
.NET (Gateway/Manager API)
double CIMTOrder.RateMargin()  
---  
Python
MTOrder.RateMargin  
---  
Return Value
The exchange rate of the symbol margin currency to the client's deposit currency.
IMTOrder::RateMargin
Sets the conversion rate of the [symbol margin currency](imtconsymbol_currencymargin.md "CurrencyMargin") to the [client's deposit currency](imtcongroup_currency.md "Currency"), which is used for calculating the margin for an order.
C++
MTAPIRES IMTOrder::RateMargin( const double rate // Exchange rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.RateMargin( double rate // Exchange rate )  
---  
Python
MTOrder.RateMargin  
---  
Parameters
rate
[in] The exchange rate of the symbol margin currency to the client's deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.