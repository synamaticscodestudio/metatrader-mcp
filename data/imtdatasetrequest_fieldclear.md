# FieldClear (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldClear | [](imtdatasetrequest_fielddelete.md "FieldDelete") [](imtdatasetrequest_fieldshift.md "FieldShift") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldClear
Clear the request description.
MTAPIRES IMTDatasetRequest::FieldClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A database query is performed as a collection of fields and selection conditions. Use this method to delete all fields and conditions from the request.