# HistoryGetPage (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Orders ](php_order.md "Orders")/ HistoryGetPage | [](php_historygettotal.md "HistoryGetTotal") [](php_deal.md "Deals") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::HistoryGetPage
Get closed orders of a client by the login.
MTAPIRES MTWebAPI::HistoryGetPage( int $login, // Login int $from, // Beginning of period int $to, // End of period int $offset, // Order index int $total, // Number of orders MTOrder $orders // Array of orders )  
---  
Parameters
$login
[in] The login of the client whose closed orders you need to get.
$from
[in] The beginning of the period for requesting orders. The date is specified in seconds since January 1, 1970.
$to
[in] The end of the period for requesting orders. The date is specified in seconds since January 1, 1970.
$offset
[in] The index of the order starting from which you need to get orders. Numbering starts from 0.
$total
[in] The number of orders that should be obtained. The maximum number of orders that can be requested in one method call is 100.
$orders
[out] The MTOrder array of structures in which trade orders are described. Description of the structure parameters is provided in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method allows to easily arrange a paged output of resulting orders. First you should get the total number of a client's orders using the [MTWebAPI::HistoryGetTotal](php_historygettotal.md "HistoryGetTotal") method. After defining the number of orders that should be shown on one page (set by the total parameter), you can easily find the offset parameter for each page.