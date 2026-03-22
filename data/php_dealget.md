# DealGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Deals ](php_deal.md "Deals")/ DealGet | [](php_deal.md "Deals") [](php_dealgettotal.md "DealGetTotal") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::DealGet
Get a deal by a ticket.
MTAPIRES MTWebAPI::DealGet( int $ticket, // Deal ticket MTDeal &$deal // Deal )  
---  
Parameters
$ticket
[in] Deal ticket.
&$deal
[out] The MTDeal structure that describes a trade deal. Description of the structure parameters is provided in the ["Data Structure"](webapi_deal_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.