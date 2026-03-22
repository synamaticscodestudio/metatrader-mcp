# Search (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTSearch ](smtsearch.md "SMTSearch")/ Search | [](smtsearch_quicksort.md "QuickSort") [](smtsearch_searchgreatoreq.md "SearchGreatOrEq") |
| --- | --- | --- |
| --- | --- |

SMTSearch::Search
Search in an array the array element that matches the search key.
static void* SMTSearch::Search( const void *key, // Search key void *base, // Array size_t total, // Number of elements const size_t width, // Element size SortFunctionPtr compare // A pointer to the search function )  
---  
Parameters
*key
[in] A pointer to the sort key. The search algorithm guarantees that the search key will always be passed to the search function as the first parameter.
*base
[in] A pointer to the data array.
total
[in] The number of elements in the base array.
width
[in] The size of one array element in bytes.
compare
[in] A pointer to the [Search function](smtsearch_sortfunction.md "Sort Function").
Return Value
If successful, it returns a pointer to the found item. Otherwise, it returns NULL.
Note
For a successful search, an array must be sorted first by calling the [SMTSearch::QuickSort](smtsearch_quicksort.md "QuickSort") method. The sort function in the sort and search methods must match.
In case an array contains several elements meeting the search criteria, it is undefined which of them will be found.
Example:
| //+---------------------------------+ // | Sort Function | //+---------------------------------+ int SortInts(const void *left,const void *right) { const int lft=*(const int *)left; const int rgh=*(const int *)right; //--- if(lft<rgh) return(-1); if(lft>rgh) return(1); //---  return(0); } //+---------------------------------+ // | Example of the Search method | //+---------------------------------+ int Example() { int arr_b[7]={2,1,5,7,3,2,2}; int k=3; //--- Sort SMTSearch::QuickSort(arr_b,7,SortInts); //--- Now arr_b = 1,2,2,2,3,5,7 int *s=(int*)SMTSearch::Search(&k,arr_b,7,sizeof(int),SortInts); // s=&arr_b[4] //--- return(0); } |
| --- | --- | --- | --- | --- |

---