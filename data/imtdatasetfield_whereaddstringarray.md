# WhereAddStringArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddStringArray | [](imtdatasetfield_whereaddstring.md "WhereAddString") [](imtdatasetfield_betweenint.md "BetweenInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddStringArray
Add an array of selection conditions for fields of the [string type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddStringArray( LPCWSTR* values, // Array of values const UINT values_total // Number of values )  
---  
Parameters
values
An array of string field values. For example, for the [IMTDatasetField::FIELD_USER_GROUP](imtdatasetfield_enum.htm#enfieldid) field you can specify "demo\forex-usd,demo\forex-eur" to select data on accounts from the corresponding groups.
values_total
Number of values in the 'values' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.