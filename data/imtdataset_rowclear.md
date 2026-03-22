# RowClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ RowClear | [](imtdataset_columnnext.md "ColumnNext") [](imtdataset_rowwrite.md "RowWrite") |
| --- | --- | --- |
| --- | --- |

IMTDataset::RowClear
Delete the contents of a whole table.
MTAPIRES IMTDataset::RowClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
When this method is called, columns descriptions are not deleted.