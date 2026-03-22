# DealSelectByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealSelectByLogins | [](imtserverapi_dealselectbygroup.md "DealSelectByGroup") [](imtserverapi_dealperform.md "DealPerform") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealSelectByLogins
Request deals from a database for a list of logins using additional criteria.
MTAPIRES IMTServerAPI::DealSelectByLogins( const UINT64*  logins, // Logins const UINT logins_total, // Number of logins const INT64 from, // Period from const INT64 to, // Period to const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data sets )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
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