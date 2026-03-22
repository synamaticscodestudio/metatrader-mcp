# ColumnAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ ColumnAdd | [](imtdataset_columnclear.md "ColumnClear") [](imtdataset_columndelete.md "ColumnDelete") |
| --- | --- | --- |
| --- | --- |

IMTDataset::ColumnAdd
Add a column description to a table end.
MTAPIRES IMTDataset::ColumnAdd( const IMTDatasetColumn *column // column object )  
---  
Parameters
column
[in] [Table column description object](imtdatasetcolumn.md "IMTDatasetColumn").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
By default, the values from the first column are used as headers for all other columns.