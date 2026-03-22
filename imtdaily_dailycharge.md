# DailyCharge (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCharge | [](imtdaily_dailycredit.md "DailyCredit") [](imtdaily_dailycorrection.md "DailyCorrection") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCharge
Get the amount of other charges to the client's balance during the reported day.
C++
double IMTDaily::DailyCharge()  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCharge()  
---  
Return Value
The amount of other charges to the client's balance during the reported day.
IMTDaily::DailyCharge
Sets the amount of other charges to the client's balance during the reported day.
C++
MTAPIRES IMTDaily::DailyCharge( const double charge // Other charges for the day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCharge( double charge // Other charges for the day )  
---  
Parameters
charge
[in] The amount of other charges to the client's balance during the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.