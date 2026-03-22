# TableSummaryAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Totals ](imtreportapi_table_summary.md "Totals")/ TableSummaryAdd | [](imtreportapi_tablesummaryclear.md "TableSummaryClear") [](imtreportapi_tablesummarydelete.md "TableSummaryDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableSummaryAdd
Add a totals row cell into a table.
MTAPIRES IMTReportAPI::TableSummaryAdd( const IMTDatasetSummary *summary // Totals cell object )  
---  
Parameters
*summary
[in] An object of a totals row cell.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.