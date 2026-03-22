# ColumnID (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ ColumnID | [](imtdatasetcolumn_name.md "Name") [](imtdatasetcolumn_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::ColumnID
Get a column ID.
UINT IMTDatasetColumn::ColumnID() const  
---  
Return Value
Column ID.
Note
ID is used in the following methods:
  * [IMTDatasetColumn::DigitsColumn](imtdatasetcolumn_digitscolumn.md "DigitsColumn")
  * [IMTDatasetSummary::MergeColumn](imtdatasetsummary_mergecolumn.md "MergeColumn")
  * [IMTDatasetSummary::ColumnID](imtdatasetsummary_columnid.md "ColumnID")

IMTDatasetColumn::ColumnID
Set a column ID.
MTAPIRES IMTDatasetColumn::ColumnID( const UINT column_id // Column ID )  
---  
Parameters
column_id
[in] Column ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
ID must be unique and must not be equal to 0. ID is used in the following methods:
  * [IMTDatasetColumn::DigitsColumn](imtdatasetcolumn_digitscolumn.md "DigitsColumn")
  * [IMTDatasetSummary::MergeColumn](imtdatasetsummary_mergecolumn.md "MergeColumn")
  * [IMTDatasetSummary::ColumnID](imtdatasetsummary_columnid.md "ColumnID")
