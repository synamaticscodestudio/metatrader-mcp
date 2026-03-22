# Title (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ Title | [](imtreportchart_clear.md "Clear") [](imtreportchart_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::Title
Get a chart header.
LPCWSTR IMTReportChart::Title() const  
---  
Return Value
If successful, it returns a pointer to the string with the chart name. Otherwise, it returns NULL.
IMTReportChart::Title
Set a chart header.
MTAPIRES IMTReportChart::Title( LPCWSTR title // Header )  
---  
Parameters
title
[in] Chart header.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum header length is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.