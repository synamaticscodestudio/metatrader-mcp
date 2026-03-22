# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ Assign | [](imtdatasetrequest_release.md "Release") [](imtdatasetrequest_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::Assign
Assign a passed object to the current one.
MTAPIRES IMTDatasetRequest::Assign( const IMTDatasetRequest* request // Source object )  
---  
Parameters
request
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.