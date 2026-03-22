# FieldCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldCreate | [](imtdatasetrequest_clear.md "Clear") [](imtdatasetrequest_fieldcreatereference.md "FieldCreateReference") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldCreate
Create a field object.
IMTDatasetField* IMTDatasetRequest::FieldCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTDatasetField](imtdatasetfield.md "IMTDatasetField") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTDatasetField::Release](imtdatasetfield_release.md "Release") method of this object.