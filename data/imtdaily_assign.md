# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDaily ](imtdaily.md "\\IMTDaily")/ Assign | [](imtdaily_release.md "Release") [](imtdaily_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDaily::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDaily::Assign( const IMTDaily* exec // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDaily.Assign( CIMTDaily exec // Source object )  
---  
Parameters
exec
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.