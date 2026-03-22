# DealGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Deals ](net_deal.md "Deals")/ DealGet | [](net_deal.md "Deals") [](net_dealgettotal.md "DealGetTotal") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.DealGet
Get a deal by a ticket.
MTRetCode MT5WebAPI.DealGet( ulong ticket, // Deal ticket out MTDeal deal // Deal )  
---  
Parameters
ticket
[in] Deal ticket.
deal
[out] The MTDeal structure that describes a trade deal. Description of the structure parameters is provided in the ["Data Structure"](webapi_deal_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.