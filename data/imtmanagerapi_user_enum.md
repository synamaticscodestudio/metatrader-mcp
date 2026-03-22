# Enumerations (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ Enumerations | [](imtmanagerapi_user.md "User Functions") [](imtmanagerapi_usercreate.md "UserCreate") |
| --- | --- | --- |
| --- | --- |

Enumerations
The following enumerations are available for working with users in IMTManagerAPI:
  * [IMTManagerAPI::EnExternalSyncModes](imtmanagerapi_user_enum.htm#enexternalsyncmodes)

IMTManagerAPI::EnExternalSyncModes
Modes of synchronizing client's trading status with an external system are enumerated in IMTManagerAPI::EnExternalSyncModes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| EXTERNAL_SYNC_ALL | 0 | Full synchronization of trading status including current pending orders, open positions and balance. |
| EXTERNAL_SYNC_BALANCE | 1 | Synchronizing balance. |
| EXTERNAL_SYNC_POSITIONS | 2 | Synchronizing open positions. |
| EXTERNAL_SYNC_ORDERS | 3 | Synchronizing current pending orders. |
| EXTERNAL_SYNC_LAST |  | End of enumeration. It corresponds to EXTERNAL_SYNC_ORDERS. |

The enumeration is used in [IMTManagerAPI::UserExternalSync](imtmanagerapi_userexternalsync.md "UserExternalSync") method.