# DailyCommFee (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ DailyCommFee | [](imtdaily_dailycommround.md "DailyCommRound") [](imtdaily_dailydividend.md "DailyDividend") |
| --- | --- | --- |
| --- | --- |

IMTDaily::DailyCommFee
Get the [fee amount](imtconcommission_enum.htm#encommmode) charged for the client's deals for the reported day.
C++
double IMTDaily::DailyCommFee() const  
---  
.NET (Gateway/Manager API)
double CIMTDaily.DailyCommFee()  
---  
Return Value
The fee amount charged for the client's deals for the reported day.
IMTDaily::DailyCommInstant
Set the [fee amount](imtconcommission_enum.htm#encommmode) charged for the client's deals for the reported day.
C++
MTAPIRES IMTDaily::DailyCommFee( const double fee // daily fees )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.DailyCommFee( double fee // daily fees )  
---  
Parameters
fee
[in] The fee amount charged for the client's deals for the reported day.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.