# IMTAttachmentArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients")/ IMTAttachmentArray | [](imtattachment_fileflags.md "FileFlags") [](imtattachmentarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTAttachmentArray
The IMTAttachmentArray class is designed for working with arrays of [document](imtdocument.md "IMTDocument") files and [attachments to comments](imtcomment.md "IMTComment"). The interface contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtattachmentarray_release.md "Release") | Delete the current object. |
| [Assign](imtattachmentarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtattachmentarray_clear.md "Clear") | Clear an object. |
| [Add](imtattachmentarray_add.md "Add") | Add an attachment object or an array of attachment objects to the end of an array. |
| [AddCopy](imtattachmentarray_addcopy.md "AddCopy") | Add a copy of an attachment object or of an array of attachment objects to the end of an array. |
| [Delete](imtattachmentarray_delete.md "Delete") | Delete an attachment object by its position. |
| [Detach](imtattachmentarray_detach.md "Detach") | Detach an attachment object from an array. |
| [Update](imtattachmentarray_update.md "Update") | Change an attachment at the specified position of the array. |
| [UpdateCopy](imtattachmentarray_updatecopy.md "UpdateCopy") | Change an attachment at the specified position of an array by copying the parameters of a passed attachment object. |
| [Shift](imtattachmentarray_shift.md "Shift") | Change the attachment position in an array. |
| [Total](imtattachmentarray_total.md "Total") | Get the number of attachment objects in an array. |
| [Next](imtattachmentarray_next.md "Next") | Get an attachment object by its position. |
| [Sort](imtattachmentarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtattachmentarray_search.md "Search") | Search in an array for the array element matching the search key. |
| [SearchGreatOrEq](imtattachmentarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtattachmentarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtattachmentarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtattachmentarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtattachmentarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtattachmentarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Working with Arrays
Please note the following specific features when working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This causes some specific features when [adding](imtattachmentarray_add.md "Add"), [updating](imtattachmentarray_update.md "Update") and [deleting](imtattachmentarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtattachmentarray_add.md "Add") or [updating](imtattachmentarray_update.md "Update") elements), because this will lead to a crash during memory release.
