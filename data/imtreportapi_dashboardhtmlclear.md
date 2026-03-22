# DashboardHtmlClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dashboards ](imtreportapi_dashboard.md "Dashboards")/ DashboardHtmlClear | [](imtreportapi_dashboardhtmlappend.md "DashboardHtmlAppend") [](imtreportapi_dashboardhtmldelete.md "DashboardHtmlDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DashboardHtmlClear
Delete all dashboard HTML data.
MTAPIRES IMTReportAPI::DashboardHtmlClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After calling this method, all previously created HTML data are deleted ([IMTDataset](imtdataset.md "IMTDataset") objects).