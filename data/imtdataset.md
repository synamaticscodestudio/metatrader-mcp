# IMTDataset (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces")/ IMTDataset | [](reportapi_dataset.md "Dataset Interfaces") [](imtdataset_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTDataset
The IMTDataset interface is designed to work with dashboard data: columns, rows and final values. These data can be displayed in the widget as a graph and/or a table. It contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdataset_release.md "Release") | Delete the current object. |
| [Assign](imtdataset_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdataset_clear.md "Clear") | Clear an object. |
| [Flags](imtdataset_flags.md "Flags") | Get and set data set flags. |
| [ColumnCreate](imtdataset_columncreate.md "ColumnCreate") | Create a column object. |
| [ColumnClear](imtdataset_columnclear.md "ColumnClear") | Clear table columns description. |
| [ColumnAdd](imtdataset_columnadd.md "ColumnAdd") | Add a column description to a table end. |
| [ColumnDelete](imtdataset_columndelete.md "ColumnDelete") | Delete a column description from a table by index. |
| [ColumnTotal](imtdataset_columntotal.md "ColumnTotal") | Get a number of columns in a table. |
| [ColumnSize](imtdataset_columnsize.md "ColumnSize") | Get a total size of one table row in bytes. |
| [ColumnNext](imtdataset_columnnext.md "ColumnNext") | Get a column description by index. |
| [RowClear](imtdataset_rowclear.md "RowClear") | Delete the contents of a whole table. |
| [RowWrite](imtdataset_rowwrite.md "RowWrite") | Add (output) one record to a table. |
| [RowTotal](imtdataset_rowtotal.md "RowTotal") | Get the number of rows in a table. |
| [SummaryCreate](imtdataset_summarycreate.md "SummaryCreate") | Create an object of a totals row cell. |
| [SummaryClear](imtdataset_summaryclear.md "SummaryClear") | Clear all total records. |
| [SummaryAdd](imtdataset_summaryadd.md "SummaryAdd") | Add a totals row cell into a table. |
| [SummaryDelete](imtdataset_summarydelete.md "SummaryDelete") | Delete a cell in a table totals row by its index. |
| [SummaryNext](imtdataset_summarynext.md "SummaryNext") | Get the cells of a table totals row by its index. |
| [SummaryTotal](imtdataset_summarytotal.md "SummaryTotal") | Get the total amount of totals cells in a table. |

The IMTDataset interface contains the following enumerations:
| Interface | Purpose |
| --- | --- |
| --- | --- |
| [EnDataSetFlags](imtdataset_enum.htm#endatasetflags) | Data set flags. |

In earlier MetaTrader 5 API versions, the IMTDataset interface was called IMTReportDashboardData.  
---