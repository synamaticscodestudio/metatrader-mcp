# Internal Data Types (MetaTrader5SDK)

|  | Internal Data Types | [](sql_export_postgre.md "Installation and Setup of PostgreSQL") [](journal.md "Journal Constants") |
| --- | --- | --- |
| --- | --- |

Internal Data Types
Fur the purpose of convenience, MetaTrader 5 API has its own data types.
MTAPIRES
The internal data type MTAPIRES is designed for returning [response codes](reference_retcodes.md "Return Codes") of the server. MTAPIRES is a value of the UINT type.
MTAPISTR
MTAPISTR is a data type used for returning strings of a fixed length. This type is an array of values wchar_t type. The string length is limited to 260 characters (including the sign of the string end).
MTSortFunctionPtr
This type is used in the functions of object sorting and search in dynamic arrays. It is a pointer to the function of comparison of two values, to which *left and *right point. It is similar to the CRT-functions of sorting "qsort" and "bsearch".
typedef int (__cdecl *MTSortFunctionPtr)(const void *left, const void *right);  
---  
Depending on the comparison results, the following values are returned:
  * <0 — if left is less than right;
  * 0 — if left is equal to right;
  * >0 — if left is greater than right.

It is used in the search methods of interfaces for working with arrays. For example:
  * [IMTOrderArray](imtorderarray.md "IMTOrderArray")
  * [IMTDealArray](imtdealarray.md "IMTDealArray")
  * [IMTPositionArray](imtpositionarray.md "IMTPositionArray")
