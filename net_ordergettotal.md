# OrderGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Orders ](net_order.md "Orders")/ OrderGetTotal | [](net_orderget.md "OrderGet") [](net_ordergetpage.md "OrderGetPage") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.OrderGetTotal
Get the number of open orders of a client by the login.
MTRetCode MT5WebAPI.OrderGetTotal( ulong login, // Login out uint total // The number of orders )  
---  
Parameters
login
[in] The login of a client.
total
[out] The number of open orders of a client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.