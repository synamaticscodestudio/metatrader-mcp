# OnReportSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportSink ](imtconreportsink.md "IMTConReportSink")/ OnReportSync | [](imtconreportsink_onreportdelete.md "OnReportDelete") [](config_email.md "Mail Servers") |
| --- | --- | --- |
| --- | --- |

IMTConReportSink::OnReportSync
A handler of the event of synchronization of report configurations.
C++
virtual void IMTConReportSink::OnReportSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConReportSink.OnReportSync()  
---  
Note
This method is called by the API to notify of synchronization of report configurations.
Synchronization of report configurations is performed on Access, History, Trade and Backup servers during connection to the main server.