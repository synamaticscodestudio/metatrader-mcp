# BarHeight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ BarHeight | [](imtreportchart_flags.md "Flags") [](imtreportchart_piecetooltip.md "PieceTooltip") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::BarHeight
Get the chart bar height.
UINT IMTReportChart::BarHeight() const  
---  
Return Value
Chart bar height.
IMTReportChart::BarHeight
Set the chart bar height.
MTAPIRES IMTReportChart::BarHeight( const UINT height // Height )  
---  
Parameters
height
[in] Chart bar height.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.