# DataColumnTitle (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnTitle | [](imtreportdashboardwidget_data.md "Data") [](imtreportdashboardwidget_datacolumnclear.md "DataColumnClear") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::DataColumnTitle
Get an ID of a column containing headers of all the remaining table columns.
UINT IMTReportDashboardWidget::DataColumnTitle() const  
---  
Return Value
Offset from the left border in pixels.
Note
The [IMTDatasetColumn::ColumnId](imtdatasetcolumn_columnid.md "ColumnID") value is used as the ID.
IMTReportDashboardWidget::DataColumnTitle
Set a column containing the values to be used as headers of the remaining table columns.
MTAPIRES IMTReportDashboardWidget::DataColumnTitle( const UINT column_id // column ID )  
---  
Parameters
column_id
[in] Column ID containing the values to be used as headers of the remaining columns. The [IMTDatasetColumn::ColumnId](imtdatasetcolumn_columnid.md "ColumnID") value is used as the ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If a header column is not explicitly defined, the first column from [IMTDataset](imtdataset.md "IMTDataset") is used by default.