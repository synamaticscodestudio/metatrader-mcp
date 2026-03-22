# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions")/ Plugins | [](imtadminapi_tlscertificatenext.md "TLSCertificateNext") [](imtadminapi_plugincreate.md "PluginCreate") |
| --- | --- | --- |
| --- | --- |

Configuration of Plugins
Functions allow managing plugin configurations, as well subscribe and unsubscribe from events associated with their change.
The following functions for managing plugins are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [PluginCreate](imtadminapi_plugincreate.md "PluginCreate") | Create an object of the plugin configuration. |
| [PluginModuleCreate](imtadminapi_pluginmodulecreate.md "PluginModuleCreate") | Create an object of the plugin module configuration. |
| [PluginParamCreate](imtadminapi_pluginparamcreate.md "PluginParamCreate") | Create an object of the plugin parameter. |
| [PluginSubscribe](imtadminapi_pluginsubscribe.md "PluginSubscribe") | Subscribe to events associated with the configuration of plugins. |
| [PluginUnsubscribe](imtadminapi_pluginunsubscribe.md "PluginUnsubscribe") | Unsubscribe from events associated with the configuration of plugins. |
| [PluginUpdate](imtadminapi_pluginupdate.md "PluginUpdate") | Add and update a plugin configuration. |
| [PluginUpdateBatch](imtadminapi_pluginupdatebatch.md "PluginUpdateBatch") | Add or edit multiple plugin configurations. |
| [PluginDelete](imtadminapi_plugindelete.md "PluginDelete") | Delete a plugin configuration by the name or index. |
| [PluginDeleteBatch](imtadminapi_plugindeletebatch.md "PluginDeleteBatch") | Delete multiple plugin configurations. |
| [PluginShift](imtadminapi_pluginshift.md "PluginShift") | Changes the position of a plugin configuration in the list. |
| [PluginTotal](imtadminapi_plugintotal.md "PluginTotal") | The total number of plugin configurations available in the platform. |
| [PluginNext](imtadminapi_pluginnext.md "PluginNext") | Get the plugin configuration by the index. |
| [PluginGet](imtadminapi_pluginget.md "PluginGet") | Get the plugin configuration by the name. |
| [PluginModuleTotal](imtadminapi_pluginmoduletotal.md "PluginModuleTotal") | The total number of configurations of plugin modules (DLL files) available in the platform. |
| [PluginModuleNext](imtadminapi_pluginmodulenext.md "PluginModuleNext") | Get a plugin module by the index. |
| [PluginModuleGet](imtadminapi_pluginmoduleget.md "PluginModuleGet") | Get the plugin module configuration by the name. |

When working via the manager interface ([IMTManagerAPI](imtmanagerapi_config_plugin.md "Plugins")) the application only has access to the plugins, in which the "Configurable by managers" option is enabled ([IMTConPlugin::PLUGIN_FLAG_MAN_CONFIG](imtconplugin_enum.htm#enpluginflags)). In addition:
  * When connecting to the main trade server, the application only has access to the plugins, which are installed on the same server or on the history server ([IMTConPlugin::Server](imtconplugin_server.md "Server")).
  * When connecting to a regular trading server, the application can only access the plugins which are installed in the same server.

During operation via the administrator interface (IMTAdminAPI), the following plugins are available to the application:
  * When connected to the main trade server: all plugins within the platform.
  * When connected to a regular trading server: all plugins installed in the same server or on the history server.

In order to be able to manage plugin configurations, the [IMTConManager::RIGHT_CFG_PLUGINS](imtconmanager_enum.htm#enmanagerrights) permission must be enabled for the manager account which is used by the Manager API application.  
---