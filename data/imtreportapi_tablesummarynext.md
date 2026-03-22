# TableSummaryNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Totals ](imtreportapi_table_summary.md "Totals")/ TableSummaryNext | [](imtreportapi_tablesummarydelete.md "TableSummaryDelete") [](imtreportapi_tablesummarytotal.md "TableSummaryTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableSummaryNext
Get the cells of a table totals row by its index.
MTAPIRES IMTReportAPI::TableSummaryNext( const UINT pos, // Cell position IMTDatasetSummary* summary // Totals cell object )  
---  
Parameters
pos
[in] Totals cell position beginning from 0.
*summary
[out] An object of a totals row cell. The object must first be created using the [IMTReportAPI::TableSummaryCreate](imtreportapi_tablesummarycreate.md "TableSummaryCreate") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.