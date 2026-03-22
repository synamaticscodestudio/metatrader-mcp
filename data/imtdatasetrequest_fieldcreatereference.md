# FieldCreateReference (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldCreateReference | [](imtdatasetrequest_fieldcreate.md "FieldCreate") [](imtdatasetrequest_fieldadd.md "FieldAdd") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldCreateReference
Create a reference to the object of the field at the specified position.
IMTDatasetField* IMTDatasetRequest::FieldCreateReference( const UINT pos // Field position )  
---  
Parameters
pos
[in] Field position starting from 0.
Return Value
Returns a pointer to the object which implements the [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") interface.
Note
The [IMTDatasetRequest](imtdatasetrequest.md "IMTDatasetRequest") request contains an array of [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") fields. These fields can be quite large as they can contain arrays of parameters ([IMTDatasetField::WhereAdd*Array](imtdatasetfield_whereaddintarray.md "WhereAddIntArray")). When the fields are updated via the [IMTDatasetRequest::FieldUpdate](imtdatasetrequest_fieldupdate.md "FieldUpdate") method, the relevant data is copied. Therefore, frequent updating of large fields requires a lot of resources. By using the new method, you can update large query fields by reference without unnecessary copying.