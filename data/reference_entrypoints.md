# Entry Points (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Entry Points | [](serverapi_examples.md "Ready-made Examples") [](mtserverabout.md "MTServerAbout") |
| --- | --- | --- |
| --- | --- |

Entry Points
Any DLL of a server plugin must implement two entry points (exported functions):
| Entry point | Purpose |
| --- | --- |
| --- | --- |
| [MTServerAbout](mtserverabout.md "MTServerAbout") | The method that provides the initial information about the plugin to the server. |
| [MTServerCreate](mtservercreate.md "MTServerCreate") | The method called by the server to create an instance of an object of the server plugin. |

An example of implementation is given in section ["Creating a simple plugin"](serverapi_simpleplugin.htm#entry).