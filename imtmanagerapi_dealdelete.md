# DealDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealDelete | [](imtmanagerapi_dealupdatebatcharray.md "DealUpdateBatchArray") [](imtmanagerapi_dealdeletebatch.md "DealDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealDelete
Deletes a deal.
C++
MTAPIRES IMTManagerAPI::DealDelete( const UINT64 ticket // The ticket of a deal )  
---  
.NET
MTRetCode CIMTManagerAPI.DealDelete( ulong ticket // The ticket of a deal )  
---  
Python
ManagerAPI.DealDelete( ticket # The ticket of a deal )  
---  
Parameters
ticket
[in] The number (ticket) of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can only be deleted from the applications connected to the trade server, on which the deal has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions in order to use the function.