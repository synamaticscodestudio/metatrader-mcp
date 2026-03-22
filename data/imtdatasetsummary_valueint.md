# ValueInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueInt | [](imtdatasetsummary_digits.md "Digits") [](imtdatasetsummary_valueuint.md "ValueUInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueInt
Get a previously specified cell integer value.
INT64 IMTDatasetSummary::ValueInt() const  
---  
Return Value
Previously specified cell integer value.
Note
A received summary must be of [IMTDatasetSummary::TYPE_INT64](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueInt
Set a summary cell integer value.
MTAPIRES IMTDatasetSummary::ValueInt( const INT64 value // Value )  
---  
Parameters
value
[in] Summary cell value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_INT64](imtdatasetsummary_enum.htm#entype).