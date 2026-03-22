# PositionUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionUpdate | [](imtserverapi_positiondeletebyticket.md "PositionDeleteByTicket") [](imtserverapi_positionget.md "PositionGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionUpdate
Update a trade position.
MTAPIRES IMTServerAPI::PositionUpdate( IMTPosition* position // Position object )  
---  
Parameters
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
A position can be updated only from the plugins that run on the same trade server where the position was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Make sure to fill in all the required fields of the positions, not only the ones which you want to change. It is recommended that you first receive positions from the server, edit the required fields in them, and then send them back to the server. However, please note that while you are working with the position in the API, the position price may change on the server, and the previously received [IMTPosition::PriceCurrent](imtposition_pricecurrent.md "PriceCurrent") value may no longer be valid. If you send the value back as is, a price jump can be observed on the client side: an outdated value will be set for positions, and the price will be updated to the relevant one at the next tick. To avoid such price jumps, retrieve the current symbol price just before sending position changes to the server, and place it in IMTPosition::PriceCurrent.