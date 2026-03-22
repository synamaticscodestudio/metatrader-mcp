# IMTDocumentArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTDocumentArray | [](imtdocument_attachmentsnext.md "AttachmentsNext") [](imtdocumentarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTDocumentArray
The IMTDocumentArray class is designed for working with arrays of client documents. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdocumentarray_release.md "Release") | Delete the current object. |
| [Assign](imtdocumentarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdocumentarray_clear.md "Clear") | Clear an object. |
| [Add](imtdocumentarray_add.md "Add") | Add a document object or an array of document objects to the end of an array. |
| [AddCopy](imtdocumentarray_addcopy.md "AddCopy") | Add a copy of a document object or of an array of document objects to the end of an array. |
| [Delete](imtdocumentarray_delete.md "Delete") | Delete a document object by its position. |
| [Detach](imtdocumentarray_detach.md "Detach") | Detach a document object from an array. |
| [Update](imtdocumentarray_update.md "Update") | Change a document at the specified position of an array. |
| [UpdateCopy](imtdocumentarray_updatecopy.md "UpdateCopy") | Change a document at the specified position of an array by copying the parameters of a passed document object. |
| [Shift](imtdocumentarray_shift.md "Shift") | Change the position of a document in an array. |
| [Total](imtdocumentarray_total.md "Total") | Get the number of document objects in an array. |
| [Next](imtdocumentarray_next.md "Next") | Get a document object by its position. |
| [Sort](imtdocumentarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtdocumentarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtdocumentarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtdocumentarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtdocumentarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtdocumentarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtdocumentarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtdocumentarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This sets some specific features when [adding](imtdocumentarray_add.md "Add"), [updating](imtdocumentarray_update.md "Update") and [deleting](imtdocumentarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtdocumentarray_add.md "Add") or [updating](imtdocumentarray_update.md "Update") an element), because this will lead to a crash during memory release.
