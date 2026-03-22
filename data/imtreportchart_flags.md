# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Flags | [](imtreportchart_digits.md "Digits") [](imtreportchart_barheight.md "BarHeight") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::Flags
Get chart flags.
UINT64 IMTReportChart::Flags() const  
---  
Return Value
A value of the [IMTReportChart::EnChartFlags](imtreportchart_enum.htm#enchartflags) enumeration.
IMTReportChart::Flags
Set chart flags.
MTAPIRES IMTReportChart::Flags( const UINT64 flags // flags )  
---  
Parameters
flags
[in] Chart flags. To pass the options, the [IMTReportChart::EnChartFlags](imtreportchart_enum.htm#enchartflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.