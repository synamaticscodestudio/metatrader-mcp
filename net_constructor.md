# Constructor (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class")/ Constructor | [](net_mtwebapi.md "MT5WebAPI Class") [](net_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

Constructor
The following parameters can be set in the MT5WebAPI class constructor:
MT5WebAPI.MT5WebAPI( string agent, // IP address CallbackLogWrite logWrite // Logging function )  
---  
Parameters
agent
[in] The name of the Web client. The default value is WEBAPI. This information will be displayed in the server log, along with information about the connection with the manager account.
logWrite
[in] A pointer to the logging function implemented in your project (site). Thus, the Web API client will output its messages in the log of your site.