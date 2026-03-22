# WhereAddUInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddUInt | [](imtdatasetfield_whereaddintarray.md "WhereAddIntArray") [](imtdatasetfield_whereadduintarray.md "WhereAddUIntArray") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddUInt
Add a selection condition for fields of the [string uint](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddUInt( const UINT64 value // Value )  
---  
Parameters
value
Field value of uint type. For example, for the [IMTDatasetField::FIELD_CLIENT_TYPE](imtdatasetfield_enum.htm#enfieldid) field you can specify the value of "IMTDatasetField::CLIENT_TYPE_INDIVIDUAL" to select data on private clients.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.