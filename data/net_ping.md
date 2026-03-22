# Ping (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Connect/Disconnect ](net_connect_disconnect.md "Connect/Disconnect")/ Ping | [](net_isconnected.md "IsConnected") [](net_logging.md "Manage Logging") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.Ping
If no packets were received from a client for 120 seconds, the server breaks connection. Thus, the further execution of commands will be impossible until you complete the [authentication](webapi_rest_authentication.md "Authentication") procedure.
This feature allows you to send empty packets to the server (called "pings").
MTRetCode MT5WebAPI.Ping()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The optimal time between sending pings is 20 seconds. You should not send pings too often.