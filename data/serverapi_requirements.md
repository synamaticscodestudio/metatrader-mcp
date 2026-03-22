# Requirements for Plugins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Requirements for Plugins | [](serverapi_configure_plugin.md "Configuration of Plugins") [](serverapi_simpleplugin.md "Creating a Simple Plugin") |
| --- | --- | --- |
| --- | --- |

Requirements for Plugins
When developing plugins, it is necessary to meet the following requirements:
  * The bitness of plugins must comply with the bitness of the servers they are used on. 32-bit plugins do not work on 64-bit servers.
  * Since the plugin is running in the server address space, it:

  * should use the memory very efficiently;
  * should fragment memory as little as possible;
  * should not cause memory leaks.
  * A plugin in no case should generate unhandled exceptions.
  * A plugin must quickly return control from event handlers and hooks.
