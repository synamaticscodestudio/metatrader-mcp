# ValuePrice (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValuePrice | [](imtdatasetsummary_valuedatetime.md "ValueDateTime") [](imtdatasetsummary_valuepricesbid.md "ValuePricesBid") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValuePrice
Get a previously specified summary cell price value.
double IMTDatasetSummary::ValuePrice() const  
---  
Return Value
Previously specified summary cell price value.
Note
A received summary must be of [IMTDatasetSummary::TYPE_PRICE](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.
IMTDatasetSummary::ValuePrice
Set a summary cell price value.
MTAPIRES IMTDatasetSummary::ValuePrice( const double value // Value )  
---  
Parameters
value
[in] Summary cell value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_PRICE](imtdatasetsummary_enum.htm#entype).