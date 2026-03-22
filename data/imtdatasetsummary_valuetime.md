# ValueTime (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueTime | [](imtdatasetsummary_valuedate.md "ValueDate") [](imtdatasetsummary_valuedatetime.md "ValueDateTime") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueTime
Get a previously specified summary cell value of the time type.
INT64 IMTDatasetSummary::ValueTime() const  
---  
Return Value
Previously specified summary cell value of the time type.
Note
A received summary must be of [IMTDatasetSummary::TYPE_TIME](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueTime
Set a summary cell value of the time type.
MTAPIRES IMTDatasetSummary::ValueTime( const INT64 value // Value )  
---  
Parameters
value
[in] Summary cell value in the HH:MM:SS format.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_TIME](imtdatasetsummary_enum.htm#entype).