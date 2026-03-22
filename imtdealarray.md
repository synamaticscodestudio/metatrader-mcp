# IMTDealArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals")/ IMTDealArray | [](imtdeal_modificationflags.md "ModificationFlags") [](imtdealarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTDealArray
The IMTDealArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdealarray_release.md "Release") | Delete the current object. |
| [Assign](imtdealarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdealarray_clear.md "Clear") | Clear an object. |
| [Add](imtdealarray_add.md "Add") | Add an object of a deal or array of deals at the end of an array. |
| [AddCopy](imtdealarray_addcopy.md "AddCopy") | Add a copy of an object of a deal or array of deals at the end of an array. |
| [Delete](imtdealarray_delete.md "Delete") | Delete an object of a deal by its position. |
| [Detach](imtdealarray_detach.md "Detach") | Detach an object of a deal from an array. |
| [Update](imtdealarray_update.md "Update") | Changes a deal at the specified position of an array. |
| [UpdateCopy](imtdealarray_updatecopy.md "UpdateCopy") | Change a deal at the specified position of an array by copying the parameters of a passed object of a deal. |
| [Shift](imtdealarray_shift.md "Shift") | Change the position of a deal in an array. |
| [Total](imtdealarray_total.md "Total") | Get the number of objects of deals in an array. |
| [Next](imtdealarray_next.md "Next") | Get an object of a deal by its position. |
| [Sort](imtdealarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtdealarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtdealarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtdealarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtdealarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtdealarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtdealarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtdealarray_searchright.md "SearchRight") | Search in an array the first element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtdealarray_add.md "Add"), [updating](imtdealarray_update.md "Update") and [removing](imtdealarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtdealarray_add.md "Add") or [updating](imtdealarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
