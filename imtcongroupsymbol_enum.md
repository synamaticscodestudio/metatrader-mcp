# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ Enumerations | [](imtcongroupsymbol.md "IMTConGroupSymbol") [](imtcongroupsymbol_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConGroupSymol](imtconcommission.md "IMTConCommission") class contains the following enumerations:
IMTConGroupSymbol::EnREFlags
Request execution settings are enumerated in IMTConGroupSymbol::EnREFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| RE_FLAGS_NONE | 0 | No flags. |
| RE_FLAGS_ORDER | 1 | Additional confirmation mode. |
| RE_FLAGS_ALL |  | End of enumeration. Corresponds to RE_FLAGS_ORDER. |

This enumeration is used in the [IMTConGroupSymbol::REFlags](imtcongroupsymbol_reflags.md "REFlags") enumeration.
IMTConGroupSymbol::EnPermissionsFlags
Flags of permissions by the group symbols are enumerated in IMTConGroupSymbol::EnPermissionsFlags.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PERMISSION_NONE | 0 | No flags. |
| PERMISSION_BOOK | 1 | Allow the depth of market by symbols for the group. |
| PERMISSION_DEFAULT |  | Default flags. Corresponds to allowing the depth of market by symbols for the group. |
| PERMISSION_ALL |  | End of enumeration. Corresponds to enabling all the flags. |

This enumeration is used in the [IMTConGroupSymbol::PermissionFlags](imtcongroupsymbol_permissionsflags.md "PermissionsFlags") method.