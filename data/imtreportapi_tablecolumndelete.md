# TableColumnDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Columns ](imtreportapi_table_column.md "Columns")/ TableColumnDelete | [](imtreportapi_tablecolumnadd.md "TableColumnAdd") [](imtreportapi_tablecolumntotal.md "TableColumnTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableColumnDelete
Delete a column description from a table by index.
MTAPIRES IMTReportAPI::TableColumnDelete( const UINT pos // Column position )  
---  
Parameters
pos
[in] Position of the column that must be deleted beginning from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.