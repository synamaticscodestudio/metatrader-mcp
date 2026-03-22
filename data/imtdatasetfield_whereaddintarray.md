# WhereAddIntArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddIntArray | [](imtdatasetfield_whereaddint.md "WhereAddInt") [](imtdatasetfield_whereadduint.md "WhereAddUInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddIntArray
Add an array of selection conditions for fields of the [int type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddIntArray( const INT64* values, // Array of values const UINT values_total // Number of values )  
---  
Parameters
values
An array of int field values. For example, for the [IMTDatasetField::FIELD_USER_LOGIN](imtdatasetfield_enum.htm#enfieldid) field you can specify "1000,1001,1003" to select data on account with corresponding login numbers.
values_total
Number of values in the 'values' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.