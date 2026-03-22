# ValuePricesBid (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValuePricesBid | [](imtdatasetsummary_valueprice.md "ValuePrice") [](imtdatasetsummary_valuepricesask.md "ValuePricesAsk") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValuePricesBid
Get a previously set Bid price value in a summary cell.
double IMTDatasetSummary::ValuePricesBid() const  
---  
Return Value
A previously set Bid price value in a summary cell.
Note
A received summary must be of [IMTDatasetSummary::TYPE_PRICES](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.