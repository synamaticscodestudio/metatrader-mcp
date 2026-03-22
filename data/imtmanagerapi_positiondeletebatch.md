# PositionDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionDeleteBatch | [](imtmanagerapi_positiondeletebyticket.md "PositionDeleteByTicket") [](imtmanagerapi_positionsplit.md "PositionSplit") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionDeleteBatch
Delete positions from the server database in bulk.
C++
MTAPIRES IMTManagerAPI::PositionDeleteBatch( const UINT64*  tickets, // Array of tickets const UINT tickets_total, // Number of tickets in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionDeleteBatch( ulong[] tickets, // Array of tickets MTRetCode[] retcodes // Array of results )  
---  
Python
ManagerAPI.PositionDeleteBatch( tickets # Array of tickets )  
---  
Parameters
tickets
[in] A pointer to an array of tickets of the position which you want to delete.
tickets_total
[in] The number of tickets in the 'tickets' array.
results
[out] The array with the position deletion results. The size of the 'results' array must not be less than that of 'tickets'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all positions have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the positions have been deleted. Analyze the 'results' array for more details concerning the execution results. The result of deletion of each position from the 'tickets' array is added to 'results'. The result index corresponds to the ticket index in the source array.
Note
Positions can only be deleted from the applications connected to the trade server, on which the positions have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Please note that deletion of positions does not affect the client's current deals. Therefore, [IMTAdmin::PositionCheck](imtadminapi_positioncheck.md "PositionCheck") will show that the client's positions do not match the history of deals.
Bulk deletion is executed faster than deletion of the same number of positions in a cycle one by one, using [IMTManagerAPI::PositionDelete](imtmanagerapi_positiondelete.md "PositionDelete"). The acceleration can be especially noticeable when deleting positions belonging to one account.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.