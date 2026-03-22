# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Reports ](webapi_report.md "Reports")/ Data Structure | [](webapi_report.md "Reports") [](webapi_report_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
The report configuration is passed in JSON format in response to the [/api/report/add](webapi_report_add.md "Add"), [/api/report/next](webapi_report_next.md "Get by Index") and [/api/report/get](webapi_report_get.md "Get by Name") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | The name of the report configuration. |
| Server | String | The identifier of the server for which the report is set. |
| Template | String | Report name from the module. |
| Enable | Integer | Configuration status. Passed as a value of the [EnReportMode](imtconreport_enum.htm#enreportmode) enumeration. |
| Params | Array | [Report parameters](webapi_report_data_structure.htm#param). |

Report parameters
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Type | Integer | Parameter type. Passed as a value of the [ParamType](imtconparam_enum.md "Enumerations") enumeration. |
| Name | Integer | Parameter name. |
| Value | String | The value of the parameter. |

Report module parameters
| Methods | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Server | Integer | The ID of the server, on which the dll-module of the report is stored physically. |
| Name | String | The report name which is inserted by default to a configuration when this module is selected. |
| Filename | String | The name of the report module file. |
| Copyright | String | Copyright of the report module. |
| Description | String | Report module description. |
| Version | Integer | Report module version. |
| VersionAPI | Integer | The version of the Report API with which the module is compiled. |
| VersionIe | Integer | The minimum version of the Internet Explorer required for the module of reports. |
| Timeout | Integer | The time period in seconds during which the report remains relevant. |
| Types | Integer | Report types supported by the module. Passed as a value of the [EnTypes](imtconreportmodule_enum.htm#entypes) enumeration. |
| Snapshots | Integer | Modes of database snapshots required for the operation of the report module. Passed as a value of the [EnSnapshots](imtconreportmodule_enum.htm#ensnapshots) enumeration. |
| ParamsConfig | Array | Report module [parameters](webapi_report_data_structure.htm#param). |
| ParamsRequest | Array | Available [parameters](webapi_report_data_structure.htm#param) when requesting a report via the MetaTrader 5 Manager terminal. |