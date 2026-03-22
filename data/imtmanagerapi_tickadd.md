# TickAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickAdd | [](imtmanagerapi_tickunsubscribe.md "TickUnsubscribe") [](imtmanagerapi_tickaddbatch.md "TickAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickAdd
Add a quote into the price stream.
C++
MTAPIRES IMTManagerAPI::TickAdd( LPCWSTR symbol, // Symbol MTTick& tick // Reference to the quote structure )  
---  
.NET
MTRetCode CIMTManagerAPI.TickAdd( srting symbol, // Symbol MTTick tick // Quote structure )  
---  
Python
ManagerAPI.TickAdd( symbol, # Symbol tick # Quote structure )  
---  
Parameters
symbol
[in] The symbol, for which a quote is added. Obsolete parameter, its value is ignored. Can be filled with NULL.
tick
[in] A reference to the structure that describes the tick ([MTTick](mttick.md "MTTick")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To execute this function, a manager must have appropriate rights, otherwise the [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") error is returned.
Unlike [IMTManagerAPI::TickHistoryAdd](imtmanagerapi_tickhistoryadd.md "TickHistoryAdd"), this method adds a quote to the price stream instead of writing it directly to the price history. 
The method must not be called the [IMTTickSink::OnTick](imtticksink_ontick.md "OnTick") handler.