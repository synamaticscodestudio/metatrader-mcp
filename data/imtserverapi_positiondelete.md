# PositionDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionDelete | [](positionunsubscribe.md "PositionUnsubscribe") [](imtserverapi_positiondeletebyticket.md "PositionDeleteByTicket") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionDelete
Delete a trade position.
MTAPIRES IMTServerAPI::PositionDelete( const UINT64 login, // User's login LPCWSTR symbol // Symbol )  
---  
Parameters
login
[in] The login of a user whose position should be deleted.
symbol
[in] The symbol, for which a position should be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_common.md "Common errors") response code. Otherwise, an error code will be returned.
Note
A position can be deleted only from the plugins that run on the same trade server where the position was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
To delete a position when using the hedging accounting system ([EnMarginMode::MARGIN_MODE_RETAIL_HEDGED](imtcongroup_enum.htm#enmarginmode)), use the [IMTServerAPI::PositionDeleteByTicket](imtserverapi_positiondeletebyticket.md "PositionDeleteByTicket") method as a position in that case is identified by the ticket, not by the login and symbol.