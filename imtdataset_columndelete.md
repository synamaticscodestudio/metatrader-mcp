# ColumnDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ ColumnDelete | [](imtdataset_columnadd.md "ColumnAdd") [](imtdataset_columntotal.md "ColumnTotal") |
| --- | --- | --- |
| --- | --- |

IMTDataset::ColumnDelete
Delete a column description from a table by index.
MTAPIRES IMTDataset::ColumnDelete( const UINT pos // column position )  
---  
Parameters
pos
[in] Position of the column that should be deleted beginning from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.