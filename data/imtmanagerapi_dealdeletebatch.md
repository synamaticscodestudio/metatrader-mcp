# DealDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealDeleteBatch | [](imtmanagerapi_dealdelete.md "DealDelete") [](imtmanagerapi_dealperform.md "DealPerform") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealDeleteBatch
Delete deals from the server database in bulk.
C++
MTAPIRES IMTManagerAPI::DealDeleteBatch( const UINT64*  tickets, // Array of tickets const UINT tickets_total, // Number of tickets in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.DealDeleteBatch( ulong[] tickets, // Deal ticket MTRetCode[] res // Array of results )  
---  
Python
ManagerAPI.DealDeleteBatch( tickets # Deal ticket )  
---  
Parameters
tickets
[in] A pointer to an array of tickets of the deal which you want to delete.
tickets_total
[in] The number of tickets in the 'tickets' array.
results
[out] The array with the deal deletion results. The size of the 'results' array must not be less than that of 'tickets'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all the specified deals were deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been deleted. Analyze the 'results' array for more details concerning the execution results. The result of deletion of each deal from the 'tickets' array is added to 'results'. The result index corresponds to the ticket index in the source array.
Note
A deal can only be deleted from the applications connected to the trade server, on which the deals have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Please note that deletion of deals does not affect the client's balance and current positions. Therefore, [IMTAdmin::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") and [IMTManagerAPI::UserBalanbceCheck](imtmanagerapi_userbalancecheck.md "UserBalanceCheck")will show that the client's positions and balance do not match the relevant deals history.
Bulk deletion is executed faster than deletion of the same number of deals in a cycle one by one, using [IMTManagerAPI::DealDelete](imtmanagerapi_dealdelete.md "DealDelete"). The acceleration can be especially noticeable when deleting deals belonging to one account.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.