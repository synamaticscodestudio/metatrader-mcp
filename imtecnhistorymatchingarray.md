# IMTECNMatchingArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryMatchingArray | [](imtecnhistorymatching_volumecurrentclientext.md "VolumeCurrentClientExt") [](imtecnhistorymatchingarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray
The interface enables convenient operations with arrays of matching orders from the history. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistorymatchingarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistorymatchingarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistorymatchingarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnhistorymatchingarray_add.md "Add") | Add an object or an array of objects of matching orders to the end of an array. |
| [AddCopy](imtecnhistorymatchingarray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of matching orders to the end of an array. |
| [Delete](imtecnhistorymatchingarray_delete.md "Delete") | Delete a matching order object by its position. |
| [Detach](imtecnhistorymatchingarray_detach.md "Detach") | Detach a matching order object from an array. |
| [Update](imtecnhistorymatchingarray_update.md "Update") | Update a matching order at the specified array position. |
| [UpdateCopy](imtecnhistorymatchingarray_updatecopy.md "UpdateCopy") | Update a matching order at the specified array position by copying the parameters of a passed order object. |
| [Shift](imtecnhistorymatchingarray_shift.md "Shift") | Change the position of a matching order in the array. |
| [Total](imtecnhistorymatchingarray_total.md "Total") | Get the number of matching order objects in the array. |
| [Next](imtecnhistorymatchingarray_next.md "Next") | Get a matching order object by its position. |
| [Sort](imtecnhistorymatchingarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnhistorymatchingarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnhistorymatchingarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnhistorymatchingarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnhistorymatchingarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnhistorymatchingarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnhistorymatchingarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnhistorymatchingarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnhistorymatchingarray_add.md "Add"), [updating](imtecnhistorymatchingarray_update.md "Update") and [deleting](imtecnhistorymatchingarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnhistorymatchingarray_add.md "Add") or [updating](imtecnhistorymatchingarray_update.md "Update") an element), because this will lead to a crash during memory release.
