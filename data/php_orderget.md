# OrderGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Orders ](php_order.md "Orders")/ OrderGet | [](php_order.md "Orders") [](php_ordergettotal.md "OrderGetTotal") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::OrderGet
Get an open trade order by a ticket.
MTAPIRES MTWebAPI::OrderGet( int $ticket, // Ticket MTOrder &$order // Order )  
---  
Parameters
$ticket
[in] Order ticket.
&$order
[out] The MTOrder structure that describes a trade order. Description of the structure parameters is provided in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.