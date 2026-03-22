# OnReportAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportSink ](imtconreportsink.md "IMTConReportSink")/ OnReportAdd | [](imtconreportsink.md "IMTConReportSink") [](imtconreportsink_onreportupdate.md "OnReportUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConReportSink::OnReportAdd
A handler of the event of adding a new report configuration.
C++
virtual void IMTConReportSink::OnReportAdd( const IMTConReport* report // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConReportSink.OnReportAdd( CIMTConReport report // Configuration object )  
---  
Parameters
report
[in] A pointer to the object of the added configuration.
Note
This method is called by the API to notify of adding of a new report configuration.