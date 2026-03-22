# DailyTaxes (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyTaxes | [](imtdaily_dailydividend.md "DailyDividend") [](imtdaily_dailysocompensation.md "DailySOCompensation") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyTaxes
Get the amount of [taxes](imtdeal_enum.htm#endealaction) withheld from the client's funds for the reported day.
C++
double IMTDaily::DailyTaxes() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyTaxes()  
---  
Return Value
The amount of taxes withheld from the client for the reported day.
IMTDaily::DailyTaxes
Set the amount of [taxes](imtdeal_enum.htm#endealaction) withheld from the client's funds for the reported day.
C++
MTAPIRES IMTDaily::DailyTaxes( const double taxes  // daily taxes )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyTaxes( double taxes // daily taxes )  
---  
Parameters
taxes
[in] The amount of taxes withheld from the client for the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.