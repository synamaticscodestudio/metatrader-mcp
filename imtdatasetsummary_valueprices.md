# ValuePrices (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValuePrices | [](imtdatasetsummary_valuepricesask.md "ValuePricesAsk") [](imtdatasetsummary_valuevolume.md "ValueVolume") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValuePrices
Set Bid and Ask prices values in a summary cell.
MTAPIRES IMTDatasetSummary::ValuePrices( const double value_bid, // Bid price const double value_ask // Ask price )  
---  
Parameters
value_bid
[in] Bid price.
value_ask
[in] Ask price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the method is called summary cell type changes for [IMTDatasetSummary::TYPE_PRICES](imtdatasetsummary_enum.htm#entype).
Bid and Ask prices are displayed in a cell after "/".