# DatasetRequestCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Dataset ](serverapi_dataset.md "Dataset")/ DatasetRequestCreate | [](imtserverapi_datasetcreate.md "DatasetCreate") [](serverapi_custom.md "Custom Functions") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DatasetRequestCreate
Create a data request object.
IMTDatasetRequest* IMTServerAPI::DatasetRequestCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDatasetRequest::Release](imtdatasetrequest_release.md "Release") method of this object.