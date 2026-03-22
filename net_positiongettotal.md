# PositionGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Positions ](net_position.md "Positions")/ PositionGetTotal | [](net_positionget.md "PositionGet") [](net_positiongetpage.md "PositionGetPage") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.PositionGetTotal
Get the number of open positions of a client by the login.
MTRetCode MT5WebAPI.PositionGetTotal( ulong login, // Login out uint total // The number of positions )  
---  
Parameters
login
[in] The login of a client.
total
[out] The number of currently open positions of the client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.