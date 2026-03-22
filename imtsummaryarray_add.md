# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Add | [](imtsummaryarray_clear.md "Clear") [](imtsummaryarray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Add
Adds an object of the summary position record at the end of the array.
C++
MTAPIRES IMTSummaryArray::Add( IMTSummary* summary // The object of the summary position record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Add( CIMTSummary summary // The object of the summary position record )  
---  
Parameters
summary
[in] The object of the [summary position](imtsummary.md "IMTSummary") record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the 'summary' object is passed to the array object. Thus, when deleting an array object (call of [IMTSummaryArray::Release](imtsummaryarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTSummaryArray::Add
Adds an object of the array of summary position records at the end of the array.
C++
MTAPIRES IMTSummaryArray::Add( IMTSummaryArray* array // An object of summary position records array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Add( CIMTSummaryArray array // An object of summary position records array )  
---  
Parameters
array
[in] An object of [summary position records array](imtsummaryarray.md "IMTSummaryArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTSummaryArray::Total](imtsummaryarray_total.md "Total") returns 0). When deleting the current array object (call of [IMTSummaryArray::Release](imtsummaryarray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTSummaryArray::Delete](imtsummaryarray_delete.md "Delete") method to delete the element correctly.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example:
//--- Example IMTSummaryArray *array =api->SummaryCreateArray(); IMTSummary *summary=api->SummaryCreate(); //--- array->Add(summary);// After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, after which the pointer in exposure becomes invalid (Release has been called) //--- An example of incorrect use IMTSummaryArray *array =api->SummaryCreateArray(); IMTSummary *summary=api->SummaryCreate(); //--- array->Add(summary);  array->Add(summary); // In this case the array contains two pointers to the same object! //--- Array clearing will cause crash, because two attempts will be made to delete the same object  
---