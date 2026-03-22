# PositionDeleteByTicket (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionDeleteByTicket | [](imtserverapi_positiondelete.md "PositionDelete") [](imtserverapi_positionupdate.md "PositionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionDeleteByTicket
Delete a trade position by ticket.
MTAPIRES IMTServerAPI::PositionDeleteByTicket( const UINT64 ticket // Position ticket )  
---  
Parameters
ticket
[in] The ticket of a position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_common.md "Common errors") response code. Otherwise, an error code will be returned.
Note
A position can be deleted only from the plugins that run on the same trade server where the position was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.