# TableRowClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Rows ](imtreportapi_table_row.md "Rows")/ TableRowClear | [](imtreportapi_table_row.md "Rows") [](imtreportapi_tablerowwrite.md "TableRowWrite") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableRowClear
Delete the contents of a whole table.
MTAPIRES IMTReportAPI::TableRowClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When this method is called, columns descriptions are not deleted.