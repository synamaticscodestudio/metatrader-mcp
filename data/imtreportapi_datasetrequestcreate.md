# DatasetRequestCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Dataset ](imtreportapi_dataset.md "Data set")/ DatasetRequestCreate | [](imtreportapi_datasetnext.md "DatasetNext") [](imtreportapi_cache.md "Data cache") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DatasetRequestCreate
Create a data request object.
IMTDatasetRequest* IMTReportAPI::DatasetRequestCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDatasetRequest::Release](imtdatasetrequest_release.md "Release") method of this object.
See [the separate section](reportapi_dataset.htm#request) for more details.