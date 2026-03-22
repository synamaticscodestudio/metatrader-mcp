# HistoryGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Orders ](net_order.md "Orders")/ HistoryGetTotal | [](net_historyget.md "HistoryGet") [](net_historygetpage.md "HistoryGetPage") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.HistoryGetTotal
Get the number of closed orders of a client by the login in the specified time range.
MTRetCode MT5WebAPI.HistoryGetTotal( ulong login, // Login long from, // Beginning of period long to, // End of period out uint total // The number of orders )  
---  
Parameters
login
[in] The login of a client.
from
[in] The beginning of the period for requesting orders. The date is specified in seconds since January 1, 1970.
to
[in] The end of the period for requesting orders. The date is specified in seconds since January 1, 1970.
total
[out] The number of closed orders of a client in the specified time range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.