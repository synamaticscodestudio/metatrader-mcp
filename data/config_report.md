# Report Configuration (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Reports | [](imtconroutesink_onroutesync.md "OnRouteSync") [](imtconreport.md "IMTConReport") |
| --- | --- | --- |
| --- | --- |

Report Configuration
The MetaTrader 5 platform includes functions for generating various reports on the trading activity on servers. A number of reports is included in the standard package of the platform, but this list can be extended by developing custom reports using the MetaTrader 5 Report API.
Such reports are separate modules implemented as DLL files. A report module is placed in a trade server, in the special /reports folder. Further the report can be configured from the MetaTrader 5 Administrator.
Please note that the report modules are configured separately for each trade server and generate reports specifically for that server.  
---  
The following report interfaces are available:
  * [IMTConReport](imtconreport.md "IMTConReport") An interface for configuring parameters of reports.
  * [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") An interface for accessing parameters of report modules.
  * [IMTConReportSink](imtconreportsink.md "IMTConReportSink") An interface for handling events associated with the configuration of reports.

The below figure shows different elements of report configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The state of a report configuration](imtconreport_mode.md "Mode").
  2. [The name of a report configuration](imtconreport_name.md "Name").
  3. [The name of a report module](imtconreport_module.md "Module").
  4. [A trade server, for which a report is configured](imtconreport_server.md "Server").
  5. [The name of an additional external parameter](imtconparam_name.md "Name").
  6. [The value of an additional external parameter](imtconparam_value.md "Value").
  7. [Adding a parameter](imtconreport_parameteradd.md "ParameterAdd").
  8. [Changing a parameter](imtconreport_parameterupdate.md "ParameterUpdate").
  9. [Deleting a parameter](imtconreport_parameterdelete.md "ParameterDelete").
