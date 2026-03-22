# OnRouteSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteSink ](imtconroutesink.md "IMTConRouteSink")/ OnRouteSync | [](imtconroutesink_onroutedelete.md "OnRouteDelete") [](config_report.md "Report Configuration") |
| --- | --- | --- |
| --- | --- |

IMTConRouteSink::OnRouteSync
A handler of the event of synchronization of routing rules.
C++
virtual void IMTConRouteSink::OnRouteSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConRouteSink.OnRouteSync()  
---  
Note
This method is called by the API to notify of the synchronization of the routing rules.
Synchronization of routing rules is performed on Access, History, Trade and Backup servers during connection to the main server.