# FieldNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldNext | [](imtdatasetrequest_fieldtotal.md "FieldTotal") [](imtdatasetcolumn.md "IMTDatasetColumn") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldNext
Get a field description in a request based on its index.
MTAPIRES IMTDatasetRequest::FieldNext( const UINT pos,  IMTDatasetField *field )  
---  
Parameters
pos
[in] Field position starting from 0.
field
[in] [Field description object](imtdatasetfield.md "IMTDatasetField"). The object must be previously created using the [IMTDatasetRequest::FieldCreate](imtdatasetrequest_fieldcreate.md "FieldCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A database query is performed as a collection of fields and selection conditions. Use this method to receive request field description (optionally with conditions).