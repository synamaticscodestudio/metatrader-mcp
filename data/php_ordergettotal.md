# OrderGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Orders ](php_order.md "Orders")/ OrderGetTotal | [](php_orderget.md "OrderGet") [](php_ordergetpage.md "OrderGetPage") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::OrderGetTotal
Get the number of open orders of a client by the login.
MTAPIRES MTWebAPI::OrderGetTotal( int $login, // Login int $total // Number of orders )  
---  
Parameters
$login
[in] The login of a client.
$total
[out] The number of open orders of a client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.