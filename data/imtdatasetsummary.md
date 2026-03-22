# IMTDatasetSummary (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces")/ IMTDatasetSummary | [](imtdatasetcolumn_size.md "Size") [](imtdatasetsummary_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary
The IMTDatasetSummary interface is used for working with a table summary row. It contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdatasetsummary_release.md "Release") | Delete the current object. |
| [Assign](imtdatasetsummary_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdatasetsummary_clear.md "Clear") | Clear an object. |
| [ColumnID](imtdatasetsummary_columnid.md "ColumnID") | Get and set the ID of the column, under which a summary is specified. |
| [Line](imtdatasetsummary_line.md "Line") | Get and set the number of the row, at which a summary cell is displayed. |
| [MergeColumn](imtdatasetsummary_mergecolumn.md "MergeColumn") | Get and set the ID of the column, to which the joining of summary cells is performed. |
| [Color](imtdatasetsummary_color.md "Color") | Get and set a text color in a summary cell. |
| [Flags](imtdatasetsummary_flags.md "Flags") | Get and set summary cell flags. |
| [Type](imtdatasetsummary_type.md "Type") | Get a data type in a summary cell. |
| [Digits](imtdatasetsummary_digits.md "Digits") | Get and set the number of decimal places for formatting the value shown in a cell. |
| [ValueInt](imtdatasetsummary_valueint.md "ValueInt") | Get and set an integer cell value. |
| [ValueUInt](imtdatasetsummary_valueuint.md "ValueUInt") | Get and set an unsigned integer cell value. |
| [ValueDouble](imtdatasetsummary_valuedouble.md "ValueDouble") | Get and set the value of a double type cell. |
| [ValueMoney](imtdatasetsummary_valuemoney.md "ValueMoney") | Get and set a summary cell monetary value. |
| [ValueString](imtdatasetsummary_valuestring.md "ValueString") | Get and set a summary cell string value. |
| [ValueDate](imtdatasetsummary_valuedate.md "ValueDate") | Get and set a summary cell value of the date type. |
| [ValueTime](imtdatasetsummary_valuetime.md "ValueTime") | Get and set a summary cell value of the time type. |
| [ValueDateTime](imtdatasetsummary_valuedatetime.md "ValueDateTime") | Get and set a summary cell value of the datetime type. |
| [ValuePrice](imtdatasetsummary_valueprice.md "ValuePrice") | Get and set a summary cell price value. |
| [ValuePricesBid](imtdatasetsummary_valuepricesbid.md "ValuePricesBid") | Get a previously set Bid price value in a summary cell. |
| [ValuePricesAsk](imtdatasetsummary_valuepricesask.md "ValuePricesAsk") | Get a previously set Ask price value in a summary cell. |
| [ValuePrices](imtdatasetsummary_valueprices.md "ValuePrices") | Set Bid and Ask prices values in a summary cell. |
| [ValueVolume](imtdatasetsummary_valuevolume.md "ValueVolume") | Get and set a volume value in a summary cell. |
| [ValueVolumeInitial](imtdatasetsummary_valuevolumeinitial.md "ValueVolumeInitial") | Get a previously set initial volume value in a summary cell. |
| [ValueVolumeCurrent](imtdatasetsummary_valuevolumecurrent.md "ValueVolumeCurrent") | Get a previously set current (unexecuted) volume value in a summary cell. |

The IMTDatasetSummary interface contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnType](imtdatasetsummary_enum.htm#entype) | Types of values in a summary row. |
| [EnFlags](imtdatasetsummary_enum.htm#enflags) | Summary row flags. |

In earlier MetaTrader 5 API versions, the IMTDatasetSummary interface was called IMTReportSummary.  
---