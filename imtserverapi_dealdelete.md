# DealDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealDelete | [](imtserverapi_dealupdatebatcharray.md "DealUpdateBatchArray") [](imtserverapi_dealdeletebatch.md "DealDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealDelete
Deletes a deal from the server data base.
MTAPIRES IMTServerAPI::DealDelete( const UINT64 ticket // The ticket of a deal )  
---  
Parameters
ticket
[in] The number (ticket) of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can be deleted only from the plugins that run on the same trade server where the deal was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Please note that deletion of deals does not affect the client's balance and current positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") and [IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck") will show that the client's balance and positions do not match the history of deals.