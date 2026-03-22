# ValueMoney (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueMoney | [](imtdatasetsummary_valuedouble.md "ValueDouble") [](imtdatasetsummary_valuestring.md "ValueString") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueMoney
Get a previously specified summary cell monetary value.
double IMTDatasetSummary::ValueMoney() const  
---  
Return Value
Previously specified summary cell monetary value.
Note
A received summary must be of [IMTDatasetSummary::TYPE_MONEY](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueMoney
Set a summary cell monetary value.
MTAPIRES IMTDatasetSummary::ValueMoney( const double value // Value )  
---  
Parameters
value
[in] Summary cell value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_MONEY](imtdatasetsummary_enum.htm#entype).