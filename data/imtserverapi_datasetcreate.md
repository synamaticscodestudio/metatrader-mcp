# DatasetCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Dataset ](serverapi_dataset.md "Dataset")/ DatasetCreate | [](serverapi_dataset.md "Dataset") [](imtserverapi_datasetrequestcreate.md "DatasetRequestCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DatasetCreate
Create a dataset object.
IMTDataset* IMTServerAPI::DatasetCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTDataset](imtdataset.md "IMTDataset") interface. NULL is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTDataset::Release](imtdataset_release.md "Release") method of this object.