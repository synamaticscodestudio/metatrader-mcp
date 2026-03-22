# OrderGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Orders ](net_order.md "Orders")/ OrderGet | [](net_order.md "Orders") [](net_ordergettotal.md "OrderGetTotal") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.OrderGet
Get an open trade order by a ticket.
MTRetCode MT5WebAPI.OrderGet( ulong ticket, // Ticket out MTOrder order // Order )  
---  
Parameters
ticket
[in] Order ticket.
order
[out] The MTOrder structure that describes a trade order. Description of the structure parameters is provided in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.