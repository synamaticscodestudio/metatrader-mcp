# TickAddBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickAddBatch | [](imtserverapi_tickadd.md "TickAdd") [](imtserverapi_tickaddstat.md "TickAddStat") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickAddBatch
Add multiple quotes into the price stream.
MTAPIRES IMTServerAPI::TickAddBatch( MTTick* ticks, // An array of quotes ticks_total tick // The number of quotes )  
---  
Parameters
ticks
[in] An array of [MTTick](mttick.md "MTTick") objects describing quotes.
tick
[in] The number of quotes in the 'ticks' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method works only in plugins running on history servers. An attempt to run the command on another server will cause the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error to be returned.
The method must not be called the [IMTTickSink::OnTick](imtticksink_ontick.md "OnTick") handler.