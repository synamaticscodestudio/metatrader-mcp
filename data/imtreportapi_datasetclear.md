# DatasetClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dataset ](imtreportapi_dataset.md "Data set")/ DatasetClear | [](imtreportapi_datasetappend.md "DatasetAppend") [](imtreportapi_datasetdelete.md "DatasetDelete") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DatasetClear
Delete all data sets from a dashboard.
MTAPIRES IMTReportAPI::DatasetClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After this method call, all previously created data sets ([IMTDataset](imtdataset.md "IMTDataset") objects) are deleted.
The previous name of the method was DashboardDataClear.