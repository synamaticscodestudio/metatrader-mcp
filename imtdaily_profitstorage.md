# ProfitStorage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ ProfitStorage | [](imtdaily_profit.md "Profit") [](imtdaily_profitcommission.md "ProfitCommission") |
| --- | --- | --- |
| --- | --- |

IMTDaily::ProfitStorage
Get the current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance.
C++
double IMTDaily::ProfitStorage() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.ProfitStorage()  
---  
Return Value
The current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance.
IMTDaily::ProfitStorage
Set the current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance.
C++
MTAPIRES IMTDaily::ProfitStorage( const double storage // Swaps )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.ProfitStorage( double storage // Swaps )  
---  
Parameters
storage
[in] The current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.