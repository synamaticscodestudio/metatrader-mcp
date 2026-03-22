# FieldShift (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldShift | [](imtdatasetrequest_fieldclear.md "FieldClear") [](imtdatasetrequest_fieldtotal.md "FieldTotal") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldShift
Change the position of the [field description](imtdatasetfield.md "IMTDatasetField") in the request.
MTAPIRES IMTDatasetRequest::FieldShift( const UINT pos,  const int shift )  
---  
pos
[in] Field position starting from 0.
shift
[in] Field shift relative to its current position. A negative value means the shift to the top, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The order of fields in a request determines the order of filtering by these fields when performing a database query.
The request field is added to the resulting data set if the [IMTDatasetField::FLAG_SELECT](imtdatasetfield_enum.htm#enfieldflags) is used.