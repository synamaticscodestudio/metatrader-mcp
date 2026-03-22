# IMTRequestArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests")/ IMTRequestArray | [](imtrequest_apidataclearall.md "ApiDataClearAll") [](imtrequestarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray
The IMTRequestArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtrequestarray_release.md "Release") | Delete the current object. |
| [Assign](imtrequestarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtrequestarray_clear.md "Clear") | Clear an object. |
| [Add](imtrequestarray_add.md "Add") | Add an object of a trade request or array of requests at the end of an array. |
| [AddCopy](imtrequestarray_addcopy.md "AddCopy") | Add a copy of an object of a trade request or array of requests at the end of an array. |
| [Delete](imtrequestarray_delete.md "Delete") | Delete a trade request by its index. |
| [Detach](imtrequestarray_detach.md "Detach") | Detach an object of a trade request from an array. |
| [Update](imtrequestarray_update.md "Update") | Change a trade request at the specified position of an array. |
| [UpdateCopy](imtrequestarray_updatecopy.md "UpdateCopy") | Change a trade request at the specified position of an array by copying the parameters of a passed object of a trade request. |
| [Shift](imtrequestarray_shift.md "Shift") | Change the position of a trade request in an array. |
| [Total](imtrequestarray_total.md "Total") | Get the number of objects of trade requests in an array. |
| [Next](imtrequestarray_next.md "Next") | Get a trade request by its index. |
| [Sort](imtrequestarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtrequestarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtrequestarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreat](imtrequestarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtrequestarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtrequestarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtrequestarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtrequestarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtrequestarray_add.md "Add"), [updating](imtrequestarray_update.md "Update") and [removing](imtrequestarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtrequestarray_add.md "Add") or [updating](imtrequestarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
