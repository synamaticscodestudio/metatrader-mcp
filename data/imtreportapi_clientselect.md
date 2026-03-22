# ClientSelect (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ ClientSelect | [](imtreportapi_useraccountselect.md "UserAccountSelect") [](imtreportapi_trade.md "Trade Database Functions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientSelect
Request clients from a database according to specified criteria.
MTAPIRES IMTReportAPI::UserSelect( const IMTDatasetRequest* request, // Request description IMTDataset* dataset // Data set )  
---  
Parameters
request
[in] The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") object, which describes client request criteria.
dataset
[out] The [IMTDataset](imtdataset.md "IMTDataset") object to which clients received from the data base in accordance with the request will be added. The object must be previously created using the [IMTReportAPI::DatasetAppend](imtreportapi_datasetappend.md "DatasetAppend") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method enables highly efficient sampling of relevant databases for quick report generation.