# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPlugin ](imtconplugin.md "IMTConPlugin")/ Enumerations | [](imtconplugin.md "IMTConPlugin") [](imtconplugin_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConPlugin](imtconplugin.md "IMTConPlugin") class contains the following enumerations:
IMTConPlugin::EnPluginMode
Modes of plugin operation are listed in IMTConPlugin::EnPluginMode.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PLUGIN_DISABLED | 0 | The plugin is disabled. |
| PLUGIN_ENABLED | 1 | The plugin is enabled. |
| PLUGIN_FIRST |  | Beginning of enumeration. It corresponds to PLUGIN_DISABLED. |
| PLUGIN_LAST |  | End of enumeration. It corresponds to PLUGIN_ENABLED. |

This enumeration is used in the [IMTConPlugin::Mode](imtconplugin_mode.md "Mode") method.
IMTConPlugin::EnPluginFlags
Flags of plugin operation are listed in IMTConPlugin::EnPluginFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PLUGIN_FLAG_MAN_CONFIG | 1 | The plugin can be set up using the manager terminal. To be able to set up a plugin, a manager account must have the [IMTConManager::RIGHT_CFG_PLUGINS](imtconmanager_enum.htm#enmanagerrights) permission granted. Additionally for the Manager API application, the [IMTManagerAPI:PUMP_MODE_PLUGINS](imtmanagerapi_enpumpmodes.md "Pumping Mode") mode of pumping must be enabled. |
| PLUGIN_FLAG_PROFILING | 2 | After enabling the profiling, the server will start gathering and writing to the journal the statistics on the processing of hooks and event handlers in the plugin: current state, number of calls, minimal, maximal and average time of processing as well as time of the last call. It is not recommended to keep this parameter enabled, as profiling decreases the plugin performance. More information about profiling is given in the "Administration \ Plugins" section of the MetaTrader 5 Administrator user guide. |
| PLUGIN_NONE | 0 | Beginning of enumeration. It corresponds to the absence of flags. |
| PLUGIN_ALL |  | End of enumeration. All flags are enabled. |

This enumeration is used in the [IMTConPlugin::Flags](imtconplugin_flags.md "Flags") method.