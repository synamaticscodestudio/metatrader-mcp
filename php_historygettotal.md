# HistoryGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Orders ](php_order.md "Orders")/ HistoryGetTotal | [](php_historyget.md "HistoryGet") [](php_historygetpage.md "HistoryGetPage") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::HistoryGetTotal
Get the number of closed orders of a client by the login in the specified time range.
MTAPIRES MTWebAPI::HistoryGetTotal( int $login, // Login int $from, // Beginning of period int $to, // End of period int $total // Number of orders )  
---  
Parameters
$login
[in] The login of a client.
$from
[in] The beginning of the period for requesting orders. The date is specified in seconds since January 1, 1970.
$to
[in] The end of the period for requesting orders. The date is specified in seconds since January 1, 1970.
$total
[out] The number of closed orders of a client in the specified time range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.