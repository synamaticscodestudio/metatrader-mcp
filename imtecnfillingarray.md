# IMTECNFillingArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNFillingArray | [](imtecnfilling_comment.md "Comment") [](imtecnfillingarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray
The interface enables convenient operations with arrays of filling orders. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnfillingarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnfillingarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnfillingarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnfillingarray_add.md "Add") | Add an object or an array of objects of filling orders to the end of an array. |
| [AddCopy](imtecnfillingarray_addcopy.md "AddCopy") | Add a copy of an object or of an array of objects of filling orders to the end of an array. |
| [Delete](imtecnfillingarray_delete.md "Delete") | Delete a filling order object by its position. |
| [Detach](imtecnfillingarray_detach.md "Detach") | Detach a filling order object from an array. |
| [Update](imtecnfillingarray_update.md "Update") | Update a filling order at the specified array position. |
| [UpdateCopy](imtecnfillingarray_updatecopy.md "UpdateCopy") | Update a filling order at the specified array position by copying parameters of the passed order object. |
| [Shift](imtecnfillingarray_shift.md "Shift") | Change the position of a filling order in the array. |
| [Total](imtecnfillingarray_total.md "Total") | Get the total number of filling orders in the array. |
| [Next](imtecnfillingarray_next.md "Next") | Get the filling order object by its position. |
| [Sort](imtecnfillingarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnfillingarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnfillingarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnfillingarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnfillingarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnfillingarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnfillingarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnfillingarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnfillingarray_add.md "Add"), [updating](imtecnfillingarray_update.md "Update") and [deleting](imtecnfillingarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnfillingarray_add.md "Add") or [updating](imtecnfillingarray_update.md "Update") an element), because this will lead to a crash during memory release.
