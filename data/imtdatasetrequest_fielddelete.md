# FieldDelete (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldDelete | [](imtdatasetrequest_fieldupdate.md "FieldUpdate") [](imtdatasetrequest_fieldclear.md "FieldClear") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldDelete
Delete a field object from the request.
MTAPIRES IMTDatasetRequest::FieldDelete( const UINT pos // Field position )  
---  
Parameters
pos
[in] Field position starting from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A database query is performed as a collection of fields and selection conditions. Use this method to delete a field (optionally with conditions) from the request.