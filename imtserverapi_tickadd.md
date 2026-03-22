# TickAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickAdd | [](imtserverapi_tickunsubscribe.md "TickUnsubscribe") [](imtserverapi_tickaddbatch.md "TickAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickAdd
Add a quote into the price stream.
MTAPIRES IMTServerAPI::TickAdd( MTTick& tick // A pointer to the quote structure )  
---  
Parameters
tick
[in] A pointer to the [MTTick](mttick.md "MTTick") structure that describes the quote.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method works only in plugins that run on history servers. If trying to run the command on another server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.
The method must not be called the [IMTTickSink::OnTick](imtticksink_ontick.md "OnTick") handler.