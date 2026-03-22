# TickSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickSubscribe | [](imtmanagerapi_tick.md "Tick Data Functions") [](imtmanagerapi_tickunsubscribe.md "TickUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickSubscribe
Subscribe to the events associated with changes in the database of price data.
C++
MTAPIRES IMTManagerAPI::TickSubscribe( IMTTickSink* sink // A pointer to the IMTTickSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.TickSubscribe( CIMTTickSink sink // CIMTTickSink object )  
---  
Python
ManagerAPI.TickSubscribe( sink # IMTTickSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTickSink](imtticksink.md "IMTTickSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The Manager API application only receives ticks for the [selected symbols](imtmanagerapi_selected.md "Selected Symbols").
Subscribing to events is thread safe. One and the same interface [IMTTickSink](imtticksink.md "IMTTickSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::TickUnsubscribe](imtmanagerapi_tickunsubscribe.md "TickUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
The subscription to the events associated with price changes works only for the symbols selected using the [IMTManagerAPI::SelectedAdd](imtmanagerapi_selectedadd.md "SelectedAdd") (or for all symbols if they are selected using [IMTManagerAPI::SelectedAddAll](imtmanagerapi_selectedaddall.md "SelectedAddAll")).