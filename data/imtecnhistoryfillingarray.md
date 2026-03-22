# IMTECNFillingArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryFillingArray | [](imtecnhistoryfilling_comment.md "Comment") [](imtecnhistoryfillingarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray
The interface enables convenient operations with arrays of filling orders in history. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistoryfillingarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistoryfillingarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistoryfillingarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnhistoryfillingarray_add.md "Add") | Add an object or an array of objects of filling orders to the end of an array. |
| [AddCopy](imtecnhistoryfillingarray_addcopy.md "AddCopy") | Add a copy of an object or of an array of objects of filling orders to the end of an array. |
| [Delete](imtecnhistoryfillingarray_delete.md "Delete") | Delete a filling order object by its position. |
| [Detach](imtecnhistoryfillingarray_detach.md "Detach") | Detach a filling order object from an array. |
| [Update](imtecnhistoryfillingarray_update.md "Update") | Update a filling order at the specified array position. |
| [UpdateCopy](imtecnhistoryfillingarray_updatecopy.md "UpdateCopy") | Update a filling order at the specified array position by copying parameters of the passed order object. |
| [Shift](imtecnhistoryfillingarray_shift.md "Shift") | Change the position of a filling order in the array. |
| [Total](imtecnhistoryfillingarray_total.md "Total") | Get the total number of filling orders in the array. |
| [Next](imtecnhistoryfillingarray_next.md "Next") | Get the filling order object by its position. |
| [Sort](imtecnhistoryfillingarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnhistoryfillingarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnhistoryfillingarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnhistoryfillingarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnhistoryfillingarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnhistoryfillingarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnhistoryfillingarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnhistoryfillingarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnhistoryfillingarray_add.md "Add"), [updating](imtecnhistoryfillingarray_update.md "Update") and [deleting](imtecnhistoryfillingarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnhistoryfillingarray_add.md "Add") or [updating](imtecnhistoryfillingarray_update.md "Update") an element), because this will lead to a crash during memory release.
