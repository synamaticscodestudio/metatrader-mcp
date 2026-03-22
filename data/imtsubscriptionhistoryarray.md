# IMTSubscriptionHistoryArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions")/ IMTSubscriptionHistoryArray | [](imtsubscriptionhistory_amountdeal.md "AmountDeal") [](imtsubscriptionhistoryarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTSubscriptionHistoryArray
The interface enables convenient operations with arrays of subscription actions. The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtsubscriptionhistoryarray_release.md "Release") | Delete the current object. |
| [Assign](imtsubscriptionhistoryarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtsubscriptionhistoryarray_clear.md "Clear") | Clear an object. |
| [Add](imtsubscriptionhistoryarray_add.md "Add") | Add an object or an array of objects of subscription actions to the end of an array. |
| [AddCopy](imtsubscriptionhistoryarray_addcopy.md "AddCopy") | Add a copy of an object or an array of objects of subscription actions to the end of an array. |
| [Delete](imtsubscriptionhistoryarray_delete.md "Delete") | Delete a subscription action object by position. |
| [Detach](imtsubscriptionhistoryarray_detach.md "Detach") | Detach a subscription action object from an array. |
| [Update](imtsubscriptionhistoryarray_update.md "Update") | Change a subscription action at the specified position of an array. |
| [UpdateCopy](imtsubscriptionhistoryarray_updatecopy.md "UpdateCopy") | Change a subscription action at the specified position of an array by copying the parameters of a passed action object. |
| [Shift](imtsubscriptionhistoryarray_shift.md "Shift") | Change the position of a subscription action in an array. |
| [Total](imtsubscriptionhistoryarray_total.md "Total") | Get the number of subscription actions in an array. |
| [Next](imtsubscriptionhistoryarray_next.md "Next") | Get a subscription action object by position. |
| [Sort](imtsubscriptionhistoryarray_sort.md "Sort") | Sort an array using the passed sort function. |
| [Search](imtsubscriptionhistoryarray_search.md "Search") | Search in an array for an element that matches the search key. |
| [SearchGreatOrEq](imtsubscriptionhistoryarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array for the first element greater than or equal to the search key. |
| [SearchGreater](imtsubscriptionhistoryarray_searchgreater.md "SearchGreater") | Search in an array for the first element greater than the search key. |
| [SearchLessOrEq](imtsubscriptionhistoryarray_searchlessoreq.md "SearchLessOrEq") | Search in an array for the first element less than or equal to the search key. |
| [SearchLess](imtsubscriptionhistoryarray_searchless.md "SearchLess") | Search in an array for the first element less than the search key. |
| [SearchLeft](imtsubscriptionhistoryarray_searchleft.md "SearchLeft") | Search in an array for the first element equal to the search key. |
| [SearchRight](imtsubscriptionhistoryarray_searchright.md "SearchRight") | Search in an array for the last element equal to the search key. |

Operations with Arrays
There are a number of specific features for operations with arrays:
  * Arrays store pointers to the corresponding interfaces, not the data. This determines some specific features in operations when [adding](imtsubscriptionhistoryarray_add.md "Add"), [updating](imtsubscriptionhistoryarray_update.md "Update") and [deleting](imtsubscriptionhistoryarray_delete.md "Delete") array elements.
  * Never add a link to one and the same object in an array (when [adding](imtsubscriptionhistoryarray_add.md "Add") or [deleting](imtsubscriptionhistoryarray_update.md "Update") elements), because this will lead to a crash during memory release.
