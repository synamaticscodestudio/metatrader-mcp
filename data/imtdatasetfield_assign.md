# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Assign | [](imtdatasetfield_release.md "Release") [](imtdatasetfield_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Assign
Assign a passed object to the current one.
MTAPIRES IMTDatasetField::Assign( const IMTDatasetField* field // Source object )  
---  
Parameters
field
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.