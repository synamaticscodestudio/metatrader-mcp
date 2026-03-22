# PositionUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionUnsubscribe | [](imtserverapi_positionsubscribe.md "PositionSubscribe") [](imtserverapi_positiondelete.md "PositionDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of positions.
MTAPIRES IMTServerAPI::PositionUnsubscribe( IMTPositionSink* sink // A pointer to the IMTPositionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTPositionSink](imtpositionsink.md "IMTPositionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::PositionSubscribe](imtserverapi_positionsubscribe.md "PositionSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.