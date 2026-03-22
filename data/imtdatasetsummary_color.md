# Color (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Color | [](imtdatasetsummary_mergecolumn.md "MergeColumn") [](imtdatasetsummary_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Color
Get a text color in the totals cell.
UINT IMTDatasetSummary::Color() const  
---  
Return Value
Text color in the totals cell.
IMTDatasetSummary::Color
Set a text color in the totals cell.
MTAPIRES IMTDatasetSummary::Color( const UINT color // Text color )  
---  
Parameters
color
[in] Text color in the totals cell.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.