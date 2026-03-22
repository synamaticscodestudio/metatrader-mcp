# WhereAddDouble (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ WhereAddDouble | [](imtdatasetfield_whereadduintarray.md "WhereAddUIntArray") [](imtdatasetfield_whereadddoublearray.md "WhereAddDoubleArray") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::WhereAddDouble
Add a selection condition for fields of the [double type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::WhereAddDouble( const double value // Value )  
---  
Parameters
value
Field value of double type. For example, for the [IMTDatasetField::FIELD_DEAL_PRICE_SL](imtdatasetfield_enum.htm#enfieldid) field you can specify "1.31689" to select data on deals having the appropriate Stop Loss level.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.