# Digits (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Digits | [](imtreportchart_type.md "Type") [](imtreportchart_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::Digits
Get the number of decimal places for formatting the values shown in a chart.
UINT IMTReportChart::Digits() const  
---  
Return Value
The number of decimal places for formatting the values shown in a chart.
IMTReportChart::Digits
Set the number of decimal places for formatting the values shown in a chart.
MTAPIRES IMTReportChart::Digits( const UINT digits // Decimal places )  
---  
Parameters
digits
[in] The number of decimal places for formatting the values shown in a chart.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.