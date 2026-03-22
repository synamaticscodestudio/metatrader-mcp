# RowWrite (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ RowWrite | [](imtdataset_rowclear.md "RowClear") [](imtdataset_rowtotal.md "RowTotal") |
| --- | --- | --- |
| --- | --- |

IMTDataset::RowWrite
Add (output) one record to a table.
MTAPIRES IMTDataset::RowWrite( const void* data, // data pointer const UINT size // data size )  
---  
Parameters
data
[in] Pointer to added entry data.
size
[in] Data size. Size of the passed data is checked for compliance with the [IMTDataset::ColumnSize](imtdataset_columnsize.md "ColumnSize") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Maximum data size is 4 GB. When reaching the maximum size, the IMTReportAPI::TableRowWrite method returns the [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation") error.