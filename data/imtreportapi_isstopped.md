# IsStopeed (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ IsStopeed | [](imtreportapi_loggeroutstring.md "LoggerOutString") [](imtreportapi_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::IsStopped
Check the presence of the request to stop a report generation.
MTAPIRES IMTReportAPI::IsStopped()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Report generation can be stopped due to the following reasons:
  * a manager has refused to generate a report;
  * configuration of the module responsible for a report generation is turned off;
  * the trade server is stopped;
  * the time for a report generation is up.

Most of the Report API methods check the requests to stop generation by themselves.