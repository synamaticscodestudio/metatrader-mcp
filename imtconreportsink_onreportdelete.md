# OnReportDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportSink ](imtconreportsink.md "IMTConReportSink")/ OnReportDelete | [](imtconreportsink_onreportupdate.md "OnReportUpdate") [](imtconreportsink_onreportsync.md "OnReportSync") |
| --- | --- | --- |
| --- | --- |

IMTConReportSink::OnReportDelete
A handler of the event of removing a report configuration.
C++
virtual void IMTConReportSink::OnReportDelete( const IMTConReport* report // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConReportSink.OnReportDelete( CIMTConReport report // Configuration object )  
---  
Parameters
report
A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify of the fact that a report configuration has been deleted.