# Plugins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions")/ Plugins | [](imtmanagerapi_spreadnext.md "SpreadNext") [](imtmanagerapi_plugincreate.md "PluginCreate") |
| --- | --- | --- |
| --- | --- |

Configuration of Plugins
Functions described in this section allow managing plugin configurations. The following functions for managing plugins are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [PluginCreate](imtmanagerapi_plugincreate.md "PluginCreate") | Create an object of the plugin configuration. |
| [PluginModuleCreate](imtmanagerapi_pluginmodulecreate.md "PluginModuleCreate") | Create an object of the plugin module configuration. |
| [PluginParamCreate](imtmanagerapi_pluginparamcreate.md "PluginParamCreate") | Create an object of the plugin parameter. |
| [PluginUpdate](imtmanagerapi_pluginupdate.md "PluginUpdate") | Update a plugin configuration. |
| [PluginTotal](imtmanagerapi_plugintotal.md "PluginTotal") | The total number of plugin configurations available on the trade server. |
| [PluginNext](imtmanagerapi_pluginnext.md "PluginNext") | Get the plugin configuration by the index. |
| [PluginGet](imtmanagerapi_pluginget.md "PluginGet") | Get the plugin configuration by the name. |

When working via the manager interface (IMTManagerAPI) the application only has access to the plugins, in which the "Configurable by managers" option is enabled ([IMTConPlugin::PLUGIN_FLAG_MAN_CONFIG](imtconplugin_enum.htm#enpluginflags)). In addition:
  * When connecting to the main trade server, the application only has access to the plugins, which are installed on the same server or on the history server ([IMTConPlugin::Server](imtconplugin_server.md "Server")).
  * When connecting to a regular trading server, the application can only access the plugins which are installed in the same server.

During operation via the administrator interface ([IMTAdminAPI](imtadminapi_config_plugin.md "Functions")), the following plugins are available to the application:
  * When connected to the main trade server: all plugins within the platform.
  * When connected to a regular trading server: all plugins installed in the same server or on the history server.

To manage plugin configurations, the pumping mode [IMTManagerAPI::PUMP_MODE_PLUGINS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled for the Manager API application. Also, the [IMTConPlugin::PLUGIN_FLAG_MAN_CONFIG](imtconplugin_enum.htm#enpluginflags) flag must be enabled for the plugin and the [IMTConManager::RIGHT_CFG_PLUGINS](imtconmanager_enum.htm#enmanagerrights) permission must be enabled for the manager account.  
---