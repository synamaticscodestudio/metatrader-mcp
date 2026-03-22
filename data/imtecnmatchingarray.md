# IMTECNMatchingArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNMatchingArray | [](imtecnmatching_volumecurrentclientext.md "VolumeCurrentClientExt") [](imtecnmatchingarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNMatchingArray
The interface enables convenient operations with arrays of matching orders. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnmatchingarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnmatchingarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnmatchingarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnmatchingarray_add.md "Add") | Add an object or an array of objects of matching orders to the end of an array. |
| [AddCopy](imtecnmatchingarray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of matching orders to the end of an array. |
| [Delete](imtecnmatchingarray_delete.md "Delete") | Delete a matching order object by its position. |
| [Detach](imtecnmatchingarray_detach.md "Detach") | Detach a matching order object from an array. |
| [Update](imtecnmatchingarray_update.md "Update") | Update a matching order at the specified array position. |
| [UpdateCopy](imtecnmatchingarray_updatecopy.md "UpdateCopy") | Update a matching order at the specified array position by copying the parameters of a passed order object. |
| [Shift](imtecnmatchingarray_shift.md "Shift") | Change the position of a matching order in the array. |
| [Total](imtecnmatchingarray_total.md "Total") | Get the number of matching order objects in the array. |
| [Next](imtecnmatchingarray_next.md "Next") | Get a matching order object by its position. |
| [Sort](imtecnmatchingarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnmatchingarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnmatchingarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnmatchingarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnmatchingarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnmatchingarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnmatchingarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnmatchingarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnmatchingarray_add.md "Add"), [updating](imtecnmatchingarray_update.md "Update") and [deleting](imtecnmatchingarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnmatchingarray_add.md "Add") or [updating](imtecnmatchingarray_update.md "Update") an element), because this will lead to a crash during memory release.
