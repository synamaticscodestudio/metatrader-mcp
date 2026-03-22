# MergeColumn (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ MergeColumn | [](imtdatasetsummary_line.md "Line") [](imtdatasetsummary_color.md "Color") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::MergeColumn
Get the ID of the column, to which the joining of summary cells is performed.
UINT IMTDatasetSummary::MergeColumn() const  
---  
Return Value
The ID of the column, to which the joining of summary cells is performed.
Note
A summary cell is a result of the joining of cells from the current [IMTDatasetSummary::ColumnID](imtdatasetsummary_columnid.md "ColumnID") column up to the MergeColumn column.
IMTDatasetSummary::MergeColumn
Set the ID of the column, to which the joining of summary cells must be performed.
MTAPIRES IMTDatasetSummary::MergeColumn( const UINT column_id // Column ID )  
---  
Parameters
column_id
[in] Column ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The [IMTDatasetColumn::ColumnId](imtdatasetcolumn_columnid.md "ColumnID") value is used as the identifier.
A summary cell is a result of the joining of cells from the current [IMTDatasetSummary::ColumnID](imtdatasetsummary_columnid.md "ColumnID") column up to the MergeColumn column.