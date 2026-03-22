# ReportUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportUnsubscribe | [](imtadminapi_reportsubscribe.md "ReportSubscribe") [](imtadminapi_reportupdate.md "ReportUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportUnsubscribe
Unsubscribe from events associated with the configuration of reports.
C++
MTAPIRES IMTAdminAPI::ReportUnsubscribe( IMTConReportSink* sink // A pointer to the IMTConReportSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportUnsubscribe( CIMTConReportSink sink // CIMTConReportSink object )  
---  
Python
AdminAPI.ReportUnsubscribe( sink # IMTConReportSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConReportSink](imtconreportsink.md "IMTConReportSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::ReportSubscribe](imtadminapi_reportsubscribe.md "ReportSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.