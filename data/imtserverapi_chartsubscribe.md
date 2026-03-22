# ChartSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ History Data ](serverapi_chart.md "History Data")/ ChartSubscribe | [](serverapi_chart.md "History Data") [](imtserverapi_chartunsubscribe.md "ChartUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ChartSubscribe
Subscribe to events and hooks associated with changes in the database of one-minute data.
MTAPIRES IMTServerAPI::ChartSubscribe( IMTChartSink* sink // Pointer to the IMTChartSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTChartSink](imtchartsink.md "IMTChartSink") interface.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread-safe. The same [IMTChartSink](imtchartsink.md "IMTChartSink") interface cannot subscribe to an event twice – in this case, the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object pointed by 'sink' must remain in the memory (must not be deleted) until [IMTServerAPI::ChartUnsubscribe](imtserverapi_chartunsubscribe.md "ChartUnsubscribe") is called or until the plugin is deleted.
This method can be used only on history servers. In the case of using it on another server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.