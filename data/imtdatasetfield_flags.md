# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Flags | [](imtdatasetfield_size.md "Size") [](imtdatasetfield_whereaddint.md "WhereAddInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Flags
Get the field flags.
UINT64 IMTDatasetColumn::Flags() const  
---  
Return Value
A value of the [IMTDataseField::EnFieldFlags](imtdatasetfield_enum.htm#enfieldflags) enumeration.
IMTDatasetField::Flags
Set the field flags.
MTAPIRES IMTDatasetColumn::Flags( const UINT64 flags // Field flags )  
---  
Parameters
flags
[in] Field flags. The [IMTDatasetField::EnFieldFlags](imtdatasetfield_enum.htm#enfieldflags) enumeration is used to pass flags.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.