# Title (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Title | [](imtreportseries_clear.md "Clear") [](imtreportseries_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Title
Get a data series header.
LPCWSTR IMTReportSeries::Title() const  
---  
Return Value
If successful, it returns a pointer to the string with the series name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTReportSeries](imtreportseries.md "IMTReportSeries") object.
To use the line after the object removal (call of the [IMTReportSeries::Release](imtreportseries_release.md "Release") method of this object), a copy of it should be created.
IMTReportSeries::Title
Set data series header.
MTAPIRES IMTReportSeries::Title( LPCWSTR title // Header )  
---  
Parameters
title
[in] Data series header.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum header length is 1024 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.