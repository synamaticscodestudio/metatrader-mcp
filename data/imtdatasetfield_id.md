# Id (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Id | [](imtdatasetfield_clear.md "Clear") [](imtdatasetfield_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Id
Get the field ID.
UINT IMTDatasetField::Id() const  
---  
Return Value
A value from [IMTDatasetField::EnFieldId](imtdatasetfield_enum.htm#enfieldid).
Note
The identifier determines the type of information stored in the field: a certain property of a trading account, client or deal.
IMTDatasetField::Id
Set the field ID.
MTAPIRES IMTDatasetField::Id( const UINT id // Field ID )  
---  
Parameters
id
[in] Field identifier. The ID value is passed using the [IMTDatasetField::EnFieldId](imtdatasetfield_enum.htm#enfieldid) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The identifier determines the type of information stored in the field: a certain property of a trading account, client or deal.