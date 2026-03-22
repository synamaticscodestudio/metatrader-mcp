# ValueDateTime (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueDateTime | [](imtdatasetsummary_valuetime.md "ValueTime") [](imtdatasetsummary_valueprice.md "ValuePrice") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueDateTime
Get a previously specified summary cell value of the datetime type.
INT64 IMTDatasetSummary::ValueDateTime() const  
---  
Return Value
Previously specified summary cell value of the datetime type.
Note
A received summary must be of [IMTDatasetSummary:TYPE_DATETIME](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValueDateTime
Set a summary cell value of the datetime type.
MTAPIRES IMTDatasetSummary::ValueDateTime( const INT64 value // Value )  
---  
Parameters
value
[in] Summary cell value in the YYYY.MM.DD HH:MM:SS format.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_DATETIME](imtdatasetsummary_enum.htm#entype).