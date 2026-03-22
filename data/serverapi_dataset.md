# Dataset (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Dataset | [](imtserverapi_georesolveipv6bulk.md "GeoResolveIPv6Bulk") [](imtserverapi_datasetcreate.md "DatasetCreate") |
| --- | --- | --- |
| --- | --- |

Dataset
The Server API enables highly efficient queries to the trading platform databases, with the flexible description of selection conditions (similar to SQL queries). The following two interfaces are provided for working with requests: [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") is used for describing conditions; [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") is used for describing a request as a set of conditions.
To request data perform the following steps:
  1. Use the [IMTServerAPI::DatasetRequestCreate](imtserverapi_datasetrequestcreate.md "DatasetRequestCreate") method to create a data request object ([IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest")).
  2. Use the [IMTServerAPI::DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") method to create a dataset object to which the request results will be placed ([IMTDataset](imtdataset.md "IMTDataset"))
  3. Use the [IMTDatasetRequest::FieldCreate](imtdatasetrequest_fieldcreate.md "FieldCreate") method to create the object of the field for which you wish to request data ([IMTDatasetField](imtdatasetfield.md "IMTDatasetField")).
  4. Describe a request condition using [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") methods and add it to the request object using the [IMTDatasetRequest::FieldAdd](imtdatasetrequest_fieldadd.md "FieldAdd") method.
  5. If you need to specify multiple conditions, repeat steps 3 and 4.
  6. Depending on the database from which you wish to query data, call [IMTServerAPI::OrderSelect*](imtserverapi_orderselectbygroup.md "OrderSelectByGroup"), [IMTServerAPI::HistorySelect*](imtserverapi_historyselectbygroup.md "HistorySelectByGroup"), [IMTServerAPI::DealSelect*](imtserverapi_dealselectbygroup.md "DealSelectByGroup") or [IMTServerAPI::DailySelect*](imtserverapi_dailyselectbygroup.md "DailySelectByGroup"), by passing the prepared request object to it ([IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest")).
  7. The request result will be added to the earlier created dataset object ([IMTDataset](imtdataset.md "IMTDataset")). Note that only fields marked as selected ([IMTDatasetField::FLAG_SELECT](imtdatasetfield_enum.htm#enfieldflags)) are added to the resulting dataset.

The following methods are provided for operations with datasets in Server API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [DatasetCreate](imtserverapi_datasetcreate.md "DatasetCreate") | Create a dataset object. |
| [DatasetRequestCreate](imtreportapi_datasetrequestcreate.md "DatasetRequestCreate") | Create a data request object. |