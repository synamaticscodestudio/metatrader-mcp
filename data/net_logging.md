# Manage Logging (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class")/ Logging Management | [](net_ping.md "Ping") [](net_iswritedebuglog.md "IsWriteDebugLog") |
| --- | --- | --- |
| --- | --- |

Manage Logging
In the .NET implementation of the Web API, messages about Web actions appear on the common journal of a project (site). A pointer to the logging function is passed in the [MT5WebAPI class constructor](net_constructor.md "Constructor").
This section describes the methods for managing logging:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [IsWriteDebugLog](net_iswritedebuglog.md "IsWriteDebugLog") | Get and set the mode of output of debug messages in the Web API journal. |