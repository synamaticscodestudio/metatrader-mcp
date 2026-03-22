# PositionDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionDelete | [](imtmanagerapi_positionupdatebatcharray.md "PositionUpdateBatchArray") [](imtmanagerapi_positiondeletebyticket.md "PositionDeleteByTicket") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionDelete
Deletes a position.
C++
MTAPIRES IMTManagerAPI::PositionDelete( IMTPosition* position // Position object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionDelete( CIMTPosition position // Position object )  
---  
Python
ManagerAPI.PositionDelete( position # Position object )  
---  
Parameters
position
[in] The object of the position that you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A position can only be deleted from the applications connected to the trade server, on which the position has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights) permissions in order to use the function.