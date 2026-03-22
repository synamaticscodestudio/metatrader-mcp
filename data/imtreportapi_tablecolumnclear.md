# TableColumnClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Columns ](imtreportapi_table_column.md "Columns")/ TableColumnClear | [](imtreportapi_tablecolumncreate.md "TableColumnCreate") [](imtreportapi_tablecolumnadd.md "TableColumnAdd") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableColumnClear
Clear table columns description.
MTAPIRES IMTReportAPI::TableColumnClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After this method is called, all table contents including all totals rows is deleted.