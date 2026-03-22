# WhereAddInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddInt | [](imtdatasetfield_flags.md "Flags") [](imtdatasetfield_whereaddintarray.md "WhereAddIntArray") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddInt
Add a selection condition for fields of the [int type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddInt( const INT64 value // Value )  
---  
Parameters
value
Field value of int type. For example, for the [IMTDatasetField::FIELD_USER_LOGIN](imtdatasetfield_enum.htm#enfieldid) field you can specify the value of "1000" to select data on the account with the appropriate login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.