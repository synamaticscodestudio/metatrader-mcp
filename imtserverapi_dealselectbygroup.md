# DealSelectByGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealSelectByGroup | [](imtserverapi_dealgetbytickets.md "DealGetByTickets") [](imtserverapi_dealselectbylogins.md "DealSelectByLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealSelectByGroup
Request deals from a database for a group of accounts using additional criteria.
MTAPIRES IMTServerAPI::DealSelectByGroup( LPCWSTR group, // Group const INT64 from, // Period from const INT64 to, // Period to const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
group
[in] The groups for which deals are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
from
[in] The beginning of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to receive deals. The date is specified in seconds which have elapsed since 01.01.1970.
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object, which describes deal request criteria.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which deals received from the database in accordance with the request will be added. The object must be previously created using the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases.