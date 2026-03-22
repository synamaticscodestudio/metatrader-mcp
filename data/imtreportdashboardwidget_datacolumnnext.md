# DataColumnNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnNext | [](imtreportdashboardwidget_datacolumntotal.md "DataColumnTotal") [](reportapi_auxiliary.md "Additional reports interfaces") |
| --- | --- | --- |
| --- | --- |

IMTReportDashboardWidget::DataColumnNext
Get column ID by its position in the display rules.
UINT* IMTReportDashboardWidget::DataColumnNext( const UINT pos // column position )  
---  
Parameters
pos
[in] Column position beginning from 0.
Return Value
Column ID. The [IMTDatasetColumn::ColumnId](imtdatasetcolumn_columnid.md "ColumnID") value is used as an ID.