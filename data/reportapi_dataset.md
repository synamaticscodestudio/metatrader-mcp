# Dataset Interfaces (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Dataset Interfaces | [](imtreportchart_seriesnext.md "SeriesNext") [](imtdataset.md "IMTDataset") |
| --- | --- | --- |
| --- | --- |

Dataset interfaces
The interfaces described in this section are used for preparing source data for creating [dashboards](reportapi_dashboards.md "Dashboards") and [tabular reports](reportapi_tables.md "Tabular Reports"). Data in a set is stored as a table with a set of columns and rows and a special summary row.
The following interfaces are provided for managing data sets:
  * [IMTDataset](imtdataset.md "IMTDataset") — description of a data set which consists of rows and columns.
  * [IMTDatasetColumn](imtdatasetcolumn.md "IMTDatasetColumn") — description of a column in a data set.
  * [IMTDatasetSummary](imtdatasetsummary.md "IMTDatasetSummary") — description of a summary row in a data set.

Highly efficient requests for information from databases
The Report API enables highly efficient queries to the trading platform databases, with the flexible description of selection conditions (similar to SQL queries). Two interfaces are provided for operations with data requests: [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") for describing conditions, [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") for describing a request as a set of conditions.
To request data perform the following steps:
  1. Use the [IMTReprotAPI::DatasetRequestCreate](imtreportapi_datasetrequestcreate.md "DatasetRequestCreate") method to create a data request object ([IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest")).
  2. Use [IMTReportAPI::DatasetAppend](imtreportapi_datasetappend.md "DatasetAppend") to create an object of a data set to which the query results will be added ([IMTDataset](imtdataset.md "IMTDataset"))
  3. Use [IMTDatasetRequest::FieldCreate](imtdatasetrequest_fieldcreate.md "FieldCreate") to create the object of a field data for which will be requested ([IMTDatasetField](reportapi_dataset.md "Dataset Interfaces")).
  4. Describe the request condition using [IMTDatasetField](reportapi_dataset.md "Dataset Interfaces") methods and add it to the request object using the [IMTDatasetRequest::FieldAdd](imtdatasetrequest_fieldadd.md "FieldAdd") method.
  5. If you need to specify multiple conditions, repeat steps 3 and 4.
  6. Depending on the database from which you want to request data, call [IMTReportAPI::UserSelect](imtreportapi_userselect.md "UserSelect"), [IMTReportAPI::ClientSelect](imtreportapi_clientselect.md "ClientSelect") or [IMTReportAPI::DealSelect](imtreportapi_dealselect.md "DealSelect"), while passing to it the prepared request object ([IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest")).
  7. The request result will be added to the previously created data set object ([IMTDataset](imtdataset.md "IMTDataset")). Note that only fields marked as selected ([IMTDatasetField::FLAG_SELECT](imtdatasetfield_enum.htm#enfieldflags)) are added to the resulting data set.

Data request examples are provided in the source code of the Capital report, which is available in "[Report API installation directory]\Report\Examples\Capital.Standard.Reports".