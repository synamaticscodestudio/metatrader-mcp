# OrderSelectByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderSelectByLogins | [](imtserverapi_orderselectbygroup.md "OrderSelectByGroup") [](imtserverapi_historysubscribe.md "HistorySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderSelectByLogins
Request open orders from a database for a list of logins using additional criteria.
MTAPIRES IMTReportAPI::OrderSelectByLogins( const UINT64* logins, // logins const UINT logins_total, // number of logins const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object, which describes order request criteria.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which orders received from the database in accordance with the request will be added. The object must be previously created using the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases.