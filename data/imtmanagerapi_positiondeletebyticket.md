# PositionDeleteByTicket (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionDeleteByTicket | [](imtmanagerapi_positiondelete.md "PositionDelete") [](imtmanagerapi_positiondeletebatch.md "PositionDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionDeleteByTicket
Delete a position by ticket.
C++
MTAPIRES IMTManagerAPI::PositionDeleteByTicket( UINT64 ticket // Position object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionDeleteByTicket( ulong ticket // Position object )  
---  
Python
ManagerAPI.PositionDeleteByTicket( ticket # Position object )  
---  
Parameters
ticket
[in] The ticket of the position you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A position can only be deleted from the applications connected to the trade server, on which the position has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
To be able to use the function, the manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions.