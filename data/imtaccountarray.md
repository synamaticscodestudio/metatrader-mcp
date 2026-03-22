# IMTAccountArray (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts")/ IMTAccountArray | [](imtaccount_liabilities.md "Liabilities") [](imtaccountarray_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTAccountArray
The IMTAccountArray class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtaccountarray_release.md "Release") | Delete the current object. |
| [Assign](imtaccountarray_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtaccountarray_clear.md "Clear") | Clear an object. |
| [Add](imtaccountarray_add.md "Add") | Adds an object or an array of objects of trading accounts at the end of the array. |
| [AddCopy](imtaccountarray_addcopy.md "AddCopy") | Adds a copy of an object or an array of objects of trading accounts at the end of an array. |
| [Delete](imtaccountarray_delete.md "Delete") | Deletes an object of a trading account by position. |
| [Detach](imtaccountarray_detach.md "Detach") | Detaches an object of a trading account from an array. |
| [Update](imtaccountarray_update.md "Update") | Changes a trading account at the specified position of an array. |
| [UpdateCopy](imtaccountarray_updatecopy.md "UpdateCopy") | Changes a trading account at the specified position of an array by copying the parameters of a passed object of the trading account. |
| [Shift](imtaccountarray_shift.md "Shift") | Changes the position of a trading account in an array. |
| [Total](imtaccountarray_total.md "Total") | Gets the number of objects of trading accounts in an array. |
| [Next](imtaccountarray_next.md "Next") | Gets an object of a trading account by position. |
| [Sort](imtaccountarray_sort.md "Sort") | Sort an array using the sort function passed. |
| [Search](imtaccountarray_search.md "Search") | Search in an array the array element that matches the search key. |
| [SearchGreatOrEq](imtaccountarray_searchgreatoreq.md "SearchGreatOrEq") | Search in an array the first element greater than or equal to the search key. |
| [SearchGreater](imtaccountarray_searchgreater.md "SearchGreater") | Search in an array the first element greater than the search key. |
| [SearchLessOrEq](imtaccountarray_searchlessoreq.md "SearchLessOrEq") | Search in an array the first element less than or equal to the search key. |
| [SearchLess](imtaccountarray_searchless.md "SearchLess") | Search in an array the first element less than the search key. |
| [SearchLeft](imtaccountarray_searchleft.md "SearchLeft") | Search in an array the first element equal to the search key. |
| [SearchRight](imtaccountarray_searchright.md "SearchRight") | Search in an array the last element equal to the search key. |

Working with Arrays
There are a number of specific features for working with arrays:
  * Arrays store pointers to the appropriate interfaces, and not the data. This leads to some operation peculiarities when [adding](imtaccountarray_add.md "Add"), [updating](imtaccountarray_update.md "Update") and [removing](imtaccountarray_delete.md "Delete") array elements.
  * Never add a link (when [adding](imtaccountarray_add.md "Add") or [updating](imtaccountarray_update.md "Update") an element) to one and the same object in an array, because this will lead to a crash during memory release.
