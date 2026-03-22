# ChartUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ History Data ](serverapi_chart.md "History Data")/ ChartUnsubscribe | [](imtserverapi_chartsubscribe.md "ChartSubscribe") [](imtserverapi_chartget.md "ChartGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ChartUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of one-minute data.
MTAPIRES IMTServerAPI::ChartUnsubscribe( IMTChartSink* sink // Pointer to the IMTChartSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements the [IMTChartSink](imtchartsink.md "IMTChartSink") interface.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is paired with [IMTServerAPI::ChartSubscribe](imtserverapi_chartsubscribe.md "ChartSubscribe"). If an attempt is made to unsubscribe from the interface that was not previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.