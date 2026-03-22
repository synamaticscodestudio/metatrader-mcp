# Prev (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTArrayBase ](cmtarraybase.md "CMTArrayBase")/ Prev | [](cmtarraybase_next.md "Next") [](cmtarraybase_at.md "At") |
| --- | --- | --- |
| --- | --- |

CMTArrayBase::Prev
Get a pointer to the previous array element based on the pointer to the element.
void* CMTArrayBase::Prev( const void *elem // A pointer to the element )  
---  
Parameters
*elem
[in] A pointer to the element.
Return Value
A pointer to the previous element before the specified one. If there is no previous element, NULL is returned.