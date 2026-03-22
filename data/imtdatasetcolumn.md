# IMTDatasetColumn (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces")/ IMTDatasetColumn | [](imtdatasetrequest_fieldnext.md "FieldNext") [](imtdatasetcolumn_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn
The IMTDatasetColumn interface is used for working with a table columns. It contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdatasetcolumn_release.md "Release") | Delete the current object. |
| [Assign](imtdatasetcolumn_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdatasetcolumn_clear.md "Clear") | Clear an object. |
| [Name](imtdatasetcolumn_name.md "Name") | Get and set a column name shown in the manager terminal. |
| [ColumnID](imtdatasetcolumn_columnid.md "ColumnID") | Get and set the column ID. |
| [Type](imtdatasetcolumn_type.md "Type") | Get and set the column type. |
| [Width](imtdatasetcolumn_width.md "Width") | Get and set the column relative width, while displaying in the manager terminal. |
| [WidthMax](imtdatasetcolumn_widthmax.md "WidthMax") | Get and set the maximum size of a column in pixels. |
| [Digits](imtdatasetcolumn_digits.md "Digits") | Get and set the number of decimal places by default for values in a column. |
| [DigitsColumn](imtdatasetcolumn_digitscolumn.md "DigitsColumn") | Get and set the ID of the column describing the number of decimal places, according to which the value in the current column must be formatted. |
| [Flags](imtdatasetcolumn_flags.md "Flags") | Get and set column flags. |
| [Offset](imtdatasetcolumn_offset.md "Offset") | Get and set the shift inside the one entry specifying the beginning of a column data. |
| [Size](imtdatasetcolumn_size.md "Size") | Get and set the size of the column data in bytes. |

The IMTDatasetColumn interface contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnType](imtdatasetcolumn_enum.htm#entype) | Types of values in a column. |
| [EnFlags](imtdatasetcolumn_enum.htm#enflags) | Column display flags. |

In earlier MetaTrader 5 API versions, the IMTDatasetColumn interface was called IMTReportColumn.  
---