# Tooltip (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportSeries ](imtreportseries.md "IMTReportSeries")/ Tooltip | [](imtreportseries_color.md "Color") [](imtreportseries_valueclear.md "ValueClear") |
| --- | --- | --- |
| --- | --- |

IMTReportSeries::Tooltip
Get a text of a tooltip that is displayed when pointing the mouse cursor over a series.
LPCWSTR IMTReportSeries::Tooltip() const  
---  
Return Value
If successful, it returns a pointer to the string with a tooltip text. Otherwise, it returns NULL.
IMTReportSeries::Tooltip
Set a text of a tooltip that will be displayed when pointing the mouse cursor over a series.
MTAPIRES IMTReportSeries::Tooltip( LPCWSTR tooltip // Tooltip )  
---  
Parameters
tooltip
[in] Series tooltip.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum tooltip length is 1024 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.
Special macroses can be used for a tooltip generation:
  * %VARIABLE% — inserts the value of the point from a header series (the series of the [IMTReportSeries::TYPE_TITLE](imtreportseries_enum.htm#enseriestype) type is usually displayed as X axis tooltip).
  * %VALUE% — inserts a point absolute value (the value specified for a series point using [IMTReportSeries::ValueAdd*](imtreportseries_valueadd.md "ValueAdd") methods).
  * %NORMALIZED_VALUE% — inserts a point normalized value. It is calculated as a percentage ratio of the point absolute value to the sum of the values of all points that correspond the same header series value.
  * %DESCRIPTION% — inserts a value of the point specified using the [IMTReportSeries::ValueDescription](imtreportseries_valuedescription.md "ValueDescription") method.
  * %TITLE% — inserts a series header value specified using the [IMTReportSeries::Title](imtreportseries_title.md "Title") method.
  * <BR> — inserts a line folding.
