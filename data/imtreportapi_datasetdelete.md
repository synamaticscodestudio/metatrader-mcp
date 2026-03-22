# DatasetDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dataset ](imtreportapi_dataset.md "Data set")/ DatasetDelete | [](imtreportapi_datasetclear.md "DatasetClear") [](imtreportapi_datasettotal.md "DatasetTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DatasetDelete
Delete a data set from a dashboard.
MTAPIRES IMTReportAPI::DatasetDelete( const UINT pos // data set position )  
---  
Parameters
pos
[in] Data set position to be removed beginning with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The previous name of the method was DashboardDataDelete.