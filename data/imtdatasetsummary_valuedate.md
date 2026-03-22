# ValueDate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueDate | [](imtdatasetsummary_valuestring.md "ValueString") [](imtdatasetsummary_valuetime.md "ValueTime") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueDate
Get a previously specified summary cell value of the date type.
INT64 IMTDatasetSummary::ValueDate() const  
---  
Return Value
Previously specified summary cell value of the date type.
Note
A received summary must be of [IMTDatasetSummary::TYPE_DATE](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueDate
Set a summary cell value of the date type.
MTAPIRES IMTDatasetSummary::ValueDate( const INT64 value // Value )  
---  
Parameters
value
[in] Summary cell value in the YYYY.MM.DD format
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_DATE](imtdatasetsummary_enum.htm#entype).