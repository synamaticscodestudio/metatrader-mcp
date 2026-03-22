# DealGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Deals ](php_deal.md "Deals")/ DealGetTotal | [](php_dealget.md "DealGet") [](php_dealgetpage.md "DealGetPage") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::DealGetTotal
Get the number of a client's deals by the login.
MTAPIRES MTWebAPI::DealGetTotal( int $login, // Login int $from, // Beginning of period int $to, // End of period int $total // Number of deals )  
---  
Parameters
$login
[in] The login of a client.
$from
[in] The beginning of the period for requesting deals. The date is specified in seconds since January 1, 1970.
$to
[in] The end of the period for requesting deals. The date is specified in seconds since January 1, 1970.
$total
[out] The number of deals of the client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.