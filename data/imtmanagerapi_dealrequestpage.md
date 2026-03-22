# DealRequestPage (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealRequestPage | [](imtmanagerapi_dealrequestbytickets.md "DealRequestByTickets") [](imtmanagerapi_dealadd.md "DealAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealRequestPage
Get client deals with a paged output.
C++
MTAPIRES IMTManagerAPI::DealRequestPage( const UINT64 login, // login const INT64 from, // beginning of period const INT64 to, // end of period const UINT offset, // deal index const UINT total, // number of deals IMTDealArray* deals // object of deals array )  
---  
.NET
MTRetCode CIMTManagerAPI.DealRequestPage( ulong login, // login long  from, // beginning of period long to, // end of period uint offset, // deal index uint total, // number of deals CIMTDealArray deals // object of deals array )  
---  
Python
ManagerAPI.DealRequestPage( login, # login from, # beginning of period to, # end of period offset, # deal index total # number of deals )  
---  
ManagerAPI.DealRequestPageCSV( login, # login from, # beginning of period to, # end of period offset, # deal index total, # number of deals fields # comma-separated list of required fields )  
---  
ManagerAPI.DealRequestPageNumPy( login, # login from, # beginning of period to, # end of period offset, # deal index total, # number of deals fields # comma-separated list of required fields )  
---  
Parameters
login
[in] The login of the client, whose deals you wish to receive.
from
[in] The beginning of the period for which you wish to receive deals. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you wish to receive deals. The date is specified in seconds that have elapsed since 01.01.1970.
offset
[in] The index of the deal starting from which you wish to receive deals. Numbering starts from 0.
total
[in] The number of deals that should be received.
deals
[out] An object of the deals array. The 'deals' object must be previously created using [IMTManagerAPI::DealCreateArray](imtmanagerapi_dealcreatearray.md "DealCreateArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This request allows to easily arrange a paged output of resulting deals. Determine the number of deals that should be displayed on one page by setting it in the 'total' parameter. Then find the 'offset' parameter for each page, starting with 0 for the first page.
The method cannot be called from event handlers (any IMT*Sink class methods).