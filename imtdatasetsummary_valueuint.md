# ValueUInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueUInt | [](imtdatasetsummary_valueint.md "ValueInt") [](imtdatasetsummary_valuedouble.md "ValueDouble") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueUInt
Get a previously specified cell unsigned integer value.
UINT64 IMTDatasetSummary::ValueUInt() const  
---  
Return Value
A previously specified cell unsigned integer value.
Note
A received summary must be of [IMTDatasetSummary::TYPE_UINT64](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueUInt
Set a summary cell unsigned integer value.
MTAPIRES IMTDatasetSummary::ValueUInt( const UINT64 value // Value )  
---  
Parameters
value
[in] Summary cell value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_UINT64](imtdatasetsummary_enum.htm#entype).