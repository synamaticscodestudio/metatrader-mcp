# DealGetTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Deals ](net_deal.md "Deals")/ DealGetTotal | [](net_dealget.md "DealGet") [](net_dealgetpage.md "DealGetPage") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.DealGetTotal
Get the number of a client's deals by the login.
MTRetCode MT5WebAPI.DealGetTotal( ulong login, // Login long from, // Beginning of period long to, // End of period out uint total // Number of deals )  
---  
Parameters
login
[in] The login of a client.
from
[in] The beginning of the period for requesting deals. The date is specified in seconds since January 1, 1970.
to
[in] The end of the period for requesting deals. The date is specified in seconds since January 1, 1970.
total
[out] The number of deals of the client with the specified login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.