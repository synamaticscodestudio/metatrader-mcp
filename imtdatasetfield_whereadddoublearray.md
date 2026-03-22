# WhereAddDoubleArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddDoubleArray | [](imtdatasetfield_whereadddouble.md "WhereAddDouble") [](imtdatasetfield_whereaddstring.md "WhereAddString") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddDoubleArray
Add an array of selection conditions for fields of the [double type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddDoubleArray( const double* values, // Array of values const UINT values_total // Number of values )  
---  
Parameters
values
An array of field values of the double type. For example, for the [IMTDatasetField::FIELD_DEAL_PRICE_SL](imtdatasetfield_enum.htm#enfieldid) field you can specify "1.31689, 1.31690" to select data on deals having the appropriate Stop Loss levels.
values_total
Number of values in the 'values' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.