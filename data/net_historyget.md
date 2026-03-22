# HistoryGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Orders ](net_order.md "Orders")/ HistoryGet | [](net_ordergetpage.md "OrderGetPage") [](net_historygettotal.md "HistoryGetTotal") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.HistoryGet
Get a closed order by the ticket.
MTRetCode MT5WebAPI.HistoryGet( ulong ticket, // Ticket out MTOrder order // Order )  
---  
Parameters
ticket
[in] Order ticket.
order
[out] The MTOrder structure that describes a trade order. Description of the structure parameters is provided in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.