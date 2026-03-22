# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports") / [ IMTDailyArray ](imtdailyarray.md "IMTDailyArray")/ Add | [](imtdailyarray_clear.md "Clear") [](imtdailyarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray::Add
Add an object of the daily report at the end of an array.
C++
MTAPIRES IMTDailyArray::Add( IMTDaily* daily // An object of a daily report )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Add( CIMTDaily daily // An object of a daily report )  
---  
Parameters
daily
[in] An object of the daily report.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the daily object is passed to the array object. Thus, when deleting an array object (call of [IMTDailyArray::Release](imtdailyarray_release.md "Release")), an earlier inserted object will be automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTDailyArray::Add
Add an object of the array of daily reports at the end of an array.
C++
MTAPIRES IMTDailyArray::Add( IMTDailyArray* array // An array of daily reports that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDailyArray.Add( CIMTDailyArray array // An array of daily reports that is being added )  
---  
Parameters
array
[in] An object of the array of daily reports.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The 'array' object is cleared (call of [IMTDailyArray::Total](imtdailyarray_total.md "Total") will return 0). When deleting the current array object (call of [IMTDailyArray::Release](imtdailyarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will make the pointer stored within the array object invalid, and its call (including the case of array object deletion) will cause crash of the application. Use [IMTDailyArray::Delete](imtdailyarray_delete.md "Delete") method to delete the element correctly..
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example
//--- Example IMTDailyArray *array=api->DailyCreateArray();  IMTDaily *daily=api->DailyCreate(); //--- array->Add(daily); // After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, and the pointer in daily becomes invalid (Release was called) //--- An example of incorrect use IMTDailyArray *array=api->DailyCreateArray();  IMTDaily *daily=api->DailyCreate(); //--- array->Add(daily); array->Add(daily); // In this case the array contains two pointers to the same object! //--- Releasing the object will cause crash, because it will try to delete an object twice  
---