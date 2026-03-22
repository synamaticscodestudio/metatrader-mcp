# DataColumnAdd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnAdd | [](imtreportdashboardwidget_datacolumnclear.md "DataColumnClear") [](imtreportdashboardwidget_datacolumndelete.md "DataColumnDelete") |
| --- | --- | --- |
| --- | --- |

IMTDataset::DataColumnAdd
Add the column to the display rules.
MTAPIRES IMTDataset::DataColumnAdd( const UINT *column_id // column ID )  
---  
Parameters
column_id
[in] Column ID. The [IMTDatasetColumn::ColumnId](imtdatasetcolumn_columnid.md "ColumnID") value is used as an ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Columns from [IMTDataset](imtdataset.md "IMTDataset") are displayed in a widget in the order specified in the DataColumn array.
By default, the values from the first column are used as headers for all other columns. Use [IMTDataset::DataColumnTitle](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") to explicitly specify the header column.