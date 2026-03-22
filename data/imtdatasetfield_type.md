# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Type | [](imtdatasetfield_id.md "Id") [](imtdatasetfield_offset.md "Offset") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Type
Get the field type.
UINT IMTDatasetField::Type() const  
---  
Return Value
A value from [IMTDatasetField::EnFieldType](imtdatasetfield_enum.htm#enfieldtype).
Note
Depending on the field type, the corresponding method should be used to set selection condition, [IMTDatasetField::Where*](imtdatasetfield_whereaddint.md "WhereAddInt") or [IMTDatasetField::Between*](imtdatasetfield_betweenint.md "BetweenInt").