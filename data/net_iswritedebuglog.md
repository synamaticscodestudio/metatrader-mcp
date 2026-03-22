# IsWriteDebugLog (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Logging Management ](net_logging.md "Manage Logging")/ IsWriteDebugLog | [](net_logging.md "Manage Logging") [](net_service.md "Service Commands") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.IsWriteDebugLog
Get the mode of output of debug messages in the Web API journal.
bool MT5WebAPI.IsWriteDebugLog()  
---  
Return Value
If logging of debug messages is enabled, it returns true. Otherwise, it returns false.
Note
Web client messages appear on the common journal of a project (site). A pointer to the logging function is passed in the [MT5WebAPI class constructor](net_constructor.md "Constructor").
MT5WebAPI.IsWriteDebugLog
Set the mode of output of debug messages in the Web API journal.
void MT5WebAPI.IsWriteDebugLog( bool value // Logging of debug messages )  
---  
Parameters
value
[in] The mode of logging of debug messages. To log messages set true. To disable logging set false.
Note
Web client messages appear on the common journal of a project (site). A pointer to the logging function is passed in the [MT5WebAPI class constructor](net_constructor.md "Constructor").