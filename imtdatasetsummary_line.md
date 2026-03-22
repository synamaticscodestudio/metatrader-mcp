# Line (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Line | [](imtdatasetsummary_columnid.md "ColumnID") [](imtdatasetsummary_mergecolumn.md "MergeColumn") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Line
Get the number of the row, at which a summary cell is displayed.
UINT IMTDatasetSummary::Line() const  
---  
Return Value
The number of the row, at which a summary cell is displayed.
Note
The number is specified with reference to a table end (0 means that a summary is displayed right after the table's last entry, 1 - over a row after the last entry etc.).
IMTDatasetSummary::Line
Set the number of the row, at which a summary cell is displayed.
MTAPIRES IMTDatasetSummary::Line( const UINT line // Number of a row )  
---  
Parameters
line
[in] The number of the row, at which a summary cell is displayed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The number is specified with reference to a table end (0 means that a summary is displayed right after the table's last entry, 1 - over a row after the last entry etc.).