# TableColumnCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Tabular Reports ](imtreportapi_table.md "Tabular Reports Functions") / [ Columns ](imtreportapi_table_column.md "Columns")/ TableColumnCreate | [](imtreportapi_table_column.md "Columns") [](imtreportapi_tablecolumnclear.md "TableColumnClear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TableColumnCreate
A column object creation.
IMTDatasetColumn* IMTReportAPI::TableColumnCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDatasetColumn](imtdatasetcolumn.md "IMTDatasetColumn") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDatasetColumn::Release](imtdatasetcolumn_release.md "Release") method of this object.