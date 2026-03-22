# TableColumnAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Columns ](imtreportapi_table_column.md "Columns")/ TableColumnAdd | [](imtreportapi_tablecolumnclear.md "TableColumnClear") [](imtreportapi_tablecolumndelete.md "TableColumnDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableColumnAdd
Add a column description to a table end.
MTAPIRES IMTReportAPI::TableColumnAdd( const IMTDatasetColumn *column // Column object )  
---  
Parameters
*column
[in] An object of a table column description.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.