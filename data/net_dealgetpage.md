# DealGetPage (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Deals ](net_deal.md "Deals")/ DealGetPage | [](net_dealgettotal.md "DealGetTotal") [](net_position.md "Positions") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.DealGetPage
Get the deals of a client by the login in the specified time range.
MTRetCode MT5WebAPI.DealGetPage( ulong login, // Login long from, // Beginning of period long to, // End of period uint offset, // Deal index uint total, // The number of deals out List<MTDeal> deals // The array of deals )  
---  
Parameters
login
[in] The login of the client whose deals we want to obtain.
from
[in] The beginning of the period for requesting deals. The date is specified in seconds since January 1, 1970.
to
[in] The end of the period for requesting deals. The date is specified in seconds since January 1, 1970.
offset
[in] The index of the deal starting from which you need to obtain deals. Numbering starts from 0.
total
[in] The number of deals that should be obtained. The maximum number of deals that can be requested in one command is 100.
deals
[out] The MTDeal array of structures in which deals are described. Description of the structure parameters is provided in the ["Data Structure"](webapi_deal_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method allows to easily arrange a paged output of resulting deals. First you should get the total number of a client's deals using the [MT5WebAPI.DealGetTotal](net_dealgettotal.md "DealGetTotal") method. After defining the number of deals that should be shown on one page (set by the total parameter), you can easily find the offset parameter for each page.