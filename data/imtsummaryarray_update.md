# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ Update | [](imtsummaryarray_detach.md "Detach") [](imtsummaryarray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::Update
Modifies a summary position record in the array.
C++
MTAPIRES IMTSummaryArray::Update( const UINT pos, // Position in the array IMTSummary* summary // The object of the summary position record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.Update( uint pos, // Position in the array CIMTSummary summary // The object of the summary position record )  
---  
Parameters
pos
[in] The position of a record in an array, starting with 0.
summary
[in] The object of the summary position record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTSummaryArray::Update method deletes the previous element (call of [IMTSummary::Release](imtsummary_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of [IMTSummaryArray::Release](imtsummaryarray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example:
//--- Example IMTSummaryArray *array =api->SummaryCreateArray(); IMTSummary *summary1=api->SummaryCreate(); IMTSummary *summary2=api->SummaryCreate(); //--- array->Add(summary1); array->Update(0,summary2); // The first element (the summary1 object) is replaced with summary2 //--- Aafter that the summary1 element will be released through Release, and the lifetime of summary2 will be controlled by the array  
---