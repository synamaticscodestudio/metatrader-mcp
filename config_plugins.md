# Plugins (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Plugins | [](imtconserversink_onconserversync.md "OnConServerSync") [](imtconplugin.md "IMTConPlugin") |
| --- | --- | --- |
| --- | --- |

Configuration of Plugins
The MetaTrader 5 API allows managing configurations of plugins in the platform and process events of configuration changes.
The following plugin interfaces are available:
  * [IMTConPlugin](imtconplugin.md "IMTConPlugin") An interface for configuring plugin parameters.
  * [IMTConPluginModule](imtconpluginmodule.md "IMTConPluginModule") An interface for accessing parameters of plugin modules.
  * [IMTConPluginSink](imtconpluginsink.md "IMTConPluginSink") An interface for handling events associated with the configuration of plugins.

The below figure shows different elements of of plugin configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The name of plugin configuration](imtconplugin_name.md "Name").
  2. [The name of the plugin module](imtconplugin_module.md "Module").
  3. [Plugin provider](imtconpluginmodule_vendor.md "Vendor").
  4. [The list of plugin configurations.](imtconplugin.md "IMTConPlugin")
  5. [The plugin operation mode](imtconplugin_mode.md "Mode").
  6. [Configuring via the manager terminal](imtconplugin_flags.md "Flags").
  7. [Enabling plugin profiling](imtconplugin_flags.md "Flags").
  8. [A block for configuring plugin parameters](imtconplugin_parameteradd.md "ParameterAdd").
  9. [A server on which the plugin is running](imtconplugin_server.md "Server").
  10. [The name of a plugin parameter](imtconplugin_parameterget.md "ParameterGet")
  11. [The value of a plugin parameter](imtconplugin_parameterget.md "ParameterGet")
