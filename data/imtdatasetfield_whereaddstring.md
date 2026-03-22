# WhereAddString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddString | [](imtdatasetfield_whereadddoublearray.md "WhereAddDoubleArray") [](imtdatasetfield_whereaddstringarray.md "WhereAddStringArray") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddString
Add a selection condition for fields of the [string type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddString( LPCWSTR value // Value )  
---  
Parameters
value
Field value of string type. For example, for the [IMTDatasetField::FIELD_USER_GROUP](imtdatasetfield_enum.htm#enfieldid) field you can specify "demo\forex-usd" to select data on accounts from the corresponding group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.