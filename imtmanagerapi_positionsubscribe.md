# PositionSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Positions ](imtmanagerapi_trading_position.md "Positions")/ PositionSubscribe | [](imtmanagerapi_positioncreatearray.md "PositionCreateArray") [](imtmanagerapi_positionunsubscribe.md "PositionUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PositionSubscribe
Subscribe to the events associated with changes in the database of positions.
C++
MTAPIRES IMTManagerAPI::PositionSubscribe( IMTPositionSink* sink // A pointer to the IMTPositionSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.PositionSubscribe( CIMTPositionSink sink // CIMTPositionSink object )  
---  
Python
ManagerAPI.PositionSubscribe( sink # IMTPositionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTPositionSink](imtpositionsink.md "IMTPositionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTPositionSink](imtpositionsink.md "IMTPositionSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTPositionSink::OnPositionSync](imtpositionsink_onpositionsync.md "OnPositionSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::PositionUnsubscribe](imtmanagerapi_positionunsubscribe.md "PositionUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with position database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_POSITIONS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.