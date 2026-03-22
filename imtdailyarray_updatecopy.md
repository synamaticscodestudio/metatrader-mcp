# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ UpdateCopy | [](imtdailyarray_update.md "Update") [](imtdailyarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::UpdateCopy
Change a daily report at the specified position of an array by copying the parameters of a passed object of a daily report.
C++
MTAPIRES IMTDailyArray::UpdateCopy( const UINT  pos, // Position const IMTDaily* daily // An object of a daily report )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.UpdateCopy( uint  pos, // Position CIMTDaily daily // An object of a daily report )  
---  
Parameters
pos
[in] Position of a daily report in an array, starting with 0.
order
[in] An object of the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the daily object into an object of a daily report at the specified position of an array.
Unlike the [IMTDailyArray::Update](imtdailyarray_update.md "Update"), method, calling this method does not set any additional conditions for the control of the daily object, but is more resource-intensive, since an additional object is created.