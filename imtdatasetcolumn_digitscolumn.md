# DigitsColumn (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ DigitsColumn | [](imtdatasetcolumn_digits.md "Digits") [](imtdatasetcolumn_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::DigitsColumn
Get the ID of the column describing the number of decimal places, according to which the value in the current column must be formatted.
UINT IMTDatasetColumn::DigitsColumn() const  
---  
Return Value
The ID of the column describing the number of decimal places after the decimal point.
Note
In case the column is not specified, the [IMTDatasetColumn::Digits](imtdatasetcolumn_digits.md "Digits") value is used during a display.
IMTDatasetColumn::DigitsColumn
Set the ID of the column describing the number of decimal places, according to which the value in the current column must be formatted.
MTAPIRES IMTDatasetColumn::DigitsColumn( const UINT column_id // Column ID )  
---  
Parameters
column_id
[in] The ID of the column describing the number of decimal places after the decimal point.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
In case the column is not specified, the [IMTDatasetColumn::Digits](imtdatasetcolumn_digits.md "Digits") value is used during a display.