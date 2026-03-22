# IMTUserArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users")/ IMTUserArray | [](imtuser_externalaccountget.md "ExternalAccountGet") [](imtuserarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTUserArray
The IMTUserArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtuserarray_release.md "Release") | Delete the current object. |
| [Assign](imtuserarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtuserarray_clear.md "Clear") | Clear an object. |
| [Add](imtuserarray_add.md "Add") | Add an object or an array of objects of client records at the end of an array. |
| [AddCopy](imtuserarray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of client records at the end of an array. |
| [Delete](imtuserarray_delete.md "Delete") | Delete a client record object by its position. |
| [Detach](imtuserarray_detach.md "Detach") | Detach a client record object from an array. |
| [Update](imtuserarray_update.md "Update") | Change a client record at the specified position of an array. |
| [UpdateCopy](imtuserarray_updatecopy.md "UpdateCopy") | Change a client record at the specified position of an array by copying the parameters of a passed object of a client record. |
| [Shift](imtuserarray_shift.md "Shift") | Change the position of a client record in an array. |
| [Total](imtuserarray_total.md "Total") | Get the number of client record objects in an array. |
| [Next](imtuserarray_next.md "Next") | Get a client record object by its position. |
| [Sort](imtuserarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtuserarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtuserarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtuserarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtuserarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtuserarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtuserarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtuserarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtuserarray_add.md "Add"), [updating](imtuserarray_update.md "Update") and [removing](imtuserarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtuserarray_add.md "Add") or [updating](imtuserarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
