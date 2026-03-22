# DashboardWidgetClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardWidgetClear | [](imtreportapi_dashboardwidgetappend.md "DashboardWidgetAppend") [](imtreportapi_dashboardwidgetdelete.md "DashboardWidgetDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardWidgetClear
Remove all widgets from a dashboard.
MTAPIRES IMTReportAPI::DashboardWidgetClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After calling this method, all previously created widgets are deleted ([IMTReportDashboardWidget](imtreportdashboardwidget.md "IMTReportDashboardWidget") objects). Data sets ([IMTDataset](imtdataset.md "IMTDataset") and [IMTReportDashboardHtml](imtreportdashboardhtml.md "IMTReportDashboardHtml")) bound to them are not deleted.