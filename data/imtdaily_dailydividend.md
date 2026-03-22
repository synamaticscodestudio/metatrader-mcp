# DailyDividend (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyDividend | [](imtdaily_dailycommfee.md "DailyCommFee") [](imtdaily_dailytaxes.md "DailyTaxes") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyDividend
Get the amount of [dividends](imtdeal_enum.htm#endealaction) accrued to the client for a reported day.
C++
double IMTDaily::DailyDividend() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyDividend()  
---  
Return Value
The amount of dividends accrued to the client for a reported day.
IMTDaily::DailyDividend
Set the amount of [dividends](imtdeal_enum.htm#endealaction) accrued to the client for a reported day.
C++
MTAPIRES IMTDaily::DailyDividend( const double dividend // daily dividends )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyDividend( double dividend // daily dividends )  
---  
Parameters
dividend
[in] The amount of dividends accrued to the client for a reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.