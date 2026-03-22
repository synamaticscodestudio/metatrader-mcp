# SummaryNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ SummaryNext | [](imtdataset_summarydelete.md "SummaryDelete") [](imtdataset_summarytotal.md "SummaryTotal") |
| --- | --- | --- |
| --- | --- |

IMTDataset::SummaryNext
Get the cells of a table totals row by its index.
MTAPIRES IMTDataset::SummaryNext( const UINT pos, // cell position IMTDatasetSummary* summary // totals cell object )  
---  
Parameters
pos
[in] Totals cell position beginning from 0.
summary
[out] [An object of a totals row cell](imtdatasetsummary.md "IMTDatasetSummary"). The object should first be created using [IMTDataset::SummaryCreate](imtdataset_summarycreate.md "SummaryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.