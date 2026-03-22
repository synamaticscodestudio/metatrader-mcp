# PieceTooltip (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Diagram Interfaces ](reportapi_auxiliary.md "Additional reports interfaces") / [ IMTReportChart ](imtreportchart.md "IMTReportChart")/ PieceTooltip | [](imtreportchart_barheight.md "BarHeight") [](imtreportchart_piecedescription.md "PieceDescription") |
| --- | --- | --- |
| --- | --- |

IMTReportChart::PieceTooltip
Get a pie chart element tooltip.
LPCWSTR IMTReportChart::PieceTooltip()  
---  
Return Value
If successful, it returns a pointer to the string with a tooltip. Otherwise, it returns NULL.
IMTReportChart::PieceTooltip
Set a pie chart element tooltip.
MTAPIRES IMTReportChart::PieceTooltip( LPCWSTR tooltip // Tooltip )  
---  
Parameters
tooltip
[in] Toltip.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum tooltip length is 256 characters (with the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.
Special macroses can be used for a tooltip generation:
  * %VARIABLE% — inserts a pie chart element value specified in a header series (series of the [IMTReportSeries::TYPE_TITLE](imtreportseries_enum.htm#enseriestype)) type.
  * %VALUE% — inserts a point absolute value (the value specified for a series point using [IMTReportSeries::ValueAdd*](imtreportseries_valueadd.md "ValueAdd") methods).
  * %PERCENT_VALUE% — inserts the value of a percentage ratio of a pie chart element value to the whole chart.
  * %DESCRIPTION% — inserts a value of the point specified using the [IMTReportSeries::ValueDescription](imtreportseries_valuedescription.md "ValueDescription") method.
  * <BR> — inserts a line folding.
