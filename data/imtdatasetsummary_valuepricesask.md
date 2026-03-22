# ValuePricesAsk (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValuePricesAsk | [](imtdatasetsummary_valuepricesbid.md "ValuePricesBid") [](imtdatasetsummary_valueprices.md "ValuePrices") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValuePricesAsk
Get a previously set Ask price value in a summary cell.
double IMTDatasetSummary::ValuePricesAsk() const  
---  
Return Value
A previously set Ask price value in a summary cell.
Note
A received summary must be of [IMTDatasetSummary::TYPE_PRICES](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.