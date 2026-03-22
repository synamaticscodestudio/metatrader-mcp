# TableRowWrite (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Rows ](imtreportapi_table_row.md "Rows")/ TableRowWrite | [](imtreportapi_tablerowclear.md "TableRowClear") [](imtreportapi_tablerowtotal.md "TableRowTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableRowWrite
Add (output) one record to a table.
MTAPIRES IMTReportAPI::TableRowWrite( const void *data, // a pointer to the data const UINT size // Data size )  
---  
Parameters
*data
[in] A pointer to the data of a record to add.
size
[in] Data size. The size of the submitted data is checked for its compliance with the [IMTReportAPI::TableColumnSize](imtreportapi_tablecolumnsize.md "TableColumnSize") value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Maximum allowed size of a tabular report is 4GB. If this limit is reached, IMTReportAPI::TableRowWrite will return error [MT_RET_REPORT_LIMIT_REPORT](retcodes_reports.md "Report Generation").