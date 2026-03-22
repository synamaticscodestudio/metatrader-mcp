# DealGetByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealGetByGroup | [](imtserverapi_dealget.md "DealGet") [](imtserverapi_dealgetbygroupsymbols.md "DealGetByGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealGetByGroup
Receive deals related to a group of accounts.
MTAPIRES IMTServerAPI::DealGetByGroup( LPCWSTR group, // Group const INT64 from, // Period from const INT64 to, // Period to IMTDealArray* deals // Array of deals )  
---  
Parameters
group
[in] The group for which deals are requested.
from
[in] The beginning of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
deals
[out] An object of the deals array. The 'deals' object must be first created using [IMTServerAPI::DealCreateArray](imtserverapi_dealcreatearray.md "DealCreateArray").
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method copies to the 'deals' object data of all deals, which belong to clients in the specified groups and which were executed in the specified time range.
The method cannot be called from event handlers (any IMT*Sink class methods).