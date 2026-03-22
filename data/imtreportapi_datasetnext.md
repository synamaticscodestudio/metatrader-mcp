# DatasetNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dataset ](imtreportapi_dataset.md "Data set")/ DatasetNext | [](imtreportapi_datasettotal.md "DatasetTotal") [](imtreportapi_datasetrequestcreate.md "DatasetRequestCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DatasetNext
Get the data set description based in the index.
IMTDataset* IMTReportAPI::DatasetNext( const UINT pos // data set position )  
---  
Parameters
pos
[in] Data set position starting with 0.
Return Value
Pointer to the [IMTDataset](imtdataset.md "IMTDataset") tabular data set object.
Note
The previous name of the method was DashboardDataNext.