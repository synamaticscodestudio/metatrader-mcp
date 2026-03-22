# PositionSelectByLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionSelectByLogins | [](imtserverapi_positionselectbygroup.md "PositionSelectByGroup") [](imtserverapi_positioncheck.md "PositionCheck") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionSelectByLogins
Request trading positions from a database for a list of logins using additional criteria.
MTAPIRES IMTReportAPI::PositionSelectByLogins( LPCWSTR group, // Group const INT64 from, // Period from const INT64 to, // Period to const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
group
[in] The groups for which the positions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
from
[in] The beginning of the period for which you want to receive positions. The date is specified in seconds which have elapsed since 01.01.1970.
to
[in] The end of the period for which you want to receive positions. The date is specified in seconds which have elapsed since 01.01.1970.
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object which described the position request criteria.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which positions received from the database in accordance with the request will be added. The object must be previously created using the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method.
Returned Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases.