# IMTConReportModule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration")/ IMTConReportModule | [](imtconreport_parameterget.md "ParameterGet") [](imtconreportmodule_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule
The IMTConReportModule class contains methods for getting and changing parameters of report modules:
| Methods | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconreportmodule_release.md "Release") | Delete the current object. |
| [Assign](imtconreportmodule_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconreportmodule_clear.md "Clear") | Clear an object. |
| [Name](imtconreportmodule_name.md "Name") | Get the report name, which is inserted by default to a configuration when selecting this module. |
| [Vendor](imtconreportmodule_vendor.md "Vendor") | Get the name of the report module provider. |
| [Description](imtconreportmodule_description.md "Description") | Get the description of a report module. |
| [Module](imtconreportmodule_module.md "Module") | Get the name of the file of a report module. |
| [Index](imtconreportmodule_index.md "Index") | Get the report index in a module. |
| [Server](imtconreportmodule_server.md "Server") | Get the ID of the server on which the module is installed. |
| [Version](imtconreportmodule_version.md "Version") | Get the version of a report module. |
| [VersionAPI](imtconreportmodule_versionapi.md "VersionAPI") | Get the version of the Report API. |
| [VersionIE](imtconreportmodule_versionie.md "VersionIE") | Get the minimum version of the Internet Explorer required for the module of reports. |
| [Types](imtconreportmodule_types.md "Types") | Get the types of reports supported by the module. |
| [Snapshots](imtconreportmodule_snapshots.md "Snapshots") | Get the modes of database snapshots required for the module of reports. |
| [ParameterTotal](imtconreportmodule_parametertotal.md "ParameterTotal") | It returns the number of parameters of a report module. |
| [ParameterNext](imtconreportmodule_parameternext.md "ParameterNext") | Get report module parameters by the index. |
| [ParameterGet](imtconreportmodule_parameterget.md "ParameterGet") | Get a report module parameter by its name. |
| [InputTotal](imtconreportmodule_inputtotal.md "InputTotal") | Get the total number of the parameters that can be set when requesting reports of the module from a manager terminal. |
| [InputNext](imtconreportmodule_inputnext.md "InputNext") | Get the parameter of a report request by the index. |
| [InputGet](imtconreportmodule_inputget.md "InputGet") | Get the parameter of a report request by the name. |

The IMTConReportModule contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnSnapshots](imtconreportmodule_enum.htm#ensnapshots) | Modes of database snapshots. |
| [EnTypes](imtconreportmodule_enum.htm#entypes) | Types of supported reports. |