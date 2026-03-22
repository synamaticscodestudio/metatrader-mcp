# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ AddCopy | [](imtdailyarray_add.md "Add") [](imtdailyarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::AddCopy
Add a copy of the daily report object at the end of an array.
C++
MTAPIRES IMTDailyArray::AddCopy( const IMTDaily* daily // The daily report that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.AddCopy( CIMTDaily daily // The daily report that is being added )  
---  
Parameters
daily
[in] An object of the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the daily object and places it at the end of the array.
Unlike [IMTDailyArray::Add(IMTDaily* daily)](imtdailyarray_add.md "Add"), calling this method does not set any additional conditions for the control of the daily object, but is more resource-intensive, since an additional object is created.
IMTDailyArray::AddCopy
Add copies of the objects of daily report in an array.
C++
MTAPIRES IMTDailyArray::AddCopy( const IMTDailyArray* array // An array of daily reports that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.AddCopy( CIMTDailyArray array // An array of daily reports that is being added )  
---  
Parameters
array
[in] An object of the array of daily reports.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the objects of daily reports belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTDailyArray::Add(IMTDailyArray* array)](imtdailyarray_add.md "Add"), calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.