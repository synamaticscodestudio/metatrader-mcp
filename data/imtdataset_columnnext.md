# ColumnNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ ColumnNext | [](imtdataset_columnsize.md "ColumnSize") [](imtdataset_rowclear.md "RowClear") |
| --- | --- | --- |
| --- | --- |

IMTDataset::ColumnNext
Get a column description by index.
MTAPIRES IMTDataset::ColumnNext( const UINT pos, // column position IMTDatasetColumn* column // column object )  
---  
Parameters
pos
[in] Column position beginning from 0.
column
[out] [An object of a table column description](imtdatasetcolumn.md "IMTDatasetColumn"). The object should first be created using the [IMTDataset:ColumnCreate](imtdataset_columncreate.md "ColumnCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.