# Enumerations (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ Enumerations | [](imtadminapi_user.md "Functions") [](imtadminapi_usercreate.md "UserCreate") |
| --- | --- | --- |
| --- | --- |

Enumerations
The following enumerations are available for working with users in IMTAdminAPI:
  * [IMTAdminAPI::EnExternalSyncModes](imtadminapi_user_enum.htm#enexternalsyncmodes)

IMTAdminAPI::EnExternalSyncModes
Modes of synchronizing client's trading status with an external system are enumerated in IMTAdminAPI::EnExternalSyncModes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| EXTERNAL_SYNC_ALL | 0 | Full synchronization of trading status including current pending orders, open positions and balance. |
| EXTERNAL_SYNC_BALANCE | 1 | Synchronizing balance. |
| EXTERNAL_SYNC_POSITIONS | 2 | Synchronizing open positions. |
| EXTERNAL_SYNC_ORDERS | 3 | Synchronizing current pending orders. |
| EXTERNAL_SYNC_LAST |  | End of enumeration. It corresponds to EXTERNAL_SYNC_ORDERS. |

The enumeration is used in [IMTAdminAPI::UserExternalSync](imtadminapi_userexternalsync.md "UserExternalSync") method.