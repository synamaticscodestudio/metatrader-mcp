# TableSummaryCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Totals ](imtreportapi_table_summary.md "Totals")/ TableSummaryCreate | [](imtreportapi_table_summary.md "Totals") [](imtreportapi_tablesummaryclear.md "TableSummaryClear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableSummaryCreate
Create an object of a totals row cell.
IMTDatasetSummary* IMTReportAPI::TableSummaryCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDatasetSummary](imtdatasetsummary.md "IMTDatasetSummary") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDatasetSummary::Release](imtdatasetsummary_release.md "Release") method of this object.