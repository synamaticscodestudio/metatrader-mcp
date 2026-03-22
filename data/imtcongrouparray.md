# IMTConGroupArray (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups")/ IMTConGroupArray | [](imtcongroupsymbol_bookdepthlimit.md "BookDepthLimit") [](imtcongrouparray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray
The IMTConGroupArray class contains methods for working with an array of group settings:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcongrouparray_release.md "Release") | Delete the current object. |
| [Assign](imtcongrouparray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcongrouparray_clear.md "Clear") | Clear an object. |
| [Add](imtcongrouparray_add.md "Add") | Add a group object or a group array object to the array end. |
| [AddCopy](imtcongrouparray_addcopy.md "AddCopy") | Add a copy of a group object or of a group array object to the array end. |
| [Delete](imtcongrouparray_delete.md "Delete") | Delete a group object by position. |
| [Detach](imtcongrouparray_detach.md "Detach") | Detach a group object from an array. |
| [Update](imtcongrouparray_update.md "Update") | Update a group at the specified position of an array. |
| [UpdateCopy](imtcongrouparray_updatecopy.md "UpdateCopy") | Update a group at the specified position of an array by copying the parameters of a passed group object. |
| [Shift](imtcongrouparray_shift.md "Shift") | Change the position of a group in an array. |
| [Total](imtcongrouparray_total.md "Total") | Get the number of group objects in an array. |
| [Next](imtcongrouparray_next.md "Next") | Get a group object by position. |
| [Sort](imtcongrouparray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtcongrouparray_search.md "Search") | Search an array for an element that matches the search key. |
| [SearchGreatOrEq](imtcongrouparray_searchgreatoreq.md "SearchGreatOrEq") | Search an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtcongrouparray_searchgreater.md "SearchGreater") | Search an array for the first element greater than the search key. |
| [SearchLessOrEq](imtcongrouparray_searchlessoreq.md "SearchLessOrEq") | Search an array for the first element less than or equal to the search key. |
| [SearchLess](imtcongrouparray_searchless.md "SearchLess") | Search an array for the first element less than the search key. |
| [SearchLeft](imtcongrouparray_searchleft.md "SearchLeft") | Search an array for the first element equal to the search key. |
| [SearchRight](imtcongrouparray_searchright.md "SearchRight") | Search an array for the last element equal to the search key. |

Specific Array Operations
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the appropriate interfaces, not the data itself. This requires some specific behavior [adding](imtcongrouparray_add.md "Add"), [updating](imtcongrouparray_update.md "Update") and [deleting](imtcongrouparray_delete.md "Delete") array elements.
  * Please be sure to never add a link to one and the same object within an array (when [adding](imtcongrouparray_add.md "Add") or [updating](imtcongrouparray_update.md "Update") an element), as this will lead to a crash during memory release.
