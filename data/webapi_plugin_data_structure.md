# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Plugins ](webapi_plugin.md "Plugins")/ Data Structure | [](webapi_plugin.md "Plugins") [](webapi_plugin_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
The plugin configuration is passed in JSON format in response to the [/api/plugin/add](webapi_plugin_add.md "Add"), [/api/plugin/next](webapi_plugin_next.md "Get by Index") and [/api/plugin/get](webapi_plugin_get.md "Get by Name") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | The name of the plugin configuration. |
| Server | String | The identifier of the server for which the configuration is configured. |
| Module | String | The name of the plugin module. |
| Enable | Integer | Configuration status. Passed as a value of the [EnPluginMode](imtconplugin_enum.htm#enpluginmode) enumeration. |
| Flags |  | Plugin operation flags. Passed using the [EnPluginFlags](imtconplugin_enum.htm#enpluginflags) enumeration. |
| Params | Array | [Plugin parameters](webapi_plugin_data_structure.htm#param). |

Plugin parameters
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Type | Integer | Parameter type. Passed as a value of the [ParamType](imtconparam_enum.md "Enumerations") enumeration. |
| Name | Integer | Parameter name. |
| Value | String | The value of the parameter. |

Plugin module parameters
| Methods | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Server | Integer | The ID of the server, on which the dll-module of the plugin is stored physically. |
| Module | String | The name of the plugin module. |
| Version | Integer | Report module version. |
| VersionAPI | Integer | The version of the Server API with which the module is compiled. |
| Name | String | The plugin name which is inserted by default to a configuration when this module is selected. |
| Copyright | String | Copyright of the report module. |
| Description | String | Report module description. |
| Path | String | Path to the plugin file relative to the /plugins directory on the server. |
| Params | Array | [Plugin module parameters](webapi_plugin_data_structure.htm#param). |