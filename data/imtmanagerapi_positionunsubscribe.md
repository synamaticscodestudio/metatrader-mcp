# PositionUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionUnsubscribe | [](imtmanagerapi_positionsubscribe.md "PositionSubscribe") [](imtmanagerapi_positionget.md "PositionGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionUnsubscribe
Unsubscribe from the events associated with changes in the database of positions.
C++
MTAPIRES IMTManagerAPI::PositionUnsubscribe( IMTPositionSink* sink // A pointer to the IMTPositionSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionUnsubscribe( CIMTPositionSink sink // CIMTPositionSink object )  
---  
Python
ManagerAPI.PositionUnsubscribe( sink # IMTPositionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTPositionSink](imtpositionsink.md "IMTPositionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::PositionSubscribe](imtmanagerapi_positionsubscribe.md "PositionSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.