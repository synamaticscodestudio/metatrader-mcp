# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Update | [](imtdailyarray_detach.md "Detach") [](imtdailyarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Update
Change a daily report at the specified position of an array.
C++
MTAPIRES IMTDailyArray::Update( const UINT pos, // Position IMTDaily* daily // An object of a daily report )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Update( uint  pos, // Position CIMTDaily daily // An object of a daily report )  
---  
Parameters
pos
[in] Position of a daily report in an array, starting with 0.
daily
[in] An object of the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTDailyArray::Update method deletes the previous element (call of [IMTDaily::Release](imtdaily_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of IMTDailyArray::Release), an earlier inserted object will be automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTDailyArray *array =api->DailyCreateArray();  IMTDaily *daily1=api->DailyCreate(); IMTDaily *daily2=api->DailyCreate(); //--- array->Add(daily1); array->Update(0,daily2); // The first element (object daily1) is replaced by daily2 //--- After that the daily1 element will be released using Release, and the daily2 lifetime will be controlled by the array  
---