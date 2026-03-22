# TableColumnNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Columns ](imtreportapi_table_column.md "Columns")/ TableColumnNext | [](imtreportapi_tablecolumnsize.md "TableColumnSize") [](imtreportapi_table_row.md "Rows") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableColumnNext
Get a column description by index.
MTAPIRES IMTReportAPI::TableColumnNext( const UINT pos, // Column position IMTDatasetColumn *column // Column object )  
---  
Parameters
pos
[in] Column position beginning from 0.
*column
[out] An object of a table column description. The object must first be created using the [IMTReportAPI::TableColumnCreate](imtreportapi_tablecolumncreate.md "TableColumnCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.