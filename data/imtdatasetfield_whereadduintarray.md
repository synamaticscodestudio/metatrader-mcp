# WhereAddUIntArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddUIntArray | [](imtdatasetfield_whereadduint.md "WhereAddUInt") [](imtdatasetfield_whereadddouble.md "WhereAddDouble") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddUIntArray
Add an array of selection conditions for fields of the [uint type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddUIntArray( const UINT64* values, // Array of values const UINT values_total // Number of values )  
---  
Parameters
values
An array of uint field values. For example, for the [IMTDatasetField::FIELD_CLIENT_TYPE](imtdatasetfield_enum.htm#enfieldid) field you can specify the value of "IMTDatasetField::CLIENT_TYPE_INDIVIDUAL,IMTDatasetField::CLIENT_TYPE_CORPORATE" to select data on private and corporate clients.
values_total
Number of values in the 'values' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.