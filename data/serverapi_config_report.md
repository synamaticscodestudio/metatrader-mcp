# Report Configuration (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Reports | [](imtserverapi_routeget.md "RouteGet") [](imtserverapi_reportcreate.md "ReportCreate") |
| --- | --- | --- |
| --- | --- |

Report Configuration
The MetaTrader 5 platform includes functions for generating various reports on the trading activity on servers. A number of reports is included in the standard package of the platform, but this list can be extended by developing custom reports using the MetaTrader 5 Report API.
Such reports are separate modules implemented as DLL files. A report module is placed in a trade server, in the special /reports folder. Further the report can be configured from the MetaTrader 5 Administrator.
Please note that the report modules are configured separately for each trade server and generate reports specifically for that server.  
---  
Functions described in this section allow managing configurations of reports, as well subscribe and unsubscribe from events associated with their change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [ReportCreate](imtserverapi_reportcreate.md "ReportCreate") | Create an object of the configuration of reports. |
| [ReportModuleCreate](imtserverapi_reportmodulecreate.md "ReportModuleCreate") | Create an object of configuration of a report module. |
| [ReportParamCreate](imtserverapi_reportparamcreate.md "ReportParamCreate") | Create an object of a report parameter. |
| [ReportSubscribe](imtserverapi_reportsubscribe.md "ReportSubscribe") | Subscribe to events and hooks associated with the configuration of reports. |
| [ReportUnsubscribe](imtserverapi_reportunsubscribe.md "ReportUnsubscribe") | Unsubscribe from events and hooks associated with the configuration of reports. |
| [ReportAdd](imtserverapi_reportadd.md "ReportAdd") | Add or update a report configuration. |
| [ReportDelete](imtserverapi_reportdelete.md "ReportDelete") | Delete a report configuration by the name or index |
| [ReportShift](imtserverapi_reportshift.md "ReportShift") | Change the position of a report configuration in the list. |
| [ReportTotal](imtserverapi_reporttotal.md "ReportTotal") | The total number of report configurations available in the platform. |
| [ReportNext](imtserverapi_reportnext.md "ReportNext") | Get a report configuration by the index. |
| [ReportGet](imtserverapi_reportget.md "ReportGet") | Get a report configuration by the name. |
| [ReportModuleTotal](imtserverapi_reportmoduletotal.md "ReportModuleTotal") | The total number of configurations of report modules available in the platform. |
| [ReportModuleNext](imtserverapi_reportmodulenext.md "ReportModuleNext") | Get a report module by the index. |
| [ReportModuleGet](imtserverapi_reportmoduleget.md "ReportModuleGet") | Get a report module configuration by the name. |