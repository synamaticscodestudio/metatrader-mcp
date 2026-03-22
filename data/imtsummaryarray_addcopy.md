# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummaryArray ](imtsummaryarray.md "IMTSummaryArray")/ AddCopy | [](imtsummaryarray_add.md "Add") [](imtsummaryarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTSummaryArray::AddCopy
Adds a copy of the object of the summary position record at the end of the array.
C++
MTAPIRES IMTSummaryArray::AddCopy( const IMTSummary* summary // The object of the summary position record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.AddCopy( CIMTSummary summary // The object of the summary position record )  
---  
Parameters
summary
[in] The object of the [summary position](imtsummary.md "IMTSummary") record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method creates a copy of the 'summary' object and places it at the end of the array.
Unlike [IMTSummaryArray::Add(IMTSummary* summary)](imtsummaryarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'summary' object, but it is more resource-intensive, since an additional object is created.
IMTSummaryArray::AddCopy
Adds copies of objects of summary position records to an array.
C++
MTAPIRES IMTSummaryArray::AddCopy( const IMTSummaryArray* array // An object of summary position records array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSummaryArray.AddCopy( CIMTSummaryArray  array // An object of summary position records array )  
---  
Parameters
array
[in] An object of [summary position records array](imtsummaryarray.md "IMTSummaryArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method creates copies of summary position record objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTSummaryArray::Add(IMTSummary* array)](imtsummaryarray_add.md "Add"), calling this method does not change the source array object, but it is more resource-intensive, since additional objects are created.