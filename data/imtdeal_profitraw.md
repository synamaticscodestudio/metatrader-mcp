# ProfitRaw (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ProfitRaw | [](imtdeal_apidataclearall.md "ApiDataClearAll") [](imtdeal_priceposition.md "PricePosition") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ProfitRaw
Gets the value of profit/loss resulting from the deal execution. The profit/loss is expressed in the [profit currency of the symbol](imtconsymbol_currencyprofit.md "CurrencyProfit"), for which a deal is executed.
C++
double IMTDeal::ProfitRaw() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.ProfitRaw()  
---  
Python
MTDeal.ProfitRaw  
---  
Return Value
The profit/loss value in the symbol profit currency.
Note
The profit value can only be obtained for deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).
IMTDeal::ProfitRaw
Sets the value of profit/loss resulting from the deal execution. The profit/loss is expressed in the [profit currency of the symbol](imtconsymbol_currencyprofit.md "CurrencyProfit"), for which a deal is executed.
C++
MTAPIRES IMTDeal::ProfitRaw( const double profit // The profit/loss value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ProfitRaw( double profit // The profit/loss value )  
---  
Python
MTDeal.ProfitRaw  
---  
Parameters
profit
[in] The profit/loss value in the profit currency of the symbol, for which a deal is executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The profit value can only be set for deals of type [IMTDeal::ENTRY_OUT](imtdeal_enum.htm#endealentry) and [IMTDeal::ENTRY_INOUT](imtdeal_enum.htm#endealentry).