# ProfitAssets (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ ProfitAssets | [](imtdaily_profitequity.md "ProfitEquity") [](imtdaily_profitliabilities.md "ProfitLiabilities") |
| --- | --- | --- |
| --- | --- |

IMTDaily::ProfitAssets
Get the current amount of client assets in a daily report.
C++
double IMTDaily::ProfitAssets() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.ProfitAssets()  
---  
Return Value
The current amount of client assets in a daily report.
Further Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).
IMTDaily::ProfitAssets
Set the current total amount of assets on a trading account.
C++
MTAPIRES IMTDaily::ProfitAssets( const double assets // Amount of assets )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.ProfitAssets( double assets // Amount of assets )  
---  
Program Parameters
assets
[in] The current amount of client assets in a daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Further Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).