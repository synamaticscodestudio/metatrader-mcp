# DealDeleteBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealDeleteBatch | [](imtserverapi_dealdelete.md "DealDelete") [](imtserverapi_dealget.md "DealGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealDeleteBatch
Deletes deals from the server database in bulk.
MTAPIRES IMTServerAPI::DealDeleteBatch( const UINT64*  tickets, // An array of tickets const UINT tickets_total, // The number of tickets in the array MTAPIRES* results // An array of results )  
---  
Parameters
tickets
[in] A pointer to an array of deals which you want to delete.
tickets_total
[in] The number of tickets in the 'tickets' array.
results
[out] An array with the result of the deletion of deals. The size of the 'results' array must be not less than that of 'tickets'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all specified deals have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been deleted. For details, you should analyze the 'results' array. The result of deletion of each deal from the 'tickets' array is added to the 'results' array. The index of a result corresponds to the index of a ticket in the source array.
Note
Deals can be deleted only from the plugins, which run on the same trade server where the deals were created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Please note that deletion of deals does not affect the client's balance and current positions. Therefore, [IMTAdminAPI::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") and [IMTAdminAPI::UserBalanbceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck") will show that the client's balance and positions do not match the history of deals.
The bulk deletion works faster than the deletion of the same number of deals in a loop one by one using [IMTServerAPI::DealDelete](imtserverapi_dealdelete.md "DealDelete"). The faster operation is particularly noticeable when deleting deals of the same account.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.