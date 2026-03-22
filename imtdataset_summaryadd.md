# SummaryAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ SummaryAdd | [](imtdataset_summaryclear.md "SummaryClear") [](imtdataset_summarydelete.md "SummaryDelete") |
| --- | --- | --- |
| --- | --- |

IMTDataset::SummaryAdd
Add a totals row cell into a table.
MTAPIRES IMTDataset::SummaryAdd( const IMTDatasetSummary *summary // Totals cell object )  
---  
Parameters
summary
[in] [An object of a totals row cell](imtdatasetsummary.md "IMTDatasetSummary").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.