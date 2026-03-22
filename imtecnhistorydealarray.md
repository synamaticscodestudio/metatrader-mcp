# IMTECNMatchingArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryDealArray | [](imtecnhistorydeal_provider.md "Provider") [](imtecnhistorydealarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray
This interface enables convenient operations with the arrays of [deals](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#deals) performed as a result of order execution at gateways. The interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistorydealarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistorydealarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistorydealarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnhistorydealarray_add.md "Add") | Add a deal object or an array of deal objects to the end of an array. |
| [AddCopy](imtecnhistorydealarray_addcopy.md "AddCopy") | Add a copy of a deal object or of an array of deal objects to the end of an array. |
| [Delete](imtecnhistorydealarray_delete.md "Delete") | Delete a deal object by its position. |
| [Detach](imtecnhistorydealarray_detach.md "Detach") | Detach a deal object from an array. |
| [Update](imtecnhistorydealarray_update.md "Update") | Change a deal at the specified position of an array. |
| [UpdateCopy](imtecnhistorydealarray_updatecopy.md "UpdateCopy") | Change a deal at the specified position of an array by copying the parameters of a passed deal object. |
| [Shift](imtecnhistorydealarray_shift.md "Shift") | Change the position of a deal in an array. |
| [Total](imtecnhistorydealarray_total.md "Total") | Get the number of deal objects in an array. |
| [Next](imtecnhistorydealarray_next.md "Next") | Get a deal object by its position. |
| [Sort](imtecnhistorydealarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnhistorydealarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnhistorydealarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnhistorydealarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnhistorydealarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnhistorydealarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnhistorydealarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnhistorydealarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnhistorydealarray_add.md "Add"), [updating](imtecnhistorydealarray_update.md "Update") and [deleting](imtecnhistorydealarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnhistorydealarray_add.md "Add") or [updating](imtecnhistorydealarray_update.md "Update") an element), because this will lead to a crash during memory release.
