# ValueString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueString | [](imtdatasetsummary_valuemoney.md "ValueMoney") [](imtdatasetsummary_valuedate.md "ValueDate") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueString
Get a previously specified summary cell string value.
LPCWSTR IMTDatasetSummary::ValueString() const  
---  
Return Value
Previously specified summary cell string value.
Note
A received summary must be of [IMTDatasetSummary::TYPE_STRING](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns an empty string.
IMTDatasetSummary::ValueString
Set a summary cell string value.
MTAPIRES IMTDatasetSummary::ValueString( LPCWSTR value // Value )  
---  
Parameters
value
[in] Summary cell value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_STRING](imtdatasetsummary_enum.htm#entype).
The maximum string length is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.