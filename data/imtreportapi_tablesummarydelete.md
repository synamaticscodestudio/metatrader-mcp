# TableSummaryDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Totals ](imtreportapi_table_summary.md "Totals")/ TableSummaryDelete | [](imtreportapi_tablesummaryadd.md "TableSummaryAdd") [](imtreportapi_tablesummarynext.md "TableSummaryNext") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableSummaryDelete
Delete a cell in a table totals row by its index.
MTAPIRES IMTReportAPI::TableSummaryDelete( const UINT pos // Cell position )  
---  
Parameters
pos
[in] Totals cell position beginning from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.