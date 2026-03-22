# DataColumnClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnClear | [](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") [](imtreportdashboardwidget_datacolumnadd.md "DataColumnAdd") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::DataColumnClear
Clear the widget column display rules.
MTAPIRES IMTReportDashboardWidget::DataColumnClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The DataColumn array displays the order of displaying columns from [IMTDataset](imtdataset.md "IMTDataset") in the widget. If the array is empty, all columns are displayed. The first one is used as the header.