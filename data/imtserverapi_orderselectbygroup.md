# OrderSelectByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderSelectByGroup | [](imtserverapi_ordergetbytickets.md "OrderGetByTickets") [](imtserverapi_orderselectbylogins.md "OrderSelectByLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderSelectByGroup
Request open orders from a database for a group of accounts using additional criteria.
MTAPIRES IMTServerAPI::OrderSelectByGroup( LPCWSTR group, // Group const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
group
[in] The group for which the orders are requested.
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object, which describes order request criteria.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which orders received from the database in accordance with the request will be added. The object must be previously created using the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases.