# ServerRestart (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Service Commands ](net_service.md "Service Commands")/ ServerRestart | [](net_service.md "Service Commands") [](net_common.md "Common Configuration") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.ServerRestart
This method restarts the server to which the Web client is connected. If a Web client is connected to the main trade server, this command will restart all the trading platform.
MTRetCode MT5WebAPI.ServerRestart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Restart servers only on weekends and holidays or at night when the trading activity is minimal. Restarting the server may take several seconds (up to a minute), during this time connection to the server is impossible.