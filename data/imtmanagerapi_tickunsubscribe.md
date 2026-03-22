# TickUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickUnsubscribe | [](imtmanagerapi_ticksubscribe.md "TickSubscribe") [](imtmanagerapi_tickadd.md "TickAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickUnsubscribe
Unsubscribe from the events associated with changes in the database of price data.
C++
MTAPIRES IMTManagerAPI::TickUnsubscribe( IMTTickSink* sink // A pointer to the IMTTickSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.TickUnsubscribe( CIMTTickSink sink // CIMTTickSink object )  
---  
Python
ManagerAPI.TickUnsubscribe( sink # IMTTickSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTickSink](imtticksink.md "IMTTickSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::TickSubscribe](imtmanagerapi_ticksubscribe.md "TickSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.