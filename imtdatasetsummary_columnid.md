# ColumnID (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ColumnID | [](imtdatasetsummary_clear.md "Clear") [](imtdatasetsummary_line.md "Line") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ColumnID
Get the ID of the column, under which a summary is specified.
UINT IMTDatasetSummary::ColumnID() const  
---  
Return Value
The ID of the column, under which a summary is specified.
Note
Column ID is specified by the [IMTDatasetColumn::ColumnID](imtdatasetcolumn_columnid.md "ColumnID") method.
IMTDatasetSummary::ColumnID
Set the ID of the column, under which a summary is specified.
MTAPIRES IMTDatasetSummary::ColumnID( const UINT column_id // Column ID )  
---  
Parameters
column_id
[in] Column ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Column ID is specified by the [IMTDatasetColumn::ColumnID](imtdatasetcolumn_columnid.md "ColumnID") method.