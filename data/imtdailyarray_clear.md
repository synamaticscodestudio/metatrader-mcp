# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Clear | [](imtdailyarray_assign.md "Assign") [](imtdailyarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Clear
Clear an object.
C++
MTAPIRES IMTDailyArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.