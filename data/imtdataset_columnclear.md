# ColumnClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ ColumnClear | [](imtdataset_columncreate.md "ColumnCreate") [](imtdataset_columnadd.md "ColumnAdd") |
| --- | --- | --- |
| --- | --- |

IMTDataset::ColumnClear
Clear table columns description.
MTAPIRES IMTDataset::ColumnClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After this method is called, all table contents including all totals rows is deleted.