# Release (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ Release | [](imtdataset_enum.md "Enumerations") [](imtdataset_assign.md "Assign") |
| --- | --- | --- |
| --- | --- |

IMTDataset::Release
Delete the current object.
void IMTDataset::Release()  
---  
Note
The method can only be used in [Server API](serverapi.md "Server API"). For Report API, the IMTDataset interface collection is owned by the API object. The collection can be managed using the [IMTReportAPI::Dataset*](imtreportapi_dataset.md "Data set") methods. For Server API, IMTDataset interfaces are owned by the API user. Objects are created using the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method, and they are released using IMTDataset::Release.