# IMTECNProviderArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNProviderArray | [](imtecnprovider_version.md "Version") [](imtecnproviderarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray
The interface enables convenient operations with arrays of providers. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnproviderarray_release.md "Release") | Delete the current object. |
| [Assign](imtecnproviderarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnproviderarray_clear.md "Clear") | Clear an object. |
| [Add](imtecnproviderarray_add.md "Add") | Add a provider object or an array of provider objects to the end of an array. |
| [AddCopy](imtecnproviderarray_addcopy.md "AddCopy") | Add a copy of a provider object or of an array of provider objects to the end of an array. |
| [Delete](imtecnproviderarray_delete.md "Delete") | Delete a provider object by its position. |
| [Detach](imtecnproviderarray_detach.md "Detach") | Detach a provider object from an array. |
| [Update](imtecnproviderarray_update.md "Update") | Update a provider at the specified position of an array. |
| [UpdateCopy](imtecnproviderarray_updatecopy.md "UpdateCopy") | Update a provider at the specified position of an array by copying the parameters of a passed provider object. |
| [Shift](imtecnproviderarray_shift.md "Shift") | Change the position of a provider in an array. |
| [Total](imtecnproviderarray_total.md "Total") | Get the number of provider objects in an array. |
| [Next](imtecnproviderarray_next.md "Next") | Get a provider object by its position. |
| [Sort](imtecnproviderarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtecnproviderarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtecnproviderarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtecnproviderarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtecnproviderarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtecnproviderarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtecnproviderarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtecnproviderarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces rather than the data. This sets specific operating features when [adding](imtecnproviderarray_add.md "Add"), [updating](imtecnproviderarray_update.md "Update") and [deleting](imtecnproviderarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object into an array (when [adding](imtecnproviderarray_add.md "Add") or [updating](imtecnproviderarray_update.md "Update") an element), because this will lead to a crash during memory release.
