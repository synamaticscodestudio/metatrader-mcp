# ReportSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportSubscribe | [](imtadminapi_reportparamcreate.md "ReportParamCreate") [](imtadminapi_reportunsubscribe.md "ReportUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportSubscribe
Subscribe to events associated with the configuration of reports.
C++
MTAPIRES IMTAdminAPI::ReportSubscribe( IMTConReportSink* sink // A pointer to the IMTConReportSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportSubscribe( CIMTConReportSink sink // CIMTConReportSink object )  
---  
Python
AdminAPI.ReportSubscribe( sink # IMTConReportSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConReportSink](imtconreportsink.md "IMTConReportSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConReportSink](imtconreportsink.md "IMTConReportSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConReportSink::OnReportSync](imtconreportsink_onreportsync.md "OnReportSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::ReportUnsubscribe](imtadminapi_reportunsubscribe.md "ReportUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.