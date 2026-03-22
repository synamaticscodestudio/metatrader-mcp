# FieldUpdate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldUpdate | [](imtdatasetrequest_fieldadd.md "FieldAdd") [](imtdatasetrequest_fielddelete.md "FieldDelete") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldUpdate
Change a field object in the request.
MTAPIRES IMTDatasetRequest::FieldUpdate( const UINT pos, // Field position const IMTDatasetField* field // Field object )  
---  
Parameters
pos
[in] Field position starting from 0.
field
[in] [Fields description object](imtdatasetfield.md "IMTDatasetField").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A database query is performed as a collection of fields and selection conditions. Use this method to change a field (optionally with conditions) in a request.
The request field is added to the resulting data set if the [IMTDatasetField::FLAG_SELECT](imtdatasetfield_enum.htm#enfieldflags) is used.