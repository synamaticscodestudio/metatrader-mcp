# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Enumerations | [](imtecnmatching.md "IMTECNMatching") [](imtecnmatching_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTECNMatching](imtecnmatching.md "IMTECNMatching") class contains the following enumerations:
  * [IMTECNMatching::ENCMatchingState](imtecnmatching_enum.htm#encmatchingstate)
  * [IMTECNMatching::EnECNMatchingOrderFlags](imtecnmatching_enum.htm#enecnmatchingorderflags)

IMTECNMatching::ENCMatchingState
IMTECNMatching::ENCMatchingState lists possible order states.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ORDER_STATE_NONE | 0 | The initial state of the order when it is received in the ECN. |
| ORDER_STATE_TAKEN | 1 | The order has been captured by the ECN for matching. |
| ORDER_STATE_PARTIAL | 2 | The order has been partially filled; the remainder has been returned to the Market Depth. |
| ORDER_STATE_CANCELED | 3 | The order has been canceled. |
| ORDER_STATE_EXPIRED | 4 | The order has expired. |
| ORDER_STATE_DONE | 5 | The order has been filled. |
| ORDER_STATE_DONE_PARTIAL | 6 | The order has been partially filled; the remainder has been canceled. |
| ORDER_STATE_FIRST |  | Enumeration beginning. Corresponds to ORDER_STATE_NONE. |
| ORDER_STATE_LAST |  | End of enumerationing. Corresponds to ORDER_STATE_DONE_PARTIAL. |

This enumeration is used in the [IMTECNMatching::State](imtecnmatching_state.md "State") method.
IMTECNMatching::EnECNMatchingOrderFlags
IMTECNMatching::EnECNMatchingOrderFlags lists additional order flags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| ORDER_FLAGS_NONE | 0x00000000 | No flags. |
| ORDER_FLAGS_MISSING | 0x00000001 | No corresponding order is found on the trade server for this order, or the trade server has lost connection with the ECN. |
| ORDER_FLAGS_ALL |  | All flags are set. |

This enumeration is used in the [IMTECNMatching::Flags](imtecnmatching_flags.md "Flags") method.