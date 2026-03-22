# UserAccountSelect (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserAccountSelect | [](imtreportapi_userselect.md "UserSelect") [](imtreportapi_clientselect.md "ClientSelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserAccountSelect
Request [trading account](imtaccount.md "IMTAccount") from a database according to specified criteria.
MTAPIRES IMTReportAPI::UserAccountSelect( const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object, which describes account request criteria. Use [IMTDatasetField::FIELD_ACCOUNT_*](imtdatasetfield_enum.htm#enfieldtype) fields to create a selection.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which accounts received from the data base in accordance with the request will be added. The object must be previously created using the [IMTReportAPI::DatasetAppend](imtreportapi_datasetappend.md "DatasetAppend") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases for quick report generation.
The method allows requesting data related to any accounts available on the trade server and not only to the accounts which are accessible to the manager generating the report ([IMTConManager::GroupAdd](imtconmanager_groupadd.md "GroupAdd")). If the filter by logins is not explicitly specified ([IMTDatasetField::FIELD_ACCOUNT_LOGIN](imtdatasetfield_enum.htm#enfieldid)), the default method will retrieve only data related to the accounts which the manager has access to.