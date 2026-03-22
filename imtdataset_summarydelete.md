# SummaryDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ SummaryDelete | [](imtdataset_summaryadd.md "SummaryAdd") [](imtdataset_summarynext.md "SummaryNext") |
| --- | --- | --- |
| --- | --- |

IMTDataset::SummaryDelete
Delete a cell in a table totals row by its index.
MTAPIRES IMTDataset::SummaryDelete( const UINT pos // cell position )  
---  
Parameters
pos
[in] Totals cell position beginning from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.