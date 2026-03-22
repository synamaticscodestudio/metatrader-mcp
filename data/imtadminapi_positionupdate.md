# PositionUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionUpdate | [](imtadminapi_positionrequestbytickets.md "PositionRequestByTickets") [](imtadminapi_positionupdatebatch.md "PositionUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionUpdate
Update a position.
C++
MTAPIRES IMTAdminAPI::PositionUpdate( IMTPosition* position // Position object )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionUpdate( CIMTPosition position // Position object )  
---  
Python
AdminAPI.PositionUpdate( position # Position object )  
---  
Parameters
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A position can only be updated from the applications connected to the trade server, on which the position has been created. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.
Make sure to fill in all the required fields of the positions, not only the ones which you want to change. It is recommended that you first receive positions from the server, edit the required fields in them, and then send them back to the server. However, please note that while you are working with the position in the API, the position price may change on the server, and the previously received [IMTPosition::PriceCurrent](imtposition_pricecurrent.md "PriceCurrent") value may no longer be valid. If you send the value back as is, a price jump can be observed on the client side: an outdated value will be set for positions, and the price will be updated to the relevant one at the next tick. To avoid such price jumps, retrieve the current symbol price just before sending position changes to the server, and place it in IMTPosition::PriceCurrent.