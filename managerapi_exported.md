# Exported Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Exported Functions | [](managerapi_python.md "Python Implementation") [](mtmanagerversion.md "MTManagerVersion") |
| --- | --- | --- |
| --- | --- |

Exported Functions
The MT5APIManager.dll library (as well as its 64-bit version), which is used for implementing interaction between the application and the MetaTrader 5 trading platform, exports several functions:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [MTManagerVersion](mtmanagerversion.md "MTManagerVersion") | Returns the version of the Manager API library. |
| [MTManagerCreate](mtmanagercreate.md "MTManagerCreate") | Creates a new object of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface and returns a pointer to it. |
| [MTManagerCreateExt](mtmanagercreateext.md "MTManagerCreateExt") | Creates a new object of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface and returns a pointer to it. The directory where Manager API is to store its data is additionally specified. |
| [MTAdminCreate](mtadmincreate.md "MTAdminCreate") | Creates a new object of the [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface and returns a pointer to it. |
| [MTAdminCreateExt](mtadmincreateext.md "MTAdminCreateExt") | Creates a new object of the [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface and returns a pointer to it. The directory where Manager API is to store its data is additionally specified. |