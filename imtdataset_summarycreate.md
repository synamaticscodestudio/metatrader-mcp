# SummaryCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ SummaryCreate | [](imtdataset_rowtotal.md "RowTotal") [](imtdataset_summaryclear.md "SummaryClear") |
| --- | --- | --- |
| --- | --- |

IMTDataset::SummaryCreate
Create an object of a totals row cell.
IMTDatasetSummary* IMTDataset::SummaryCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDatasetSummary](imtdatasetsummary.md "IMTDatasetSummary") interface. In case of failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTDatasetSummary::Release](imtdatasetsummary_release.md "Release") method of this object.