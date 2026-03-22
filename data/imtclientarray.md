# IMTClientArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTClientArray | [](imtclient_clientexternalid.md "ClientExternalID") [](imtclientarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTClientArray
The IMTClientArray class is designed for operations with arrays of client records. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtclientarray_release.md "Release") | Delete the current object. |
| [Assign](imtclientarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtclientarray_clear.md "Clear") | Clear an object. |
| [Add](imtclientarray_add.md "Add") | Add a client object or an array of client objects to the end of an array. |
| [AddCopy](imtclientarray_addcopy.md "AddCopy") | Add a copy of a client object or an array of client objects to the end of an array. |
| [Delete](imtclientarray_delete.md "Delete") | Delete a client object by its position. |
| [Detach](imtclientarray_detach.md "Detach") | Detach a client object from an array. |
| [Update](imtclientarray_update.md "Update") | Change a client at the specified position of an array. |
| [UpdateCopy](imtclientarray_updatecopy.md "UpdateCopy") | Change a client at the specified position of an array by copying the parameters of a passed client object. |
| [Shift](imtclientarray_shift.md "Shift") | Change the position of a client in an array. |
| [Total](imtclientarray_total.md "Total") | Get the number of client objects in an array. |
| [Next](imtclientarray_next.md "Next") | Get a client object by its position. |
| [Sort](imtclientarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtclientarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtclientarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtclientarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtclientarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtclientarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtclientarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtclientarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This sets some specific features when [adding](imtclientarray_add.md "Add"), [updating](imtclientarray_update.md "Update") and [deleting](imtclientarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtclientarray_add.md "Add") or [updating](imtclientarray_update.md "Update") an element), because this will lead to a crash during memory release.
