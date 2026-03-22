# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Delete | [](imtdailyarray_addcopy.md "AddCopy") [](imtdailyarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Delete
Delete an object of a daily report by its position.
C++
MTAPIRES IMTDailyArray::Delete( const UINT pos // Position of a daily report )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Delete( uint pos // Position of a daily report )  
---  
Parameters
pos
[in] Position of a daily report in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTDaily::Release](imtdaily_release.md "Release") method.