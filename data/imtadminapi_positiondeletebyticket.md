# PositionDeleteByTicket (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionDeleteByTicket | [](imtadminapi_positiondelete.md "PositionDelete") [](imtadminapi_positiondeletebatch.md "PositionDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionDeleteByTicket
Delete a position by ticket.
C++
MTAPIRES IMTAdminAPI::PositionDeleteByTicket( UINT64 ticket // Position object )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionDeleteByTicket( ulong ticket // Position object )  
---  
Python
AdminAPI.PositionDeleteByTicket( ticket # Position object )  
---  
Parameters
ticket
[in] The ticket of the position you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A position can only be deleted from the applications connected to the trade server, on which the position has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
To be able to use the function, the manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions.