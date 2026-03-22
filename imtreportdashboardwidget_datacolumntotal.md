# DataColumnTotal (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnTotal | [](imtreportdashboardwidget_datacolumnshift.md "DataColumnShift") [](imtreportdashboardwidget_datacolumnnext.md "DataColumnNext") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::DataColumnTotal
Get the number of columns in the display rules.
UINT IMTReportDashboardWidget::DataColumnTotal()  
---  
Return Value
Number of columns in the display rules.
Note
Columns from [IMTDataset](imtdataset.md "IMTDataset") are displayed in a widget in the order specified in the DataColumn array.
By default, the values from the first column are used as headers for all other columns. Use [IMTDataset::DataColumnTitle](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") to explicitly specify the header column.