# ReportUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportUnsubscribe | [](imtserverapi_reportsubscribe.md "ReportSubscribe") [](imtserverapi_reportadd.md "ReportAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportUnsubscribe
Unsubscribe from events and hooks associated with the configuration of reports.
MTAPIRES IMTServerAPI::ReportUnsubscribe( IMTConReportSink* sink // A pointer to the IMTConReportSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConReportSink](imtconreportsink.md "IMTConReportSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::ReportSubscribe](imtserverapi_reportsubscribe.md "ReportSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.