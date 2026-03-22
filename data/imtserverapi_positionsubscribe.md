# PositionSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionSubscribe | [](imtserverapi_positioncreatearray.md "PositionCreateArray") [](positionunsubscribe.md "PositionUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionSubscribe
Subscribe to events and hooks associated with changes in the database of positions.
MTAPIRES IMTServerAPI::PositionSubscribe( IMTPositionSink* sink // A pointer to the IMTPositionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTPositionSink](imtpositionsink.md "IMTPositionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTPositionSink](imtpositionsink.md "IMTPositionSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI:PositionUnsubscribe](positionunsubscribe.md "PositionUnsubscribe") or until the plugin is deleted.