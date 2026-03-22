# DataColumnShift (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dashboard Interfaces ](reportapi_dashboard.md "Dashboard Interfaces") / [ IMTReportDashboardWidget ](imtreportdashboardwidget.md "IMTReportDashboardWidget")/ DataColumnShift | [](imtreportdashboardwidget_datacolumndelete.md "DataColumnDelete") [](imtreportdashboardwidget_datacolumntotal.md "DataColumnTotal") |
| --- | --- | --- |
| --- | --- |

IMTDataset::DataColumnDelete
Change column position in the display rules.
MTAPIRES IMTDataset::DataColumnDelete( const UINT pos, // column position const int shift // shift )  
---  
Parameters
pos
[in] Column position beginning from 0.
shift
[in] Shift of a column relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
Columns from [IMTDataset](imtdataset.md "IMTDataset") are displayed in a widget in the order specified in the DataColumn array.
By default, the values from the first column are used as headers for all other columns. Use [IMTDataset::DataColumnTitle](imtreportdashboardwidget_datacolumntitle.md "DataColumnTitle") to explicitly specify the header column.