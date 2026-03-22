# ReportSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportSubscribe | [](imtserverapi_reportparamcreate.md "ReportParamCreate") [](imtserverapi_reportunsubscribe.md "ReportUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportSubscribe
Subscribe to events and hooks associated with the configuration of reports.
MTAPIRES IMTServerAPI::ReportSubscribe( IMTConReportSink* sink // A pointer to the IMTConReportSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConReportSink](imtconreportsink.md "IMTConReportSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConReportSink](imtconreportsink.md "IMTConReportSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::ReportUnsubscribe](imtserverapi_reportunsubscribe.md "ReportUnsubscribe") or until the plugin is deleted.