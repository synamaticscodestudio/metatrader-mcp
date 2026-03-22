# IMTDailyArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports")/ IMTDailyArray | [](imtdaily_orderget.md "OrderGet") [](imtdailyarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTDailyArray
The IMTConDailyArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdailyarray_release.md "Release") | Delete the current object. |
| [Assign](imtdailyarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdailyarray_clear.md "Clear") | Clear an object. |
| [Add](imtdailyarray_add.md "Add") | Add an object of a daily report or of an array of daily reports at the end of an array. |
| [AddCopy](imtdailyarray_addcopy.md "AddCopy") | Add a copy of an object of a daily report or an array of copies at the end of an array. |
| [Delete](imtdailyarray_delete.md "Delete") | Delete an object of a daily report by its position. |
| [Detach](imtdailyarray_detach.md "Detach") | Detach an object of a daily report from an array. |
| [Update](imtdailyarray_update.md "Update") | Change a daily report at the specified position of an array. |
| [UpdateCopy](imtdailyarray_updatecopy.md "UpdateCopy") | Change a daily report at the specified position of an array by copying the parameters of a passed object of a daily report. |
| [Shift](imtdailyarray_shift.md "Shift") | Change the position of a daily report in an array. |
| [Total](imtdailyarray_total.md "Total") | Get the number of objects of daily reports in an array. |
| [Next](imtdailyarray_next.md "Next") | Get an object of a daily report by its position. |
| [Sort](imtdailyarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtdailyarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtdailyarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtdailyarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtdailyarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtdailyarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtdailyarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtdailyarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtdailyarray_add.md "Add"), [updating](imtdailyarray_update.md "Update") and [removing](imtdailyarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtdailyarray_add.md "Add") or [updating](imtdailyarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
