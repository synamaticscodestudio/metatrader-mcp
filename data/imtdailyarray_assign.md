# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Assign | [](imtdailyarray_release.md "Release") [](imtdailyarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDailyArray::Assign( const IMTDailyArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Assign( CIMTDailyArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.