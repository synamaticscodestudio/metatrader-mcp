# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ UpdateCopy | [](imtsummaryarray_update.md "Update") [](imtsummaryarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::UpdateCopy
Modifies a summary position record at the specified position of an array by copying the parameters of the passed object of a summary position.
C++
MTAPIRES IMTSummaryArray::UpdateCopy( const UINT  pos, // Position const IMTSummary* summary // The object of the summary position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.UpdateCopy( uint  pos, // Position CIMTSummary summary // The object of the summary position )  
---  
Parameters
pos
[in] The index of a summary position in an array, starting with 0.
order
[in] The object of the summary position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the 'summary' object into a summary position object at the specified position of an array.
Unlike the [IMTSummaryArray::Update](imtsummaryarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the order object, but it is more resource-intensive, since an additional object is created.